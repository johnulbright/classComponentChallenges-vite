import React from "react";
import { Form, Input, Label, Button } from "reactstrap";

export default class ToDoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], newTask: "" };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    
  }

  addTask= (e) => {
    e.preventDefault();
    if(this.state.newTask!=''){
        this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: "",
    });
}
  };

  removeTask=(e,item)=>{
    e.preventDefault();
    let index=this.state.tasks.indexOf(item);
    let removedArray=this.state.tasks
    removedArray.splice(index,1);
    this.setState({tasks:removedArray})
  }


  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.addTask(e)}>
          <Input
            value={this.state.newTask}
            onChange={(e) => this.setState({ newTask: e.target.value })}
          >
            <Label>What do you need to do?</Label>
          </Input>
          <Button type="submit">Add task</Button>
        </Form>
        <TaskList removeTask={this.removeTask} tasks={this.state.tasks} />
      </div>
    );
  }
}

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Your tasks are:
          {this.props.tasks?.map((task) => {
            return (<div>
                <Task removeTask={this.props.removeTask} task={task}/>
                </div>
                )
          })}
      </div>
    );
  }
}

const Task = (props)=>{
  console.log('task props',props);
  return(
    <div>
      <h4>{props.task}</h4>
      <Button onClick={(e)=>props.removeTask(e,props.task)}>Done!</Button>
    </div>
  )
}