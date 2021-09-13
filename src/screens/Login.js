import React from 'react'
import LoginForm from '../components/LoginForm';
import { Container, Grid } from "semantic-ui-react";
import { withNamespaces } from 'react-i18next';
import '../i18n';

  function Login({t}) {
    return (
        <div className="login-form">
            <Container>
                <Grid>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={9} verticalAlign="middle">
                    <h3 className="login-title">{t('LoginFormTitle')}</h3>
                        <LoginForm />
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

export default withNamespaces()(Login);