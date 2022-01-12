import React from "react";
import { renderClass } from "../../../lib/util";
import "./TabsHeader.css";

interface ITabsHeaderProps {
  tabs: { tabName: string; title: string }[];
  activeTab: string;
  handleChangeTab: (tabName: string) => void;
}

export class TabsHeader extends React.Component<ITabsHeaderProps, {}> {
  render() {
    const tabsRendered = this.props.tabs.map((tab) => {
      return (
        <li
          key={tab.tabName}
          className={renderClass({
            active: tab.tabName === this.props.activeTab,
          })}
        >
          <button onClick={() => this.props.handleChangeTab(tab.tabName)}>
            {tab.title}
          </button>
        </li>
      );
    });

    return (
      <nav>
        <ul>{tabsRendered}</ul>
      </nav>
    );
  }
}
