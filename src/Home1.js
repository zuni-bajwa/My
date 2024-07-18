import React from "react";
import './Login.css'
function Home1() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
          
            <button onClick={handleClick} className="button">Logout</button>
        </>
    )
}
export default Home1;