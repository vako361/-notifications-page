import "./Notification.css";
export default function Notification({ notification, updateValue }) {
    return(
        <div className="sections" onClick={() => updateValue(notification.id)} key={notification.id}>
        <img src={notification.profilePic}/>

        <div className="username-time-wrapper">
      <span className="username">{notification.username}</span>
       <span className="time">{notification.time}</span>
      </div>

        <div>
        <span className="action">{notification.action}</span>

       {notification.groupName ? <span className="group-name">{notification.groupName}</span> : null}
       </div>

        {notification.post ? <span className="post">{notification.post}</span>: null}

        {notification.userPicture ? <img className="userpic" src={notification.userPicture}/>: null}
        
        {!notification.isRead ? <div className="circle"></div>: null}
         </div>
    )
}