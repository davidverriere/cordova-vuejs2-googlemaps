# cordova-vuejs2-googlemaps
This project is a starter project to create a cordova project with vue js 2 and google maps

The project is an illustration of the blog post from [cheesecode.fr](http://cheesecode.fr/creer-une-application-mobile-avec-vue-js-2-et-cordova/)

usage 
```bash
npm install
cordova platform add browser
cordova platform add android
```

set your google map api key in googlemaps.vue file method 
```javascript
 load('Your API KEy', '');
```

Run android
```bash
cordova build android
cordova run android
```

Run browser
```bash
cordova build browser
cordova run browser
```

