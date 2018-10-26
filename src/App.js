import React, { Component } from 'react';
import './App.css';
import initialData from "./initial-data";
import Column from "./Column";

class App extends Component {
  state = initialData;

  render() {
    return (
      <div className="App">
          <p>
            {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

              return <Column key={column.id} column={column} tasks={tasks}/>;
            })
            }
          </p>
      </div>
    );
  }
}

export default App;
