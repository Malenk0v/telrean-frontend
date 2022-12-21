class Group extends React.Component{
    render(){
        const subtittle = `TelRan programm`
        return (
        <div>
            <h1>Java 47</h1>
            <h4>{subtittle + ` ` + Math.floor((Math.random()*10))}</h4>
        </div>
        );
    }
}



ReactDOM.render(
    <div>
        <Group/>
        <Group/>
        <Group/>
    </div>, 
    document.getElementById(`root`)
    );