import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">CivicEye</h1>
          <p className="text-xl text-gray-600">AI-Powered Civic Issue Detection & Routing</p>
        </header>
        <main className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-4">
            Welcome to CivicEye - Check problems in your surrounding and upload them to civic eye.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Report Issue
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;
