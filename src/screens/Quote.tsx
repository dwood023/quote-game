import styled from "styled-components/native";
import { useFonts } from "expo-font";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  padding: 35px;
`;

const Options = styled.View``;

const Option = styled.Text<{ selected?: boolean }>`
  font-family: Inter-Bold;
  font-size: ${(props) => (props.selected ? 30 : 22)}px;

  opacity: ${(props) => (props.selected ? 1 : 0.2)};

  text-align: right;

  padding-bottom: 25px;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.View`
  width: 80px;
  aspect-ratio: 1;
  margin-left: 20px;
`;

const Quote = styled.View`
  padding-bottom: 15px;
`;

const Text = styled.Text<{ bold?: boolean }>`
  font-family: ${(props) => (props.bold ? "Inter-Bold" : "Inter-Regular")};
  font-size: 23px;
  font-style: italic;
`;

const Author = styled(Text).attrs({
  bold: true,
})`
  text-align: right;
  font-style: italic;
  padding-top: 20px;
`;

interface QuoteScreenProps {
  onPressSubmitButton?: () => void;
  onPressInfoButton?: () => void;
}

const QuoteScreen = ({
  onPressSubmitButton,
  onPressInfoButton,
}: QuoteScreenProps) => {
  const options = ["perverse", "high", "poor"];

  const quote =
    "Men of perverse opinion do not know the excellence of what is in their hands, till someone dash it from them.";

  // TODO: Derive from state of scroll view
  const selected = "perverse";

  useFonts({
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });

  return (
    <Container>
      <Options>
        {options.map((option) => (
          <Option key={option} selected={option === selected}>
            {option}
          </Option>
        ))}
      </Options>

      <Quote>
        <Text>
          {quote.split(/(\w+)/).map((word, index) => (
            <Text
              key={index}
              /* 
                WARN: This is a naive method of highlighting the selected word.
                If the selected word occurs more than once, it will fail. In
                that case, we would need to represent the selected word in
                terms of its position as well as content. Maybe a slice (N, M)
                or a number indicating the Nth instance, etc.
               */
              bold={word === selected}
            >
              {word}
            </Text>
          ))}
        </Text>
        <Author>Sophocles</Author>
      </Quote>

      <ButtonRow>
        <ButtonWrapper>
          <Button variant="Info" onPress={onPressInfoButton} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant="Confirm" onPress={onPressSubmitButton} />
        </ButtonWrapper>
      </ButtonRow>
    </Container>
  );
};

const QuoteScreenContainer = () => {
  const navigation = useNavigation();

  return (
    <QuoteScreen
      onPressInfoButton={() => navigation.navigate("Info")}
    />
  );
};

export default QuoteScreenContainer;
