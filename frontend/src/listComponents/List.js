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
          <h1>{this.props.name}</h1>

          <div className="list_shows">
            {this.state.allItems.map((listItem) => (
              <>
                <div className="item_title">
                  {listItem.show.title}
                </div>

                <div className="item_poster">
                  <img className="poster" src={listItem.show.poster} alt={listItem.show.title}/>
                </div>

                <div className="delete_item">
                  <button className="item_button" onClick={() => {this.deleteFromList(listItem.id)}}>Remove</button>
                </div>
              </>
            ))}
          </div>
          
          
      </div>
    )
  }
}

export default withRouter(List)