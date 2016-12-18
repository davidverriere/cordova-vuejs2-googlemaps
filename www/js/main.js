var Vue = require('vue');
var VueResource = require('vue-resource');
var Home = require('./components/home.vue');
var GoogleMaps = require('./components/googlemaps.vue');

Vue.use(VueResource);

var vm = new Vue({
  components: {
    'home-component': Home,
    'google-maps': GoogleMaps
  }
}).$mount('#app');