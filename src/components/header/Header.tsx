import React from "react";
import { TextField } from "../text-field/TextField";
import "./Header.css";

interface IHeaderProps {
  search: string;
  searchHandleChange: React.ChangeEventHandler<HTMLInputElement>;
  searchHandleKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  favoritesButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

interface IHeaderState {}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    return (
      <header>
        <div className="row align-h-between">
          <div className="col-auto">
            <button onClick={this.props.favoritesButtonClick}>Favoritos</button>
          </div>
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
