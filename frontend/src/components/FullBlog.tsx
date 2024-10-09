import { useState } from 'react'
import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"
import { Send, X } from "lucide-react"

const formatDate = (date: string | Date): string => {
  const dateObj = (typeof date === "string") ? new Date(date) : date;
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };
  return dateObj.toLocaleDateString('en-GB', options);
};

const Chatbot = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([])
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }])
      // Simulate a bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message! This is a demo response.", isUser: false }])
      }, 1000)
      setInputValue('')
    }
  }

  return (
    <div className={`fixed inset-y-0 right-0 w-full md:w-1/2 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Chatbot</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-grow overflow-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-3 rounded-lg ${message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex rounded-lg border overflow-hidden">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-3 focus:outline-none"
            />
            <button type="submit" className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors">
              <Send className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export const FullBlog = ({ blog }: {blog: Blog}) => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-5 w-full max-w-screen-xl pt-8">
          <div className="col-span-12 md:col-span-8">
            <div className="text-3xl md:text-5xl font-extrabold">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
              {formatDate(blog.publishedDate)}
            </div>
            <div className="pt-4 whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
          {!isChatOpen && (
            <div className="col-span-12 md:col-span-4 md:ml-16 mt-8 md:mt-0">
              <div className="text-slate-600 text-lg">
                Author
              </div>
              <div className="flex w-full">
                <div className="pr-4 flex flex-col justify-center">
                  <Avatar size="big" name={blog.author.name || "Anonymous"} />
                </div>
                <div>
                  <div className="text-xl font-bold">
                    {blog.author.name || "Anonymous"}
                  </div>
                  <div className="pt-2 text-slate-500">
                    Random catch phrase about the author's ability to grab the user's attention
                  </div>
                </div>
              </div>  
            </div>
          )}
        </div>
      </div>
      <div className="h-[50px]"></div>
      <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)} 
          className="fixed bottom-4 right-4 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
        >
          <Send className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}