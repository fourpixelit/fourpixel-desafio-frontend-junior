import React from "react";
import { IRepository } from "../../../../../interfaces/IRepository";
import { Favorites } from "../../../../../lib/favorites";
import { renderClass } from "../../../../../lib/util";
import { DialogRepository } from "../../dialog-repository/DialogRepository";
import "./ListItemRepository.css";

interface IListItemRepositiryProps {
  repository: IRepository;
}

interface IListItemRepositoryState {
  detailDialogVisible: boolean;
}

export class ListItemRepository extends React.Component<
  IListItemRepositiryProps,
  IListItemRepositoryState
> {
  constructor(props: IListItemRepositiryProps) {
    super(props);

    this.state = {
      detailDialogVisible: false,
    };
  }

  render() {
    const isFavorite = Favorites.isFavorite(this.props.repository.full_name);

    return (
      <>
        <article className="list-item-repository">
          <div className="row">
            <div className="col-4">
              <a
                href={this.props.repository.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="name">{this.props.repository.name}</h4>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <small className="description">
                {this.props.repository.description ?? "Sem descrição"}
              </small>
            </div>
          </div>
          <div className="row align-v-center">
            <div className="col-auto">
              <button
                onClick={() => this.setState({ detailDialogVisible: true })}
              >
                Detalhes
              </button>
            </div>
            <div className="col-auto">
              <span
                className={renderClass({
                  active: isFavorite,
                })}
              >
                {isFavorite ? "<3" : "</3"}
              </span>
            </div>
            <div className="col-auto">
              <span>{this.props.repository.language ?? "N/A"}</span>
            </div>
            <div className="col-auto">
              <span>{this.props.repository.stargazers_count} estrelas</span>
            </div>
            <div className="col-auto">
              <span>{this.props.repository.forks_count} forks</span>
            </div>
          </div>
        </article>
        <DialogRepository
          visible={this.state.detailDialogVisible}
          repository={this.props.repository}
          handleCloseClick={() => this.setState({ detailDialogVisible: false })}
        />
      </>
    );
  }
}
