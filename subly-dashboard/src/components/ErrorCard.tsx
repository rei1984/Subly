import Card from 'react-bootstrap/Card';
import {RiErrorWarningLine} from 'react-icons/ri';
import Button from 'react-bootstrap/Button';

type ErrorCardProps = {
    name: string;
    cover: string;
    languages: [string]
    status: string;
    createdAt: string;
    updatedAt: string;
}

//component to display errored cards
const ErrorCard = ({name, cover, languages, status, createdAt, updatedAt}: ErrorCardProps) => {
    console.log("Found an error card")
    return (
        <>
            <Card style={{ width: '25rem', height: 'auto' }}>
                <Card.Body style={{ width: '100%', height: '200px', backgroundColor: 'pink' }}>
                    <RiErrorWarningLine style={{color: 'red', cursor: 'pointer'}}/>
                    <Card.Text>
                        An error occurred while processing your file. Delete file to try again, and report issue if problem persists.
                    </Card.Text>
                    {/* buttons to delete or report that would be connected to some other scripts */}
                    <Button style={{ width: '33%', height: '44px', marginRight: '20px', marginLeft: '23%'}} variant= 'light' type="button">Delete File</Button>
                    <Button style={{ width: '33%', height: '44px'}} variant= 'primary' type="button">Send Report</Button>
                </Card.Body>

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Error in Processing
                    </Card.Text>
                </Card.Body>
            </Card>             
        </>
    )
}

export default ErrorCard
