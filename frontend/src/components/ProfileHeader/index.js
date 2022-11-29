import React from "react";
import { CgProfile } from "react-icons/cg";
import themes from "../../styles/themes";
import "./styles.css";

const ProfileHeader = ({ username }) => {
  return (
    <div className="containerProfile">
      <CgProfile size={30} color={themes.COLORS.white}></CgProfile>
      <div className="welcomeProfile">
        <p className="welcome">Welcome,</p>
        <p className="username">{username.split(" ")[0]}</p>
      </div>
      <p className="filters">Category</p>
      <p className="filters">Brands</p>
      <p className="filters">Contact</p>
    </div>
  );
};

export default ProfileHeader;
