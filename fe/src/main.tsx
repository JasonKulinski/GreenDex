import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { search } from 'ionicons/icons';

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
// import CameraPage from './pages/CameraPage';
// import AccountPage from './pages/AccountPage';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Tabs(){
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Redirect exact path="/" to="/home" />
        <Route path="/search" render={() => <SearchPage />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>

  );
}

export default Tabs;