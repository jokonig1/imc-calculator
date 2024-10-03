'use client';

import { useState } from 'react';

export default function HomePage() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);

  const calculateBMI = () => {
    if (!weight || !height) {
      setMessage('Por favor, ingresa peso y altura válidos.');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    setBmi(bmiValue);

    let progressValue = 0;
    if (bmiValue < 18.5) {
      setMessage('Bajo peso');
      progressValue = 25;
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setMessage('Normal');
      progressValue = 50;
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setMessage('Sobrepeso');
      progressValue = 75;
    } else {
      setMessage('Obesidad');
      progressValue = 100;
    }

    setProgress(progressValue);
  };
  

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Calculadora de IMC</h1>
      <p className="text-center text-gray-600 mb-8">Introduce tu peso y altura para calcular tu Índice de Masa Corporal</p>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ingresa tu peso"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Altura (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ingresa tu altura"
        />
      </div>

      <button
        onClick={calculateBMI}
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 font-semibold"
      >
        Calcular IMC
      </button>

      {bmi && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold">Tu IMC es: {bmi.toFixed(2)}</h2>
          <p className="text-lg mt-2">{message}</p>

          {/* Barra de progreso */}
          <div className="relative pt-4">
            <div className="overflow-hidden h-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${progress}%` }}
                className={`${
                  bmi < 18.5 || bmi >= 25 ? 'bg-red-500' : 'bg-green-500'
                }`}
              ></div>
            </div>
          </div>

          {/* Etiquetas debajo de la barra */}
          <div className="flex justify-between text-xs mt-2 text-gray-600">
            <span>Bajo peso</span>
            <span>Normal</span>
            <span>Sobrepeso</span>
            <span>Obesidad</span>
          </div>
        </div>
      )}
    </div>
  );
}
