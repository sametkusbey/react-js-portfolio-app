import React from 'react';
import '../App.css';
import '../custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePhoto from '../assets/sametkusbey.png';
import { withNamespaces } from 'react-i18next';
import '../i18n';

function MainScreen({t}) {
    return (
        <div className="row main-screen">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 data-column">
                <h3 className="main-title">{t('MainTitle')}</h3>
                <p className="dummy-text">{t('dummyText')}</p>
                <img className="scorp-logo  mx-auto d-block"  src={profilePhoto} alt="ScorpApp Logo" />
            </div>
            <div className="col-lg-4"></div>
        </div>
    )
}
export default withNamespaces()(MainScreen);