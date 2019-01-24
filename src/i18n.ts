import i18n, {Resource} from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';

i18n
    .use(detector)
    .use(backend)
    .use(reactI18nextModule)
    .init({
        ns: ['landing','docMenu',],
        backend:{
            loadPath:`${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
        },
        defaultNS: 'landing',
        lng:'en',
        fallbackLng:'en',

        interpolation:{
            escapeValue:false,
        }

    });

export default i18n;
