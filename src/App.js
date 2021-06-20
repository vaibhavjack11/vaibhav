// import logo from "./logo.svg";
import React from 'react'
import "./App.css";
import Home from "./Views/Home";
import Getstart from "./GetStart"
import {db,firebase} from "./FireBase"
import Swal from "sweetalert2";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      phone:"",
      subjectForm:"",
      messageForm:"",

      isRequired:false,
    };
  }

   handleSubmit =()=>{
    console.log("done")
    if(!this.handleValidateEmail(this.state.email))
    {
      Swal.fire({
        title: "warning",
        text: "Please Enter Valid Email",
        icon: "warning",
        timer: 3000,
        showCancelButton: 0,
        confirmButtonColor: "#556ee6",
        cancelButtonColor: "#f46a6a",
      });
      this.setState({isRequired:true,})
      }
    else if(!this.handleValidatePhone(this.state.phone)){
      
        Swal.fire({
          title: "warning",
          text: "Please Enter 10 Digit Phone No.",
          icon: "warning",
          timer: 3000,
          showCancelButton: 0,
          confirmButtonColor: "#556ee6",
          cancelButtonColor: "#f46a6a",
        }); 
        this.setState({isRequired:true,})
    }
    else if(this.state.subjectForm===""){
      
      Swal.fire({
        title: "warning",
        text: "Please Enter Subject",
        icon: "warning",
        timer: 3000,
        showCancelButton: 0,
        confirmButtonColor: "#556ee6",
        cancelButtonColor: "#f46a6a",
      }); 
      this.setState({isRequired:true,})
  }
  else if(this.state.messageForm===""){
      
    Swal.fire({
      title: "warning",
      text: "Please Enter Message",
      icon: "warning",
      timer: 3000,
      showCancelButton: 0,
      confirmButtonColor: "#556ee6",
      cancelButtonColor: "#f46a6a",
    }); 
    this.setState({isRequired:true,})
}
    else{
    this.handleSubmitSetting();
    //window.location.reload();
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  handleCancel = () => {
    this.setState({
      email:"",
      phone:"",
      subjectForm:"",
      messageForm:"",
    });
    this.closeOneModal("formtoGetStart")
  }
   handleSubmitSetting = () => {
        db
          .collection("StartingData")
          .add({
            email: this.state.email,
            phone: this.state.phone,
            subject: this.state.subjectForm,
            Message: this.state.messageForm,
            createdAt: new Date(),
          })
          .then((doc) => {
            console.log("out", doc);
            this.handleCancel();
            this.closeOneModal("formtoGetStart")
            Swal.fire({
              title: "Success",
              text: "The Data has Been Updated Successfully.",
              icon: "success",
              timer: 3000,
              showCancelButton: 0,
              confirmButtonColor: "#556ee6",
              cancelButtonColor: "#f46a6a",
            });
          })
          .catch((e) => {
            console.log("error", e);
            alert("Something went wrong")
          })
  };
  handleValidatePhone = (phone) => {
    const expression = /^[6-9]{1}[0-9]{9}$/;
    return expression.test(String(phone));
  };
  handleValidateEmail = (email) => {
    const expression =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLowerCase());
  };


  closeOneModal(modalId) {
    const button = document.getElementById(modalId);
    button.click();
  }




render() {
  return (
    <>
 <Getstart
    {...this.state}
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange}
    handleCancel={this.handleCancel}
  ></Getstart>
  <Home></Home>
    </>
  );
}
}

export default App;
