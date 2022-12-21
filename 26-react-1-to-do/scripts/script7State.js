class Check extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked: false,
        }
    }

    handleCheckBoxChange = () =>{
       this.setState({
        isChecked: !this.state.isChecked,
       })
    }
    
    render(){
        let message = this.state.isChecked ?  `checked` : `unchecked`;
        return(
            <div>
                <input onChange={this.handleCheckBoxChange} type="checkbox" defaultChecked={this.state.isChecked}/>
                <p>Checkbox {message}</p>
            </div>
        )
    }
} 

ReactDOM.render(
    <div>
        <Check/>
    </div>
    , document.getElementById(`root`)
    )
