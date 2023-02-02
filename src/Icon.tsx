import { StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

namespace Icon {
  export const Tick = () => (
    <Svg viewBox="0 -1 15 15" fill="none" style={styles.icon}>
      <Path
        d="M1.5 7.14103L5.14286 11.5L13.5 1.5"
        stroke="white"
        strokeWidth="2"
      />
    </Svg>
  );

  export const Info = () => (
    <Svg viewBox="0 0 7 13" fill="none">
      <Path
        d="M3.4998 5.22983L1.68528 4.50403H4.95141L2.41109 11.3992H4.2256L0.959473 12.125L3.4998 5.22983Z"
        fill="#878787"
        stroke="#878787"
      />
      <Path
        d="M6.03994 1.96371C6.03994 2.56499 5.39004 3.05242 4.58833 3.05242C3.78663 3.05242 3.13672 2.56499 3.13672 1.96371C3.13672 1.36243 3.78663 0.875 4.58833 0.875C5.39004 0.875 6.03994 1.36243 6.03994 1.96371Z"
        fill="#878787"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
});

export default Icon;
