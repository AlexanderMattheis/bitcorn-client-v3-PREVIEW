import Route from '@ember/routing/route';

export default class Contact extends Route.extend({
  model(): object {
    return {
      email: "",
      message: ""
    };
  }
}) {
  // normal class body definition here
}
