import Card from 'react-bootstrap/Card';

const ReadyCard = ({name, cover, languages, status, createdAt, updatedAt}) => {
    console.log("Found a ready card")
    return (
        <>
            <Card style={{ width: '25rem', height: 'auto' }}>
                <img src={cover}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {status}
                    </Card.Text>
                </Card.Body>
            </Card>             
        </>
    )
}

export default ReadyCard
