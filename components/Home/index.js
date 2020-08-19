import React from "react";

// Styles
import {
  ButtonStyled,
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
} from "./styles";
import { Text } from "native-base";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Cookies & Beyond</Title>
        </TopStyling>
        <TopStyling>
          <ButtonStyled onPress={() => navigation.navigate("Bakeries")}>
            Click here to skip
          </ButtonStyled>
        </TopStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
