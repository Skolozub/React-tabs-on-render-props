import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

import { TabsContainer } from "./containers/tabs-container";
import { Tabs } from "./components/tabs";
import { history } from ".";
import { ListContainer } from "./for-test/containers/list-container";

const tabsListExample1 = [
  ["all", "Все", ListContainer],
  ["categories", "Категории", ListContainer],
  ["my", "Мои", ListContainer],
  ["edit-mode", "Режим редактирования", ListContainer]
];

const tabsListExample2 = [
  ["1", "Все", ListContainer],
  ["2", "Категории", ListContainer],
  ["3", "Мои", ListContainer],
  ["4", "Режим редактирования", ListContainer]
];

const tabsListExample3 = [
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
                <Component {...props} />
              </Tabs.Content>
            ))}
          </Tabs.Body>
        </Tabs>
      )}
    </TabsContainer>

    {/* without change location */}
    <TabsContainer activeTabKey="2" tabsName="page">
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
                <Component {...props} />
              </Tabs.Content>
            ))}
          </Tabs.Body>
        </Tabs>
      )}
    </TabsContainer>

    <TabsContainer>
      {props => (
        <Tabs>
          <Tabs.Header>
            {tabsListExample3.map(([key, title]) => (
              <Tabs.Tab key={key} tabKey={key} {...props}>
                {title}
              </Tabs.Tab>
            ))}
          </Tabs.Header>
          <Tabs.Body>
            {tabsListExample3.map(([key, _, Component]) => (
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
