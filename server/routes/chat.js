const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const Message = require('../models/Message');

// Initialize OpenAI only if API key exists
let openai = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
}

// Simple mock responses for testing without OpenAI
const getMockResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "Hello! How can I assist you today?";
  } else if (lowerMessage.includes('help')) {
    return "I'm here to help! You can ask me questions about our services, products, or any issues you're experiencing.";
  } else if (lowerMessage.includes('thank')) {
    return "You're welcome! Is there anything else I can help you with?";
  } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return "For pricing information, please visit our pricing page or contact our sales team.";
  } else if (lowerMessage.includes('contact')) {
    return "You can contact us at support@example.com or call us at 1-800-123-4567.";
  } else {
    return "I understand your question. Let me help you with that. Could you provide more details so I can assist you better?";
  }
};

// POST route to send message and get AI response
router.post('/message', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Save user message to database (optional)
    if (process.env.MONGODB_URI) {
      await Message.create({
        text: message,
        sender: 'user'
      });
    }

    let aiResponse;

    // Use OpenAI if available, otherwise use mock responses
    if (openai) {
      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-5-mini",
          messages: [
            {
              role: "system",
              content: "You are a helpful customer support assistant. Keep your responses friendly and concise."
            },
            {
              role: "user",
              content: message
            }
          ],
          max_completion_tokens: 500
        });

        aiResponse = completion.choices[0].message.content;
      } catch (error) {
        console.error('OpenAI API Error:', error.message);
        // Fallback to mock response if OpenAI fails
        aiResponse = getMockResponse(message);
      }
    } else {
      aiResponse = getMockResponse(message);
    }

    // Save AI response to database (optional)
    if (process.env.MONGODB_URI) {
      await Message.create({
        text: aiResponse,
        sender: 'ai'
      });
    }

    res.json({ response: aiResponse });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

// GET route to fetch message history (optional)
router.get('/history', async (req, res) => {
  try {
    if (!process.env.MONGODB_URI) {
      return res.json({ messages: [] });
    }

    const messages = await Message.find().sort({ createdAt: 1 }).limit(50);
    res.json({ messages });
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Could not fetch messages' });
  }
});

module.exports = router;
