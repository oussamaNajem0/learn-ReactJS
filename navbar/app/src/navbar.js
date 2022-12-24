import "./navbar.css";

export default function Navbar(props){
    return(
        <nav>
            <div className={props.activePage=="home"?"btn active":"btn"} onClick={props.handler("Home")}> Home </div>
            <div className="btn" onClick={props.handler("Article")}> Article </div>
            <div className="btn" onClick={props.handler("Contact")}> Contact </div>
        </nav>  
    );
}

// const navbar= () =>{
//     return (
//         <div >
//             <li className="btn" onClick={}>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/Article">Article</Link>
//             </li>
//             <li>
//                 <Link to="/Contact">Contact</Link>
//             </li>
//         </div>
//     );
// }