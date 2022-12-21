// class Stydent extends React.Component{
//     render(){
//         return  (
//             <div>
//                 <h2>name: {this.props.name}</h2>
//                 <h3>age: {this.props.age||`unknown`}</h3>
//             </div>
//         );
//     }
// } 

function Stydent(props){
    return(
    <div>
        <h2>name: {props.name}</h2>
        <h3>age: {props.age||`unknown`}</h3>
    </div>);  
}

ReactDOM.render(
    <div>
        <Stydent name='Peter' age='21'/>
        <Stydent name='Mary'/>
        <Stydent name='Tigran' age='25'/>
    </div>
    , document.getElementById(`root`)
);