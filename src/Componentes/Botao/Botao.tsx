import { Button, IButtonProps } from "native-base";
import { FormEvent, ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

interface BottonProps extends IButtonProps {
  borderRadius: number;
  _text?: { fontSize?: string | number };
  bg: string;
  onPress?: (event: FormEvent<HTMLFormElement>) => void
  children: ReactNode;
}
export function Botao({
  children,
  borderRadius,
  _text,
  bg,
  onPress,
  ...rest
}: BottonProps) {
  return (
    <Button onPress={onPress} borderRadius={borderRadius} bg={bg} _text={_text} {...rest}>
      {children}
    </Button>
  );
}
