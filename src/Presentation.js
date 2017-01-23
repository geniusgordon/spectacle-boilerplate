import React from 'react';
/* eslint-disable no-unused-vars */
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Spectacle, Slide, Text,
} from 'spectacle';
/* eslint-enable no-unused-vars */
import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({}, {
  primary: 'Lato',
  secondary: 'Lato',
  tertiary: 'Fira mono',
});

const Presentation = () => (
  <Spectacle theme={theme}>
    <Deck transition={['slide']}>
      <Slide>
        <Heading fit>Spectacle Boilerplate</Heading>
        <Text>By geniusgordon</Text>
      </Slide>
      <Slide>
        <Text>To get started, edit <Code>src/Presentation.js</Code> and save to reload.</Text>
      </Slide>
    </Deck>
  </Spectacle>
);

export default Presentation;

