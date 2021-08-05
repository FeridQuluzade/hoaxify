import i18n from 'i18next';
import { interpolateName } from 'loader-utils';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:{
            translations:{
               'Sign Up': 'Sign Up',
               'Password mismatch': 'Password Mismatch',
               'Username' : 'Username',
               'Display Name' : 'Display Name',
               'Password' : 'Password',
               'Password Repeat' : 'Password Repeat',
               'Login' :'Login'

            }
        },
        az:{
            translations:{
                 'Sign Up' : 'Qeydiyyatdan keç',
                 'Password mismatch' : 'Eyni şifrəni təkrar edin ',
                 'Username' : 'İstifadəçi adı',
                 'Display Name' : 'İstədiyiniz ad',
                 'Password': 'Şifrə',
                 'Password Repeat' : 'Şifrəni təkrarla',
                 'Login' : 'Sistemə giriş'
            }
        }
    }
    ,
    fallbackLng:'en',
    ns:['translations'],
    defaultNS: "translations",
    keySeparator: false,
    interpolation:{
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});

export default i18n;




