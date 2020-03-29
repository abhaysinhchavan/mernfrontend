import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
   width: '300px',
   margin: '0 auto'
}

class EditUser extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         roletype: 'Admin',
         userstatus: 'Active',
         mobilenum: ''
      }
   }

   componentDidMount = () => {
      this.getEmployeeByEmail();
   }
   
   getEmployeeByEmail() {
      axios.get('http://localhost:3001/api/users/search/' + this.props.match.params.email)
         .then(response => response.data).then((response) => {
            this.setState({
               name: response.data.name,
               roletype: response.data.roletype,
               userstatus: response.data.userstatus,
               mobilenum: response.data.mobilenum
            });
         }).catch((error) => { console.log(error); })
   }

   handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
   }

   // Update call with new data 
   handleSubmit = (event) => {
      event.preventDefault();
      const { name, roletype, userstatus, mobilenum } = this.state;
      axios.patch('http://localhost:3001/api/users/update/' + this.props.match.params.email,
         {
            name: name,
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
                     value={this.state.name}
                     onChange={this.handleChange}
                     className="form-control"
                  />
               </label>
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
               <label>
                  Mobile No
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
                  value="submit"
                  className="btn btn-primary"
               />
            </form>
         </div>
      );
   }
}

export default EditUser;