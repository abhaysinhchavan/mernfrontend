import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';

const customStyle = {
    width: '300px',
    margin: '0 auto'
}

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobilenum: '',
            roletype: 'Admin',
            userstatus: 'Active'
        }
    }

    // When value changes of the fields
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To add new employee when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, roletype, userstatus, mobilenum } = this.state;
        axios.post('http://localhost:3001/api/users/add', {
            name: name,
            email: email,
            roletype: this.state.roletype,
            userstatus: this.state.userstatus,
            mobilenum: mobilenum,
        })
            .then((response) => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
                alert('Error...' + error);
                this.props.history.push('/');
            });
    }

    render() {
        return (
            <div className="container">
                <form style={customStyle} onSubmit={this.handleSubmit}>
                    <label>
                        Name
 <input
                            name="name"
                            type="text"
                            value={this.state.name} required
                            onChange={this.handleChange}
                            className="form-control" />
                    </label>
                    <br />
                    <label>
                        EMail
 <input name="email" type="email" required value={this.state.email} onChange={this.handleChange}
                            className="form-control" />
                    </label>
                    <br />
                    <br />

                    <label>
                        Role Type
 <input
                            name="roletype"
                            type="radio"
                            value="Admin"
                            checked={this.state.roletype === "Admin"}
                            onChange={this.handleChange}
                            className="radio" /> Admin <br />
                        <input
                            name="roletype"
                            type="radio"
                            value="Customer Executive"
                            checked={this.state.roletype === "Customer Executive"}
                            onChange={this.handleChange}
                            className="radio" /> Customer Executive <br />
                    </label>
                    <br />
                    <br />

                    <label>
                        User Status
 <input
                            name="userstatus"
                            type="radio"
                            value="Active"
                            checked={this.state.userstatus === "Active"}
                            onChange={this.handleChange}
                            className="radio"
                        /> Active <br />
                        <input
                            name="userstatus"
                            type="radio"
                            value="InActive"
                            checked={this.state.userstatus === "InActive"}
                            onChange={this.handleChange}
                            className="radio"
                        /> InActive <br />
                        <input
                            name="userstatus"
                            type="radio"
                            value="Pending"
                            checked={this.state.userstatus === "Pending"}
                            onChange={this.handleChange}
                            className="radio"
                        /> Pending <br />
                    </label>
                    <br />
                    <br />
                    <label>
                        Mobile Num
 <input
                            name="mobilenum"
                            type="text"
                            value={this.state.mobilenum}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="ADD USER"
                        className="myButton"
                    />
                </form>
            </div>
        );
    }
}

export default AddUser;