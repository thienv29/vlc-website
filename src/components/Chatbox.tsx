import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-[#3CB371] to-[#1E2A78] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
        >
          <MessageCircle className="text-white" size={28} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px]">
          <div className="bg-gradient-to-r from-[#1E2A78] to-[#3CB371] p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="text-[#1E2A78]" size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold">VLC Support</h3>
                <p className="text-xs text-gray-200">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="bg-[#F5F7FA] rounded-2xl rounded-tl-none p-4">
              <p className="text-sm text-gray-700">
                Xin chào! Tôi có thể giúp gì cho bạn hôm nay?
              </p>
              <p className="text-xs text-gray-500 mt-2">09:30</p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="text-left px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-[#3CB371] hover:bg-[#3CB371]/5 transition-all text-sm">
                Tư vấn dịch vụ EPC
              </button>
              <button className="text-left px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-[#3CB371] hover:bg-[#3CB371]/5 transition-all text-sm">
                Yêu cầu báo giá
              </button>
              <button className="text-left px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-[#3CB371] hover:bg-[#3CB371]/5 transition-all text-sm">
                Thông tin dự án
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Nhập tin nhắn..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3CB371] text-sm"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-[#3CB371] text-white rounded-xl hover:bg-[#34a563] transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
