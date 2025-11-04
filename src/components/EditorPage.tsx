import { useState } from 'react'
import TipTapEditor from './TipTapEditor'
import { useTranslation } from 'react-i18next'
import { servicesData } from '../data/servicesData'
import { newsData } from '../data/newsData'

const EditorPage = () => {
  const { t } = useTranslation()
  const [content, setContent] = useState(`
<h1>Chào mừng đến với TipTap Editor!</h1>

<p><strong>Đây là một editor văn bản phong phú</strong> được xây dựng với TipTap. Bạn có thể:</p>

<ul>
  <li><strong>Định dạng văn bản:</strong> <em>in nghiêng</em>, <s>gạch ngang</s>, <code>code</code></li>
  <li>Tạo <strong>danh sách</strong> có thứ tự và không thứ tự</li>
  <li>Thêm <strong>tiêu đề</strong> với các cấp độ khác nhau</li>
</ul>

<h2>Tính năng chính</h2>

<p>Editor hỗ trợ đầy đủ các tính năng:</p>

<ul>
  <li>🖼️ <strong>Chèn hình ảnh</strong> từ URL</li>
  <li>🔗 <strong>Tạo liên kết</strong> với text tùy chỉnh</li>
  <li>🎥 <strong>Nhúng video</strong> YouTube và các nền tảng khác</li>
  <li>↩️ <strong>Undo/Redo</strong> để hoàn tác</li>
</ul>

<blockquote>
  <p>"TipTap giúp tạo nội dung đẹp và chuyên nghiệp một cách dễ dàng!"</p>
</blockquote>

<p>Hãy thử chỉnh sửa nội dung này và khám phá các tính năng của editor!</p>
  `.trim())
  const [selectedContent, setSelectedContent] = useState('')

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
  }

  const loadContent = (selectedContent: string) => {
    setContent(selectedContent)
    setSelectedContent(selectedContent)
  }

  const allContent = [
    ...servicesData.map(item => ({ type: 'Service', title: item.title, content: item.content })),
    ...newsData.map(item => ({ type: 'News', title: item.title, content: item.content }))
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              TipTap Rich Text Editor
            </h1>
            <p className="text-gray-600">
              Một editor văn bản phong phú được xây dựng với TipTap
            </p>
          </div>

          {/* Content Loader */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">📂 Tải nội dung có sẵn để edit:</h3>
              <button
                onClick={() => loadContent('<h1>Nội dung mới</h1><p>Bắt đầu viết nội dung của bạn...</p>')}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                ✏️ Tạo mới
              </button>
            </div>
            <select
              value={selectedContent}
              onChange={(e) => {
                const selected = allContent.find(item => item.content === e.target.value)
                if (selected) {
                  loadContent(selected.content)
                }
              }}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Chọn nội dung để edit --</option>
              {allContent.map((item, index) => (
                <option key={index} value={item.content}>
                  {item.type}: {item.title.substring(0, 50)}...
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-600 mt-2">
              Chọn một bài viết từ danh sách để load vào editor và chỉnh sửa, hoặc tạo nội dung mới
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Editor bên trái */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Editor</h3>
              <TipTapEditor
                content={content}
                onChange={handleContentChange}
                placeholder="Nhập nội dung của bạn ở đây..."
                className="w-full"
              />

              <div className="mt-6">
                <h4 className="text-md font-semibold mb-2">HTML Output:</h4>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto max-h-48">
                  {content}
                </pre>
              </div>
            </div>

            {/* Preview bên phải */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Xem trước</h3>
              <div className="border border-gray-300 rounded-lg p-6 bg-white min-h-[600px]">
                <div
                  className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl max-w-none"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Tính năng của TipTap Editor:
            </h3>
            <ul className="list-disc list-inside text-blue-800 space-y-1">
              <li>Định dạng văn bản: <strong>Bold</strong>, <em>Italic</em>, <s>Strike</s>, Code</li>
              <li><strong>🎨 Thay đổi màu chữ</strong> với color picker</li>
              <li>Danh sách có thứ tự và không thứ tự</li>
              <li>Định dạng tiêu đề (H1, H2, H3)</li>
              <li>Blockquotes và code blocks</li>
              <li><strong>🖼️ Chèn hình ảnh từ URL</strong></li>
              <li><strong>🔗 Tạo liên kết với text tùy chỉnh</strong></li>
              <li><strong>🎥 Nhúng video YouTube và các nền tảng khác</strong></li>
              <li>Undo/Redo functionality</li>
              <li>Giới hạn ký tự (10,000 ký tự)</li>
              <li>Responsive design với Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorPage
