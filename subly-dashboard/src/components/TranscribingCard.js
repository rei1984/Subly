import Card from 'react-bootstrap/Card';

const TranscribingCard = ({name, cover, languages, status, createdAt, updatedAt}) => {
    console.log("Found a transcribing card")
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

export default TranscribingCard
