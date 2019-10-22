import React from "react";
import {Button} from "@material-ui/core"


class Task extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
        let {index} = this.props;
        this.props.endTask(index);
    };
    render(){
        let {name, effort} = this.props
        return (
            <div className="TaskContainer">
                <Button className="Button" color="secondary" variant="outlined" onClick={this.handleClick}>End Task</Button>
                <span className="Task"> {name} : {effort + "h"} </span>
            </div>
        )
    }
};

export {Task};