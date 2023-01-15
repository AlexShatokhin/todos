import { Component } from "react";

import "./listItem.scss"

class ListItem extends Component{

    state = {
        showDelete: false,
        resolution: document.documentElement.clientWidth,
    }

    render(){
        let checkboxClasses = "checkbox";
        let textClasses = "item_title";
        let deleteClasses = "delete_item";

        if(this.props.isComplete){
            checkboxClasses += " complete"
            textClasses += " text_complete" 
        }

        if(!this.state.showDelete && this.state.resolution > 750){
            deleteClasses += " hide"
        }

        return (
            <div 
            onMouseOver={()=>this.setState({showDelete: true})} 
            onMouseLeave={()=>this.setState({showDelete: false})}
            className="list_item">
                <div className="main_elem">

                    <div 
                    onClick = {()=>{
                        this.props.onChangeCheckBox(this.props.id)
                    }} 
                    className={checkboxClasses}></div>

                    <div style = {{fontSize: (this.props.content.length>30 && this.state.resolution < 480)?"13px":null}} className={textClasses}>{this.props.content}</div>
                </div>
                <div
                onClick={()=>this.props.deleteItem(this.props.id)}
                className={deleteClasses}>&#10005;</div>
            </div>
        )
    }
}

export default ListItem