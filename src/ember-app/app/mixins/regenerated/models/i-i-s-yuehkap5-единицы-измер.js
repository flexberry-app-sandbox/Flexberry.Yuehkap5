import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицаИзмер: DS.attr('string')
});

export let ValidationRules = {
  единицаИзмер: {
    descriptionKey: 'models.i-i-s-yuehkap5-единицы-измер.validations.единицаИзмер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЕдиницыИзмерE', 'i-i-s-yuehkap5-единицы-измер', {
    
  });

  modelClass.defineProjection('ЕдиницыИзмерL', 'i-i-s-yuehkap5-единицы-измер', {
    единицаИзмер: attr('Единица измер', { index: 0 })
  });

  modelClass.defineProjection('ЕдиницыИзмеренияE', 'i-i-s-yuehkap5-единицы-измер', {
    
  });

  modelClass.defineProjection('ЕдиницыИзмеренияL', 'i-i-s-yuehkap5-единицы-измер', {
    
  });
};
