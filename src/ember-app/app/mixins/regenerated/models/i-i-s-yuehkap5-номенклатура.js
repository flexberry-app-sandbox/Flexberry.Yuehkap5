import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номенклатура: DS.attr('string'),
  контрагенты: DS.belongsTo('i-i-s-yuehkap5-контрагенты', { inverse: null, async: false })
});

export let ValidationRules = {
  номенклатура: {
    descriptionKey: 'models.i-i-s-yuehkap5-номенклатура.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-yuehkap5-номенклатура.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-yuehkap5-номенклатура', {
    номенклатура: attr('Номенклатура', { index: 0 })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-yuehkap5-номенклатура', {
    номенклатура: attr('Номенклатура', { index: 0 })
  });
};
