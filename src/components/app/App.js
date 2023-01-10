import { Component } from 'react';

import AddItem from '../addItem/addItem';
import ItemsWrapper from '../itemsWrapper/itemsWrapper';
import FooterInfo from '../footerInfo/footerInfo';

import './App.scss';


class App extends Component{
	state = {
        listItemsDB: !localStorage.getItem("itemsDB")?[] : JSON.parse(localStorage.getItem("itemsDB")),
		idCopy: !localStorage.getItem("id")?0 : +localStorage.getItem("id")+1,
		filter: ""
    }
    onChangeCheckBox = (id) => {
        const newArr = this.state.listItemsDB.map((item) => {
            if(item.id == id){
                item.isComplete = !item.isComplete
            }
            return item;
        })
        this.setState({
            listItemsDB: newArr
        })
		localStorage.setItem("itemsDB", JSON.stringify(newArr))
    }

	addListItem = (text) => {
		const newItem = {
			content: text,
			isComplete: false,
			id: this.state.idCopy+1
		};
		const newArr = this.state.listItemsDB;
		newArr.push(newItem)

		this.setState({
			listItemsDB: newArr,
			idCopy: this.state.idCopy + 1
		})
		localStorage.setItem("itemsDB", JSON.stringify(newArr))
		localStorage.setItem("id", this.state.idCopy)
	}

	deleteListItem = (id) => {
		const newArr = this.state.listItemsDB.filter(item => item.id != id)
		this.setState({
			listItemsDB: newArr
		})
		localStorage.setItem("itemsDB", JSON.stringify(newArr))
	}

	deleteCompleteLists = () => {
		const newArr = this.state.listItemsDB.filter(item => !item.isComplete)
		
		this.setState({
			listItemsDB: newArr
		})
		localStorage.setItem("itemsDB", JSON.stringify(newArr))
	}

	changeFilter = (filter) => {
		this.setState({filter})
	}

	filterItems = (filter) => {
		let newArr;
		switch(filter){
			case "Active":
				newArr = this.state.listItemsDB.filter(item => !item.isComplete)
				break;
			case "Completed":
				newArr = this.state.listItemsDB.filter(item => item.isComplete);
				break;
			default:
				newArr = this.state.listItemsDB;
				break;
		}
		return newArr;

	}

	render(){
		const itemCount = this.state.listItemsDB.filter(item => !item.isComplete).length;
		const visibleDataBase = this.filterItems(this.state.filter);
		return (
			<section className="main">
				<div className="title">todos</div>
				<div className="content">
					<AddItem addListItem = {this.addListItem}></AddItem>	

					<ItemsWrapper 
					onChangeCheckBox = {this.onChangeCheckBox}
					db = {visibleDataBase}
					deleteItem = {this.deleteListItem}></ItemsWrapper>	

					<FooterInfo 
					changeFilter = {this.changeFilter}
					deleteCompleteLists = {this.deleteCompleteLists}
					itemsLeft = {itemCount} 
					db = {this.state.listItemsDB} ></FooterInfo>

				</div>
			</section>
		)
	}
}

export default App;
