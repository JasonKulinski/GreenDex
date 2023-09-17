import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, IonSearchbar } from '@ionic/react'
import { add, home, search, camera, person } from 'ionicons/icons'
import { doGet, doPost } from '../Utils'
import { useState, useEffect } from 'react'

import ExploreContainer from '../components/ExploreContainer'
import './Search.css'

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [company, setCompany] = useState({})
    const [results, setResults] = useState([])

    async function doSearch(q) {
        try {
            if (q.trim().length == 0)
                return
            const co = await doPost("search", {
                search: q
            })
            setCompany(co)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        showResults()
    }, [company])

    function showResults() {
        console.log(company)
        if (company.data == undefined)
            return
        setResults([])
        if (company.data.hits.length == 0) {
            setResults([
                <>
                    <div style={{ textAlign: 'center' }}>No Results Found</div>
                </>
            ])
        }
        else {
            for (let i = 0; i < company.data.hits.length; i++) {
                const c = company.data.hits[i]
                setResults(prevResults => (
                    [<IonCard id={prevResults.length} className='card' routerLink={`/co/${c?._source?.['uuid']}`}>
                        <IonCardHeader>
                            <div className='card-text'>
                                <div className='card-text-left'>
                                    <IonCardTitle id="companytitle"> {c?._source?.['Company Name']} </IonCardTitle>
                                    <IonCardSubtitle id="industry">{c?._source?.['Industry (Exiobase)']}</IonCardSubtitle>
                                </div>
                                <div className='card-text-right'>
                                    <IonCardSubtitle>
                                        <div id='card-grade' className={
                                            c._source['Grade']?.includes('A') ? 'good'
                                                :
                                                c._source['Grade']?.includes('B') ? 'okay'
                                                    :
                                                    c._source['Grade']?.includes('C') ? 'meh'
                                                        :
                                                        c._source['Grade']?.includes('D') ? 'poor'
                                                            : 'bad'
                                        }>
                                            {c?._source?.['Grade']}
                                        </div>
                                    </IonCardSubtitle>
                                </div>
                            </div>
                        </IonCardHeader>
                    </IonCard>, prevResults])
                )
            }
        }
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
            <IonContent fullscreen={true} className='ion-padding'>
                <IonSearchbar id='search' value={searchQuery} onIonChange={e => doSearch(e.detail.value)} ></IonSearchbar>
                {results}

                <IonToolbar id='toolbar'>
                    <IonButton routerLink='/home'>
                        <IonIcon icon={home}  ></IonIcon>
                    </IonButton>
                    <IonButton routerLink='/search'>
                        <IonIcon icon={search}  ></IonIcon>
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
    );
};

export default Search
