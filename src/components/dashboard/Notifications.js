import React, {Component} from 'react';
import moment from "moment";

class Notifications extends Component {
    render() {
        const {notifications} = this.props;
        return (
            <div>
                <h4>Notification</h4>
                <div className="notification-section">
                   <div className="card z-depyh-0">
                       <div className="card-content">
                           <span className="card-title">Notification</span>
                           <ul className="notification">
                               {notifications && notifications.map( item =>{
                                   return <li key={item.id}>
                                   <span className="pink-text">{item.user} </span>
                                   <span>{item.content}</span>
                                   <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
                                   </li>
                               })}
                           </ul>
                       </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Notifications;