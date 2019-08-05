import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://pbs.twimg.com/profile_images/1151113544362078209/chgA6VO9_400x400.jpg" alt="Avatar" />
          <h1>
            Jorge <br /> Sánchez
          </h1>
        </div>
        <div className="Badge__section-info" >
          <h3>Frontend Engineer</h3>
          <div>@xurxodev</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
