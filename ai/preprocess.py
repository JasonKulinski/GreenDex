import argparse
import torch
from pathlib import Path
from models.experimental import attempt_load
from utils.general import check_img_size
from utils.torch_utils import select_device
from utils.datasets import LoadImages
import json

def run_yolov7_detection(input_image_path, weights_path, output_json_path):
    source = input_image_path
    imgsz = 640

    # Initialize YOLOv7 model and device
    device = select_device('0')
    model = attempt_load(weights_path, map_location=device)
    imgsz = check_img_size(imgsz, s=model.stride.max())
    img = torch.zeros((1, 3, imgsz, imgsz), device=device)

    # Run detection
    _ = model(img)
    dataset = LoadImages(source, img_size=imgsz)

    detection_results = []  # Store detection results as a list of dictionaries

    # Define your custom label mapping
    custom_labels = {
        0: "adidas",
        1: "supreme",
        2: "patagonia",
        3: "levis",
        4: "nike",
        5: "shoe",
        6: "shirt",
        7: "pants"
    }

    for path, img, im0s, vid_cap in dataset:
        img = torch.from_numpy(img).to(device)
        img = img.half() if False else img.float()
        img /= 255.0

        if img.ndimension() == 3:
            img = img.unsqueeze(0)

        # Perform inference
        pred = model(img, augment=False)[0]

        # Process detection results
        image_detection_results = []  # Store results for this image

        for det in pred:
            gn = torch.tensor(im0s.shape, device=device)[[1, 0, 1, 0]]  # Ensure same device
            det_copy = det.clone()  # Make a copy of det
            det_copy[:, :4] = det_copy[:, :4] * gn
            gn = torch.tensor(img.shape, device=device)[[1, 0, 1, 0]]  # Ensure same device
            det_copy[:, :4] = det_copy[:, :4] / gn

            labels = []
            for label_id in det_copy[:, -1].unique():
                label = custom_labels.get(int(label_id), "Unknown")  # Use "Unknown" if not found in custom_labels
                labels.append(label)

            # Select a specific detection (e.g., the first detection)
            selected_detection_index = 0

            if selected_detection_index < len(det_copy):
                # Save the selected detection result
                x1, y1, x2, y2 = map(int, det_copy[selected_detection_index, :4])
                bbox = [x1, y1, x2, y2]

                # Append detection result to the list for this image
                image_detection_results.append({
                    "label": labels[selected_detection_index],
                    "bbox": bbox
                })

        # Append the results for this image to the overall detection results
        detection_results.append(image_detection_results)

    # Save all detection results as a JSON file
    with open(output_json_path, 'w') as json_file:
        json.dump(detection_results, json_file)
    print(f"Output JSON file saved at: {output_json_path}")