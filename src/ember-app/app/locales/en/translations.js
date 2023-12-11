import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISYuehkap5ЕдиницыИзмерLForm from './forms/i-i-s-yuehkap5-единицы-измер-l';
import IISYuehkap5ЗаказПостLForm from './forms/i-i-s-yuehkap5-заказ-пост-l';
import IISYuehkap5КонтрагентыLForm from './forms/i-i-s-yuehkap5-контрагенты-l';
import IISYuehkap5НоменклатураLForm from './forms/i-i-s-yuehkap5-номенклатура-l';
import IISYuehkap5ОрганизацииLForm from './forms/i-i-s-yuehkap5-организации-l';
import IISYuehkap5ОтчетОЗакупкахLForm from './forms/i-i-s-yuehkap5-отчет-о-закупках-l';
import IISYuehkap5ПланЗакупокLForm from './forms/i-i-s-yuehkap5-план-закупок-l';
import IISYuehkap5СкладыLForm from './forms/i-i-s-yuehkap5-склады-l';
import IISYuehkap5ЕдиницыИзмерEForm from './forms/i-i-s-yuehkap5-единицы-измер-e';
import IISYuehkap5ЗаказПостEForm from './forms/i-i-s-yuehkap5-заказ-пост-e';
import IISYuehkap5КонтрагентыEForm from './forms/i-i-s-yuehkap5-контрагенты-e';
import IISYuehkap5НоменклатураEForm from './forms/i-i-s-yuehkap5-номенклатура-e';
import IISYuehkap5ОрганизацииEForm from './forms/i-i-s-yuehkap5-организации-e';
import IISYuehkap5ОтчетОЗакупкахEForm from './forms/i-i-s-yuehkap5-отчет-о-закупках-e';
import IISYuehkap5ПланЗакупокEForm from './forms/i-i-s-yuehkap5-план-закупок-e';
import IISYuehkap5СкладыEForm from './forms/i-i-s-yuehkap5-склады-e';
import IISYuehkap5ЕдиницыИзмерModel from './models/i-i-s-yuehkap5-единицы-измер';
import IISYuehkap5ЗаказПостModel from './models/i-i-s-yuehkap5-заказ-пост';
import IISYuehkap5КонтрагентыModel from './models/i-i-s-yuehkap5-контрагенты';
import IISYuehkap5НоменклатураModel from './models/i-i-s-yuehkap5-номенклатура';
import IISYuehkap5ОрганизацииModel from './models/i-i-s-yuehkap5-организации';
import IISYuehkap5ОтчетОЗакупкахModel from './models/i-i-s-yuehkap5-отчет-о-закупках';
import IISYuehkap5ПланЗакупокModel from './models/i-i-s-yuehkap5-план-закупок';
import IISYuehkap5ПланModel from './models/i-i-s-yuehkap5-план';
import IISYuehkap5СкладыModel from './models/i-i-s-yuehkap5-склады';
import IISYuehkap5ТЧЗаказModel from './models/i-i-s-yuehkap5-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-yuehkap5-единицы-измер': IISYuehkap5ЕдиницыИзмерModel,
    'i-i-s-yuehkap5-заказ-пост': IISYuehkap5ЗаказПостModel,
    'i-i-s-yuehkap5-контрагенты': IISYuehkap5КонтрагентыModel,
    'i-i-s-yuehkap5-номенклатура': IISYuehkap5НоменклатураModel,
    'i-i-s-yuehkap5-организации': IISYuehkap5ОрганизацииModel,
    'i-i-s-yuehkap5-отчет-о-закупках': IISYuehkap5ОтчетОЗакупкахModel,
    'i-i-s-yuehkap5-план-закупок': IISYuehkap5ПланЗакупокModel,
    'i-i-s-yuehkap5-план': IISYuehkap5ПланModel,
    'i-i-s-yuehkap5-склады': IISYuehkap5СкладыModel,
    'i-i-s-yuehkap5-т-ч-заказ': IISYuehkap5ТЧЗаказModel
  },

  'application-name': 'Yuehkap5',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Yuehkap5',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Yuehkap5',
          title: 'Yuehkap5'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1',
          'i-i-s-yuehkap5-заказ-пост-l': {
            caption: 'ЗаказПостL',
            title: 'Заказ пост'
          },
          'i-i-s-yuehkap5-единицы-измер-l': {
            caption: 'ЕдиницыИзмерL',
            title: 'Единицы измер'
          },
          'i-i-s-yuehkap5-номенклатура-l': {
            caption: 'НоменклатураL',
            title: 'Номенклатура'
          },
          'i-i-s-yuehkap5-план-закупок-l': {
            caption: 'ПланЗакупокL',
            title: 'План закупок'
          },
          'i-i-s-yuehkap5-склады-l': {
            caption: 'СкладыL',
            title: 'Склады'
          },
          'i-i-s-yuehkap5-отчет-о-закупках-l': {
            caption: 'ОтчетОЗакупкахL',
            title: 'Отчет о закупках'
          },
          'i-i-s-yuehkap5-организации-l': {
            caption: 'ОрганизацииL',
            title: 'Организации'
          },
          'i-i-s-yuehkap5-контрагенты-l': {
            caption: 'КонтрагентыL',
            title: 'Контрагенты'
          }
        },
        yuehkap5: {
          caption: 'Yuehkap5',
          title: 'Yuehkap5',
          'i-i-s-yuehkap5-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-yuehkap5-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-yuehkap5-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-yuehkap5-отчет-о-закупках-l': {
            caption: 'Отчет о закупках',
            title: ''
          },
          'i-i-s-yuehkap5-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-yuehkap5-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-yuehkap5-единицы-измер-l': {
            caption: 'Единицы измер',
            title: ''
          },
          'i-i-s-yuehkap5-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-yuehkap5-единицы-измер-l': IISYuehkap5ЕдиницыИзмерLForm,
    'i-i-s-yuehkap5-заказ-пост-l': IISYuehkap5ЗаказПостLForm,
    'i-i-s-yuehkap5-контрагенты-l': IISYuehkap5КонтрагентыLForm,
    'i-i-s-yuehkap5-номенклатура-l': IISYuehkap5НоменклатураLForm,
    'i-i-s-yuehkap5-организации-l': IISYuehkap5ОрганизацииLForm,
    'i-i-s-yuehkap5-отчет-о-закупках-l': IISYuehkap5ОтчетОЗакупкахLForm,
    'i-i-s-yuehkap5-план-закупок-l': IISYuehkap5ПланЗакупокLForm,
    'i-i-s-yuehkap5-склады-l': IISYuehkap5СкладыLForm,
    'i-i-s-yuehkap5-единицы-измер-e': IISYuehkap5ЕдиницыИзмерEForm,
    'i-i-s-yuehkap5-заказ-пост-e': IISYuehkap5ЗаказПостEForm,
    'i-i-s-yuehkap5-контрагенты-e': IISYuehkap5КонтрагентыEForm,
    'i-i-s-yuehkap5-номенклатура-e': IISYuehkap5НоменклатураEForm,
    'i-i-s-yuehkap5-организации-e': IISYuehkap5ОрганизацииEForm,
    'i-i-s-yuehkap5-отчет-о-закупках-e': IISYuehkap5ОтчетОЗакупкахEForm,
    'i-i-s-yuehkap5-план-закупок-e': IISYuehkap5ПланЗакупокEForm,
    'i-i-s-yuehkap5-склады-e': IISYuehkap5СкладыEForm
  },

});

export default translations;
