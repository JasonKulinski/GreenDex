import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { Camera, CameraSource } from '@capacitor/camera';

const CameraPage = () => {
  const [photo, setPhoto] = useState();

  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: 'dataUrl',
        source: 'camera', // Use 'camera'
      });
      setPhoto(image.dataUrl);
    } catch (error) {
      console.error(`Error taking a photo: ${error}`);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton expand="full" onClick={takePhoto}>
          Take a Photo
        </IonButton>
        {photo && (
          <div>
            <h2>Preview</h2>
            <img src={photo} alt="Captured" />
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CameraPage;