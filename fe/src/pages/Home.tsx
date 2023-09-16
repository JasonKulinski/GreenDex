import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton } from '@ionic/react'
import { add, home, search, camera, person } from 'ionicons/icons'
import { doGet, doPost } from '../Utils'

import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

const Home: React.FC = () => {

    async function test() {
        let result = await doPost('search', {
            search: 'shopify'
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
                        <IonTitle onClick={test}>Basket</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true} className='ion-padding'>
                <div id="missionheader">
                    <h1>Our Mission</h1>
                    <p>Global warming has been rising, drifting into drastic changes affecting our society. Every step counts in stopping the rise of climate change, which is why we have created an app to start with consumer buys. Our mission goes hand-in-hand with environmental sustainability by creating an app designed to implement a decision-based buying shift for consumers toward goods that are more sustainable products by eco-friendly companies. This app will help consumers recommend or suggest more eco-friendly companies. Thus, shifting consumers' pockets to help benefit the Earth more—is a small step toward a better chance.</p>
                </div>

                <div id="featuredcompanies">
                    <h1>Featured Companies</h1>
                </div>

                <IonCard className='cardDesign'>
                    <button>
                        <img src="amazonlogo.png" />
                        <IonCardHeader>
                            <div className='card-text'>
                                <div className='card-text-left'>
                                    <IonCardTitle id="companytitle"> Company Name </IonCardTitle>
                                    <IonCardSubtitle id="industry">Industry</IonCardSubtitle>
                                </div>
                                <div className='card-text-right'>
                                    <IonCardSubtitle>Grade:A</IonCardSubtitle>
                                </div>
                            </div>
                        </IonCardHeader>
                    </button>
                </IonCard>


                <IonCard>
                    <button>
                        <img className='companylogo' src="amazonlogo.png" />
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
