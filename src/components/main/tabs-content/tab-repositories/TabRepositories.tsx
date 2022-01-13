import React from "react";
import { IRepository } from "../../../../interfaces/IRepository";
import { TextField } from "../../../text-field/TextField";
import { ListItemRepository } from "./list-item-repository/ListItemRepository";

interface ITabRepositoriesProps {
  repositories: IRepository[] | undefined;
}

interface ITabRepositoriesState {
  filter: string;
}

export class TabRepositories extends React.Component<
  ITabRepositoriesProps,
  ITabRepositoriesState
> {
  constructor(props: ITabRepositoriesProps) {
    super(props);

    this.state = {
      filter: "",
    };
  }

  filterHandleChange = (event: { target: { value: string } }) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const allRepositories =
      this.props.repositories
        ?.slice()
        ?.filter((repository) =>
          repository.name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase())
        )
        ?.sort((a, b) => a.name.localeCompare(b.name)) ?? [];

    const renderedRepositories = allRepositories.map((repository) => {
      return (
        <div key={repository.id} className="col-4">
          <ListItemRepository repository={repository} />
        </div>
      );
    });

    return (
      <section>
        <div className="row align-h-end">
          <div className="col-2">
            <TextField
              placeholder="Filtrar"
              value={this.state.filter}
              handleChange={this.filterHandleChange}
              handleKeyPress={undefined}
            />
          </div>
        </div>
        <div className="row">{renderedRepositories}</div>
      </section>
    );
  }
}
