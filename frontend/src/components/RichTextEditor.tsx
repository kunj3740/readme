'use client'

import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { motion } from 'framer-motion'

interface QuillEditorProps {
  value: string
  onChange: (content: string) => void
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const quillRef = useRef<Quill | null>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image', 'video'],
            ['clean']
          ],
          keyboard: {
            bindings: {
              backspace: {
                key: 8,
                handler: function() {
                  return true; // This allows the default backspace behavior
                }
              }
            }
          }
        },
        formats: ['header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'image', 'video', 'color', 'background']
      })

      quill.root.innerHTML = value

      quill.on('text-change', () => {
        const content = quill.root.innerHTML
        onChange(content)
      })

      quill.on('selection-change', (range) => {
        setIsFocused(!!range)
      })

      quillRef.current = quill
    }
  }, [value, onChange])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace' && quillRef.current) {
        const range = quillRef.current.getSelection()
        if (range && range.length > 0) {
          quillRef.current.deleteText(range.index, range.length)
        } else if (range && range.index > 0) {
          quillRef.current.deleteText(range.index - 1, 1)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <motion.div 
      className="quill-editor bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        ref={editorRef}
        animate={{
          boxShadow: isFocused ? '0 0 0 3px rgba(66, 153, 225, 0.5)' : 'none'
        }}
        transition={{ duration: 0.2 }}
      />
      <style>{`
        .quill-editor .ql-toolbar.ql-snow {
          border: none;
          background-color: #2d3748;
          border-bottom: 1px solid #4a5568;
          padding: 12px;
        }
        .quill-editor .ql-container.ql-snow {
          border: none;
          background-color: #1a202c;
          color: #e2e8f0;
          min-height: 300px;
          font-size: 16px;
          line-height: 1.6;
        }
        .quill-editor .ql-editor {
          padding: 20px;
        }
        .quill-editor .ql-editor::before {
          color: #718096;
          font-style: italic;
        }
        .quill-editor .ql-snow .ql-stroke {
          stroke: #a0aec0;
        }
        .quill-editor .ql-snow .ql-fill {
          fill: #a0aec0;
        }
        .quill-editor .ql-snow .ql-picker {
          color: #a0aec0;
        }
        .quill-editor .ql-snow .ql-picker-options {
          background-color: #2d3748;
          border-color: #4a5568;
        }
        .quill-editor .ql-snow .ql-tooltip {
          background-color: #2d3748;
          border-color: #4a5568;
          color: #e2e8f0;
        }
      `}</style>
    </motion.div>
  )
}

export default QuillEditor