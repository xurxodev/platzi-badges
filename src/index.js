import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './global.css'
import Badge from  './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge
    firstName = "Jorge"
    lastName = "Sánchez"
    avatarUrl = "https://pbs.twimg.com/profile_images/1151113544362078209/chgA6VO9_400x400.jpg"
    jobTitle = "Frontend Engineer"
    twitter= "xurxodev" />, container);
