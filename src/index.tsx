import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Devices from './components/DevicesList';
import Edit from './components/Edit';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route } from 'react-router-dom';




const routes = (
  <Router>
      <div>
          <Route exact={true} path={'/'} component={Devices} /> 
          <Route exact={true} path={'/edit/devices/:id'} component={Edit} />  
      </div>
  </Router>
)


ReactDOM.render(
  routes,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
