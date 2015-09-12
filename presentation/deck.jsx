import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import {
  CharacterCard
} from "../src/custom-components/components";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  store: require("./store.png")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={800}>
        <Slide>
          <CharacterCard image={images.store}>
            <ListItem>one</ListItem>
            <ListItem>two</ListItem>
          </CharacterCard>
        </Slide>
        <Slide>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Wait What?
          </Heading>
        </Slide>
        <Slide textColor="black" align="center top">
          <Heading size={1} textColor="black" textFont="primary">
            Thats right
          </Heading>
          <List>
            <ListItem>Inline style based theme system</ListItem>
            <ListItem>Autofit Text</ListItem>
            <ListItem>react-router navigation</ListItem>
            <ListItem>PDF Export</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
