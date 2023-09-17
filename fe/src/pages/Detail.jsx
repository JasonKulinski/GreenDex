import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, useIonViewWillEnter } from '@ionic/react'
import './Detail.css'
import { doPost } from '../Utils'
import Graph from '../components/Graph.jsx'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({ match }) => {

    const [company, setCompany] = useState({
        data: {
            _source: {
                'Company Name': 'Loading...'
            }
        }
    })

    useIonViewWillEnter(() => {
        async function load() {
            try {
                const co = await doPost("company", {
                    company: match.params.id
                })
                setCompany(co)
            }
            catch (e) {
                console.log(e)
            }
        }

        load()
    })

    function test() {
        console.log(company)
    }

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
            <IonContent fullscreen>
                <div id='company-name'>
                    {company.data._source['Company Name']}
                </div>
                <div id='company-grade' className={
                    company.data._source['Grade']?.includes('A') ? 'good'
                        :
                        company.data._source['Grade']?.includes('B') ? 'okay'
                            :
                            company.data._source['Grade']?.includes('C') ? 'meh'
                                :
                                company.data._source['Grade']?.includes('D') ? 'poor'
                                    : 'bad'
                }>
                    {company.data._source['Grade']}
                </div>
                <div id="data">
                    {company.data._source['Industry (Exiobase)']}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Detail
