import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, useIonViewWillEnter } from '@ionic/react'
import './Detail.css'
import { add, home, search, camera, person } from 'ionicons/icons'
import { doPost } from '../Utils'
import Graph from '../components/Graph.jsx'
import { useState, useEffect } from 'react'

const Detail = ({ match }) => {

    const [company, setCompany] = useState({
        data: {
            _source: {
                'Company Name': 'Loading...'
            }
        }
    })
    const [summary, setSummary] = useState('Loading...')
    const [article, setArticle] = useState(<></>)

    useIonViewWillEnter(() => {
        async function load() {
            try {
                setCompany({
                    data: {
                        _source: {
                            'Company Name': 'Loading...'
                        }
                    }
                })
                if (company.data._source['Company Name'] !== 'Loading...')
                    return
                const co = await doPost("company", {
                    company: match.params.id
                })
                if (company.data._source.uuid == match.params.id)
                    setCompany(co)
            }
            catch (e) {
                console.log(e)
            }
        }

        load()
    })

    useEffect(() => {
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
    }, [match.params.id])

    useEffect(() => {
        showSummary()
        if (company.data._source['Company Name'] === 'ADIDAS AG')
            setArticle(
                <>
                    <br />
                    <h1 style={{
                        textAlign: 'center'
                    }}>ADIDAS AG in the News:</h1>
                    <br />
                    <IonCard className='card'>
                        <IonCardHeader>
                            <div className='card-text'>
                                <div className='card-text-left'>
                                    <IonCardTitle id="companytitle">THE DARK SIDE OF ADIDAS: 8 UNETHICAL PRACTICES AND CONTROVERSIES</IonCardTitle>
                                    <IonCardSubtitle id="industry">
                                        <i>By Ogbo Godfrey</i><br />
                                        ClimateRealTalk
                                    </IonCardSubtitle>
                                </div>
                                <div className='card-text-right'>
                                    <IonCardSubtitle>
                                        <div id='card-grade'>
                                        </div>
                                    </IonCardSubtitle>
                                </div>
                            </div>
                        </IonCardHeader>
                    </IonCard>
                </>)
        else
            setArticle(<></>)
    }, [company])

    function showSummary() {
        let industry = 'Loading...'
        let totalGHG = 'Loading...'
        let totalGHGYear = 'Loading...'
        let c = undefined
        if (company?.data?._source)
            c = company.data._source
        if (c?.['Industry (Exiobase)'])
            industry = c['Industry (Exiobase)']
        if (c?.[' Total GHG Environmental Impact (Scope 1, 2, 3)']?.length > 0) {
            totalGHG = c[' Total GHG Environmental Impact (Scope 1, 2, 3)'][c[' Total GHG Environmental Impact (Scope 1, 2, 3)'].length - 1].Value
            totalGHGYear = c[' Total GHG Environmental Impact (Scope 1, 2, 3)'][c[' Total GHG Environmental Impact (Scope 1, 2, 3)'].length - 1].Year
        }
        setSummary(
            <>
                <div>{industry}</div>
                <div><b>Total Greenhouse Gas Environmental Impact:</b> ${totalGHG} (data from {totalGHGYear})</div>
            </>
        )
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
                    {summary}
                </div>

                {article}

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
    )
}

export default Detail
