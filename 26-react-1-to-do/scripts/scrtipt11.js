class Task extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
        };
        this.idTextArea = React.createRef();
    }
    
    handleEdit = () => {
        this.setState({isEdit: true});
    }
    handleRemove = () => {
        alert(`Pressed remove button, task = ${this.props.task}`);
    }
    hadelSave = () =>{
        alert(this.idTextArea.current.value);
        this.setState({isEdit: false});
    }


    renderEditTask = () =>{
        return(
            <div className="box">
                <textarea ref={this.idTextArea}>{this.props.task}</textarea>
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

class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: ["Task1","Task2","Task3"],
        }
    }

    deleteTask = index =>{
        const tasks = [... this.state.tasks];
        tasks.splice(index, 1);
        this.setState({tasks});
    }
    updateTasks = (index, content) =>{
        const tasks = [... this.state.tasks];
        tasks[index] = content;
        this.setState({tasks});
    }
    addTask = content =>{
        const tasks = [... this.state.tasks, content];
        this.setState({tasks});
    }

    
    render(){
        return(
            <div className="field">
                {this.state.tasks.map(item =><Task task={item}/>)}
            </div>
        )
    }
}

ReactDOM.render(
    <TaskList/>
    ,document.getElementById(`root`)
);