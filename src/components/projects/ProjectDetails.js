import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">
                        <span className="card-title">Project title - {id}</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus hic necessitatibus officiis soluta tempora! At consequatur cum dignissimos explicabo fuga                            harum molestiae, perferendis placeat porro possimus repudiandae soluta ut veniam?</p>
                    </div>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <p>Posted by X</p>
                    <p>14th October, 9 am</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
