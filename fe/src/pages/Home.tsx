import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton } from '@ionic/react'
import { home, search, camera, person } from 'ionicons/icons'
import { doGet, doPost } from '../Utils'

import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

const Home: React.FC = () => {

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
                <div id='content'>
                    <h1>Welcome to Basket!</h1>
                    <img height="120" src="basket.png" />
                    <h1>Our mission</h1>
                    <p>
                        As global temperatures continue to rise, and climate tensions grow ever higher, we're all trying to figure out how to make a change.
                        <br /><br />
                        In our research, we came to believe that it's our role as consumers that best empowers us to bring that change.
                        <br /><br />
                        By staying in the loop about sustainability practices of the companies that surround us, we, as consumers, can choose to defund those who are sabotaging our future.
                        <br /><br />
                        We can do our best to put our eggs in the right basket.
                    </p>
                </div>

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

export default Home
