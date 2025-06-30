import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

function LoadingTransition() {
  const [stage, setStage] = useState('square');
  
  useEffect(() => {
    setTimeout(() => setStage('circle'), 500);
    setTimeout(() => setStage('zoom'), 1200);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center">
      <div className="relative">
        <div 
          className={`
            bg-white flex items-center justify-center transition-all duration-700 ease-in-out
            ${stage === 'square' ? 'w-24 h-24 rounded-lg' : ''}
            ${stage === 'circle' ? 'w-32 h-32 rounded-full' : ''}
            ${stage === 'zoom' ? 'w-[200vh] h-[200vh] rounded-full opacity-0' : ''}
          `}
          style={{
            backgroundColor: stage !== 'square' ? '#312e81' : 'white',
            transform: stage === 'zoom' ? 'scale(10)' : 'scale(1)',
          }}
        >
          <span className={`font-bold transition-all duration-500 ${
            stage === 'square' ? 'text-3xl text-indigo-900' : 'text-4xl text-white'
          }`}>
            {stage === 'square' ? 'Login' : 'OTAP'}
          </span>
        </div>
        
        {stage === 'circle' && (
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-white animate-fade-in">
            <CheckCircle size={24} />
            <p className="text-xl font-semibold">Login Successful!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoadingTransition;