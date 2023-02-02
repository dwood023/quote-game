import QuoteScreen from "./src/screens/Quote";
import InfoScreen from "./src/screens/Info";
import styled from "styled-components/native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Phone = styled.View`
  width: 500px;
  border-width: 1px;
  aspect-ratio: ${9 / 16};
`;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Container>
      <Phone>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: "white",
            },
          }}
        >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Quote" component={QuoteScreen} />
            <Stack.Screen name="Info" component={InfoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Phone>
    </Container>
  );
}
