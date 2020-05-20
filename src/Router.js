import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AddContact  from './components/AddContact/AddContact';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import Modal from './components/Modal/Modal';

const All = () => (
    <>
        <AddContact />
        <List />
    </>
)

const Router = (props) => {
    return (
        <BrowserRouter>
            {props.isEdit && <Modal />}
            <NavBar />
            <Switch> 
                <Route path="/" exact component={ List} />
                <Route path="/add" component={ AddContact } />
                <Route path="/all" component={ All } />
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = state=> state.appReducer
export default connect(mapStateToProps) (Router);