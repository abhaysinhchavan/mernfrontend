import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';


var divStyle = {
    margin: '8% 8%',
};

class ListUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount = () => {
        this.getEmployeeList();
    }
    
    getEmployeeList() {
        axios.get('http://localhost:3001/api/users/')
        .then(response => response.data).then(response => {
            this.setState({ employees: response.data });
        }).catch((error) => { console.log(error); })
    }

    deleteEmployee(email) {
        axios.delete('http://localhost:3001/api/users/delete/' + email)
            .then(() => {
                this.getEmployeeList();
                console.log('User Deleted !!!')
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        var { employees } = this.state;

        return (<div style={divStyle}>
            <Table responsive> <thead> <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Role Type</th>
                <th>Status</th>
                <th></th><th></th>
            </tr>
            </thead>
                <tbody>
                    {
                        employees && employees.map((employee, i) => {
                            return (
                                <tr key={i}>
                                    <td>{employee.email}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.roletype}</td>
                                    <td>{employee.userstatus}</td> 
                                    <td> <Link to={"edituser/" + employee.email} 
                                    className="editButton" ></Link>
                                    </td>
                                    <td> <Button onClick={() => this.deleteEmployee(employee.email)} 
                                    bsStyle="danger" >Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
        );
    }
}

export default ListUser;


