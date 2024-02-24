import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PlayerCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.ImageUrl} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    age : {props.age}
                    Team : {props.team}
                </Card.Text>
                <Button variant="primary">No : {props.number}</Button>
            </Card.Body>
        </Card>
    )
}

export default PlayerCard