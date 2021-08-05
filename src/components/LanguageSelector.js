import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const LanguageSelector = (props) => {

   const onChangeLanguage = language =>{
        const { i18n } = props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    };



    return (
        
        <div className="container">
        <img src="https://www.countryflags.io/az/flat/24.png" 
        alt="Azerbaijan Flag" onClick={() => onChangeLanguage('az')} 
        style={{cursor : 'pointer'}}></img>

        <img src="https://www.countryflags.io/gb/flat/24.png" 
        alt="USA Flag" onClick={() => onChangeLanguage('en')} 
        style={{cursor : 'pointer'}}></img>

     </div>
    );
};

export default withTranslation()(LanguageSelector);