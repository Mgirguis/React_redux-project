import React, {Component} from 'react';
import { connect } from 'react-redux'
import {createProject} from "../../store/actions/projectAction";
import {Redirect} from "react-router-dom";

class CreateProject extends Component {
    state = {
      title: '',
        content: ''
    };
    changeHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    submitHandle = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state);
        this.props.history.push('/');
    };
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className='container'>
                <form onSubmit={this.submitHandle} className="white">
                    <h5 className="grey-text text-darken-3">Create project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.changeHandle}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" cols="30" rows="10" className='materialize-textarea' onChange={this.changeHandle}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn grey lighten-1 z-depth-0 ">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }

};
const mapDispatch = dispatch => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
};
export default connect(mapStateToProps, mapDispatch)(CreateProject);
