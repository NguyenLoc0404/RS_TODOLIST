import React, { Component } from 'react'
export default class DanhSachTask extends Component {
    renderMark = () => {
        return this.props.Mark.map((item, index) => {
            if (item === 'FrontEnd') {
                console.log('FrontEnd');
                return <i className="fa fa-circle mr-2" style={{ color: '#389E0D' }} key={index} />
            }
            if (item === 'BackEnd') {
                console.log('Backend');
                return <i className="fa fa-circle mr-2" style={{ color: '#722ED1' }} key={index} />
            }
            if (item === 'API') {
                console.log('API');
                return <i className="fa fa-circle mr-2" style={{ color: '#13C2C2' }} key={index} />
            }
            if (item === 'Issue') {
                console.log('Issue');
                return <i className="fa fa-circle mr-2" style={{ color: '#CF1322' }} key={index} />
            }
        })
    }

    renderImage = () => {
        //console.log(this.props.PeopleMake);
        return this.props.PeopleMake.map((item, index) => {
            if (item === 'user_2')
                return <img src={require('./../../img/nghia.jpg')} className="user" alt="error" key={index} />
            if (item === 'user_3')
                return <img src={require('./../../img/tuan.jpg')} className="user" alt="error" key={index} />
            if (item === 'user_4')
                return <img src={require('./../../img/hieu.jpg')} className="user" alt="error" key={index} />
            if (item === 'user_5')
                return <img src={require('./../../img/khai.jpg')} className="user" alt="error" key={index} />
        })
    }

    render() {
        //console.log(this.props.userSelected);
        return (

            <tbody>
                <tr>
                    <td className="text-center">{this.props.index}</td>
                    <td className="text-center">{this.props.NameOfWork}</td>
                    <td className="text-center">
                        {this.renderMark()}
                    </td>
                    <td className="text-danger font-weight-bold text-center">{
                        (this.props.priority == 3 ? 'Thấp' : (this.props.priority == 2 ? 'Trung bình' : (this.props.priority == -1 ? 'Vui lòng lựa chọn' : 'Cao')))
                    }</td>
                    <td className="text-center">
                        {this.renderImage()}
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#modalTask" onClick={() => this.props.getUser(this.props.item, this.props.index)}>Sửa</button>
                        {/* <button type="button" className="btn btn-outline-success">Xong</button> */}
                        <button type="button" className="btn btn-outline-danger" onClick={() => this.props.DeleteWork(this.props.index - 1)}>Xóa</button>
                    </td>
                    <td className="text-center">
                        <i className="fa fa-check-square-o mr-2" />
                    </td>
                </tr>
            </tbody>
        )
    }
}
