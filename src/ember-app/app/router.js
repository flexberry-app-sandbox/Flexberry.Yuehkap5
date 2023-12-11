import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-yuehkap5-единицы-измер-l');
  this.route('i-i-s-yuehkap5-единицы-измер-e',
  { path: 'i-i-s-yuehkap5-единицы-измер-e/:id' });
  this.route('i-i-s-yuehkap5-единицы-измер-e.new',
  { path: 'i-i-s-yuehkap5-единицы-измер-e/new' });
  this.route('i-i-s-yuehkap5-заказ-пост-l');
  this.route('i-i-s-yuehkap5-заказ-пост-e',
  { path: 'i-i-s-yuehkap5-заказ-пост-e/:id' });
  this.route('i-i-s-yuehkap5-заказ-пост-e.new',
  { path: 'i-i-s-yuehkap5-заказ-пост-e/new' });
  this.route('i-i-s-yuehkap5-контрагенты-l');
  this.route('i-i-s-yuehkap5-контрагенты-e',
  { path: 'i-i-s-yuehkap5-контрагенты-e/:id' });
  this.route('i-i-s-yuehkap5-контрагенты-e.new',
  { path: 'i-i-s-yuehkap5-контрагенты-e/new' });
  this.route('i-i-s-yuehkap5-номенклатура-l');
  this.route('i-i-s-yuehkap5-номенклатура-e',
  { path: 'i-i-s-yuehkap5-номенклатура-e/:id' });
  this.route('i-i-s-yuehkap5-номенклатура-e.new',
  { path: 'i-i-s-yuehkap5-номенклатура-e/new' });
  this.route('i-i-s-yuehkap5-организации-l');
  this.route('i-i-s-yuehkap5-организации-e',
  { path: 'i-i-s-yuehkap5-организации-e/:id' });
  this.route('i-i-s-yuehkap5-организации-e.new',
  { path: 'i-i-s-yuehkap5-организации-e/new' });
  this.route('i-i-s-yuehkap5-отчет-о-закупках-l');
  this.route('i-i-s-yuehkap5-отчет-о-закупках-e',
  { path: 'i-i-s-yuehkap5-отчет-о-закупках-e/:id' });
  this.route('i-i-s-yuehkap5-отчет-о-закупках-e.new',
  { path: 'i-i-s-yuehkap5-отчет-о-закупках-e/new' });
  this.route('i-i-s-yuehkap5-план-закупок-l');
  this.route('i-i-s-yuehkap5-план-закупок-e',
  { path: 'i-i-s-yuehkap5-план-закупок-e/:id' });
  this.route('i-i-s-yuehkap5-план-закупок-e.new',
  { path: 'i-i-s-yuehkap5-план-закупок-e/new' });
  this.route('i-i-s-yuehkap5-склады-l');
  this.route('i-i-s-yuehkap5-склады-e',
  { path: 'i-i-s-yuehkap5-склады-e/:id' });
  this.route('i-i-s-yuehkap5-склады-e.new',
  { path: 'i-i-s-yuehkap5-склады-e/new' });
});

export default Router;
