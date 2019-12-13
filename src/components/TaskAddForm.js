import React, { Component } from 'react';
import { addTask } from '../actions';
import { connect } from 'react-redux';
import './TaskAddForm.css';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import Button from '@material-ui/core/Button';

class TaskAddForm extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            let name = event.target.nameInput.value;
            let effort = event.target.effortInput.value;
            this.props.addTask(name, effort);
          }}
        >
          <div className="nameForm">
            <label>Name</label>
            <input type="text" name="nameInput" required maxLength="55" />
          </div>
          <div>
            <label>Effort</label>
            <input type="number" name="effortInput" min="1" max="24" required />
          </div>
          <div>
            <Button type="submit" className="addFormButton">
              <AddBoxOutlinedIcon className="addFormIcon" />
              <span>ADD</span>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTask: (name, effort) => {
    dispatch(addTask(name, effort));
  }
});

export default connect(null, mapDispatchToProps)(TaskAddForm);
