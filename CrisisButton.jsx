import React, { useState } from 'react';

const CrisisButton = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="fixed bottom-8 right-8">
      <button 
        onClick={() => setShowHelp(!showHelp)}
        className="bg-[#D63031] text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition"
      >
        {showHelp ? "Cerrar Ayuda" : "Necesito Apoyo"}
      </button>

      {showHelp && (
        <div className="absolute bottom-16 right-0 w-64 bg-white p-6 rounded-xl shadow-2xl border border-gray-200">
          <h3 className="font-bold mb-2">Respira conmigo</h3>
          <p className="text-sm text-gray-600 mb-4">Inhala 4 segundos, mantén 4, exhala 6. No estás solo.</p>
          <button className="text-[#74B9FF] font-semibold">Publicar en muro de apoyo</button>
        </div>
      )}
    </div>
  );
};

export default CrisisButton;
