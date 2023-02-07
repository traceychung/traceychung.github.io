import CarCar from './images/CarCar.png'
import ConfGo from './images/ConfGo.png'
import Wanderlust from './images/Wanderlust.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Projects() {
    return (
        <div id="projects">
        <div className='m-3'>
            <h1 className='header mb-3'> > Projects</h1>
            <CardGroup className='gap-4'>
            <Card className='card-img'>
            <a href="https://group-04-trip-tech.gitlab.io/wanderlust/" target="_blank" rel="noreferrer"><Card.Img variant="top" src={Wanderlust} /></a>
            <Card.Body>
                <Card.Title className='card-title'>Wanderlust</Card.Title>
                <Card.Text className='card-text'>
                Your one-stop-shop for all things trip planning
                </Card.Text>
            </Card.Body>
            <Card.Footer className='card-footer'>
                <small>React | FastAPI | Python | JavaScript | Docker | PostgreSQL</small>
            </Card.Footer>
            </Card>
            <Card>
            <a href="https://gitlab.com/chungt/project-beta" target="_blank" rel="noreferrer"><Card.Img variant="top" src={CarCar} /></a>
            <Card.Body>
                <Card.Title className='card-title'>Car Car</Card.Title>
                <Card.Text className='card-text'>
                An application for automobile dealership management{' '}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='card-footer'>
                <small>React | Django | Python | JavaScript | Docker</small>
            </Card.Footer>
            </Card>
            <Card>
            <a href="https://gitlab.com/chungt/conference-go" target="_blank" rel="noreferrer"><Card.Img variant="top" src={ConfGo} /></a>
            <Card.Body>
                <Card.Title className='card-title'>Conference Go!</Card.Title>
                <Card.Text className='card-text'>
                Conference planning application to keep track of attendees, venues, and presentations
                </Card.Text>
            </Card.Body>
            <Card.Footer className='card-footer'>
                <small>React | Django | Python | JavaScript | Docker</small>
            </Card.Footer>
            </Card>
        </CardGroup>
      </div>
      </div>
    )

}
