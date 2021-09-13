import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import signature from '../assets/signature.png';
import { withNamespaces } from 'react-i18next';
import '../i18n';

function Footer({ t }) {
    return (
        <div className="footer">
            <div className="row footer-row">
                <div className="col-lg-4 col-md-4 col-sm-12"></div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <a href="https://instagram.com/sametkusbey"><img class="signature rounded mx-auto d-block" src={signature} alt="Name Signature" /></a>
                    <p className="copyright-subtext">{t('FooterCopyrightText')}</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12"></div>
            </div>
        </div>
    )
}
export default withNamespaces()(Footer);