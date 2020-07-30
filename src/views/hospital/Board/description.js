import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DescriptionRow extends Component {

  constructor(props) {
      super(props);
      this.state = {board: []};
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.patient}
          </td>
          <td>
            {this.props.obj.createDate}
          </td>
          <td>
            {this.props.obj.doctor}
          </td>
          <td>
            {this.props.obj.disease}
          </td>
        </tr>
    );
  }
}

export default DescriptionRow;