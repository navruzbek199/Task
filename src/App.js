import { useContext } from "react";
import Header from "./component/Header/Header";
import { GlobalContext } from "./store/context";
import Forms from "./component/Forms/Forms";
import { Col, Container, Row } from "react-bootstrap";
import Tables from "./component/Tables/Tables";
function App() {
	const {theme} = useContext(GlobalContext)
  return (
    <div className="App" id={theme}>
      <Container fluid="lg">
          <Header/>
          <Row>
            <Col md="5">
              <Forms/>
            </Col>
            <Col md="7">
              <Tables/> 
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
