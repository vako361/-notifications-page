import data from "./data.json"
import { useState } from "react"
import './App.css'

function App() {
  const [notification, setNotification] = useState(data)

  return (
    <>
    <section className="header"> 
      <h2>Notifications <span>3</span></h2> 
      <span className="mark-all">Mark all as read</span>
    </section>
    <main>
      {notification.map((notification) => {
        return(
        <div className="" key={notification.id}>
         <img src={notification.profilePic}/>
         <span>{notification.username}</span>
         <span>{notification.action}</span>
         {notification.groupName ? <span>{notification.groupName}</span>:null}
         {notification.post ? <span>{notification.post}</span>: null}
         {notification.userPicture ? <img src={notification.userPicture}/>: null}
        </div>)
      } )}
    </main>
    </>
  )
}

export default App
