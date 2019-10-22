import React from "react";

import {AddTask} from "./AddTask";
import {Task} from "./Task";

import {connect} from "react-redux";

import {newTask, endTask} from "../actions/tasks"

class TaskManager extends React.Component {
    constructor(props){
        super(props);
        this.newTask= this.newTask.bind(this);
        this.endTask= this.endTask.bind(this);
    };

    newTask(name, effort){
        this.props.newTask(name, effort);
    };
    endTask(index){
        this.props.endTask(index)
    }

    render(){
        let {tasks} = this.props.tasksReducer;
        return (
            <div className ="Card">
                <AddTask tasks={tasks} newTask = {this.newTask}/>
            {tasks.map((task, i)=>{
                return <Task name={task.name} effort={task.effort} index ={i} endTask={this.endTask} />
            })}
            </div>
        );
    };
};
const mapStateToProps = state => {
    return {
        tasksReducer: state.tasksReducer,

    };
};
const mapDispatchToProps = (dispatch) => ({
    newTask: (name, effort) => {
        newTask(dispatch, name, effort)
    },
    endTask: (index) => {
        endTask(dispatch, index)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager)