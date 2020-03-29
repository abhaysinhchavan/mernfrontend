import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Our all component files
import ListUser from '../Components/ListUser';
import AddUser from '../Components/AddUser';
import EditUser from '../Components/EditUser';


class Main extends Component {

    render() {
        return (
            <main> 
                <Switch>
                    <Route exact path='/' component={ListUser} />
                    <Route path='/list' component={ListUser} />
                    <Route path='/adduser' component={AddUser} />
                    <Route path='/edituser/:email' component={EditUser} />
                </Switch>
            </main>
        );
    }
}

export default Main;