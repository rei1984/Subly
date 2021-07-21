import { Container} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediumTiles from './components/MediumTiles'


function App() {

  const [mediums, setMediums] = useState([])
  const [sortBy, setSortBy] = useState('Sorting by: Name')

  //on load of app fetch the mediums from the endpoint
  useEffect(() => {
    const getMediums = async () => {
      const mediumsFromEndpoint = await fetchMedium();
      setMediums(mediumsFromEndpoint.media);
    }

    getMediums();
  }, [])

  //fetch data from the endpoint
  const fetchMedium = async () => {
    const res = await fetch('https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b');
    const data = await res.json();
    return(data);
  }

  //sort by the sortby state
  const sort = (mediums) => {
    switch(sortBy) {
      case 'Sorting by: Languages': return mediums.sort((a, b) => (a.languages.length < b.languages.length) ? 1 : -1);
      case 'Sorting by: Status': return mediums.sort((a, b) => (a.status > b.status) ? 1 : -1);
      default: return mediums.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
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

  return (
    <div>
      <Container>
        {/* Sorting by Name, LangaugeNo, and Status */}
        <DropdownButton id="dropdown-item-button" title={sortBy} className="format" style={{position: 'flex', marginLeft: '80%', marginRight: '10%'}}>
            <Dropdown.Item as="button"><div onClick={(e) => (setSortBy("Sorting by: Name"))}>Name</div></Dropdown.Item>
            <Dropdown.Item as="button"><div onClick={(e) => (setSortBy("Sorting by: Languages"))}>Languages</div></Dropdown.Item>
            <Dropdown.Item as="button"><div onClick={(e) => (setSortBy("Sorting by: Status"))}>Status</div></Dropdown.Item>
        </DropdownButton>        
          {mediums.length > 0 ? <MediumTiles mediums={mediumsArranged(sort(mediums))} /> : <p>No Items to Show</p>}
      </Container>
    </div>
  );
}

export default App;
