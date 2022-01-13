import React from "react";
import { IRepository } from "../../../interfaces/IRepository";
import { IUser } from "../../../interfaces/IUser";
import { TabOverview } from "./tab-overview/TabOverview";
import { TabRepositories } from "./tab-repositories/TabRepositories";

interface ITabsContentProps {
  user: IUser | undefined;
  activeTab: string;
  repositories: IRepository[] | undefined;
}

interface ITabsContentState {}

export class TabsContent extends React.Component<
  ITabsContentProps,
  ITabsContentState
> {
  render() {
    const currentTab =
      {
        overview: <TabOverview repositories={this.props.repositories} />,
        repositories: (
          <TabRepositories repositories={this.props.repositories} />
        ),
      }[this.props.activeTab] || null;

    return currentTab;
  }
}
