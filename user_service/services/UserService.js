const { CustomerRepository } = require("../database");

class UserService {
  constructor() {
    this.CustomerRepository = new CustomerRepository();
  }

  async Signup() {}

  subscribeEvents(payload) {
    const { event, data } = payload;

    switch (event) {
    }
  }
}

module.exports =  UserService ;
