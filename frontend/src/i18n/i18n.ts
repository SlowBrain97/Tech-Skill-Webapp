import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import userEn from './user/en.json';
import userJp from './user/jp.json';
import userVi from './user/vi.json';
import homeEn from './home/en.json';
import homeJp from './home/jp.json';
import homeVi from './home/vi.json';
import commonEn from './common/en.json';
import commonJp from './common/jp.json';
import commonVi from './common/vi.json';
import settingsEn from './settings/en.json';
import settingsJp from './settings/jp.json';
import settingsVi from './settings/vi.json';
import questionEn from './question/en.json';
import questionJp from './question/jp.json';
import questionVi from './question/vi.json';
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                user: userEn,
                home: homeEn,
                common: commonEn,
                settings: settingsEn,
                question: questionEn,

            },
            jp: {
                user: userJp,
                home: homeJp,
                common: commonJp,
                settings: settingsJp,
                question: questionJp,
            },
            vi: {
                user: userVi,
                home: homeVi,
                common: commonVi,
                settings: settingsVi,
                question: questionVi,
            },
        },
        lng: 'auto',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },

    });

export default i18n;
