import {React,Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
//function component
const Demo = (props) =>{
    return <div className="maindiv_style">
             <h1>Hello world {props.name}</h1>
             <p> Welcome to my Page</p>
            </div>
}
//class component
// class Demo extends Component{
//     render(){
//         return <div className="maindiv_style">
//         <h1>Hello world {this.props.name}</h1>
//         <p> Welcome to my Page</p>
//         </div>
        
//     }
// }
export default Demo;