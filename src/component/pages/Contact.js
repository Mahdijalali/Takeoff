import React, { Component } from 'react';
import '../../assets/styles/style.css'
import styled  from 'styled-components';

const StyledDiv = styled.div`
            border:1px solid #999;
            padding-top: auto;
            padding-bottom: auto;
            margin: 5px; 
            height: 90px;
            background-color: ;
            text-align: center;
            vertical-align: middle;
            line-height: 90px; 
        `;
class Contact extends Component {
    state = {
        Inputtext: null,
        showpractises: false,
        people: [
                    {name : 'Ali' , Lname : 'Alavi' , age : 30 , job : 'Developer' , id : 1},
                    {name : 'Abbas' , Lname : 'Abbassi' , age : 34 , job : 'Developer 1' , id : 2},
                    {name : 'Zahra' , Lname : 'Zahraee' , age : 12 , job : 'Developer 2' , id : 3},
                    {name : 'Leyla' , Lname : 'Leylaee' , age : 23 , job : 'Developer 3' , id : 4}
                ]
        
    }


    ChangeHandeler=(event)=>{
        var name=event.target.value;
        this.setState({Inputtext:name})
        
    }
    handletoggle=()=>{
        const doesShow=this.state.showpractises;
        this.setState({showpractises:!doesShow})
    }
    deleteperson=(index)=>{
        const personindex=this.state.people.findIndex(p=>{
            return p.id===index
        })
        const person= {...this.state.people[personindex]};
        person.name='Abbas';
        person.Lname='Jalali';
        const people_=[...this.state.people];
        people_[personindex]=person
        //people_.splice(personindex,1);
        this.setState({people:people_});
        //const people_= this.state.people;
        //people_.splice({people})
        //this.setState({people:people_});
    }
    deleteperson=(index)=>{
        const personindex=this.state.people.findIndex(p=>{
            return p.id===index
        })
        const people_=[...this.state.people];
        people_.splice(personindex,1);
        this.setState({people:people_});
    }
    handlerename=(event,index)=>{
        const NewLname=event.target.value;
        const personindex=this.state.people.findIndex(p=>{
            return p.id===index
        })
        const person= {...this.state.people[personindex]};
        person.Lname=NewLname;
        const people_=[...this.state.people];
        people_[personindex]=person
        //people_.splice(personindex,1);
        this.setState({people:people_});
        //const people_= this.state.people;
        //people_.splice({people})
        //this.setState({people:people_});
    }
    
    render() {

        let practices=null;
        if (this.state.showpractises) {

            practices=  ( this.state.people.map((person)=>{
                return  <div className="myrecords" key={person.id}>
                            <span className="badge badge-primary spanCustomized" > {person.name} </span>
                            <span className="badge badge-primary spanCustomized" > {person.Lname} </span>
                            <span className="badge badge-primary spanCustomized" > {person.age} </span>
                            <span className="badge badge-primary spanCustomized" > {person.job} </span>
                            <button type='text' onClick={()=>this.deleteperson(person.id)} className="btn btn-danger">Delete</button>
                            <input type='text' onChange={(event)=>this.handlerename(event,person.id)}></input>
                        </div>
                if(this.state.people.length<=2){
                }
            })

            );

            // practices=  
            //    ( <div>
            //         <ol>
            //                 <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            //                 <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            //                 <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            //                 <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            //                 <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            //                 <li>When you click a CharComponent, it should be removed from the entered text.</li>
            //         </ol> 
            //         <input type="Text" onChange={this.ChangeHandeler} ></input>
            //         <p className="pstyle">{this.state.Inputtext}</p> 
            //    </div>
            //    )
        }
        return (
            <div>
               <StyledDiv> تماس با ما</StyledDiv>
               <button className="btn btn-danger" onClick={this.handletoggle} >Show Practises!</button>
                {practices}
            </div>
        );
    }
}

export default Contact;
