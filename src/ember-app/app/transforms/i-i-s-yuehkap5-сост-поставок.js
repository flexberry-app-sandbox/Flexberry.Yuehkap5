import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостПоставокEnum from '../enums/i-i-s-yuehkap5-сост-поставок';

export default FlexberryEnum.extend({
  enum: СостПоставокEnum,
  sourceType: 'IIS.Yuehkap5.СостПоставок'
});
