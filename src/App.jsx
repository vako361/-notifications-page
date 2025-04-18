import data from "./data.json"
import { useState } from "react"
import './App.css'
import Notification from "./components/notification/Notification"
import Header from "./components/header/header"
const count = data.filter((item) => !item.isRead).length; // Ensure count is defined within the component
function App() {
 

  const [notification, setNotification] = useState(data)
  const markAll = () => {
    const updatedNotification = notification.map((item) => ({
      ...item,
      isRead: true,
    }));
    setNotification(updatedNotification);
  };
  const count = notification.filter((item) => !item.isRead).length; // Ensure count is defined within the component
  const updateValue = (id) => { 
    const updatedNotification = notification.map((item) => {
      if (item.id === id) {
        return { ...item, isRead: true }
      }
      return item
    })
 
    setNotification(updatedNotification)
      
  }
  return (
    <>

    <main>
     <Header count={count} markAll={markAll} />
      {notification.map((notification) => {
        return(
         <Notification key={notification.id} notification={notification} updateValue={updateValue} />
        )
      } )}
    </main>
    </>
  )
}

export default App
