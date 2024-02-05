import { Container } from "@mui/material";
import "./App.css";
import Bot from "./feature/bot";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth={"xl"}>
        <Bot />
      </Container>
    </>
  );
}

export default App;
