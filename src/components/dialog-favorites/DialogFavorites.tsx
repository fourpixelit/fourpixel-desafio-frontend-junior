import React from "react";
import { Favorites } from "../../lib/favorites";
import { Dialog } from "../dialog/Dialog";
import "./DialogFavorites.css";

interface IDialogFavoritesProps {
  visible: boolean;
  handleCloseClick: React.MouseEventHandler<HTMLButtonElement>;
}
interface IDialogFavoritesState {}

export class DialogFavorites extends React.Component<
  IDialogFavoritesProps,
  IDialogFavoritesState
> {
  constructor(props: IDialogFavoritesProps) {
    super(props);

    this.state = {};
  }

  render() {
    const favorites = Favorites.retrieve();

    const renderedFavorites = favorites.map((fullName) => (
      <tr key={fullName}>
        <td>{fullName}</td>
        <td>
          <button
            onClick={() => {
              Favorites.remove(fullName);
              this.forceUpdate();
            }}
          >
            {"</3"}
          </button>
        </td>
      </tr>
    ));

    return (
      <Dialog
        title="Favoritos"
        size="md"
        visible={this.props.visible}
        handleCloseClick={this.props.handleCloseClick}
      >
        <div className="row">
          <div className="col-4">
            <table>
              <thead>
                <tr>
                  <th>Owner/Repositório</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>{renderedFavorites}</tbody>
            </table>
          </div>
        </div>
      </Dialog>
    );
  }
}
