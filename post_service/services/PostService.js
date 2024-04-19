class PostService {
  constructor() {
    this.repository = new PostRepository();
  }
  async CreatePost() {
    console.log("create post");
  }

  async EditPost() {
    console.log("edited post");
  }

  async DeletePost() {
    console.log("deleted post");
  }

  async FindPost() {}

  SubscribeEvents(payload) {
    const { data, event } = payload;

    switch (event) {
      case "ADD_COMMENT":
        this.CreatePost();
        break;

      default:
        break;
    }
  }
}

module.exports = PostService;
