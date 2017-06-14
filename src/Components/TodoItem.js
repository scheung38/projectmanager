/**
 * Created by mincheung on 14/06/2017.
 */
import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <li className="Todo">
                <strong>{this.props.todo.title}</strong>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: React.PropTypes.object
}

export default TodoItem;