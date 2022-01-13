import React from "react";
import { IUser } from "../../../interfaces/IUser";
import "./Aside.css";

interface IAsideProps {
  user: IUser | undefined;
}

interface IAsideState {}

export class Aside extends React.Component<IAsideProps, IAsideState> {
  render() {
    return (
      <aside>
        <div className="row">
          <div className="col-4">
            <img src={this.props.user?.avatar_url ?? ""} alt="avatar" />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <span id="user-name">{this.props.user?.name ?? "Nome"}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <span id="user-login">{this.props.user?.login ?? "Login"}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <a
              href={this.props.user?.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <button id="btn-open-in-github">Abrir no GitHub</button>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <span>{this.props.user?.followers ?? "N/A"} Seguidores</span>
            <span> · </span>
            <span>{this.props.user?.following ?? "N/A"} Seguindo</span>
          </div>
        </div>
      </aside>
    );
  }
}
