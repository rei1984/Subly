import ReadyCard from './ReadyCard';
import ErrorCard from './ErrorCard';
import TranscribingCard from './TranscribingCard';
import { Row, Col } from 'react-bootstrap'

const MediumTiles = ({mediums}) => {
    return (
        <>
            {mediums.map((row) => (
                <Row style={{marginTop: '2rem'}}>
                    {row.map((medium) => (
                    // <Medium key={medium.id} name={medium.name} cover={medium.cover} langauges={medium.languages} status={medium.status} createdAt={medium.createdAt} updatedAt={medium.updatedAt}/>
                    <Col>
                    <div class="item"> 
                    {
                        {
                        'ready': <ReadyCard key={medium.id} name={medium.name} cover={medium.cover} langauges={medium.languages} status={medium.status} createdAt={medium.createdAt} updatedAt={medium.updatedAt}/>,
                        'error': <ErrorCard key={medium.id} name={medium.name} cover={medium.cover} langauges={medium.languages} status={medium.status} createdAt={medium.createdAt} updatedAt={medium.updatedAt}/>,
                        'transcribing' : <TranscribingCard key={medium.id} name={medium.name} cover={medium.cover} langauges={medium.languages} status={medium.status} createdAt={medium.createdAt} updatedAt={medium.updatedAt}/>
                        }[medium.status]
                    }              
                    </div>
                    </Col>
                    ))}
                </Row>
            ))}
        </>
    )
}

export default MediumTiles
