"use client";

import type React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-provider";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronDown } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

const SCROLL_OFFSET = 100;

function useActiveSection(sections: Section[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 400) {
        setActiveSection("");
        return;
      }

      const scrollPosition = scrollY + 200;
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;

        if (scrollPosition >= offsetTop) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return activeSection;
}

function useSectionToggle(initialSections: string[]) {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(initialSections)
  );

  const toggleSection = useCallback((id: string) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  return { openSections, toggleSection };
}

export default function PrivacidadPage() {
  const { t, language } = useLanguage();
  const sections: Section[] = useMemo(
    () => [
      { id: "responsable", title: "1. RESPONSABLE DEL TRATAMIENTO" },
      { id: "datos-recopilados", title: "2. DATOS QUE RECOPILAMOS" },
      { id: "finalidad", title: "3. FINALIDAD DEL TRATAMIENTO" },
      { id: "legitimacion", title: "4. LEGITIMACIÓN" },
      { id: "conservacion", title: "5. CONSERVACIÓN DE DATOS" },
      { id: "destinatarios", title: "6. DESTINATARIOS" },
      { id: "derechos", title: "7. SUS DERECHOS" },
      { id: "seguridad", title: "8. MEDIDAS DE SEGURIDAD" },
      { id: "cookies", title: "9. COOKIES Y TECNOLOGÍAS SIMILARES" },
      { id: "redes-sociales", title: "10. REDES SOCIALES" },
      { id: "menores", title: "11. MENORES DE EDAD" },
      { id: "modificaciones", title: "12. MODIFICACIONES" },
      { id: "contacto", title: "13. CONTACTO" },
    ],
    []
  );

  const initialOpenSections = useMemo(
    () => sections.map((s) => s.id),
    [sections]
  );

  const { openSections, toggleSection } = useSectionToggle(initialOpenSections);
  const activeSection = useActiveSection(sections);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - SCROLL_OFFSET,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-12 px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-background to-card/30"
      >
        <div className="container mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            {t.legal.privacy}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            {t.legal.lastUpdate}: 8 de noviembre de 2025
          </motion.p>
        </div>
      </motion.section>

      <main className="flex-1 px-6 md:px-12 lg:px-16 xl:px-20 pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* ASIDE - Fijo solo en lg+ */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-5 max-h-[calc(100vh-120px)] overflow-y-auto">
                <h2 className="text-sm sm:text-base font-semibold mb-4 text-foreground">
                  {t.legal.index}
                </h2>
                <nav className="space-y-1" aria-label="Índice de contenidos">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left text-xs sm:text-sm transition-all py-2 px-3 rounded-md ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* CONTENIDO PRINCIPAL */}
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 space-y-8 sm:space-y-10"
              >
                {/* Language Notice */}
                {language !== "es" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 text-center"
                  >
                    <p className="text-sm sm:text-base text-yellow-700 dark:text-yellow-400 font-medium">
                      ℹ️ {t.legal.onlySpanish}
                    </p>
                  </motion.div>
                )}

                {/* Introduction */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                >
                  En cumplimiento del Reglamento (UE) 2016/679 del Parlamento
                  Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018 de
                  Protección de Datos Personales (LOPDGDD), le informamos sobre
                  nuestra política de privacidad y el tratamiento de sus datos
                  personales.
                </motion.p>

                {/* Section 1 */}
                <AccordionSection
                  id="responsable"
                  number={1}
                  title="RESPONSABLE DEL TRATAMIENTO"
                  isOpen={openSections.has("responsable")}
                  onToggle={() => toggleSection("responsable")}
                  delay={0.6}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <ul className="list-none space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>
                        <strong>Responsable:</strong> Carlos Yépez
                      </li>
                      <li>
                        <strong>Actividad:</strong> Clases de bachata y salsa
                      </li>
                      <li>
                        <strong>Domicilio:</strong> Málaga, España
                      </li>
                      <li>
                        <strong>Email:</strong>{" "}
                        <a
                          href="mailto:bachataalairelibrelibre@gmail.com"
                          className="text-primary hover:underline break-all"
                        >
                          bachataalairelibrelibre@gmail.com
                        </a>
                      </li>
                      <li>
                        <strong>Teléfono:</strong> +34 698 50 16 76
                      </li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Section 2 */}
                <AccordionSection
                  id="datos-recopilados"
                  number={2}
                  title="DATOS QUE RECOPILAMOS"
                  isOpen={openSections.has("datos-recopilados")}
                  onToggle={() => toggleSection("datos-recopilados")}
                  delay={0.7}
                >
                  <div className="space-y-3 sm:space-y-4 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <div>
                      <p className="font-semibold mb-2">
                        2.1 Datos de Identificación
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4">
                        <li>Nombre y apellidos</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Número de teléfono</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">
                        2.2 Datos de Navegación
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4">
                        <li>Dirección IP</li>
                        <li>Tipo de navegador</li>
                        <li>Páginas visitadas</li>
                        <li>Fecha y hora de acceso</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">2.3 Datos Opcionales</p>
                      <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4">
                        <li>Nivel de baile</li>
                        <li>Preferencias de horario</li>
                        <li>
                          Información adicional proporcionada voluntariamente
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionSection>

                {/* Section 3 */}
                <AccordionSection
                  id="finalidad"
                  number={3}
                  title="FINALIDAD DEL TRATAMIENTO"
                  isOpen={openSections.has("finalidad")}
                  onToggle={() => toggleSection("finalidad")}
                  delay={0.8}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Sus datos personales serán tratados con las siguientes
                      finalidades:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>Gestionar las reservas de clases de baile</li>
                      <li>
                        Responder a sus consultas y solicitudes de información
                      </li>
                      <li>
                        Enviarle información sobre nuestras clases, eventos y
                        promociones (solo con su consentimiento)
                      </li>
                      <li>
                        Mejorar nuestros servicios y la experiencia del usuario
                      </li>
                      <li>Cumplir con nuestras obligaciones legales</li>
                      <li>Realizar análisis estadísticos anónimos</li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Section 4 */}
                <AccordionSection
                  id="legitimacion"
                  number={4}
                  title="LEGITIMACIÓN"
                  isOpen={openSections.has("legitimacion")}
                  onToggle={() => toggleSection("legitimacion")}
                  delay={0.9}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>La base legal para el tratamiento de sus datos es:</p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>
                        <strong>Ejecución de un contrato:</strong> Para la
                        prestación de nuestros servicios de clases de baile
                      </li>
                      <li>
                        <strong>Consentimiento:</strong> Para el envío de
                        comunicaciones comerciales
                      </li>
                      <li>
                        <strong>Interés legítimo:</strong> Para mejorar nuestros
                        servicios y análisis estadístico
                      </li>
                      <li>
                        <strong>Obligación legal:</strong> Para cumplir con la
                        normativa fiscal y contable
                      </li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Section 5 */}
                <AccordionSection
                  id="conservacion"
                  number={5}
                  title="CONSERVACIÓN DE DATOS"
                  isOpen={openSections.has("conservacion")}
                  onToggle={() => toggleSection("conservacion")}
                  delay={1.0}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Sus datos personales se conservarán durante el tiempo
                      necesario para cumplir con la finalidad para la que fueron
                      recabados y para determinar las posibles responsabilidades
                      que se pudieran derivar de dicha finalidad y del
                      tratamiento de los datos.
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4 mt-2">
                      <li>
                        <strong>Datos de clientes activos:</strong> Durante la
                        relación contractual y hasta 6 años después por
                        obligaciones fiscales
                      </li>
                      <li>
                        <strong>Datos de consultas:</strong> Hasta que se
                        resuelva la consulta más 1 año adicional
                      </li>
                      <li>
                        <strong>Datos para marketing:</strong> Hasta que retire
                        su consentimiento
                      </li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Section 6 */}
                <AccordionSection
                  id="destinatarios"
                  number={6}
                  title="DESTINATARIOS"
                  isOpen={openSections.has("destinatarios")}
                  onToggle={() => toggleSection("destinatarios")}
                  delay={1.1}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Sus datos personales no serán cedidos a terceros, salvo
                      obligación legal. Podemos compartir sus datos con los
                      siguientes prestadores de servicios que actúan como
                      encargados del tratamiento:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>Proveedores de servicios de hosting</li>
                      <li>Servicios de email marketing (si se ha suscrito)</li>
                      <li>Plataformas de pago (para procesar pagos)</li>
                      <li>
                        Herramientas de análisis web (Google Analytics con IP
                        anonimizada)
                      </li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Section 7 */}
                <AccordionSection
                  id="derechos"
                  number={7}
                  title="SUS DERECHOS"
                  isOpen={openSections.has("derechos")}
                  onToggle={() => toggleSection("derechos")}
                  delay={1.2}
                >
                  <div className="space-y-3 sm:space-y-4 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>Puede ejercer los siguientes derechos:</p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>
                        <strong>Acceso:</strong> Conocer qué datos personales
                        tenemos sobre usted
                      </li>
                      <li>
                        <strong>Rectificación:</strong> Solicitar la corrección
                        de datos inexactos
                      </li>
                      <li>
                        <strong>Supresión:</strong> Solicitar la eliminación de
                        sus datos
                      </li>
                      <li>
                        <strong>Limitación:</strong> Solicitar la limitación del
                        tratamiento
                      </li>
                      <li>
                        <strong>Oposición:</strong> Oponerse al tratamiento de
                        sus datos
                      </li>
                      <li>
                        <strong>Portabilidad:</strong> Recibir sus datos en
                        formato estructurado
                      </li>
                      <li>
                        <strong>Retirada del consentimiento:</strong> En
                        cualquier momento
                      </li>
                    </ul>
                    <p className="mt-3">
                      Para ejercer sus derechos, puede contactarnos en{" "}
                      <a
                        href="mailto:bachataalairelibrelibre@gmail.com"
                        className="text-primary hover:underline"
                      >
                        bachataalairelibrelibre@gmail.com
                      </a>
                      . También tiene derecho a presentar una reclamación ante
                      la Agencia Española de Protección de Datos (
                      <a
                        href="https://www.aepd.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        www.aepd.es
                      </a>
                      ).
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 8 */}
                <AccordionSection
                  id="seguridad"
                  number={8}
                  title="MEDIDAS DE SEGURIDAD"
                  isOpen={openSections.has("seguridad")}
                  onToggle={() => toggleSection("seguridad")}
                  delay={1.3}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Hemos implementado medidas técnicas y organizativas
                      apropiadas para garantizar un nivel de seguridad adecuado
                      al riesgo, incluyendo:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>Cifrado SSL/TLS en las comunicaciones</li>
                      <li>Acceso restringido a datos personales</li>
                      <li>Copias de seguridad periódicas</li>
                      <li>
                        Protocolos de respuesta ante incidentes de seguridad
                      </li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Section 9 */}
                <AccordionSection
                  id="cookies"
                  number={9}
                  title="COOKIES Y TECNOLOGÍAS SIMILARES"
                  isOpen={openSections.has("cookies")}
                  onToggle={() => toggleSection("cookies")}
                  delay={1.4}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Nuestro sitio web utiliza cookies propias y de terceros
                      para mejorar su experiencia de navegación y analizar el
                      uso del sitio. Para más información, consulte nuestra{" "}
                      <a
                        href="/cookies"
                        className="text-primary hover:underline"
                      >
                        Política de Cookies
                      </a>
                      .
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 10 */}
                <AccordionSection
                  id="redes-sociales"
                  number={10}
                  title="REDES SOCIALES"
                  isOpen={openSections.has("redes-sociales")}
                  onToggle={() => toggleSection("redes-sociales")}
                  delay={1.5}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Estamos presentes en redes sociales (Facebook, Instagram,
                      TikTok). El tratamiento de sus datos en estas plataformas
                      se rige por sus propias políticas de privacidad. Le
                      recomendamos revisarlas.
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 11 */}
                <AccordionSection
                  id="menores"
                  number={11}
                  title="MENORES DE EDAD"
                  isOpen={openSections.has("menores")}
                  onToggle={() => toggleSection("menores")}
                  delay={1.6}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Para participar en nuestras clases, los menores de 14 años
                      deben contar con el consentimiento de sus padres o tutores
                      legales. Los mayores de 14 años pueden dar su propio
                      consentimiento, aunque recomendamos que los padres estén
                      informados.
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 12 */}
                <AccordionSection
                  id="modificaciones"
                  number={12}
                  title="MODIFICACIONES"
                  isOpen={openSections.has("modificaciones")}
                  onToggle={() => toggleSection("modificaciones")}
                  delay={1.7}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Nos reservamos el derecho de modificar esta Política de
                      Privacidad en cualquier momento. Los cambios se publicarán
                      en esta página con la fecha de actualización
                      correspondiente. Le recomendamos revisar periódicamente
                      esta política.
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 13 */}
                <AccordionSection
                  id="contacto"
                  number={13}
                  title="CONTACTO"
                  isOpen={openSections.has("contacto")}
                  onToggle={() => toggleSection("contacto")}
                  delay={1.8}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Para cualquier consulta sobre esta Política de Privacidad
                      o sobre el tratamiento de sus datos personales:
                    </p>
                    <ul className="list-none space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>
                        <strong>Email:</strong>{" "}
                        <a
                          href="mailto:bachataalairelibrelibre@gmail.com"
                          className="text-primary hover:underline break-all"
                        >
                          bachataalairelibrelibre@gmail.com
                        </a>
                      </li>
                      <li>
                        <strong>Teléfono:</strong> +34 698 50 16 76
                      </li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                  className="pt-6 sm:pt-8 border-t border-border text-xs sm:text-sm text-muted-foreground"
                >
                  <p>
                    <strong>Última actualización:</strong> 8 de noviembre de
                    2025
                  </p>
                  <p className="mt-2">
                    © 2025 Bachata al Aire Libre - Carlos Yépez. Todos los
                    derechos reservados.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

interface AccordionSectionProps {
  id: string;
  number: number;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  delay: number;
}

function AccordionSection({
  id,
  number,
  title,
  isOpen,
  onToggle,
  children,
  delay,
}: AccordionSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="scroll-mt-24 space-y-3 sm:space-y-4"
    >
      <motion.button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`section-content-${id}`}
        className="flex items-center justify-between w-full gap-2 sm:gap-3 mb-3 sm:mb-4 group"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.div
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary font-bold text-sm sm:text-base"
            animate={{
              scale: isOpen ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 0.3,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(var(--primary), 0.3)",
            }}
          >
            {number}
          </motion.div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-left group-hover:text-primary transition-colors">
            {title}
          </h2>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
        >
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`section-content-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
