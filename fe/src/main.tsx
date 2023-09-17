import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';

// import CameraPage from './pages/CameraPage';
// import AccountPage from './pages/AccountPage';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function Tabs() {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact path="/" to="/home" />
                </IonRouterOutlet>
            </IonTabs>
        </IonReactRouter>

    );
}

export default Tabs;