import axios from "axios";
import { Component } from "react";

export default class Post extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    /* Call the API */
    this.getPosts();
  }

  render() {
    return (
      <div>
        <h1>Post List</h1>
         <div className="row row-cols-1 row-cols-md-3 g-4">
          {this.state.posts.map((p) => (
             <div className="col" key={p.id}>
               <div className="card">
                 <div className="card-body">
                   <h5 className="card-title">{p.title}</h5>
                   <p className="card-text">{p.body}</p>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    );
  }

  async getPosts() {
    try {
      const response = axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = (await response).data;
      this.setState({
        posts: data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
