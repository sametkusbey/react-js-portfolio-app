import React from "react";
import ContactForm from '../components/ContactForm';
import { Container, Grid} from "semantic-ui-react";
import { withNamespaces } from 'react-i18next';
import '../i18n';

  function Contact({t}) {
    return (
        <div className="contact-form">
            <Container>
                <Grid>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={9} verticalAlign="middle">
                        <h3 className="contact-title">{t('ContactForm')}</h3>
                        <ContactForm />
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid>
            </Container>

        </div>
    )
}


export default withNamespaces()(Contact);