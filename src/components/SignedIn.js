import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
import ProfileImg from '../assets/profile.png';
import { withNamespaces } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../i18n';

function SignedIn(props) {

    const { loginValues } = useSelector(state => state.login)

    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src={ProfileImg} />
                {
                    <Dropdown pointing="top right" text={loginValues.username}>
                        <Dropdown.Menu>
                            <Dropdown.Item text={loginValues.usermail} icon="info" />
                            <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"
                                as={NavLink} to="/login" />
                        </Dropdown.Menu>
                    </Dropdown>
                }

            </Menu.Item>
        </div>
    )
}

export default withNamespaces()(SignedIn);