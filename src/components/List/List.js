import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { getContactData, openModal, deleteContact} from '../../redux/actions/app-actions';

class List extends React.Component {
    componentDidMount() {
        console.log('hello')
        this.props.getContactList()
    }
    render() {
        const { 
            data,
            openModal,
            deleteContact
        } = this.props;

        return (
            <div className="contact_list">
                <div className="list-wrap">
                    <ul>
                        {data.map((contact, index) => (
                        <Card
                            key={index}
                            id={contact.id}
                            name={contact.name}
                            phone={contact.phone}
                            status={contact.status}
                            onEdit={() => openModal(contact.id)}
                            onDelete={() => deleteContact(contact.id)}
                        />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => state.appReducer;

const mapDispatchToProps = (dispatch) => ({
    getContactList: () => dispatch(getContactData()),
    openModal: (id) => dispatch(openModal(id)),
    deleteContact: (id) => dispatch(deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
