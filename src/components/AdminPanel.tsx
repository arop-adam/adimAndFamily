import { useState } from 'react';
import { Mail, Phone, User, Calendar, Check, Clock } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
}

export default function AdminPanel() {
  const [messages, setMessages] = useState<Message[]>([
    // Sample messages - in real implementation, these would come from your backend
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+211 123 456 789',
      subject: 'Investment Inquiry',
      message: 'I am interested in learning more about your real estate investment opportunities.',
      timestamp: new Date().toISOString(),
      status: 'new'
    }
  ]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password protection - in production, use proper authentication
    if (password === 'admin123') {
      setIsAdmin(true);
    } else {
      alert('Incorrect password');
    }
  };

  const updateMessageStatus = (messageId: string, newStatus: Message['status']) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, status: newStatus } : msg
      )
    );
  };

  const getStatusIcon = (status: Message['status']) => {
    switch (status) {
      case 'new':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'read':
        return <Mail className="w-4 h-4 text-gray-600" />;
      case 'replied':
        return <Check className="w-4 h-4 text-green-600" />;
    }
  };

  const getStatusColor = (status: Message['status']) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'read':
        return 'bg-gray-100 text-gray-800';
      case 'replied':
        return 'bg-green-100 text-green-800';
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Default password: admin123
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-900">Message Admin Panel</h1>
            <button
              onClick={() => setIsAdmin(false)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Messages</h2>
              <div className="space-y-3">
                {messages.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No messages yet</p>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => setSelectedMessage(message)}
                      className={`p-4 rounded-lg border cursor-pointer transition hover:shadow-md ${
                        selectedMessage?.id === message.id
                          ? 'border-red-600 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(message.status)}
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(message.status)}`}>
                            {message.status}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {new Date(message.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{message.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{message.subject}</p>
                      <p className="text-xs text-gray-500 truncate">{message.email}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Message Details */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="border-b pb-4 mb-4">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-blue-900">{selectedMessage.subject}</h2>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateMessageStatus(selectedMessage.id, 'read')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition"
                      >
                        Mark as Read
                      </button>
                      <button
                        onClick={() => updateMessageStatus(selectedMessage.id, 'replied')}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm transition"
                      >
                        Mark as Replied
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="font-semibold">Name:</span>
                      <span>{selectedMessage.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="font-semibold">Email:</span>
                      <a href={`mailto:${selectedMessage.email}`} className="text-blue-600 hover:underline">
                        {selectedMessage.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="font-semibold">Phone:</span>
                      <span>{selectedMessage.phone || 'Not provided'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="font-semibold">Date:</span>
                      <span>{new Date(selectedMessage.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Message:</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Reply via Email
                  </a>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Message Selected</h3>
                <p className="text-gray-500">Select a message from the list to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
