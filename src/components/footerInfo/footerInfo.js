import { Component } from "react";

import FilterItems from '../filterItems/filterItems'

import './footerInfo.scss'

class FooterInfo extends Component{

    checkComplete = () => {
        let check = false;
       this.props.db.forEach(item => {
            if(item.isComplete)
                check = true;
       })
       return check 
    }

    render(){
        return (
            <div className="footer">
                <div className="items_count">{this.props.itemsLeft} items left</div>
                <FilterItems changeFilter = {this.props.changeFilter}></FilterItems>
                <div onClick = {()=>this.props.deleteCompleteLists()} className={this.checkComplete() ? "clear" : "clear clear_hide"}>Clear Completed</div>
            </div>
        )
    }
}
export default FooterInfo