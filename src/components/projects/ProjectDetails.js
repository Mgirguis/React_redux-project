import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";

const ProjectDetails = (props) => {
    const {project, auth} = props;
    if(!auth.uid) return <Redirect to='/signin'/>
    if (project) {
        return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">
                        <span className="card-title">{ project.title}</span>
                        <p>{project.content}</p>
                    </div>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p>14th October, 9 am</p>
                </div>
            </div>
        </div>
        )
    } else
    {
        return (
            <div className="container center">
                <p>Loading project ....</p>
            </div>
        );
    }

};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.fireStore.data.projects;
    const project = projects ? projects[id] : null;
        return{
            project : project,
            auth : state.firebase.auth
    }
} ;
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}]
    )
)(ProjectDetails);
