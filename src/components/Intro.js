import { Col, Container, Row, Button} from "react-bootstrap"

const Intro = () => {

  return (
    <div className="Intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">INFO FILM</div>
            <div className="title">BIAR UP TO DATE</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro