// Event bus
window.Vue = require('vue');
window.eventBus = new Vue();

// Components
Vue.component('o-picker', require('./components/Picker'));

// Libraries
import './lib/icons';
