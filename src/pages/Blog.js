import React,{ Component, Fragment} from 'react'
import axios from 'axios';

class Blog extends Component {

  state = {
    posts:null
  }

  componentDidMount() {
    axios.get('https://mokamwp.wpthemehut.com/wp-json/wp/v2/posts')
      .then( response => {
        // handle success
        this.setState({ posts:response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  render() {
    let posts = "loading";
    if(this.state.posts){
      posts=this.state.posts.map( post => {
       return (
         <div className="col-md-4" key={post.id}>
             <div className="blog-post">
                 <div className="post-img">
                     <img src={post.better_featured_image.media_details.sizes.medium.source_url} alt="" />
                     <div className="post-meta">
                           <a href="#"><i className="fa fa-calendar"></i>{ post.date }</a>
                     </div>
                 </div>
                 <div className="post-content-wrap">
                     <div className="blog-post-head">
                         <h2 className="post-title">
                             <a href={post.guid.rendered}>{ post.title.rendered }</a>
                         </h2>
                   </div>
                   <p>{ post.content.rendered }</p>
                   <a href={post.guid.rendered} className="btn">Read More</a>
               </div>
             </div>
         </div>
       )
     })
     }


    return(
      <Fragment>

      <section className="blog">
         <div className="container">
             <div className="row">
                 <div className="section-title text-center">
                     <h2>Our Blog</h2>
                     <p>Eaque corporis rem esse nam. Eos ipsa nesciunt repellendus sit sequi, illum nulla perferendis autem eveniet alias.</p>
                 </div>
             </div>
             <div className="row">
                 { posts }
             </div>
         </div>
     </section>
     </Fragment>
    )
  }

}
export default Blog