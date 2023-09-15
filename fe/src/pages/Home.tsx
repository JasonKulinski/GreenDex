import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon } from '@ionic/react'
import { add } from 'ionicons/icons'
import { get } from '../Utils'

import ExploreContainer from '../components/ExploreContainer'
import './Home.css';

const Home: React.FC = () => {

    async function test() {
        let result = await get("localhost/api/test")
        alert(result.message)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonFabButton className='poopie' onClick={test}>
                    <IonIcon icon={add} />
                </IonFabButton>
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};

export default Home
