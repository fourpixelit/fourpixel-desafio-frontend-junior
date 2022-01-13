import React from "react";
import { IRepository } from "../../interfaces/IRepository";
import { IUser } from "../../interfaces/IUser";
import { Aside } from "./aside/Aside";
import "./Main.css";
import { TabsContent } from "./tabs-content/TabsContent";
import { TabsHeader } from "./tabs-header/TabsHeader";

const TABS = [
  { tabName: "overview", title: "Visão geral" },
  { tabName: "repositories", title: "Repositórios" },
];

interface IMainProps {
  user: IUser | undefined;
  repositories: IRepository[] | undefined;
}

interface IMainState {
  activeTab: string;
}

export class Main extends React.Component<IMainProps, IMainState> {
  constructor(props: IMainProps) {
    super(props);

    this.state = {
      activeTab: "overview",
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
        <div className="container">
          <div className="row">
            <div className="col-1">
              <Aside user={this.props.user} />
            </div>
            <div className="col-3">
              <TabsContent
                user={this.props.user}
                activeTab={this.state.activeTab}
                repositories={this.props.repositories}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
