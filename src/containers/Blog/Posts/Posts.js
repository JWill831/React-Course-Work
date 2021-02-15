import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';
import { Link } from 'react-router-dom';
class Posts extends Component {
    state = {
        posts: []
    };
    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };
    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    };
                });
                this.setState({ posts: updatedPosts });
                // console.log("Response", res);
            })
            .catch(error => {
                // this.setState({ error: true });
                console.log(error);
            });
    }
    render() {
        let posts = <p style={{ textAlign: 'center' }}> Something went wrong </p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (

                    <Link to = {'/'+ post.id} key={post.id}>
                        <Post
                            clicked={() => this.postSelectedHandler(post.id)}
                            title={post.title}
                            author={post.author} />;
                    </Link>);


            });


        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }

}

export default Posts;