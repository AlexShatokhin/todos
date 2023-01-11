import { Component } from "react"

import "./addItem.scss"


class AddItem extends Component{

    state = {
        value: ""
    }

    changeValue = (value) => {
        if(value.length<35)
            this.setState({value})
    }

    addItem = (e) => {
        e.preventDefault();
        console.log(e.target);
        if(e.target.classList.contains("submit_item") && this.state.value.trim().length > 0){
            this.props.addListItem(this.state.value)
            this.changeValue("")
        }
    }

    render(){
        return (
            <form onClick={(e)=>this.addItem(e)} action="#" className="add_item_form">
                <input value = {this.state.value}
                onChange = {(e) => this.changeValue(e.target.value)}
                className="add_item_input" type="text" placeholder = "What needs to be done?"/>
                <button className="submit_item">Submit</button>
            </form>
        )
    }
}

export default AddItem