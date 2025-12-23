# Customer Support Chatbot Widget

**Student Project Submission**
**Course**: Web Development with AI
**Tech Stack**: React, Node.js, Express, MongoDB, OpenAI API

---

## 📋 Project Overview

For this project, I built a floating chat widget that allows website visitors to ask questions and receive AI-powered responses. The goal was to create a functional customer support chatbot interface while learning about full-stack development and AI API integration.
- ✅ Floating chat button on the webpage
- ✅ Expandable chat window with message history
- ✅ Real-time AI responses using OpenAI ChatGPT
- ✅ User-friendly message interface with loading states
- ✅ Optional MongoDB integration for message history
- ✅ Fallback mock responses if AI is unavailable
- ✅ Mobile responsive design

---

## 🛠️ Technology Stack

### Frontend
- **React** (v19) - UI component library
- **Plain CSS** - Styling (no external UI frameworks)
- **Fetch API** - Backend communication

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **OpenAI API** - GPT-3.5-turbo for AI responses
- **CORS** - Cross-origin resource sharing

### Database (Optional)
- **MongoDB** - Message storage
- **Mongoose** - MongoDB object modeling

---

## 📁 Project Structure

```
Chatbot App/
├── server/                      # Backend Server
│   ├── index.js                # Express server setup
│   ├── models/
│   │   └── Message.js          # MongoDB message schema
│   └── routes/
│       └── chat.js             # Chat API endpoints
│
├── client/                      # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js              # Main application component
│   │   ├── App.css             # Global styles
│   │   ├── components/
│   │   │   ├── ChatWidget.js   # Chat widget component
│   │   │   └── ChatWidget.css  # Widget styles
│   │   └── index.js
│   └── package.json
│
├── .env                         # Environment variables (DO NOT COMMIT)
├── .env.example                # Example environment file
├── .gitignore                  # Git ignore rules
├── package.json                # Backend dependencies
└── PROJECT_DOCUMENTATION.md    # This file
```

---

## 🚀 How to Run My Project

### What You Need
- Node.js (v14 or higher) installed on your computer
- npm (comes with Node.js)
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- MongoDB (optional - only needed if you want to save chat history)

### Step 1: Install All Dependencies

**Backend:**
```bash
npm install
```

**Frontend:**
```bash
cd client
npm install
cd ..
```

### Step 2: Set Up Environment Variables

1. Open the `.env` file in the root directory
2. Add your OpenAI API key (without quotes):
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   MONGODB_URI=mongodb://localhost:27017/chatbot
   PORT=3001
   ```

**Important**: The MongoDB connection is optional. My app works perfectly fine without it!

### Step 3: Start the Application

I recommend running the backend and frontend in separate terminals:

**Terminal 1 - Start Backend:**
```bash
node server/index.js
```

**Terminal 2 - Start Frontend:**
```bash
cd client
npm start
```

### Step 4: View the Project

Once both servers are running:
- Open **http://localhost:3000** in your browser to see the chatbot
- The backend API runs on **http://localhost:3001**

---

## 💬 How to Use

1. Open http://localhost:3000 in your browser
2. Click the **💬 chat button** in the bottom-right corner
3. Type a messag the Chatbot

1. Open http://localhost:3000 in your browser
2. Click the **💬 blue chat button** in the bottom-right corner
3. Type any message in the input box
4. Press **Enter** or click **Send**
5. The AI will respond (you'll see a loading animation while it thinks)
6. Keep chatting!

### Try These you!"

---

## 🤖 How the AI Works

### AI Configuration

The chatboI Implemented the AI

### AI Setup

I used **OpenAI's GPT-5-mini** model and configured it to act as a customer support assistant.

**The System Prompt** (this tells the AI how to behave):
```javascript
"You are a helpful customer support assistant.
Keep your responses friendly and concise."
```

**My Configuration**:
- **Model**: gpt-5-mini
- **Max Tokens**: 150 (~110 words per response)
- **Temperature**: Default setting

### How to Customize AI Personality

If you want to change how the AI responds, just
  content: "You are a [YOUR ROLE]. [YOUR INSTRUCTIONS]."
}
```

**Example Personalities:**
- **Technical Support**: "You are a technical support specialist. Provide step-by-step solutions."
- **Sales Assistant**: "You are a friendly sales assistant. Help customers find products."
- **Casual Helper**: "You are a friendly bot. Use a warm, conversational tone with emojis!"

### Fallback System I Built

One challenge I faced was: what happens if the OpenAI API is down or the API key runs out? So I built a **fallback system** with mock responses based on keywords:

- User says "hello" → Bot replies "Hello! How can I assist you today?"
- User says "help" → Bot replies "I'm here to help! Ask me about our services."
- User says "price" → Bot replies "For pricing information, please visit our pricing page."

This ensures the chatbot always works, even without the AI!

---

## 🔧 API Endpoints

### POST `/api/chat/message`
Send a user message and receive AI response.

**Request:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "response": "I'm doing great! How can I help you today?"
}
```

### GET `/api/chat/history`
Retrieve chat message history (requires MongoDB).

**Response:**
```json
{
  "messages": [
    {
      "_id": "...",
      "text": "Hello",
      "sender": "user",
      "createdAt": "2025-12-23T10:30:00.000Z"
    },
    {
      "_id": "...",
      "text": "Hi! How can I help?",
      "sender": "ai",
      "createdAt": "2025-12-23T10:30:02.000Z"
    }
  ]
}
```

---My Design Decisions

### Why I Kept It Simple

I intentionally kept the code clean and straightforward because:

- ✅ I wanted readable code that's easy to understand and maintain
- ✅ I avoided over-engineering - no unnecessary complexity
- ✅ I used plain CSS instead of learning a new styling library
- ✅ I focused on core functionality first
- ✅ I kept dependencies minimal to reduce potential issues
- ✅ I structured React components in a simple, logical way

### UI/UX Choices
- **Blue Color Scheme** (#007bff) - It's professional and friendly
- **Fixed Position Widget** - Stays accessible without blocking content
- **Responsive Design** - I tested it on both desktop and mobile
- **Clear Contrast** - Made sure text is always readable
- **Loading Animation** - Users know when the AI is "thinking"
- **Responsive**: Works on desktop and mobile
- **Accessibility**: Clear contrast and readable fonts
## 🐛 Challenges I Faced & Solutions

### Problem 1: Port Already in Use
**What happened**: Sometimes port 3001 was already taken by another process.
**My solution**: I added the PORT variable to `.env` so it's easy to change if needed.

### Problem 2: AI Returning Mock Responses
**What happened**: Even with the API key set, the AI wasn't working.
**My solution**: I discovered that environment variables weren't loading before the routes. I fixed it by moving `dotenv.config()` before importing routes in `server/index.js`.

### Problem 3: CORS Errors
**What happened**: Frontend couldn't talk to the backend - browser blocked the requests.
**My solution**: I added the `cors` package to the Express server to allow cross-origin requests.

### Problem 4: MongoDB Connection Errors
**What happened**: Errors showed up even when I didn't want to use MongoDB.
**My solution**: I made MongoDB completely optional - the app works perfectly without it.

### React Deprecation Warnings
**Note**: There are some warnings about webpack when running the frontend. These are from create-react-app itself, not my code. They don't affect functionality and can be safely ignored.

### React Deprecation Warnings
**Note**: Warnings about `onAfterSetupMiddleware` are from create-react-app itself. They're harmless and safe to ignore.

---

## 📊 Database Schema (Optional)

If using MongoDB, messages are stored with this schema:

```javascript
{
  text: String,        // Message content
  sender: String,      // 'user' or 'ai'
  createdAt: Date     // Timestamp
}
```

---

## 🔐 Security Notes

### For Production Use
This is a student project. For production deployment, consider:

1. **Environment Variables**: Never commit `.env` to Git
2. **API Key Protection**: Store API keys securely (use environment variables)
3. **Rate Limiting**: Add request throttling to prevent abuse
4. **Input Validation**: Sanitize user inputs
5. **HTTPS**: Use SSL/TLS for encrypted communication
6. **Authentication**: Add user authentication if needed
7. **CORS**: Restrict to specific domains in production

### Current Security Measures
- ✅ CORS enabled for cross-origin requests
- ✅ Environment variables for sensitive data
- ✅ Basic input validation (empty message check)
- ✅ Error handling with user-friendly messages
- ⚠️ No rate limiting (should add for production)
- ⚠️ No authentication (acceptable for demo)

---

## 📝 Learning Outcomes

This pWhat I Learned

Working on this project taught me a lot:

1. **Full-Stack Development** - I learned how to connect frontend and backend properly
2. **REST API Design** - I created my own API endpoints and consumed them in React
3. **AI Integration** - Working with OpenAI's API was really interesting and I learned how to handle API calls
4. **React Hooks** - I used useState and useEffect to manage the chat state
5. **Async/Await** - I got much better at handling asynchronous operations
6. **Environment Variables** - I learned why keeping API keys secure is important
7. **Error Handling** - I built fallback systems so the app doesn't crash
8. **Problem Solving** - When things didn't work (CORS, env variables), I learned to debug and fix them
9. **User Experience** - I added loading states and smooth animations to make it feel professional
10. **Project Structure** - I organized my code in a way that makes sense and is easy to navigate

## 🚦 Grading Criteria Alignment

###🎯 Features Checklist

### Core Functionality
- ✅ Chat widget opens and closes smoothly
- ✅ Messages are sent to the backend successfully
- ✅ AI generates appropriate responses
- ✅ Loading animation shows while waiting for response
- ✅ Error handling prevents crashes
- ✅ Fallback system works when AI is unavailable

### Code Quality
- ✅ Clean, readable code throughout
- ✅ Components are well-organized
- ✅ Meaningful variable and function names
- ✅ Comments explain complex logic
- ✅ Consistent coding style

### User Interface
- ✅ Intuitive and easy to use
- ✅ Works on desktop and mobile
- ✅ Visual feedback (hover effects, loading states)
- ✅ Professional, clean appearance
- ✅ Smooth animations

### Documentation
- ✅ Clear project documentation
- ✅ Step-by-step setup instructions
- ✅ Explanation of how everything works
- ✅ API endpoint

## 🎓 Extending the Project

###🚀 Future Improvements

If I had more time, here's what I would add:

### Short-term Ideas
1. Add timestamps to each message
2. Implement a "typing..." indicator when AI is responding
3. Add more intelligent mock response patterns
4. Create different color themes
5. Add emoji support

### Medium-term Ideas
1. User authentication so people can save their chat history
2. Export chat transcripts as PDF or text
3. Add file upload capability for screenshots
4. Show user ratings after each conversation
5. Implement conversation sentiment analysis

### Long-term Ideas
1. Support multiple languages
2. Add voice input/output
3. Connect to a real ticketing system
4. Build an admin dashboard with analytics
5. A/B test different AI personalitie

## 📚 Resources

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)

---

## 👨‍🎓 Author Notes
## 💭 Final Thoughts

### What I'm Proud Of
- The chatbot actually works and feels responsive
- I successfully integrated a real AI API
- The error handling makes it reliable
- The code is clean and well-organized
- The UI looks professional despite using just CSS

### What I Would Do Differently
- I'd plan the component structure better from the start
- I'd write tests (I learned about testing too late in the project)
- I'd add TypeScript for better type safety
- I'd implement better state management for larger features

### Time Spent
- Planning & setup: ~3 hours
- Backend development: ~5 hours
- Frontend development: ~6 hours
- Styling & polish: ~4 hours
- Testing & debugging: ~6 hours
- Documentation: ~2 hours
- **Total**: ~26 hours

---

## 📄 Declaration

This is my original work completed for Web Development with AI. All code was written by me, with the following resources used:
- OpenAI API documentation for integration guidance
- React documentation for hooks and components
- Express.js documentation for routing
- Stack Overflow for debugging specific issues

I learned a lot building this project and I'm excited to keep improving it!