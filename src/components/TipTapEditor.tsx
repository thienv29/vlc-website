import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { TextStyle } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { useEffect, useState } from 'react'

interface TipTapEditorProps {
  content?: string
  onChange?: (content: string) => void
  placeholder?: string
  className?: string
}

const TipTapEditor = ({
  content = '',
  onChange,
  placeholder = 'Start writing...',
  className = ''
}: TipTapEditorProps) => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
      CharacterCount.configure({
        limit: 10000,
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 hover:text-blue-800 underline',
        },
      }),
      TextStyle,
      Color,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4',
      },
    },
  })

  const addImage = () => {
    const url = prompt('Nhập URL hình ảnh:')
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }

  const addLink = () => {
    const url = prompt('Nhập URL liên kết:')
    const text = prompt('Nhập text cho liên kết:')
    if (url && text) {
      editor?.chain().focus().insertContent(`<a href="${url}" target="_blank">${text}</a>`).run()
    }
  }

  const addVideo = () => {
    const url = prompt('Nhập URL video (YouTube, Vimeo, etc.):')
    if (url) {
      // Extract video ID for YouTube
      const youtubeMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
      if (youtubeMatch) {
        const videoId = youtubeMatch[1]
        editor?.chain().focus().insertContent(`<div class="video-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`).run()
      } else {
        // For other video platforms, just embed as iframe
        editor?.chain().focus().insertContent(`<div class="video-wrapper"><iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen></iframe></div>`).run()
      }
    }
  }

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  if (!editor) {
    return null
  }

  return (
    <div className={`border border-gray-300 rounded-lg ${className}`}>
      <div className="border-b border-gray-200 p-2 bg-gray-50">
        <div className="flex flex-wrap gap-2 mb-2">
          {/* Text Formatting */}
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-2 py-1 rounded text-sm font-medium ${
              editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <strong>B</strong>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-2 py-1 rounded text-sm font-medium ${
              editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <em>I</em>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`px-2 py-1 rounded text-sm font-medium ${
              editor.isActive('strike') ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <s>S</s>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`px-2 py-1 rounded text-sm font-medium font-mono ${
              editor.isActive('code') ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Code
          </button>

          {/* Color Picker */}
          <input
            type="color"
            onChange={(e) => editor?.chain().focus().setColor(e.target.value).run()}
            value={editor?.getAttributes('textStyle').color || '#000000'}
            className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
            title="Chọn màu chữ"
          />

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          {/* Headings */}
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`px-2 py-1 rounded text-sm font-medium ${
              editor.isActive('heading', { level: 1 }) ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`px-2 py-1 rounded text-sm font-medium ${
              editor.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`px-2 py-1 rounded text-sm font-medium ${
              editor.isActive('heading', { level: 3 }) ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            H3
          </button>

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          {/* Lists */}
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-2 py-1 rounded text-sm font-medium ${
              editor.isActive('bulletList') ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            • List
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`px-2 py-1 rounded text-sm font-medium ${
              editor.isActive('orderedList') ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            1. List
          </button>

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          {/* Block Elements */}
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`px-2 py-1 rounded text-sm font-medium ${
              editor.isActive('blockquote') ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            ❝ Quote
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`px-2 py-1 rounded text-sm font-medium font-mono ${
              editor.isActive('codeBlock') ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Code Block
          </button>

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          {/* Media */}
          <button
            onClick={addImage}
            className="px-2 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100"
          >
            🖼️ Image
          </button>
          <button
            onClick={addLink}
            className="px-2 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100"
          >
            🔗 Link
          </button>
          <button
            onClick={addVideo}
            className="px-2 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100"
          >
            🎥 Video
          </button>

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          {/* Actions */}
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="px-2 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100"
          >
            ――
          </button>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="px-2 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            ↶ Undo
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="px-2 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            ↷ Redo
          </button>
        </div>

        <div className="text-sm text-gray-500 text-right">
          {editor.storage.characterCount.characters()}/10000 characters
        </div>
      </div>
      <EditorContent editor={editor} className="min-h-[300px]" />
    </div>
  )
}

export default TipTapEditor
