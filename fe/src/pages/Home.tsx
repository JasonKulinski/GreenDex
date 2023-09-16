import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon } from '@ionic/react'
import { add } from 'ionicons/icons'
import { doGet } from '../Utils'


import ExploreContainer from '../components/ExploreContainer'
import './Home.css';

const Home: React.FC = () => {

    async function test() {
        let result = await doGet("test")
        alert(result.data.message)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className = 'header' color='success'>
                    <IonTitle>AppName</IonTitle>
                   
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
