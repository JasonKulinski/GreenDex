import preprocess


if __name__ == "__main__":
    input_image_path = "ai\\input_images\\test_1.jpg"
    weights_path = "ai\\ai_models\\clothing_brand.pt"
    output_json_path = "ai\\output_json\\detection_results.json"

    preprocess.run_yolov7_detection(input_image_path, weights_path, output_json_path)