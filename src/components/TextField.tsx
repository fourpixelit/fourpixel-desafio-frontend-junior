import React from "react";
import "./TextField.css";

export class TextField extends React.Component<
  {
    value: string;
    placeholder: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  },
  {}
> {
  render() {
    return (
      <input
        className="text-field"
        type="text"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.handleChange}
        onKeyPress={this.props.handleKeyPress}
      />
    );
  }
}
