import { Component } from "react";

import ListItem from "../listItem/listItem";

import "./itemsWrapper.scss"

class ItemsWrapper extends Component{

    render(){
        return (
            <div className="items_wrapper">
                {
               this.props.db.map(item => {
                    return <ListItem
                    onChangeCheckBox = {this.props.onChangeCheckBox}
                    deleteItem = {this.props.deleteItem}
                    {...item} 
                    key = {item.id}></ListItem>
                })
                }
            </div>
        )
    }
}

export default ItemsWrapper 