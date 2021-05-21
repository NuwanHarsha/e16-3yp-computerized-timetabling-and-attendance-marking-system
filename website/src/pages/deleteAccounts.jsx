import React, { Component } from 'react';
import NavBar from '../components/navbar'
import DeleteCard from '../components/deleteCard'
import '../css/deleteAccounts.css'
import bgImage from '../images/bg4.jpg'
import Footer from '../components/footer'

class DeleteAccounts extends Component {
    state = {  }

    constructor(){
        super();
        this.state = {
            f1 : '',
            f2 : '',
            f3 : '',
            f4 : ''
        }
    }

    changeHandler = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});

    }

    sendReq = () =>{
        //sent http request using state object
        console.log(this.state)
    }

    render() { 
        return ( 
            <React.Fragment>
            <img src={bgImage} className="homeloginImg"></img>
            <NavBar pageName="Delete Accounts" />
			<div className="delAcc-outer">
            <div className="daCardPanel">
                <DeleteCard f="f1" name="Registration Number :" cardName="Student Account" oc={this.changeHandler} sr={this.sendReq}></DeleteCard>
                <DeleteCard f="f2" name="Lecturer/Admin Id :" cardName="Non-Student Account" oc={this.changeHandler} sr={this.sendReq}></DeleteCard>
                <DeleteCard f="f3" name="Group Id :" cardName="Student Group" oc={this.changeHandler} sr={this.sendReq}></DeleteCard>
                <DeleteCard f="f4" name="Batch Prefix :" cardName="Student Batch" oc={this.changeHandler} sr={this.sendReq}></DeleteCard>
            </div>
			</div>
            
          <Footer/>
            
            </React.Fragment>
            
         );
    }
}
 
export default DeleteAccounts;