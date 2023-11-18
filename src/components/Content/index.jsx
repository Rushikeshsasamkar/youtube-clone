import { Box } from "@primer/react";
import { useState, useEffect } from "react";

const Content = (props) => {
  // Replace API data with dummy data
  const dummyData = [
    { title: 'Your Guide to Making a Scroll-Stopping Image', description: 'Description 1', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCcrsCw9spgjw-h7lpxpoLnezRwmGx40ywg&usqp=CAU' },
    { title: 'Video Thumbnail Guide - Tips for Design, Layout & Dimensions', description: 'Description 2', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTWvhkZN_uwaVKTGYJMmwUbmWmdMEg3MPEQ&usqp=CAU' },
    { title: 'Free game Thumbnail for YouTube Video Photoshop Template - Indiater', description: 'Description 3', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Pnrgt5H8lgGr5Dkm_Z08kLCnpiT6CUoeuA&usqp=CAU' },
    { title: 'When will Roman Reigns lose WWE Undisputed Universal Championship? - Hindustan Times', description: 'Description 4', thumbnail: 'https://imageio.forbes.com/specials-images/imageserve/64713edcdb174f931db26209/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds' },
    { title: 'Kurt Angle Thinks Roman Reigns Dominance is Hurting WWE | USA Insider', description: 'Description 5', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hI-rR4vgam4-Yc8IbSmOn8DEtFLPWQRzQw&usqp=CAU' },
    { title: 'UFC, WWE will merge; Vince McMahon, Dana White will stay in leadership : NPR', description: 'Description 6', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAod-z2EkLwVe5g_AMJaA1rx-EhGcvNRSTg&usqp=CAU' },
    { title: 'Become a Front End Web Developer | Udacity', description: 'Description 7', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXYcl1y3YeDofnUK0TPzbzZV9XX5_6hZK3g&usqp=CAU' },
    { title: 'Web Development 101: What Does a Web Development Company Do? - QualDev', description: 'Description 8', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87oL6LjKeIqWItimCrdv9ObKpe2xD_3cmwA&usqp=CAU' },
    { title: 'The Role of Artificial Intelligence in Web Development Process', description: 'Description 9', thumbnail: 'https://www.analyticsinsight.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg' },
  ];

  // Use state to store the data
  const [apiData, setApiData] = useState([]);

  // Use useEffect to simulate the API call (can be omitted if data is static)
  useEffect(() => {
    // Simulate an API call delay
    const delay = setTimeout(() => {
      setApiData(dummyData);
    }, 1000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []); // empty dependency array ensures useEffect runs only once

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        marginLeft: ['40%', '35%', '24%'], // Adjusted left margin for different screen sizes
        marginTop: '5%',
      }}
    >
      {Array.isArray(apiData) &&
        apiData.map((card, index) => (
          <Box
            key={index}
            sx={{
              p: 3,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'border.default',
              width: ['100%', 'calc(50% - 1rem)', 'calc(33.333% - 1rem)'], // Adjusted widths for different screen sizes
              flexGrow: 1,
              boxSizing: 'border-box',
              marginBottom: '2%',
              backgroundColor: 'white', // Ensure the background is visible
              transition: 'transform 0.2s ease-in-out', // Added transition for hover effect
              '&:hover': {
                transform: 'scale(1.05)', // Scale up on hover
              },
            }}
          >
            {/* Use dummy thumbnail and video title from the dummy data */}
            <img
              src={card.thumbnail}
              alt={`Thumbnail ${index}`}
              style={{ width: '100%', marginBottom: '0.5rem' }}
            />
            <Box sx={{ fontSize: 1, fontWeight: 'bold', marginBottom: '0.25rem' }}>{card.title}</Box>
            <Box sx={{ fontSize: 0.8, color: 'text.secondary' }}>{card.description}</Box>
          </Box>
        ))}
    </Box>
  );
};

export default Content;
