import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

import { TabsContainer } from "./containers/tabs-container";
import { Tabs } from "./components/tabs";
import { history } from ".";

const tabsList = [
  ["all", "Все", <LoremIpsum p={3} />],
  ["categories", "Категории", <LoremIpsum p={3} />],
  ["my", "Мои", <LoremIpsum p={3} />],
  ["edit-mode", "Режим редактирования", <LoremIpsum p={3} />]
];

export const App = () => (
  <TabsContainer location={history.location} activeTabKey="all" withparams>
    {props => (
      <Tabs>
        <Tabs.Header>
          {tabsList.map(([key, title]) => (
            <Tabs.Tab key={key} tabKey={key} {...props}>
              {title}
            </Tabs.Tab>
          ))}
        </Tabs.Header>
        <Tabs.Body>
          {tabsList.map(([key, _, Component]) => (
            <Tabs.Content key={key} tabKey={key} {...props}>
              {Component}
            </Tabs.Content>
          ))}
        </Tabs.Body>
        {console.log(props)}
      </Tabs>
    )}
  </TabsContainer>
);
