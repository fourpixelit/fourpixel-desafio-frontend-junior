import React from "react";
import { IUser } from "../../interfaces/IUser";
import "./Main.css";
import { TabsHeader } from "./tabs-header/TabsHeader";

const TABS = [
  { tabName: "overiew", title: "Visão geral" },
  { tabName: "repositories", title: "Repositórios" },
];

interface IMainProps {
  user: IUser | undefined;
}

interface IMainState {
  activeTab: string;
}

export class Main extends React.Component<IMainProps, IMainState> {
  constructor(props: IMainProps) {
    super(props);

    this.state = {
      activeTab: "overiew",
    };
  }

  activeTabHandleChange = (tabName: string) => {
    this.setState({ activeTab: tabName });
  };

  render() {
    return (
      <main>
        <TabsHeader
          tabs={TABS}
          activeTab={this.state.activeTab}
          handleChangeTab={this.activeTabHandleChange}
        />
      </main>
    );
  }
}
