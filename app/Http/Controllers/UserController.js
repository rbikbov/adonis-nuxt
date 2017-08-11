'use strict';
const User = use('App/Model/User');
const Validator = use('Validator');

class UserController {
  // /users               GET            UserController.index       Show list of all users
  *index(request, response) {
    const users = yield User.all();
    return response.send(users);
  }

  // /users               POST           UserController.store       Save user submitted via form to the database.
  *store(request, response) {
    const userData = request.only('username', 'email', 'password');

    const validation = yield Validator.validateAll(userData, User.rules());

    if (validation.fails()) {
      response.status(400).send(validation.messages());
    } else {
      const user = yield User.create(userData);
      response.send(user);
    }
    return;
  }

  // /users/:id           GET            UserController.show        Display user details using the id
  *show(request, response) {
    const userId = request.param('id');
    // yield Post.findBy('title', '...')
    // const posts = yield Post.query().where('title', 'Adonis 101')
    response.send(yield User.findOrFail(userId));

    // const user = yield User.find(userId);

    // if (user) {
    //   return yield response.send(user);
    // }

    // response.status(404).send('Sorry, cannot find the selected found');
  }

  // /users/:id           PUT/PATCH      UserController.update      Update details for a given user with id.
  *update(request, response) {
    const userId = request.param('id');
    const userData = request.only('username'); // , 'email', 'password');
    const user = yield User.findOrFail(userId);
    user.fill(userData);

    yield user.save(); // SQL Update
  }

  // /users/:id           DELETE         UserController.destroy     Delete a given user with id.
  *destroy(request, response) {
    // const userId = request.param('id');
    // const post = yield User.findOrFail(userId);
    // yield post.delete();
  }
}

module.exports = UserController;
