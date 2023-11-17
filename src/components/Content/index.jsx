import { Box } from "@primer/react";
import { useState, useEffect } from "react";
import $ from "jquery";

const Content = (props) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const settings = {
        async: true,
        crossDomain: true,
        url: 'https://youtube138.p.rapidapi.com/auto-complete/?q=desp&hl=en&gl=US',
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '42d976abb7msh7edd9128413046fp1836ecjsndfe77586e5f1',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };

      try {
        const response = await $.ajax(settings);

        // Ensure the response has a "results" property and it is an array
        if (response && response.results && Array.isArray(response.results)) {
          setApiData(response.results); // Adjusted this line based on the updated response structure
        } else {
          console.error('API response does not have the expected structure:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // empty dependency array ensures useEffect runs only once

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginLeft: '24%', marginTop: '5%' }}>
      {Array.isArray(apiData) && apiData.map((card, index) => (
        <Box
          key={index}
          sx={{
            p: 3,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'border.default',
            width: 'calc(20% - 1.5rem)',
            flexGrow: 1,
          }}
        >
          {/* Use dummy thumbnail and video title for testing */}
          <img src="https://dummyimage.com/400x250/000/fff" alt={`Thumbnail ${index}`} style={{ width: '100%', marginBottom: '0.5rem' }} />
          <Box sx={{ fontSize: 1, fontWeight: 'bold', marginBottom: '0.25rem' }}>Dummy Video Title</Box>
          <Box sx={{ fontSize: 0.8, color: 'text.secondary' }}>Dummy Video Description</Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
