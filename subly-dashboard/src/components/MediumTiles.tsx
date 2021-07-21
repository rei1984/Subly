import ReadyCard from './ReadyCard';
import ErrorCard from './ErrorCard';
import TranscribingCard from './TranscribingCard';
import { Row, Col } from 'react-bootstrap'
import {Medium} from '../Medium'

type MediumTilesProp = {
    mediums: [Medium[]]
}

//Component to display the list of tiles
const MediumTiles = ({mediums} : MediumTilesProp) => {
    return (
        <>
            {mediums.map((row) => (
                <Row style={{marginTop: '2rem'}}>
                    {row.map((medium) => (
                        <Col>
                        <div className="item"> 
                        {
                            {
                            'ready': <ReadyCard key={medium.id} name={medium.name} cover={medium.cover} languages={medium.languages} status={medium.status} createdAt={medium.createdAt} updatedAt={medium.updatedAt}/>,
                            'error': <ErrorCard key={medium.id} name={medium.name} cover={medium.cover} languages={medium.languages} status={medium.status} createdAt={medium.createdAt} updatedAt={medium.updatedAt}/>,
                            'transcribing' : <TranscribingCard key={medium.id} name={medium.name} cover={medium.cover} languages={medium.languages} status={medium.status} createdAt={medium.createdAt} updatedAt={medium.updatedAt}/>
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
