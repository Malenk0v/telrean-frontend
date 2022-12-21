class Task extends React.Component{

    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);

    }
    
    handleEdit = () =>{
        alert(`Pressed edit button, task = ${this.props.task}`);
    }

    handleRemove(){
        alert(`Pressed remove button, task = ${this.props.task}`);
    }

    render(){
        return(
            <div className="box">
                <div>{this.props.task}</div>
                <button onClick={this.handleEdit} className="btn light">Edit</button>
                <button onClick={this.handleRemove} className="btn red">Remove</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div className="field">
        <Task task="Task1" />
        <Task task="Task2" />
        <Task task="Task3" />
    </div>
    ,document.getElementById(`root`)
);