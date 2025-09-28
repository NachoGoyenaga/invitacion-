import React, { useState, useEffect } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// ---------------- BOTONES FLOTANTES ----------------
const FloatingButtons = ({ onYes, onNo }) => {
  return (
    <div style={{
      position: 'fixed',
      left: '50%',
      bottom: '20px',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '12px',
      zIndex: 9999
    }}>
      <button
        onClick={onYes}
        className="w-32 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-full shadow-md transition"
      >
        Sí 💕
      </button>

      <button
        onClick={onNo}
        className="w-32 bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 rounded-full shadow-md transition"
      >
        No 💔
      </button>
    </div>
  )
}

// ---------------- APP ----------------
const App = () => {
  const [showAnswer, setShowAnswer] = useState(false)
  const [answerContent, setAnswerContent] = useState({ image: '', text: '' })

  const handleYes = () => {
    setAnswerContent({ image: `${import.meta.env.BASE_URL}yes.png`, text: '¡Sí! 💖' })
    setShowAnswer(true)
  }

  const handleNo = () => {
    setAnswerContent({ image: `${import.meta.env.BASE_URL}no.webp`, text: 'Oh no... 💔' })
    setShowAnswer(true)
  }

  const handleCloseAnswer = () => {
    setShowAnswer(false)
    setAnswerContent({ image: '', text: '' })
  }

  useEffect(() => {
    if (typeof document !== 'undefined' && !document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement('meta')
      meta.name = 'viewport'
      meta.content = 'width=device-width, initial-scale=1'
      document.head.appendChild(meta)
    }
  }, [])

  return (
    <div className="app-root relative min-h-screen bg-pink-100 text-gray-900 font-sans overflow-x-hidden w-full max-w-none box-border">

      {showAnswer ? (
        <section className="w-full px-4 sm:px-6 text-center py-20">
          <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center gap-6">
            <img src={answerContent.image} alt="Resultado" className="w-48 h-48 object-cover rounded-xl shadow-lg" />
            <p className="text-lg sm:text-xl font-semibold text-pink-700">{answerContent.text}</p>
            <button
              onClick={handleCloseAnswer}
              className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold shadow-md"
            >
              Volver
            </button>
          </div>
        </section>
      ) : (
        <>
          <section className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 relative">
            <div className="w-full max-w-md mx-auto">
              <h1 className="text-2xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-6 leading-tight break-words whitespace-normal">
                ¿Quieres una cita conmigo?
              </h1>
            </div>

            <motion.div className="absolute bottom-6" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown size={32} className="text-white opacity-80" />
            </motion.div>
          </section>

          <section className="w-full bg-pink-50 px-4 sm:px-6 text-center">
            <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[70vh]">
              <h2 className="text-xl sm:text-3xl font-semibold text-pink-700 mb-4 break-words">Ubicación: Secreta</h2>
              <p className="text-base sm:text-lg text-pink-900 mb-6">El lugar te lo cuento cuando digas que sí...</p>
              <img src={`${import.meta.env.BASE_URL}citajpg.webp`} alt="Ubicación secreta" className="w-full h-auto rounded-2xl shadow-lg object-cover" />
            </div>
          </section>

          <section className="w-full bg-pink-100 px-4 sm:px-6 text-center">
            <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[70vh]">
              <h2 className="text-xl sm:text-3xl font-semibold text-pink-700 mb-4 break-words">¿Con quién?</h2>
              <p className="text-base sm:text-lg text-pink-900 mb-6">Conmigo</p>
              <img src={`${import.meta.env.BASE_URL}us.jpeg`} alt="Nosotros" className="w-full h-auto rounded-2xl shadow-lg object-cover" />
            </div>
          </section>
        </>
      )}

      <FloatingButtons onYes={handleYes} onNo={handleNo} />
    </div>
  )
}

export default App
