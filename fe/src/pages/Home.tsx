import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton } from '@ionic/react'
import { add, home, search, camera, person } from 'ionicons/icons'
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
                <IonCard className="introcard">
                    <IonCardHeader>
                        <IonCardSubtitle>Welcome to Basket</IonCardSubtitle>
                        <IonCardTitle>Our mission</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>
                        Now that your app has been created, you'll want to start building out features and
                        components. Check out some of the resources below for next steps.
                        </p>
                     </IonCardContent>
                </IonCard>






                {/* <div id="missionheader">
                    <h1>Our Mission</h1>
                    <p>With global warming hitting a high rating compared to the past few years, every step of making a change counts. Our mission goes hand-in-hand with environmental sustainability by creating an app designed to implement a decision-based buying shift for consumers towards more sustainable products provided by eco-friendly companies. This app recommends or suggests suitable eco-friendly companies to shift consumers' pockets to benefiting the Earth more, making a small step toward a better future.</p>
                </div> */}

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
