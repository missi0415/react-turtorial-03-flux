import React from "react";
import ReactDOM from "react-dom";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }
  render(){
    const { complete, edit, text}= this.props;
    const icon = complete ? "\u2705" : "\u274c";

    if(edit) {
      return (
        <li>
          <input value={text} focus="focused" />
        </li>
      );
    }
    return (
      <li>
        <span>{text}</span>
        <span>{icon}</span>
      </li>
    );
  }
}