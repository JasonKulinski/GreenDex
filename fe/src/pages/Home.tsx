import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton } from '@ionic/react'
import { home, search, camera, person } from 'ionicons/icons'
import { doGet, doPost } from '../Utils'

import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

const Home: React.FC = () => {

    async function test() {
        let result = await doPost('search', {
            search: 'adidas'
        })
        // let result = await doGet('test')
        console.log(result.data)
    }

    return (
        <IonPage>
            <IonHeader >
                <IonToolbar className='header' color='success'>
                    <div id="imgheader">
                        <img height="40" src="basket.png" />
                        <IonTitle onClick={test}>BASKET</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true} className='ion-padding'>
                <div id='content'>
                    <h1>Welcome to Basket!</h1>
                    <img height="120" src="basket.png" />
                    <h1>Our mission</h1>
                    <p>
                        With global warming hitting a high rating compared to the past few years, every step of making a change counts.
                        <br /><br />
                        Our mission goes hand-in-hand with environmental sustainability by creating an app designed to implement a decision-based buying shift for consumers towards more sustainable products provided by eco-friendly companies.
                        <br /><br />
                        This app recommends or suggests suitable eco-friendly companies to shift consumers' pockets to benefiting the Earth more, making a small step toward a better future.
                    </p>

                    <h1>Try out Search:</h1>

                    <IonFabButton routerLink='/search'>
                        <IonIcon icon={search} />
                    </IonFabButton>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default Home
