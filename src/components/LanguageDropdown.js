import React from 'react';
import { withNamespaces } from 'react-i18next';

function LanguageDropdown({ t, i18n }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  }
  const languages = [
    { name: "TR", code: "tr" },
    { name: "EN", code: "en" },

  ]
  return (
    <div className="language-dropdown" >
      {
        languages.map((language) => {
          return (
            <div>
              <button className="language-change-button" key={language.code} onClick={() => changeLanguage(language.code)}>{language.name}</button>
            </div>
          );
        })
      }
    </div>
  )
}
export default withNamespaces()(LanguageDropdown);

