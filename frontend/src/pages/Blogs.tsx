'use client'

import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Blog, useBlogs } from "../hooks"
import { Search, BookOpen, Sun, Moon } from "lucide-react"

export const Blogs = () => {
  const { loading, blogs } = useBlogs()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const results = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredBlogs(results)
  }, [searchTerm, blogs])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800' : 'bg-gradient-to-br from-orange-100 via-rose-100 to-purple-100'
    }`}>
      <Appbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-10 text-center relative">
          <button
            onClick={toggleDarkMode}
            className="absolute right-0 top-0 p-2 rounded-full bg-opacity-20 bg-white dark:bg-opacity-20 dark:bg-gray-800 text-yellow-500 dark:text-indigo-400 hover:bg-opacity-30 dark:hover:bg-opacity-30 transition-all duration-300"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
          <h1 className={`text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600'
          }`}>
            Discover Inspiring Blogs
          </h1>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Explore a world of knowledge, creativity, and insights
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className={`w-full pl-12 pr-4 py-3 rounded-full border-2 ${
                isDarkMode 
                  ? 'bg-gray-800 border-purple-500 text-white placeholder-gray-400 focus:border-pink-400' 
                  : 'bg-white border-rose-200 text-gray-800 placeholder-gray-500 focus:border-purple-400'
              } focus:ring focus:ring-opacity-50 shadow-lg transition-all duration-300 ease-in-out`}
              placeholder="Search blogs..."
            />
          </div>
        </div>

        {loading ? (
          <div className="space-y-8">
            {[...Array(5)].map((_, index) => (
              <BlogSkeleton key={index} isDarkMode={isDarkMode} />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  authorName={blog.author.name || "Anonymous"}
                  title={blog.title}
                  content={blog.content}
                  publishedDate={blog.publishedDate}
                  isDarkMode={isDarkMode}
                  />
              ))
            ) : (
              <div className={`text-center py-16 ${
                isDarkMode ? 'bg-gray-800 bg-opacity-60' : 'bg-white bg-opacity-60'
              } rounded-2xl shadow-lg backdrop-blur-sm`}>
                <BookOpen className={`mx-auto h-16 w-16 ${isDarkMode ? 'text-purple-400' : 'text-rose-400'} mb-4`} />
                <h2 className={`text-3xl font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>No blogs found</h2>
                <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Try adjusting your search terms or explore new topics</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

// Enhanced BlogSkeleton component
const BlogSkeleton = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <div className={`animate-pulse ${
    isDarkMode ? 'bg-gray-800 bg-opacity-60' : 'bg-white bg-opacity-60'
  } rounded-2xl shadow-md p-6 backdrop-blur-sm`}>
    <div className="flex items-center space-x-4 mb-4">
      <div className={`rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} h-12 w-12`}></div>
      <div className="flex-1 space-y-2">
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} rounded w-3/4`}></div>
        <div className={`h-3 ${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} rounded w-1/2`}></div>
      </div>
    </div>
    <div className="space-y-3">
      <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} rounded w-3/4`}></div>
      <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} rounded w-full`}></div>
      <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} rounded w-5/6`}></div>
    </div>
    <div className="mt-6 flex justify-between items-center">
      <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} rounded w-1/4`}></div>
      <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} rounded w-1/4`}></div>
    </div>
  </div>
)