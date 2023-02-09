import TC from './images/TC.png';
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
    return (
        <section className="banner" id="about">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <h2 className='header about-text'>> Hi, I'm Tracey!</h2>
              <p className='about-sub about-text'>
                I'm a <strong>full-stack software engineer</strong> who is an eager learner and a passionate problem solver.
                Since being accepted to Code in Place in 2020, I have fallen in love with the process of coding -- everything from breaking down problems, to debugging code and finally seeing how everything comes together.
                I’m excited to explore all that this field has to offer and continue growing as a software engineer.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={TC} alt="TC" className='TC' width={300} />
            </Col>
          </Row>
        </Container>
      </section>
    )
}
