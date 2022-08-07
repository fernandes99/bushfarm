import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

import './styles/reset.css';
import './styles/base.css';
import './styles/fonts.css';

const app = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);

app.render(
  <Provider store={store}> 
    <App />
  </Provider>
);