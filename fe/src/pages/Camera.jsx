import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFabButton, IonIcon } from '@ionic/react';
import { home, search, camera, person } from 'ionicons/icons'
import { Camera, CameraSource } from '@capacitor/camera';
import { useHistory } from 'react-router';
import './Camera.css'

const CameraPage = () => {
  const [photo, setPhoto] = useState();
  const [submit, setSubmit] = useState(<></>);
  const history = useHistory()

  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: 'dataUrl',
        source: 'camera', // Use 'camera'
      });
      setPhoto(image.dataUrl);
      setSubmit(
        <>
          <IonFabButton id='submitPic' onClick={ai}>
            Submit
          </IonFabButton>
        </>
      )
    } catch (error) {
      console.error(`Error taking a photo: ${error}`);
    }
  };

  function ai() {
    setSubmit(
      <>
      <IonFabButton id='submitPic'>
            Loading...
      </IonFabButton>
      </>
    )
    setTimeout(() => {
      history.push('/co/433e24d2-0e9a-4106-88f2-f3269dbd325f')
    }, 4550)
  }

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
        {submit}

        <IonToolbar id='toolbar'>
                    <IonButton routerLink='/home'>
                        <IonIcon icon={home}></IonIcon>
                    </IonButton>
                    <IonButton routerLink='/search'>
                        <IonIcon icon={search}></IonIcon>
                    </IonButton>
                    <IonButton routerLink='/camera'>
                        <IonIcon icon={camera}></IonIcon>
                    </IonButton>
                    <IonButton>
                        <IonIcon icon={person}></IonIcon>
                    </IonButton>
                </IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default CameraPage;