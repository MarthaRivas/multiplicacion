/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

import store, { nuevamultiplicacion, respuesta } from './store'

store.dispatch(nuevamultiplicacion())
store.dispatch(respuesta ())
