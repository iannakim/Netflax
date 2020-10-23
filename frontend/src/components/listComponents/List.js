import React from 'react'
import './List.css';
import { withRouter } from 'react-router-dom';

class List extends React.Component {

  state = {
    allItems: this.props.list.add_to_lists
  }


  deleteFromList = (listItemIdFromChild) => {
    fetch(`http://localhost:3000/deleteItem/${listItemIdFromChild}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((deletedObj) => {
      this.deleteItemFromState(deletedObj.id)
    })
  }

  deleteItemFromState = (deletedID) => {
    let copyOfList = this.state.allItems.filter(listObj => {
      return listObj.id !== deletedID
    })
    this.setState({
      allItems: copyOfList
    })
  }


  render() {
    return(
      <div className="my_show_list">
          <h2>{this.props.name}</h2>

          <div className="list_shows">
            {this.state.allItems.map((listItem) => (
              <>
                <div className="show_item">{listItem.show.title}</div>
                <div className="delete_item">
                  <button className="banner_button" onClick={() => {this.deleteFromList(listItem.id)}}>Remove</button>
                </div>
              </>
            ))}
          </div>
          
          
      </div>
    )
  }
}

export default withRouter(List)