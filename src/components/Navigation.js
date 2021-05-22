import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Feedback from './feedback';
import Home from './Home/index';
import Voting from './Voting';

function Navigation() {
    return (
        <div>
        <Switch>
            <Route 
                path="/user" 
                component={Home}
                // render={() => <Home handleUser={props.handleUser} user={props.user} />} 
            />
            <Route 
                path="/voting" 
                component={Voting}
                // render={() => <MainIssue handleUser={props.handleUser} user={props.user} />} 
            />
            <Route 
                path="/feedback" 
                component={Feedback}
                // render={() => <MainIssue handleUser={props.handleUser} user={props.user} />} 
            />
            
            <Route exact path="/" render={() => <Home />} />
        </Switch>
        </div>
    )
}

export default Navigation
