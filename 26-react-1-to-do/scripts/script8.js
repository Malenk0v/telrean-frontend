class Task extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
        }
    }
    
    handleEdit = () => {
        this.setState({isEdit: true});
    }
    handleRemove = () => {
        alert(`Pressed remove button, task = ${this.props.task}`);
    }
    hadelSave = () =>{
        this.setState({isEdit: false});
    }


    renderEditTask = () =>{
        return(
            <div className="box">
                <textarea>{this.props.task}</textarea>
                <button onClick={this.hadelSave} className="btn success">Save</button>
            </div>
        )
    }
    renderViewTask = () =>{
        return(
            <div className="box">
                <div>{this.props.task}</div>
                <button onClick={this.handleEdit} className="btn light">Edit</button>
                <button onClick={this.handleRemove} className="btn red">Remove</button>
            </div>
        )
    }
    
    render(){
        return this.state.isEdit ? this.renderEditTask():this.renderViewTask();
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