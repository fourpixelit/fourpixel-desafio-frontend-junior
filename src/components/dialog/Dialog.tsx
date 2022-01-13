import React from "react";
import { renderClass } from "../../lib/util";
import "./Dialog.css";

interface IDialogProps {
  handleCloseClick: React.MouseEventHandler<HTMLButtonElement>;
  visible: boolean;
  title: string;
  size: "sm" | "md" | "lg" | "xl";
}

interface IDialogState {}

export class Dialog extends React.Component<IDialogProps, IDialogState> {
  render() {
    if (!this.props.visible) return null;

    return (
      <div
        className={renderClass({
          backdrop: true,
          visible: this.props.visible,
          "fill-width": true,
          "fill-height": true,
        })}
      >
        <div
          className={renderClass({
            modal: true,
            sm: this.props.size === "sm",
            md: this.props.size === "md",
            lg: this.props.size === "lg",
            xl: this.props.size === "xl",
          })}
        >
          <header className="fill-width">
            <div className="row">
              <div className="col-4">
                <h4>{this.props.title}</h4>
              </div>
            </div>
          </header>
          <div className="container">{this.props.children}</div>
          <footer className="fill-width">
            <div className="row align-h-end align-v-center">
              <div className="col-auto">
                <button onClick={this.props.handleCloseClick}>Fechar</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
