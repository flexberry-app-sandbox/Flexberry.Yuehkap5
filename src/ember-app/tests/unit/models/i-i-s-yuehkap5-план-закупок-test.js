import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-yuehkap5-план-закупок', 'Unit | Model | i-i-s-yuehkap5-план-закупок', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-yuehkap5-единицы-измер',
    'model:i-i-s-yuehkap5-заказ-пост',
    'model:i-i-s-yuehkap5-контрагенты',
    'model:i-i-s-yuehkap5-номенклатура',
    'model:i-i-s-yuehkap5-организации',
    'model:i-i-s-yuehkap5-отчет-о-закупках',
    'model:i-i-s-yuehkap5-план-закупок',
    'model:i-i-s-yuehkap5-план',
    'model:i-i-s-yuehkap5-склады',
    'model:i-i-s-yuehkap5-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
