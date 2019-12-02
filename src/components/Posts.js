import React, { Component } from 'react'

class Posts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => { this.setState({posts: data})})
    }
    
    render() {

        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <div>{post.title}</div>
                <p>{post.body}</p>
            </div>
            ))
        

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

export default Posts