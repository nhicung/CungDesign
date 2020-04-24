import React from 'react';
import ReactDOM from 'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SocialMediaIconsReact icon="twitter" url="https://twitter.com/your-twitter-handle"/>,	document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
