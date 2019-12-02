import React, { Component } from 'react'

class Postform extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            body: "",
            posts: []
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'content-type': 'application/json', 
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    render() {

        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Title: </label><br />
                    <input name="title" type="text" onChange={(e)=>{this.onChange(e)}} value={this.state.title} /><br />
                    <label>Body: </label><br />
                    <textarea name="body" type="text" onChange={(e)=>{this.onChange(e)}} value={this.state.body} />
                    <hr/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Postform