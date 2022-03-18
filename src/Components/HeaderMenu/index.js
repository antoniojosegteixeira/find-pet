import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser, logout } from "../../Redux/Slices/User/userSlice";
import { useDispatch } from "react-redux";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function HeaderMenu() {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ "& i": { color: "rgb(255, 170, 0)" } }}
      >
        <i className="fas fa-bars"></i>
      </IconButton>
      {user.token ? (
        <Menu
          id="logged-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/perfil">
            Perfil
          </MenuItem>
          <MenuItem onClick={handleLogout}>Sair</MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/login">
            Entrar
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/registrar">
            Registrar
          </MenuItem>
        </Menu>
      )}
    </div>
  );
}
