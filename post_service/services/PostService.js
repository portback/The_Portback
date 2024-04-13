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

  async FindPost(){
    
  }

  SubscribeEvents (payload){

  }
}

module.epxorts = PostService;
