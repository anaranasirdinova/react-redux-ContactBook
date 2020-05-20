import React, { Component } from 'react';
import {connect}  from 'react-redux';   
import { editContact } from '../../redux/actions/app-actions';


class Modal extends Component {
    state = {
        name: '',
        phone: '',
        id: null
    }

    componentDidMount() {
        this.changeState()
    }

    changeState = () => {
        this.setState({ ...this.props.currentContact })
    }

    handleChangeName = (e) => {
        const name = e.target.value;
        this.setState({ name });
    }

    handleChangePhone = (e) => {
        const phone = e.target.value;
        this.setState({ phone });
    }


    handleSave = () => {
        const { name, phone, id  } = this.state;
        this.props.dispatch(editContact(id, {name, phone}));
        this.setState({  name: '', phone: '' })
    }

    render() {
        const currentContact = this.state;
        return (
            <div className="modal">
                <div className="modal-window">
                    <input  placeholder="Name..." value={currentContact.name} onChange={this.handleChangeName} /> 
                    <input  placeholder="phone..." value={currentContact.phone} onChange={this.handleChangePhone} />
                    <button className="add-btn" onClick={this.handleSave}>Save</button>
                </div>
            </div>
        )   
    }
}

const mapStateToProps = (state) => state.appReducer;

export default connect(mapStateToProps)(Modal);