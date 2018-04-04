import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MeetingTracker from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MeetingTracker />, document.getElementById('root'));
registerServiceWorker();
