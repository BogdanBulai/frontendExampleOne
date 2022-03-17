import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card';

const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    axios.get(url).then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      setError(true);
    })
  }

  useEffect(() => {
    fetchData();
  },[]);

  if (error) {
    return 'An error has occured!';
  }

  return (
    <div className="main-container">
      <div className="row">
        {
          data.length === 0 ? 'Loading...' : data.map(cardData => {
            return <Card key={cardData.id} cardData={cardData} />;
          })
        }
      </div>
    </div>
  );
}

export default App;
