import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useContext } from "react"; 
import { useNavigate, Link  } from "react-router";
import { AuthContext } from "../../contexts/authContext";


const Header = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="site-header">
    <div className="left-section">
      <Link to="/" className="home-link">Home</Link>
      <nav className="nav-links">
        {context.isAuthenticated ? (
          <>
            <Link to="/movies/discover">Movies</Link>
            <Link to="/profile">Profile</Link>
             <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
               <Link to="/movies/favorites">Favorites</Link>
                <Link to="/movies/now_playing">Now Playing</Link>
                 <Link to="/movies/popular">Popular</Link>
                  <Link to="/Movies/top_rated">Top Rated</Link>
                   <Link to="/movies/upcoming">Upcoming</Link>
                    <Link to="/movies/550/similar">Similar</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
      </div>
      <div>
        {context.isAuthenticated ? (
          <>
            <span>Welcome {context.userName}! </span> 
            <button onClick={() => context.signout()}>Sign out</button>
          </>
        ) : (
          <>
            <span>You are not logged in </span> 
            <button onClick={() => navigate("/login")}>Login</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

