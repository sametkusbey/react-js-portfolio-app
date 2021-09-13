import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import LanguageDropdown from './LanguageDropdown';
import brandIcon from '../assets/react-logo.png';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { NavLink, useHistory } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSystem } from '../store/actions/loginActions';



function Header({ t }) {
  const dispatch = useDispatch()
  const { loginValues } = useSelector(state => state.login)
  const history = useHistory()
  function handleSignOut(params) {
    dispatch(logoutSystem())
    history.push("/login")
  }

  const loginControl = () => {

    if (loginValues.usermail !== "") {
      return (
        <SignedIn signOut={handleSignOut} />
      )
    }
    else {
      return (
        <SignedOut />
      )
    }
  }
  return (
    <Menu inverted className="header-menu">
      <Container className="header-container">
        <Menu.Item>
          <img src={brandIcon} className="brand-logo" style={{width:60}} /> &nbsp;&nbsp; <span className="brand-name">{t('BrandTitle')}</span>
        </Menu.Item>
        <Menu.Item position="right" name={t('HeaderHomeText')}
          as={NavLink} to="/home"
        />
        <Menu.Item name={t('HeaderContactText')}
          as={NavLink} to="/contact"
        />
        <Menu.Menu position='right'>
          <LanguageDropdown />
          {
            loginControl()
          }
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
export default withNamespaces()(Header);
