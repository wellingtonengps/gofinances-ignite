import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

import { ImageContainer, Button, Text } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SignInSocialButton({ title, svg: Svg, ...rest }: Props) {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Text>{title}</Text>
    </Button>
  );
}
