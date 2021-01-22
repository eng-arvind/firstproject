import { React } from "react";
const Avatarlist = (props) => {
    return (
        <div className="avatarstyle ma4 dib pa4 grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"></img>
            <h1 className="tc">{props.name}</h1>
            <p className="work">{props.work}</p>
        </div>
    )
}
export default Avatarlist;