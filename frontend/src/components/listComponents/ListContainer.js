import React from 'react'
import List from '../listComponents/List.js'
import { withRouter } from 'react-router-dom';

class ListContainer extends React.Component {


  

  render(){
    return(
      <div className="Home">
        <List 
            name={this.props.list.name}
            list={this.props.list} 
            // deleteFromList={this.props.deleteFromList}
        />
      </div>
    )
  }
}

export default withRouter(ListContainer)