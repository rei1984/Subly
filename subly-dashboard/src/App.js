import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from './field.jpg'


function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={Img} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={Img} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={Img} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
