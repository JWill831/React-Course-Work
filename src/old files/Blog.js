import React, { Component } from 'react';
import Posts from './Posts/Posts';
import {Route} from 'react-router-dom';
// import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
// import axios from '../../axios';


class Blog extends Component {
    
    
    render() {
        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home  </a></li>
                            <li><a href='/new-post'>New Post  </a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact /> */}
                <Route path="/new-posts" exact component ={NewPost}/>
                <Route path="/" exact component ={Posts}/>
                
            </div>
        );
    }
}

export default Blog;