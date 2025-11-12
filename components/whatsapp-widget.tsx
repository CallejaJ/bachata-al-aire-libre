"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget({
  phoneNumber = "34123456789",
  message = "Hola Carlos, me gustaría obtener más información sobre las clases de bachata.",
  companyName = "Bachata al Aire Libre",
}) {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setShowWhatsApp(false); // Cerrar el popup después de abrir WhatsApp
  };

  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <motion.button
        type="button"
        aria-label="Abrir chat de WhatsApp"
        onClick={() => setShowWhatsApp(!showWhatsApp)}
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1, // Aparece después de 1 segundo
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#059669",
          boxShadow:
            "0 20px 25px -5px rgba(5, 150, 105, 0.3), 0 10px 10px -5px rgba(5, 150, 105, 0.2)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </div>

        {/* Efecto de ondas en el fondo */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          initial={{ scale: 1, opacity: 0.6 }}
          whileHover={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Indicador de notificación */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* WhatsApp Popup */}
      <AnimatePresence>
        {showWhatsApp && (
          <>
            {/* Overlay para cerrar al hacer click fuera */}
            <motion.div
              className="fixed inset-0 bg-black/20 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWhatsApp(false)}
            />

            {/* Popup del chat */}
            <motion.div
              className="fixed bottom-24 right-6 bg-white rounded-xl shadow-2xl w-80 max-w-[calc(100vw-3rem)] z-[51] overflow-hidden border border-gray-100"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                    {/* Indicador en línea */}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <span className="font-medium text-sm block">
                      {companyName}
                    </span>
                    <span className="text-xs text-green-100">En línea</span>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Cerrar ventana de WhatsApp"
                  onClick={() => setShowWhatsApp(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200 hover:scale-110"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 bg-gradient-to-b from-green-50 to-white">
                {/* Mensaje de bienvenida */}
                <motion.div
                  className="bg-white rounded-lg p-4 mb-4 shadow-sm border border-gray-100 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="absolute -left-2 top-3 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-white" />
                  <p className="text-gray-800 text-sm font-medium flex items-center gap-2">
                    <span className="text-lg">👋</span>
                    ¡Hola!
                  </p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    ¿En qué podemos ayudarte hoy? Estamos aquí para resolver
                    todas tus consultas.
                  </p>
                  <p className="text-xs text-gray-400 mt-2">Hace un momento</p>
                </motion.div>

                {/* Botón para abrir WhatsApp */}
                <motion.button
                  type="button"
                  aria-label="Abrir chat de WhatsApp en nueva ventana"
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-medium text-sm hover:shadow-md relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <MessageCircle className="w-5 h-5" />
                  Iniciar conversación
                </motion.button>

                {/* Mensaje de privacidad */}
                <p className="text-xs text-gray-500 text-center mt-3">
                  Al hacer clic, aceptas iniciar una conversación por WhatsApp
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
