import { Container, Menssage } from "./styles";

type Props = {
  message: string;
};

export function ListEmpty({ message }: Props) {
  return (
    <Container>
      <Menssage>{message}</Menssage>
    </Container>
  );
}
