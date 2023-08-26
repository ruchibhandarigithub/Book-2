import { useState } from "react";
import Group from "../images/Group.png";
import KeazoNBOOKS from "../images/KeazoNBOOKS.png";
import heart from "../images/heart.png";
import notifications from "../images/notifications.png";
import regular from "../images/regular.png";
import profile from "../images/profile.png";
const Navbar = ({handleSearch})=>{
    const [search,setSearch] = useState('');
    const handle= () =>{
        handleSearch(search);
    };
     return ( 
        <div className="navbar">

            <div className="logo">
                   <img src={Group}  alt="logo" />
                   <img src={KeazoNBOOKS} alt="keazoNBOOKS" />
            </div>
            <div className="search">
                <input type="text"placeholder='Search For the book you want to read it now ' value={search} onChange={(e)=> setSearch(e.target.value)} place="Search for the book you want to read it now ..shelock and holes "/>
                <button onClick={handle}>Search</button>
            </div>
            <div className="nav-icons">
                   <img src={heart}  alt="logo" />
                   <img src={regular} alt="keazoNBOOKS" />
                   <img src={notifications}  alt="logo" />
                   <img src={profile} alt="keazoNBOOKS" />
            </div>

        </div>
     );
}
export default Navbar;