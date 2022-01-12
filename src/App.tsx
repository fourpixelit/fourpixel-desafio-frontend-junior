import React from "react";
import "./App.css";
import { Api } from "./lib/api";
import { Header } from "./components/header/Header";
import { IUser } from "./interfaces/IUser";

class App extends React.Component<
  {},
  { search: string; user: IUser | undefined }
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      search: "",
      user: undefined,
    };
  }

  searchHandleChange = (event: { target: { value: string } }) => {
    this.setState({ search: event.target.value });
  };

  searchHandleKeyPress = (event: { key: string }) => {
    if (event.key !== "Enter") return;

    console.log("buscar: " + this.state.search);
    Api.get(`/users/${this.state.search}`).then(({ status, data }) => {
      if (status === 200) this.setState({ user: data });
      else console.error(status);
    });
  };

  render() {
    return (
      <div className="fill-width fill-height">
        <Header
          search={this.state.search}
          searchHandleChange={this.searchHandleChange}
          searchHandleKeyPress={this.searchHandleKeyPress}
        />
      </div>
    );
  }
}

export default App;
