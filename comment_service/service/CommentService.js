const { CommentRepostiory } = require("../database");

class CommentService {
  constructor() {
    this.repository = new CommentRepostiory();
  }

  SubscribeEvents(payload) {
    const { data, event } = payload;
  }
}

module.exports = CommentService;
