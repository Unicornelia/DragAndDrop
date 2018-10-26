import React, {Component} from 'react';

class Column extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.column.title}</h1>
      </div>
    )
  }
}

export default Column;