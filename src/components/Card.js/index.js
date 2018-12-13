import { Container, CardText } from "./style";
import * as React from "react";
import G from "glamorous-native";
import { TouchableOpacity } from "react-native";

export const BreedCard = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <Container>
        <CardText>{name}</CardText>
      </Container>
    </TouchableOpacity>
  );
};
