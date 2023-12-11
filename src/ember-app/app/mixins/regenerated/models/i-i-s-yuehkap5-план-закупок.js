import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  организации: DS.belongsTo('i-i-s-yuehkap5-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-yuehkap5-склады', { inverse: null, async: false }),
  план: DS.hasMany('i-i-s-yuehkap5-план', { inverse: 'планЗакупок', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-yuehkap5-план-закупок.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-yuehkap5-план-закупок.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-yuehkap5-план-закупок.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  план: {
    descriptionKey: 'models.i-i-s-yuehkap5-план-закупок.validations.план.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланЗакупокE', 'i-i-s-yuehkap5-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 }),
    план: hasMany('i-i-s-yuehkap5-план', 'План', {
      этоУслуга: attr('Это услуга', { index: 0 }),
      количество: attr('Количество', { index: 1 })
    })
  });

  modelClass.defineProjection('ПланЗакупокL', 'i-i-s-yuehkap5-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 })
  });
};
