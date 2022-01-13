import React from "react";
import "./App.css";
import { Api } from "./lib/api";
import { Header } from "./components/header/Header";
import { IUser } from "./interfaces/IUser";
import { Main } from "./components/main/Main";
import { IRepository } from "./interfaces/IRepository";
import { Dialog } from "./components/dialog/Dialog";
import { DialogFavorites } from "./components/dialog-favorites/DialogFavorites";

interface IAppProps {}

interface IAppState {
  search: string;
  user: IUser | undefined;
  repositories: IRepository[] | undefined;
  errorDialogVisible: boolean;
  errorMessage: string;
  favoritesDialogVisible: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      search: "",
      user: undefined,
      repositories: [],
      errorDialogVisible: false,
      errorMessage: "",
      favoritesDialogVisible: false,
    };
  }

  searchHandleChange = (event: { target: { value: string } }) => {
    this.setState({ search: event.target.value });
  };

  searchHandleKeyPress = (event: { key: string }) => {
    if (event.key !== "Enter") return;

    Api.get(`/users/${this.state.search}`)
      .then(({ status, data }) => {
        if (status === 200) {
          const user: IUser = data;

          Api.get(user.repos_url)
            .then(({ status, data }) => {
              if (status === 200) {
                const repositories: IRepository[] = data;

                this.setState({ user, repositories });
              } else {
                this.setState({
                  errorDialogVisible: true,
                  errorMessage: `Ocorreu um erro na requisição: ${status}`,
                });
              }
            })
            .catch((reason) =>
              this.setState({
                errorDialogVisible: true,
                errorMessage: `Ocorreu um erro na requisição: ${reason}`,
              })
            );
        } else {
          this.setState({
            errorDialogVisible: true,
            errorMessage: `Ocorreu um erro na requisição: ${status}`,
          });
        }
      })
      .catch((reason) =>
        this.setState({
          errorDialogVisible: true,
          errorMessage: `Ocorreu um erro na requisição: ${reason}`,
        })
      );
  };

  render() {
    return (
      <div className="fill-width fill-height">
        <DialogFavorites
          visible={this.state.favoritesDialogVisible}
          handleCloseClick={() =>
            this.setState({ favoritesDialogVisible: false })
          }
        />
        <Dialog
          title="Ocorreu um erro"
          visible={this.state.errorDialogVisible}
          size="sm"
          handleCloseClick={() => this.setState({ errorDialogVisible: false })}
        >
          <div className="row">
            <div className="col-4">
              <p>{this.state.errorMessage}</p>
            </div>
          </div>
        </Dialog>
        <Header
          search={this.state.search}
          searchHandleChange={this.searchHandleChange}
          searchHandleKeyPress={this.searchHandleKeyPress}
          favoritesButtonClick={() =>
            this.setState({ favoritesDialogVisible: true })
          }
        />
        <Main user={this.state.user} repositories={this.state.repositories} />
      </div>
    );
  }
}

export default App;
