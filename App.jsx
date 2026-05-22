import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Hoy me siento con ganas de avanzar en mis estudios.", user: "Usuario_928" }
  ]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3436] p-4">
      <nav className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-2xl font-bold">NODO</h1>
        <button className="bg-[#D63031] text-white px-4 py-2 rounded-full">Modo Calma</button>
      </nav>

      <main className="max-w-xl mx-auto">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm mb-4 border-l-4 border-[#74B9FF]">
            <p className="text-lg mb-4">{post.text}</p>
            <div className="flex gap-4">
              <button className="text-sm hover:text-[#D63031]">Apoyo</button>
              <button className="text-sm hover:text-[#D63031]">Entiendo</button>
              <button className="text-sm hover:text-[#D63031]">Fortaleza</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
        
