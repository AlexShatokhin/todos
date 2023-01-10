import { Component } from "react";

import "./filterItems.scss"

class FilterItems extends Component{
    state = {
        fliterButtons: [
            {content: "All" , isActive: true, id: 0},
            {content: "Active" , isActive: false, id: 1},
            {content: "Completed" , isActive: false, id: 2}
        ]
    }



    changeFilter = (filter) => {
        this.props.changeFilter(filter)
        const newArr = this.state.fliterButtons.map(item => {
            if(item.content === filter){
                item.isActive = true
            } else {
                item.isActive = false
            }
            return item
        })

        this.setState({
            fliterButtons: newArr
        })
    }

    render(){
        return (
            <div className="filter_buttons">
                {
                this.state.fliterButtons.map(item => {
                    return <div key = {item.id} onClick = {()=>this.changeFilter(item.content)} className={item.isActive?"filter_button filter_active":"filter_button"}>{item.content}</div>
                })
                }

                {/* <div onClick = {()=>this.changeFilter("All")} className="filter_button filter_active">All</div>
                <div onClick = {()=>this.props.changeFilter("Active")} className="filter_button">Active</div>
                <div onClick = {()=>this.props.changeFilter("Completed")} className="filter_button">Completed</div> */}
            </div>
        )
    }
}

export  default FilterItems