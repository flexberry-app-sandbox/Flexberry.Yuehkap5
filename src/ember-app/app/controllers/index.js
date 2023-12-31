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
          caption: i18n.t('forms.application.sitemap.new-folder1.caption'),
          title: i18n.t('forms.application.sitemap.new-folder1.title'),
          children: [{
            link: 'i-i-s-yuehkap5-заказ-пост-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-заказ-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-заказ-пост-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-единицы-измер-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-единицы-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-единицы-измер-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-номенклатура-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-план-закупок-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-план-закупок-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-план-закупок-l.title'),
            children: null
          }, {
            link: 'i-i-s-yuehkap5-склады-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-склады-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-отчет-о-закупках-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-отчет-о-закупках-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-отчет-о-закупках-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-организации-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-организации-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-yuehkap5-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-yuehkap5-контрагенты-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})