import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  этоУслуга: DS.attr('boolean'),
  единицыИзмер: DS.belongsTo('i-i-s-yuehkap5-единицы-измер', { inverse: null, async: false }),
  номенклатура: DS.belongsTo('i-i-s-yuehkap5-номенклатура', { inverse: null, async: false }),
  планЗакупок: DS.belongsTo('i-i-s-yuehkap5-план-закупок', { inverse: 'план', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-yuehkap5-план.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этоУслуга: {
    descriptionKey: 'models.i-i-s-yuehkap5-план.validations.этоУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  единицыИзмер: {
    descriptionKey: 'models.i-i-s-yuehkap5-план.validations.единицыИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-yuehkap5-план.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планЗакупок: {
    descriptionKey: 'models.i-i-s-yuehkap5-план.validations.планЗакупок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланE', 'i-i-s-yuehkap5-план', {
    этоУслуга: attr('Это услуга', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    номенклатура: belongsTo('i-i-s-yuehkap5-номенклатура', '', {
      номенклатура: attr('', { index: 2 }),
      контрагенты: belongsTo('i-i-s-yuehkap5-контрагенты', '', {
        контрагент: attr('', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    единицыИзмер: belongsTo('i-i-s-yuehkap5-единицы-измер', '', {
      единицаИзмер: attr('', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
