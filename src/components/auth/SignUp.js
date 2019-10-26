import React, {Component} from 'react';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    changeHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHandle = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.submitHandle} className="white">
                    <h5 className="grey-text text-darken-3">Sign up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" onChange={this.changeHandle}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" id="lastName" onChange={this.changeHandle}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.changeHandle}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.changeHandle}/>
                    </div>
                    <div className="input-field">
                        <button className="btn green lighten-2 z-depth-0 ">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
