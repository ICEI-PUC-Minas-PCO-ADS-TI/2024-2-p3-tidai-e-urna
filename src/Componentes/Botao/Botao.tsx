import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface BottonProps extends IButtonProps {
  borderRadius: number;
  _text?: { fontSize?: string | number };
  bg: string;
  children: ReactNode;
}
export function Botao({
  children,
  borderRadius,
  _text,
  bg,
  ...rest
}: BottonProps) {
  return (
    <Button borderRadius={borderRadius} bg={bg} _text={_text} {...rest}>
      {children}
    </Button>
  );
}
