import React, {useState } from 'react'
import { Button,  Form, Select } from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';
import '../i18n';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSystem } from '../store/actions/loginActions';

const languageOptions = [
    { key: 'tr', value: 'tr', text: 'Turkish' },
    { key: 'en', value: 'en', text: 'English' },
]


function LoginForm({ t }) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const handleLogin = () => {
        var user = { name: username, username: username, usermail: email }
        dispatch(loginSystem(user))
    }
    const setMailHandle = (e) => {
        var value = e.target.value;
        setEmail(value)
    }
    const setNameHandle = (e) => {
        var value = e.target.value;
        setUsername(value)
    }
    
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>{t('LoginFormName')}</label>
                    <input required placeholder={t('LoginFormName')}
                        onChange={setNameHandle} />
                </Form.Field>
                <Form.Field>
                    <label>{t('LoginFormMail')}</label>
                    <input required type="email" placeholder={t('LoginFormMail')}
                        onChange={(e) => setMailHandle(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>{t('LoginFormPassword')}</label>
                    <input required type="password" placeholder={t('LoginFormPassword')}
                    />
                </Form.Field>
                <Form.Field>
                    <label>{t('LoginFormLanguage')}</label>
                    <Select required placeholder={t('LoginFormLanguageSelect')} options={languageOptions}
                    />
                </Form.Field>

                <Button
                    onClick={() => handleLogin()} as={NavLink} to="/home" className="login-system" type='submit'>{t('LoginFormButton')}</Button>
            </Form>
        </div>
    )
}

export default withNamespaces()(LoginForm);