import { Container, Row, Col } from 'react-bootstrap';
import {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Img from './field.jpg'
import MediumTiles from './components/MediumTiles'


function App() {

  const [mediums, setMediums] = useState([])

  //on load of app fetch the mediums from the endpoint
  useEffect(() => {
    const getMediums = async () => {
      const mediumsFromEndpoint = await fetchMedium();
      setMediums(mediumsFromEndpoint.media);
    }

    getMediums();
  }, [])

  //fetch data
  const fetchMedium = async () => {
    const res = await fetch('https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b');
    const data = await res.json();

    
    return(data);
  }

  //arrange media into rows of 3
  const mediumsArranged = (mediums) => {
    let newMedia = [[]];
    let i = 0;
    let j = 0;
    for (const medium of mediums) {
      if (i < 3) {
        newMedia[j].push(medium);
        i++;
      } else {
        j++;
        newMedia.push([]);
        newMedia[j].push(medium); 
        i = 1;
      }
    }
    return newMedia;
  }

  //REMOVE
  console.log("This is the Medium:", mediums);
  return (
    <div>
      <Container>
          {mediums.length > 0 ? <MediumTiles mediums={mediumsArranged(mediums)} /> : <p>No Items to Show</p>}
      </Container>
    </div>
  );
}

export default App;
