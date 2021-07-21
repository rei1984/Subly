import Card from 'react-bootstrap/Card';
import {RiDeleteBin2Line} from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

type ReadyCardProps = {
    name: string;
    cover: string;
    languages: [string]
    status: string;
    createdAt: string;
    updatedAt: string;
}

//Component to display the cards with status ready
const ReadyCard = ({name, cover, languages, status, createdAt, updatedAt}: ReadyCardProps) => {

    const [hovering, setHovering] = useState(false)
    const [dropDownValue, setDropDownValue] = useState(languages[0]);

    return (
        <>
            <Card style={{ width: '25rem', height: 'auto' }} onMouseEnter={() => (setHovering(true))} onMouseLeave={() => (setHovering(false))}>
                <Card.Img variant="top" src={cover}/>
                <Card.ImgOverlay >
                    
                    {/* //language selection updates status */}
                    <DropdownButton id="dropdown-item-button" title={dropDownValue} className="format">
                        {languages.map((language) => ( 
                        <Dropdown.Item as="button"><div onClick={(e) => (setDropDownValue(language))}>{language}</div></Dropdown.Item>
                        ))}
                    </DropdownButton>
                    
                    {/* //if hovering the options to edit and delete appear */}
                    {hovering ? <>
                    <Button style={{ width: '34%', height: '44px', marginRight: '33%', marginLeft: '33%'}} variant= 'outline-light' type="button">Edit</Button>
                    <RiDeleteBin2Line style={{color: 'white', cursor: 'pointer', position: 'absolute', right: 15, top: 15}}/>
                    </>
                    :   
                    <h3></h3>
                    }
                </Card.ImgOverlay>
                
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {updatedAt}
                        </Card.Text>
                    </Card.Body>
            </Card>             
        </>
    )
}

export default ReadyCard
