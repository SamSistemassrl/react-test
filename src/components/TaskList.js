import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';
import './TaskList.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';

class TaskList extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(task => (
          <div key={task.id}>
            <span className="itemNameTaskList">{task.name}</span>
            <span className="itemEffortTaskList">{task.effort}h</span>
            <span className={deleteTask(task.id)}>
              <Button
                onClick={() => {
                  this.props.deleteTask(task.id);
                }}
              >
                <DeleteForeverIcon className="deleteButtonTaskList" />
              </Button>
            </span>
            <hr className="taskListItemDivider"></hr>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.taskReducer.tasks
});

const mapDispatchToProps = dispatch => ({
  deleteTask: id => {
    dispatch(deleteTask(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
