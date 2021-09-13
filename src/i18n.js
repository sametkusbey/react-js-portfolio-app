import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import translationTR from './locales/tr/translation.json';
import translationEN from './locales/en/translation.json';


const resources = {
    tr: { translation: translationTR },
    en: { translation: translationEN },
  
};
i18n
    .use(reactI18nextModule)
    .init({
        resources,
        lng: "tr",
        keySeparator: false, 
        interpolation: {
            escapeValue: false 
        }
    });
export default i18n;