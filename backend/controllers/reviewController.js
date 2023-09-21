const axios = require('axios');


const fetchReviews = async (req, res) => {
  try {
    // Make an Axios GET request to an external API or your database
    const response = await axios.get('https://api.example.com/reviews');
    const reviews = response.data; // Assuming the data structure matches

    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  fetchReviews,
  // write other controller functions here, such as createReview, updateReview, deleteReview, etc.
};
