import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Section, Container } from './components';
import { Photos } from './tabs/Photos';
import { Todos } from './tabs/Todos';
import { useState } from 'react';

export const App = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Section>
      <Container>
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList>
            <Tab>Todos</Tab>
            <Tab>Photos</Tab>
          </TabList>

          <TabPanel>
            <Todos tabIndex={tabIndex} />
          </TabPanel>
          <TabPanel>
            <Photos tabIndex={tabIndex} />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
};
