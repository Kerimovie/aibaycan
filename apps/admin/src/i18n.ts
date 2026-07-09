import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

/**
 * Admin i18n — @aibaycan/ui komponentləri react-i18next istifadə edir
 * (PasswordInput, field-mark, validation mesajları). Bu, minimal AZ qurulumdur.
 */
const resources = {
  az: {
    translation: {
      common: {
        aria: {
          showPassword: 'Parolu göstər',
          hidePassword: 'Parolu gizlət',
        },
      },
      validation: {
        required: 'Bu sahə tələb olunur',
        email: 'Düzgün email daxil edin',
        url: 'Düzgün URL daxil edin',
        uuid: 'Düzgün identifikator deyil',
        minChars: 'Ən azı {{count}} simvol',
        maxChars: 'Ən çox {{count}} simvol',
        minNumber: 'Ən azı {{value}}',
        maxNumber: 'Ən çox {{value}}',
      },
      field: {
        optional: 'seçimlik',
      },
    },
  },
};

void i18next.use(initReactI18next).init({
  resources,
  lng: 'az',
  fallbackLng: 'az',
  interpolation: { escapeValue: false },
});

export default i18next;
