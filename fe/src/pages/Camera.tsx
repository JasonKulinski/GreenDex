import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton } from '@ionic/react'
import { home, search, camera, person } from 'ionicons/icons'
import './Camera.css'

const Camera: React.FC = () => {

    return (
        <IonPage>
            <IonHeader >
                <IonToolbar className='header' color='success'>
                    <div id="imgheader">
                        <img height="40" src="basket.png" />
                        <IonTitle>BASKET</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true} className='ion-content'>
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
    )
}

export default Camera

