import React, { Component } from 'react';
import '@atlaskit/css-reset';
import initialData from "./initial-data";
import Column from "./Column";
import { DragDropContext} from 'react-beautiful-dnd';

class App extends Component {
  state = initialData;

  render() {
    return (
      <DragDropContext>
            {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

              return <Column key={column.id} column={column} tasks={tasks}/>;
            })}
      </DragDropContext>
    );
  }
}

export default App;
