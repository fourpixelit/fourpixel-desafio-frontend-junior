import React from "react";
import { IRepository } from "../../../../interfaces/IRepository";
import { PopularRepository } from "./popular-repository/PopularRepository";

interface ITabOverviewProps {
  repositories: IRepository[] | undefined;
}

interface ITabOverviewState {}

export class TabOverview extends React.Component<
  ITabOverviewProps,
  ITabOverviewState
> {
  render() {
    let popularRepositories =
      this.props.repositories
        ?.slice()
        ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
        ?.slice(0, 4) ?? [];

    const renderedRepositories = popularRepositories.map((repository) => {
      return (
        <div key={repository.id} className="col-2">
          <PopularRepository repository={repository} />
        </div>
      );
    });

    return (
      <section>
        <div className="row">
          <div className="col-4">
            <label>Repositórios populares</label>
          </div>
        </div>
        <div className="row">{renderedRepositories}</div>
      </section>
    );
  }
}
