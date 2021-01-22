import React from "react";
import './Demo.css';
import 'tachyons';
import  Avatarlist from './Avatarlist';
const Avatar = () => {
    return (
        <div>
        <h1 className="tc">Project - Automated Parking System</h1>
        <div className="mainstyle ">
        <Avatarlist id="1" name="Arvind Vish" work="Frontend" />
        <Avatarlist  id="1" name="Akshay" work="Presentation"/>
        <Avatarlist id="1" name="Arshad A" work="Backend"/>
        <Avatarlist id="1" name="Deepak Jha"work="Database"/>
        </div>
        </div>
    )
}
export default Avatar;