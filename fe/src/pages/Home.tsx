import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton} from '@ionic/react'
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
                    <div id="imgHeader">
                    <img height="40" src ="logotest.png"/>
                    <IonTitle >AppName</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div id="missionHeader">
                <h1>Our Mission</h1>
                <hr/>
                <p>The goal of this app is to blah blah</p>
                </div>

                <div id="featuredCompanies">
                <h1>Featured Companies</h1>
                <hr/>
                </div>
                
                <IonCard >
                    <button ion-item>
                    <img src="amazonlogo.png"/>
                    <IonCardHeader>
                        <div className='card-text'>
                            <div className='card-text-left'>
                                <IonCardTitle id="companytitle"> Comany 1 </IonCardTitle>
                                <IonCardSubtitle id="industry">Industry</IonCardSubtitle>
                            </div>
                            <div className='card-text-right'>
                                <IonCardSubtitle>A</IonCardSubtitle>
                            </div>
                        </div>
                    </IonCardHeader>
                    </button>
                    {/* <IonButton className='companybutton' color="success" onClick={test}> Learn more</IonButton> */}
                </IonCard>



                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Hello </IonTitle>
                    </IonToolbar>
                </IonHeader>
                {/* <IonFabButton className='poopie' onClick={test}>
                    <IonIcon icon={add} />
                </IonFabButton> */}
            </IonContent>
        </IonPage>
    );
};

export default Home
