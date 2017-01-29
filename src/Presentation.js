import React from 'react';
/* eslint-disable no-unused-vars */
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  MarkdownSlides,
  Quote,
  S,
  Slide,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text,
  Typeface,
} from 'spectacle';
/* eslint-enable no-unused-vars */
import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({}, {
  primary: 'Lato',
  secondary: 'Lato',
  tertiary: 'Fira mono',
});

const Presentation = () => (
  <Deck theme={theme} transition={['slide']}>
    <Slide>
      <Heading fit>Spectacle Boilerplate</Heading>
      <Text>By geniusgordon</Text>
    </Slide>
    <Slide>
      <Text>To get started, edit <Code>src/Presentation.js</Code> and save to reload.</Text>
    </Slide>
    <Slide>
      <ComponentPlayground />
    </Slide>
  </Deck>
);

export default Presentation;

