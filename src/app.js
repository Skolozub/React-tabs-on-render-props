import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

import { TabsContainer } from "./containers/tabs-container";
import { Tabs } from "./components/tabs";
import { history } from ".";

const tabsListExample1 = [
  ["all", "Все", <LoremIpsum p={3} />],
  ["categories", "Категории", <LoremIpsum p={3} />],
  ["my", "Мои", <LoremIpsum p={3} />],
  ["edit-mode", "Режим редактирования", <LoremIpsum p={3} />]
];

const tabsListExample2 = [
  ["0", "Все", <LoremIpsum p={3} />],
  ["1", "Категории", <LoremIpsum p={3} />],
  ["2", "Мои", <LoremIpsum p={3} />],
  ["3", "Режим редактирования", <LoremIpsum p={3} />]
];

export const App = () => (
  <>
    {/* with change location */}
    <TabsContainer location={history.location} activeTabKey="my" withparams>
      {props => (
        <Tabs>
          <Tabs.Header>
            {tabsListExample1.map(([key, title]) => (
              <Tabs.Tab key={key} tabKey={key} {...props}>
                {title}
              </Tabs.Tab>
            ))}
          </Tabs.Header>
          <Tabs.Body>
            {tabsListExample1.map(([key, _, Component]) => (
              <Tabs.Content key={key} tabKey={key} {...props}>
                {Component}
              </Tabs.Content>
            ))}
          </Tabs.Body>
        </Tabs>
      )}
    </TabsContainer>

    {/* without change location */}
    <TabsContainer>
      {props => (
        <Tabs>
          <Tabs.Header>
            {tabsListExample2.map(([key, title]) => (
              <Tabs.Tab key={key} tabKey={key} {...props}>
                {title}
              </Tabs.Tab>
            ))}
          </Tabs.Header>
          <Tabs.Body>
            {tabsListExample2.map(([key, _, Component]) => (
              <Tabs.Content key={key} tabKey={key} {...props}>
                {Component}
              </Tabs.Content>
            ))}
          </Tabs.Body>
        </Tabs>
      )}
    </TabsContainer>
  </>
);
