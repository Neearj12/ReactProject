
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ShowDetails = () => {
  // ... your existing code
  const { id } = useParams();
  const [ShowDetails, setShowDetails] = useState({});
  const navigate=useNavigate()

  //fetch function
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShowDetails(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  //Navigate function
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
<div className="show-details p-6 mt-6 bg-gradient-to-r max-h-[80vh] from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-md border border-blue-700">
      <h2 className="text-4xl font-bold mb-4 text-center text-black animate__animated animate__fadeInDown">
        {ShowDetails.name}
      </h2>
      <p className="text-lg font-bold text-center text-gray-900">{ShowDetails.summary}</p>
      <button
        onClick={handleGoBack}
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                   text-white font-bold py-2 px-4 rounded
                   hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-red-600"
      >
        Go Back
      </button>
    </div>
  );
};

export default ShowDetails;



