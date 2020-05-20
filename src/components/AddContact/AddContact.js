import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/actions/app-actions';

class AddContact extends Component {
    state = {
        name: '',
        phone: '',
        status: false
    }

    handleChangeName = (e) => {
        const name = e.target.value;
        this.setState({ name });
    }

    handleChangePhone = (e) => {
        const phone = e.target.value;
        this.setState({ phone });
    }


    handleAdd = () => {
        this.props.dispatch(addContact(this.state));
        this.setState({  name: '', phone: '' })
    }

    render() {
        return (             
        <div className="add-contact"> 
            <label>Contact </label>
            <input placeholder="Name..." value={this.state.name} onChange={this.handleChangeName} />
            <input placeholder="phone..." value={this.state.phone} onChange={this.handleChangePhone} />
            <button className="add-btn" onClick={this.handleAdd}>Add</button>
        </div>
        );
    }
    }

    export default connect()(AddContact);