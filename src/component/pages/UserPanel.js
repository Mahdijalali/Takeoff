import React, { useState} from 'react';
import axios from 'axios';

const UserPanel = props=>{

    const [showState,showStateSet] = useState({showState:false});

    const showDivhandler = () => {
        showStateSet({showState:true});
    }


    return(
            <div>
                <h1>Hi Gentelmans</h1>
                <button onClick={showDivhandler} className="btn-danger">ClickME!</button>
                    <div>
                        <h2>User Panel</h2>
                        <h2>User Panel</h2>
                        <h2>User Panel</h2>
                        <h2>User Panel</h2>
                        <h2>User Panel</h2>
                        <h2>User Panel</h2>

                        <button onClick={postdata} >Press Me!</button>
                    </div> 
            </div>
        );
}
    
    
const postdata =()=> {
    const order={
        customer:{
            CusID : 1,
            address:{
                city:'Tehran',
                Street:'St. 1',
                CodePosti: 14552
            },
            CusName: 'Ali',
            CusLname: 'Alavi',
        },
        Ingredient:{
            bacon:1,
            meat:2,
            bread : 2
        },
        DeliveryMethod:'Fast Service'
    }
    axios.post('https://react-exercise-3f503.firebaseio.com/customer' , order)
    .then(response => {console.log(response);
    })
    .catch(error => {console.log(error);})
}
    
        //const { auth:isAuthenticated , ...restProps} = this.props;


export default UserPanel;