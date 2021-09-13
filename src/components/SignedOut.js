import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Menu} from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';
import '../i18n';

  function SignedOut({t}) {
    return (
        <div>
            
            <Menu.Item>
            <Link to="/login" className="login-href">
            <Button primary className="login-button">{t('LoginText')}</Button>
            </Link>
            </Menu.Item>
        </div>
    )
}

export default withNamespaces()(SignedOut);