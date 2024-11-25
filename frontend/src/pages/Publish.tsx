'use client'

import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'
import { BACKEND_URL, RAG_URL } from '../config'
import { Appbar } from '../components/Appbar'

// Grammar correction function (using OpenAI as an example)
const correctText = async (text: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${RAG_URL}/grammar-correction`,
      { text },
      {
        headers: {
          Authorization: `${token}`, // Add Bearer token
        },
      }
    );
    return response.data.correctedText
  } catch (error) {
    console.error('Error correcting text:', error)
    toast.error('Failed to correct text')
    return text
  }
}

// Custom Button Component
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' }> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  ...props 
}) => {
  const baseStyle = 'px-4 py-2 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
  const variantStyle = variant === 'primary' 
    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
    : 'border border-purple-500 text-purple-500 hover:bg-purple-100'

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Custom Input Component
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => {
  return (
    <input 
      className={`w-full px-3 py-2 bg-purple-500/20 border border-purple-500/50 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  )
}

// Custom Textarea Component
const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className = '', ...props }) => {
  return (
    <textarea 
      className={`w-full px-3 py-2 bg-purple-500/20 border border-purple-500/50 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y ${className}`}
      {...props}
    />
  )
}

export const Publish: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isPublishing, setIsPublishing] = useState(false)
  const [isCorrecting, setIsCorrecting] = useState(false)
  const navigate = useNavigate()

  const handlePublish = useCallback(async () => {
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in both title and content')
      return
    }

    setIsPublishing(true)
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
        title,
        content,
      }, {
        headers: {
          Authorization: localStorage.getItem('token'),
        }
      })

      await axios.post(`${RAG_URL}/embed`, {
        title,
        content,
      })

      toast.success('Blog Published Successfully!')
      navigate(`/blog/${response.data.id}`)
    } catch (error) {
      console.error('Error publishing blog:', error)
      toast.error('Failed to publish blog')
    } finally {
      setIsPublishing(false)
    }
  }, [title, content, navigate])

  const handleCorrection = useCallback(async () => {
    if (!content.trim()) {
      toast.error('Please write some content to correct')
      return
    }

    setIsCorrecting(true)
    try {
      const correctedText = await correctText(content)
      setContent(correctedText)
      toast.success('Content corrected successfully!')
    } catch (error) {
      console.error('Error correcting content:', error)
    } finally {
      setIsCorrecting(false)
    }
  }, [content])

  const wordCount = content.trim().split(/\s+/).length

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      <Appbar />
      <div className="container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto bg-black/50 backdrop-blur-md shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl md:text-4xl leading-tight md:leading-snug font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600 mb-6">
              Create Your Blog Post
            </h1>
            <div className="space-y-6">
              <Input
                type="text"
                placeholder="Enter your title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-xl font-bold"
              />
              <div className="space-y-2">
                <Textarea
                  placeholder="Write your blog content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={10}
                />
              </div>
              <div className="flex justify-between items-center text-sm text-purple-300">
                <span>{wordCount} words</span>
                <span>{content.length} characters</span>
              </div>
            </div>
          </div>
          <div className="bg-black/30 px-6 py-4 flex justify-between items-center">
            <Button onClick={handleCorrection} disabled={isCorrecting}>
              {isCorrecting ? 'Correcting...' : 'Check and Correct'}
            </Button>
            <Button onClick={handlePublish} disabled={isPublishing}>
              {isPublishing ? 'Publishing...' : 'Publish Post'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
