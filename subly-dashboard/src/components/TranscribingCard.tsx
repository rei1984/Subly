import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

type TranscribingCardProp = {
    name: string;
    cover: string;
    languages: [string]
    status: string;
    createdAt: string;
    updatedAt: string;
}

//component for card being transcribed
const TranscribingCard = ({name, cover, languages, status, createdAt, updatedAt}: TranscribingCardProp) => {
    console.log("Found a transcribing card")
    return (
        //darken background: can only seem to darken this background cannot workout how to dynamically darken backgrounds on hover in the other cards
        <div className= 'transcribingImg'>
            <Card style={{ width: '25rem', height: 'auto' }}>
                <Card.Img variant="top" src={cover}/>
                <Card.ImgOverlay>
                    {/* inform is being transcribed */}
                    <h3 style={{ color: 'white', textAlign: 'center'}} >Transcribing Subtitles</h3>
                    <ProgressBar animated now={100} style={{position: 'absolute', top: 100, right: 25, left: 25}}/>
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Transcribing
                    </Card.Text>
                </Card.Body>
            </Card>             
        </div>
    )
}

export default TranscribingCard
