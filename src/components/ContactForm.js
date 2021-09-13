import React, { Component } from 'react';
import { Form, TextArea, Button, Select } from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';
import '../i18n';

const countryOptions = [
    { key: 'tr', value: 'tr', text: 'Turkey' },
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
]

class ContactForm extends Component {

    constructor() {
        super();
        this.state = {
            country: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({
            result: stringifyFormData(data),
        });

        fetch('/api/test-url', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => this.setState(json.data))
    }

    render() {
        const t = this.props.t;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label htmlFor="name">{t('FormNameSurname')}</label>
                        <input id="name" name="name" required placeholder={t('FormNameSurname')} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="email">{t('FormMail')}</label>
                        <input id="email" name="email" required placeholder={t('FormMail')} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="phone">{t('FormPhoneNumber')}</label>
                        <input id="phone" name="phonenumber" type="tel" required placeholder={t('FormPhoneNumber')} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="country">{t('FormCountry')}</label>
                        <Select id="country_code" name="country_code" required placeholder={t('FormCountryPlaceholder')} onChange={(event, data) => {
                            this.setState({
                                country: data.value
                            })
                        }} options={countryOptions} />
                    </Form.Field>
                    <Form>
                        <label htmlFor="message">{t('FormMessage')}</label>
                        <TextArea id="message" name="message" placeholder={t('FormMessage')} onChange={(event, data) => {
                            this.setState({
                                message: data.value
                            })
                        }}/>
                    </Form>
                    <br />
                    <Button type='submit' className="message-send">{t('FormSend')}</Button>
                </Form>
                <div className="formdata-result">
                    {this.state.result && (
                        <div className="res-block">
                            <h3>Gönderilen Veri</h3>
                            <pre>FormData {this.state.result}</pre>
                            <pre>country_code: "{this.state.country}"</pre>
                            <pre>message:: "{this.state.message}"</pre>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
export default withNamespaces()(ContactForm);
function stringifyFormData(formData) {
    const data = {};
    for (let key of formData.keys()) {
        data[key] = formData.get(key);
    }
    return JSON.stringify(data, null, 2);
}

