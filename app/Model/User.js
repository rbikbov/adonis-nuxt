'use strict';

const Lucid = use('Lucid');
const Hash = use('Hash');

class User extends Lucid {
  static boot() {
    super.boot();

    /**
     * Hashing password before storing to the
     * database.
     */
    this.addHook('beforeCreate', function*(next) {
      this.password = yield Hash.make(this.password);
      yield next;
    });
  }

  apiTokens() {
    return this.hasMany('App/Model/Token');
  }

  static rules(userId) {
    return {
      username: 'required|unique:users|min:6|max:30|regex:^[a-zA-z]+$',
      email: `unique:users,email,id,${userId}`,
      password: 'required|min:6|max:30'
    };
  }

  static get hidden() {
    return ['password'];
  }
}

module.exports = User;
