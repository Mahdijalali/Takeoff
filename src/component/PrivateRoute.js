import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {Redirect,Route} from 'react-router-dom';

class PrivateRoute extends Component{
    static proptype ={
        component : Proptypes.func.isRequired,
        path : Proptypes.string.isRequired
    };

    render(){
        const { component:Component , auth:isAuthenticated , ...restProps} = this.props;
        return <Route {...restProps} render={(props)=> (
            isAuthenticated ? (
                 <Component {...props}/>
             ) : (
                 <Redirect to={{ pathname: '/login' , state:{ from:props.location} }}/>
             )
         )} />
    }
}

export default PrivateRoute;