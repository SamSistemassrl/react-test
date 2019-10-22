import React from "react";
import {Button, Input} from "@material-ui/core";

class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            name:"",
            effort:""
        };
        this.handleClick = this.handleClick.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEffortChange = this.onEffortChange.bind(this);
        this.hasNameError = this.hasNameError.bind(this);
        this.hasEffortError = this.hasEffortError.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
    };
    hasNameError() {
        let {name} = this.state;
        return !name || name=="";
    };
   
    hasEffortError(){
        let {effort}= this.state;
        return (isNaN(effort)||effort=="");
    }
    isDisabled(){

        return (this.hasNameError()||this.hasEffortError());
    };
    handleClick() {
      let {newTask} =this.props;
      let {name, effort}=this.state; 
       newTask(name, effort);
       this.setState({
           name:"",
           effort:""
       })

    };
    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    };
    onEffortChange(e){
        this.setState({
            effort: e.target.value
        });
    };

    render(){
        let {name, effort} = this.state
        return (
            <div className="CardHeader">
                <label>Task: </label><Input className="Inputs" error={this.hasNameError()} type="text" value={name} onChange={this.onNameChange}></Input>
                <label>Effort: </label><Input className="Inputs" error ={this.hasEffortError()} type="text" value={effort} onChange={this.onEffortChange} ></Input>
                <Button color="primary" variant="outlined" disabled={this.isDisabled()} onClick={this.handleClick}>New Task</Button>
            </div>
        );
    };
};

export {AddTask};