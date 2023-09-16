import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton } from '@ionic/react'
import './Detail.css'
import { doGet } from '../Utils'
import Graph from '../components/Graph.jsx'

const Home: React.FC = () => {

    async function test() {
        let result = await doGet("test")
        alert(result.data.message)
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='header' color='success'>
                    <div id="imgHeader">
                        <img height="40" src="logotest.png" />
                        <IonTitle>AppName</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Graph />
            </IonContent>
        </IonPage>
    )
}

export default Home
