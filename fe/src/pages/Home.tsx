import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton} from '@ionic/react'
import { add, home, search, camera, person } from 'ionicons/icons'
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
            <IonHeader >
                <IonToolbar className = 'header' color='success'>
                    <div id="imgheader">
                    <img height="40" src ="logotest.png"/>
                    <IonTitle >Basket</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true} className='ion-padding'>
                <div id="missionheader">
                    <h1>Our Mission</h1>
                    <p>The goal of this app is to blah blah</p>
                </div>

                <div id="featuredcompanies">
                    <h1>Featured Companies</h1>
                </div>
                
                <IonCard>
                    <button ion-item>
                    <img className='companylogo' src="amazonlogo.png"/>
                    <IonCardHeader>
                        <div className='card-text'>
                            <div className='card-text-left'>
                                <IonCardTitle id="companytitle"> Company Name </IonCardTitle>
                                <IonCardSubtitle id="industry">Industry</IonCardSubtitle>
                            </div>
                            <div className='card-text-right'>
                                <IonCardSubtitle>A</IonCardSubtitle>
                            </div>
                        </div>
                    </IonCardHeader>
                    </button>
                </IonCard>


                <IonCard>
                    <button ion-item>
                    <img className='companylogo' src="amazonlogo.png"/>
                    <IonCardHeader>
                        <div className='card-text'>
                            <div className='card-text-left'>
                                <IonCardTitle id="companytitle"> Company Name </IonCardTitle>
                                <IonCardSubtitle id="industry">Industry</IonCardSubtitle>
                            </div>
                            <div className='card-text-right'>
                                <IonCardSubtitle>A</IonCardSubtitle>
                            </div>
                        </div>
                    </IonCardHeader>
                    </button>
                </IonCard>


            </IonContent>
        </IonPage>
    );
};

export default Home
