import "./Header.css";
export default function header({ count, markAll }) {
return(
    <section className="header"> 
      <h2>Notifications <div><span>{count}</span></div></h2> 
      <span className="mark-all" onClick={ ()=> markAll()}>Mark all as read</span>
    </section>
)
}
