import React from "react";
import { IRepository } from "../../../../interfaces/IRepository";
import { Dialog } from "../../../dialog/Dialog";

interface IDialogRepositoryProps {
  repository: IRepository;
  visible: boolean;
  handleCloseClick: React.MouseEventHandler<HTMLButtonElement>;
}
interface IDialogRepositoryState {}

export class DialogRepository extends React.Component<
  IDialogRepositoryProps,
  IDialogRepositoryState
> {
  render() {
    return (
      <Dialog
        title={this.props.repository.full_name}
        size="md"
        visible={this.props.visible}
        handleCloseClick={this.props.handleCloseClick}
      >
        <div className="row">
          <div className="col-auto">
            <a
              href={this.props.repository.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <span>Ver no GitHub</span>
            </a>
            <p>
              Tópicos:{" "}
              <small>
                {this.props.repository.topics.map((topic, index, arr) =>
                  index === arr.length - 1 ? topic : `${topic}, `
                )}
              </small>
            </p>
            <p>Licença: {this.props.repository.license?.name ?? "N/A"}</p>
            <p>
              Criado em:{" "}
              {new Date(this.props.repository.created_at).toLocaleString()}
            </p>
            <p>
              Último atualização:{" "}
              {new Date(this.props.repository.updated_at).toLocaleString()}
            </p>
          </div>
        </div>
      </Dialog>
    );
  }
}
