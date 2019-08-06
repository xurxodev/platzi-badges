import React from 'react';

import './styles/BadgeNew.css';
import logo from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Jorge"
                lastName="Sánchez"
                twitter="xurxodev"
                jobTitle="Frontend Engineer"
                avatarUrl="https://pbs.twimg.com/profile_images/1151113544362078209/chgA6VO9_400x400.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
