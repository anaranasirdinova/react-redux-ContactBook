import React from 'react';

class Card extends React.Component {
    render(){
        return (
            <div className="card">
                <li className="li-card">
                    <div>Name: {this.props.name}</div>
                    <div>Phone: {this.props.phone}</div>
                    <button  className="btn-edit" onClick={this.props.onEdit}>Edit</button>
                    <button className="btn-delete" onClick={this.props.onDelete}>Delete</button>
                </li>
            </div>
        );
    }
};

export default Card;