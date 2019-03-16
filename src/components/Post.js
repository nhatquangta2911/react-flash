import React, { Component } from "react";

export default class Post extends Component {
    
    state = {
        id: null
    }

    componentDidMount() {
        let id = this.props.match.params.post_id
        this.setState({
            id
        })
    }

    render() {
        return (
            <div className="container">
                <p className="grey-text">Route Parameter <span className="amber-text">{this.state.id}</span></p>
            </div>
        );
    }
}
