import { BrowserRouter, Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import Homepage from './pages/HomePage'
import { useEffect, useState } from 'react'
import { Chatbot } from './components/ChatBot'
import { Send } from 'lucide-react'
import Myblogs from './pages/MyBlogs'
import GyaniAIButton from './components/ui/GyaniAIButton'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const location = useLocation()
  const [searchParams] = useSearchParams();

  const hideChatbotPaths = ['/', '/publish' , '/signin' , '/signup']
  useEffect(() => {

    const chatOpenParam = searchParams.get('isChatOpen');
    if (chatOpenParam === 'true') {
      setIsChatOpen(true);
    }
  }, [searchParams]);
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800' : 'bg-gradient-to-br from-orange-100 via-rose-100 to-purple-100'
    }`}>
      {/* Render your AppBar or other components here */}
      
      <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/myblogs" element={<Myblogs />} />
      </Routes>

      {/* Conditionally render the chatbot */}
      {!hideChatbotPaths.includes(location.pathname) && (
        <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} isDarkMode={isDarkMode} />
      )}

      {!isChatOpen && !hideChatbotPaths.includes(location.pathname) && (
        <GyaniAIButton setIsChatOpen={setIsChatOpen} isDarkMode={isDarkMode} />
      )}
      
    </div>
    
  )
}

export default App