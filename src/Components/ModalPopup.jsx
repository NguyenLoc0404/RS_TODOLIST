import React, { Component, useState, useEffect } from 'react';
import CheckboxGroup from 'react-checkbox-group'
import _ from "lodash";
export default class ModalPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NameOfWork: '',
            Des: '',
            priority: '',
            PeopleMake: [],
            Mark: [],
            userSelected: {},
            isOpen: true,
        }

    }
    toogle = () => {
        console.log('vao toogle');
        //console.log(e.target.type);
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('vao 2');
            if (!this.state.isOpen) {
                this.props.resetUser();
                this.setState({
                    NameOfWork: '',
                    Des: '',
                    priority: '',
                    PeopleMake: [],
                    Mark: [],
                    isOpen: false,
                    userSelected: {}
                });
            }
        })
    }
    // componentWillReceiveProps(nextProps) {
    //     if(nextProps)
    //     {}
    //     this.setState({
    //         userSelected: nextProps.userSelected,
    //         NameOfWork: nextProps.userSelected.NameOfWork,
    //         Des: nextProps.userSelected.Des,
    //         priority: nextProps.userSelected.priority,
    //         PeopleMake: nextProps.userSelected.PeopleMake,
    //         Mark: nextProps.userSelected.Mark,
    //         isOpen: true,
    //     });
    // }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (!_.isEmpty(nextProps.userSelected) && !_.isEqual(nextProps.userSelected, prevState.userSelected)) {
            console.log('vao day');
            return {
                userSelected: nextProps.userSelected,
                NameOfWork: nextProps.userSelected.NameOfWork,
                Des: nextProps.userSelected.Des,
                priority: nextProps.userSelected.priority,
                PeopleMake: nextProps.userSelected.PeopleMake,
                Mark: nextProps.userSelected.Mark,
                isOpen: true,
            }
        }
        return null;
    }



    memberChange = (newMember) => {
        this.setState({
            PeopleMake: newMember
        });
    }
    memberChange2 = (newMember) => {
        this.setState({
            Mark: newMember
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });


    }
    render() {
        // const Demo = () => {
        //     // Initialize the checked values
        //     const [fruits, setFruits] = useState(['apple', 'watermelon'])

        //     useEffect(() => {
        //         const timer = setTimeout(() => {
        //             setFruits(['apple', 'orange'])
        //         }, 5000)

        //         return () => clearTimeout(timer)
        //     }, [])

        //     return (
        //         <CheckboxGroup name="fruits" value={fruits} onChange={setFruits}>
        //             {(Checkbox) => (
        //                 <>
        //                     <label>
        //                         <Checkbox value="apple" /> Apple
        //             </label>
        //                     <label>
        //                         <Checkbox value="orange" /> Orange
        //             </label>
        //                     <label>
        //                         <Checkbox value="watermelon" /> Watermelon
        //             </label>
        //                 </>
        //             )}
        //         </CheckboxGroup>
        //     )
        // }
        return (
            <form onSubmit={this.onSubmit}>
                <div className="modal fade" id="modalTask" >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content text-left" >
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title" >{this.props.isOpen ? 'Add Task' : 'Edit Task'}</h4>
                                <button type="button" className="close" data-dismiss="modal" onClick={this.toogle}>×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label >Tên công việc:</label>
                                    <input type="text" className="form-control" id="taskName" name='NameOfWork' value={this.state.NameOfWork} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label >Mô tả:</label>
                                    <textarea className="form-control" rows={2} id="description" name='Des' value={this.state.Des} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label >Độ ưu tiên:</label>
                                    <select className="form-control" id="priority" onChange={this.onChange} value={this.state.priority} name='priority'>
                                        <option value={-1}>Vui lòng lựa chọn </option>
                                        <option value={3}>Thấp</option>
                                        <option value={2}>Trung bình</option>
                                        <option value={1}>Cao</option>
                                    </select>
                                </div>
                                <label >Người thực hiện:</label>
                                <br />
                                <CheckboxGroup name="PeopleMake" value={this.state.PeopleMake} onChange={this.memberChange}>
                                    {(Checkbox) => (
                                        <>
                                            <label>
                                                <Checkbox value="user_2" /> Phó Nghĩa Văn
                                            </label>
                                            <label>
                                                <Checkbox value="user_3" /> Nguyễn Tiến Minh Tuấn
                                            </label>
                                            <label>
                                                <Checkbox value="user_4" /> Đặng Trung Hiếu
                                            </label>
                                            <label>
                                                <Checkbox value="user_5" /> Trương Tấn Khải
                                            </label>

                                        </>
                                    )}
                                </CheckboxGroup>
                                <br /><br />
                                <label >Nhãn:</label>
                                <br />
                                <CheckboxGroup name="Mark" value={this.state.Mark} onChange={this.memberChange2}>
                                    {(Checkbox) => (
                                        <>
                                            <label>
                                                <Checkbox value="FrontEnd" /> FrontEnd
                                            </label>
                                            <label>
                                                <Checkbox value="BackEnd" /> BackEnd
                                            </label>
                                            <label>
                                                <Checkbox value="API" /> API
                                            </label>
                                            <label>
                                                <Checkbox value="Issue" /> Issue
                                            </label>
                                        </>
                                    )}
                                </CheckboxGroup>

                            </div>

                            {/* Modal footer */}
                            <div className="modal-footer">
                                {
                                    this.props.isOpen ? <button type="button" className="btn btn-primary" onClick={() => {
                                        this.props.addWork(this.state);
                                        this.toogle();
                                    }}
                                        data-dismiss="modal">Add</button> :
                                        <button type="button" className="btn btn-dark" onClick={() => {
                                            this.props.EditWork(this.state);
                                            this.toogle();
                                        }}
                                            data-dismiss="modal" >Edit</button>


                                }

                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.toogle} >Close</button>

                            </div>
                        </div>
                    </div>
                </div>

            </form>

        )
    }
}
