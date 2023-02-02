import styled from "styled-components/native";
import Icon from "./Icon";

type ButtonVariant = "Confirm" | "Info";

const Container = styled.Pressable<{ variant: ButtonVariant }>`
  border-radius: 100%;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    ({ Confirm: "#60cc4e", Info: "#ededed" }[props.variant])};
  padding: 26%;
`;

interface ButtonProps {
  variant: ButtonVariant;
  onPress?: () => void;
}

const Button = ({ variant, onPress }: ButtonProps) => {
  const IconComponent = variant === "Confirm" ? Icon.Tick : Icon.Info;

  return (
    <Container variant={variant} onPress={onPress}>
      <IconComponent />
    </Container>
  );
};

export default Button;
