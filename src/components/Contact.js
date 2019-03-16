import React, { Component } from "react";
import RandomTextColor from "../high-order-components/RandomTextColor";
import axios from "axios";
class Contact extends Component {
    state = {
        users: []
    };
    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/users").then(res => {
            this.setState({
                users: res.data
            });
        });
    }

    render() {
        
        const { users } = this.state;
        const userList = users.length ? (
            users.map(user => {
                return (
                    <div className="post card" key={user.id}>
                        <div className="card-content center ">
                            <div className="cyan-text card-title">{user.name}</div>
                            <p className="grey-text">{user.email}</p>
                            <p className="grey-text">{user.phone}</p>
                            <p className="grey-text">{user.website}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <p className="center amber-text darken-3">No more item</p>
        )

        return (
            <div className="container">
                <h2 className="center"></h2>
                {userList}
            </div>
        );
    }
}

export default RandomTextColor(Contact);
