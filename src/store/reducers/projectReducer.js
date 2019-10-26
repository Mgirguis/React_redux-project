
const intState = {
    projects: [
        {id:'1', title:'project 1', content: 'lorem ipsum lrem ipsum'},
        {id:'2', title:'project 2', content: 'lorem ipsum lrem ipsum'},
        {id:'3', title:'project 3', content: 'lorem ipsum lrem ipsum'}
    ]

}
const ProjectReducer = (state = intState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state
        case 'CREATE_PROJECT_ERROR' :
            console.log('create project error', action.err);
            return state
        default:
            return state
    }
};

export default ProjectReducer;

