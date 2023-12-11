import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.yuehkap5.caption'),
          title: i18n.t('forms.application.sitemap.yuehkap5.title'),
          children: [{
            link: 'i-i-s-yuehkap5-заказ-пост-l',
            caption: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-заказ-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-заказ-пост-l.title'),
            children: null
          }, {
            link: 'i-i-s-yuehkap5-организации-l',
            caption: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-организации-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-номенклатура-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-отчет-о-закупках-l',
            caption: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-отчет-о-закупках-l.caption'),
            title: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-отчет-о-закупках-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-склады-l',
            caption: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-склады-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-контрагенты-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-единицы-измер-l',
            caption: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-единицы-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-единицы-измер-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-план-закупок-l',
            caption: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-план-закупок-l.caption'),
            title: i18n.t('forms.application.sitemap.yuehkap5.i-i-s-yuehkap5-план-закупок-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})