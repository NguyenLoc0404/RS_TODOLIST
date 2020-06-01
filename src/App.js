import React, { Component } from 'react'
import './App.css';
import Controls from './Components/Controls';
import TaskItems from "./Components/TaskItems";
import ModalPopup from "./Components/ModalPopup";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrWork: [],
      userSelected: {},
      indexItemInArr: '',
      isOpen: true
    };
  }
  // OpenModal = ()=>{
  //   this.setState({
  //     isOpen:true
  //   });
  // }
  addWork = (work) => {
    this.setState({
      ArrWork: [...this.state.ArrWork, work],
    });
  }
  DeleteWork = (indexWork) => {
    const arrayNew = this.state.ArrWork.filter((item, index) => index !== indexWork);
    this.setState({

      ArrWork: [...arrayNew],
    });
  }
  getUser = (workAt, index) => {
    this.setState({
      userSelected: workAt,
      indexItemInArr: index - 1,
      isOpen: false
    });
  }
  resetUser = () => {
    this.setState({
      userSelected: {},
      isOpen: true
    })
  }
  EditWork = (work) => {
    console.log(this.state)
    this.state.ArrWork[this.state.indexItemInArr].NameOfWork = work.NameOfWork;
    this.state.ArrWork[this.state.indexItemInArr].Des = work.Des;
    this.state.ArrWork[this.state.indexItemInArr].priority = work.priority;
    this.state.ArrWork[this.state.indexItemInArr].PeopleMake = work.PeopleMake;
    this.state.ArrWork[this.state.indexItemInArr].Mark = work.Mark;
    this.setState({
      ArrWork: this.state.ArrWork,
      isOpen: true
    });
  }
  render() {
    //console.log(this.state.userSelected);
     console.log(this.state.ArrWork);
    // console.log(this.state.isEdit);
    //console.log(this.state.isOpen);
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            {/* <Controls OpenModal={this.OpenModal} /> */}
            <Controls resetUser={this.resetUser} />
            <TaskItems ArrWork={this.state.ArrWork} DeleteWork={this.DeleteWork} getUser={this.getUser} />
            <ModalPopup
              addWork={this.addWork} userSelected={this.state.userSelected} EditWork={this.EditWork} resetUser={this.resetUser} isOpen={this.state.isOpen}
            />
          </div>
        </div>
      </div>
    )
  }
}
