import {
  defineNamespace,
  defineProjections,
  Model as КонтрагентыMixin
} from '../mixins/regenerated/models/i-i-s-yuehkap5-контрагенты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонтрагентыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
