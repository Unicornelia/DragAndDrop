import React, {Component} from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 2px;
padding: 8px;
margin-bottom: 8px;
`;

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} >
      <Container>{this.props.task.content}</Container>
      </Draggable>
    )
  }
}

export default Task;