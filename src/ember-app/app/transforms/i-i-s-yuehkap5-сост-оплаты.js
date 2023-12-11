import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОплатыEnum from '../enums/i-i-s-yuehkap5-сост-оплаты';

export default FlexberryEnum.extend({
  enum: СостОплатыEnum,
  sourceType: 'IIS.Yuehkap5.СостОплаты'
});
