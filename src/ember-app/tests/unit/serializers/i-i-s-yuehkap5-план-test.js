import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-yuehkap5-план', 'Unit | Serializer | i-i-s-yuehkap5-план', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-yuehkap5-план',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-yuehkap5-сост-оплаты',
    'transform:i-i-s-yuehkap5-сост-поставок',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
