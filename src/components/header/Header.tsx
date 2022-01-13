import React from "react";
import { TextField } from "../text-field/TextField";
import "./Header.css";

export class Header extends React.Component<
  {
    search: string;
    searchHandleChange: React.ChangeEventHandler<HTMLInputElement>;
    searchHandleKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  },
  {}
> {
  render() {
    return (
      <header>
        <div className="row align-h-end">
          <div className="col-1">
            <TextField
              placeholder="Username"
              value={this.props.search}
              handleChange={this.props.searchHandleChange}
              handleKeyPress={this.props.searchHandleKeyPress}
            />
          </div>
        </div>
      </header>
    );
  }
}
