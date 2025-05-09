import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { getAuth , onAuthStateChanged , signOut} from "firebase/auth";
import {app} from '../../firebase'
import { UserRound } from 'lucide-react';

const auth = getAuth(app)

function Navbar() {

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }
      else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  },[])

  const handleLogout = () => {
    signOut(auth)
    .then(()=>{
      setUser(null)
      setMenuOpen(false)
    })
    .catch((error)=>{
      console.log("Error signing out: ", error)
    })
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }


  return (
    <header className="header-container">
      <nav className="nav-container">
        <NavLink className="nav-logo">
          StudentSite
        </NavLink> 

        <div className="button">

        {user ? (
            <div className="user-icon-container">
              <UserRound onClick={toggleMenu} className="user-icon" />

              {menuOpen && (
                <div className="dropdown-menu">
                  <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/auth" className="login-but">Login</NavLink>
          )}


          
        </div>
      </nav>
    </header>
  );
}

export default Navbar; 
