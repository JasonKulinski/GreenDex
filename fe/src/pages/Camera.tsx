import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';



const CameraPage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent />
    </React.Fragment>
  );
};

export default CameraPage;

