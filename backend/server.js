const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: "https://financial-literacy-app-frontend.onrender.com"
}));

// Route for handling user data
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const chatWithRetry = async (message, maxRetries = 5) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
        { inputs: message },
        {
          headers: {
            'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data[0].generated_text;
    } catch (error) {
      if (error.response && error.response.status === 503) {
        const waitTime = error.response.data.estimated_time || 20;
        console.log(`Model is loading. Retrying in ${waitTime} seconds...`);
        await delay(waitTime * 1000);
      } else {
        throw error;
      }
    }
  }
  throw new Error('Max retries reached. Unable to get a response from the model.');
};

// AI Chat route
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const reply = await chatWithRetry(message);
    res.json({ reply });
  } catch (error) {
    console.error('Error in AI chat:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});