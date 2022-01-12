import React from "react";
import { TextField } from "../TextField";
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
        <TextField
          placeholder="Buscar"
          value={this.props.search}
          handleChange={this.props.searchHandleChange}
          handleKeyPress={this.props.searchHandleKeyPress}
        />
      </header>
    );
  }
}
