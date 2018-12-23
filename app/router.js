import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tutorials');
  this.route('home');
  this.route('contact');
  this.route('imprint');
  this.route('privacy');
  this.route('about-page');
  this.route('about-authors');
  this.route('settings');
  this.mount('downloads');
});

export default Router;
