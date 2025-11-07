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

export default function CookiesPolicyPage() {
  const { t, language } = useLanguage();
  const sections: Section[] = useMemo(
    () => [
      { id: "que-son", title: "1. ¿QUÉ SON LAS COOKIES?" },
      { id: "tipos", title: "2. TIPOS DE COOKIES QUE UTILIZAMOS" },
      { id: "terceros", title: "3. COOKIES DE TERCEROS" },
      { id: "gestion", title: "4. GESTIÓN DE COOKIES" },
      { id: "implicaciones", title: "5. IMPLICACIONES DE RECHAZAR COOKIES" },
      { id: "actualizaciones", title: "6. ACTUALIZACIONES DE ESTA POLÍTICA" },
      { id: "base-legal", title: "7. BASE LEGAL" },
      { id: "contacto", title: "8. CONTACTO" },
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
            {t.legal.cookies}
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
                  Esta Política de Cookies describe cómo utilizamos las cookies
                  y tecnologías similares en nuestro sitio web de Bachata al
                  Aire Libre.
                </motion.p>

                {/* Section 1 */}
                <AccordionSection
                  id="que-son"
                  number={1}
                  title="¿QUÉ SON LAS COOKIES?"
                  isOpen={openSections.has("que-son")}
                  onToggle={() => toggleSection("que-son")}
                  delay={0.6}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Las cookies son pequeños archivos de texto que se
                      almacenan en su dispositivo (ordenador, tablet o móvil)
                      cuando visita nuestro sitio web. Estas cookies nos
                      permiten:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4">
                      <li>Reconocer su dispositivo</li>
                      <li>Recordar sus preferencias</li>
                      <li>Mejorar su experiencia de navegación</li>
                      <li>Analizar cómo se utiliza nuestro sitio web</li>
                      <li>Mostrar contenido relevante</li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Section 2 */}
                <AccordionSection
                  id="tipos"
                  number={2}
                  title="TIPOS DE COOKIES QUE UTILIZAMOS"
                  isOpen={openSections.has("tipos")}
                  onToggle={() => toggleSection("tipos")}
                  delay={0.7}
                >
                  <div className="space-y-3 sm:space-y-4 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <div>
                      <p className="font-semibold mb-2">
                        2.1 Cookies Técnicas o Necesarias
                      </p>
                      <p className="mb-2">
                        Son esenciales para el correcto funcionamiento del sitio
                        web y no pueden ser desactivadas:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4">
                        <li>Permiten la navegación por el sitio</li>
                        <li>Gestionan el acceso a áreas restringidas</li>
                        <li>Recuerdan elementos del carrito de compra</li>
                        <li>Garantizan la seguridad de la navegación</li>
                      </ul>
                      <p className="mt-2">
                        <strong>Duración:</strong> Sesión (se eliminan al cerrar
                        el navegador)
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">
                        2.2 Cookies de Preferencias o Personalización
                      </p>
                      <p className="mb-2">
                        Permiten recordar información para personalizar su
                        experiencia:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4">
                        <li>Idioma seleccionado</li>
                        <li>Configuración de visualización</li>
                        <li>Preferencias de usuario</li>
                      </ul>
                      <p className="mt-2">
                        <strong>Duración:</strong> Hasta 12 meses
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">
                        2.3 Cookies Analíticas o de Medición
                      </p>
                      <p className="mb-2">
                        Nos ayudan a entender cómo los visitantes interactúan
                        con el sitio web:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4">
                        <li>Número de visitantes</li>
                        <li>Páginas más visitadas</li>
                        <li>Tiempo de permanencia</li>
                        <li>Origen del tráfico</li>
                      </ul>
                      <p className="mt-2">
                        <strong>Duración:</strong> Hasta 24 meses
                      </p>
                      <p className="mt-1 text-muted-foreground italic">
                        Nota: La información se recopila de forma agregada y
                        anónima.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">
                        2.4 Cookies Publicitarias o de Marketing
                      </p>
                      <p className="mb-2">
                        Solo se utilizan con su consentimiento explícito:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4">
                        <li>Mostrar anuncios relevantes</li>
                        <li>Limitar el número de veces que ve un anuncio</li>
                        <li>Medir la efectividad de las campañas</li>
                      </ul>
                      <p className="mt-2">
                        <strong>Duración:</strong> Hasta 12 meses
                      </p>
                    </div>
                  </div>
                </AccordionSection>

                {/* Section 3 */}
                <AccordionSection
                  id="terceros"
                  number={3}
                  title="COOKIES DE TERCEROS"
                  isOpen={openSections.has("terceros")}
                  onToggle={() => toggleSection("terceros")}
                  delay={0.8}
                >
                  <div className="space-y-3 sm:space-y-4 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Utilizamos servicios de terceros que pueden instalar
                      cookies en su dispositivo:
                    </p>

                    <div>
                      <p className="font-semibold mb-2">3.1 Google Analytics</p>
                      <ul className="list-none space-y-1.5 ml-2 sm:ml-4">
                        <li>
                          <strong>Propósito:</strong> Análisis del tráfico web
                        </li>
                        <li>
                          <strong>Información:</strong> Dirección IP
                          anonimizada, páginas visitadas, tiempo de navegación
                        </li>
                        <li>
                          <strong>Más información:</strong>{" "}
                          <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Política de Privacidad de Google
                          </a>
                        </li>
                        <li>
                          <strong>Desactivar:</strong>{" "}
                          <a
                            href="https://tools.google.com/dlpage/gaoptout"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Complemento de inhabilitación de Google Analytics
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">3.2 Redes Sociales</p>
                      <p>
                        Nuestro sitio incluye botones de redes sociales
                        (Facebook, Instagram, TikTok) que pueden instalar
                        cookies para:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4 mt-2">
                        <li>Permitir compartir contenido</li>
                        <li>Mostrar contenido social integrado</li>
                        <li>Analizar el uso de funciones sociales</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">3.3 Metricool</p>
                      <ul className="list-none space-y-1.5 ml-2 sm:ml-4">
                        <li>
                          <strong>Propósito:</strong> Análisis y estadísticas
                          web
                        </li>
                        <li>
                          <strong>Información:</strong> Datos de navegación y
                          comportamiento
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionSection>

                {/* Section 4 */}
                <AccordionSection
                  id="gestion"
                  number={4}
                  title="GESTIÓN DE COOKIES"
                  isOpen={openSections.has("gestion")}
                  onToggle={() => toggleSection("gestion")}
                  delay={0.9}
                >
                  <div className="space-y-3 sm:space-y-4 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <div>
                      <p className="font-semibold mb-2">
                        4.1 Panel de Consentimiento
                      </p>
                      <p className="mb-2">
                        Al acceder por primera vez a nuestro sitio web, verá un
                        banner de cookies donde puede:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4">
                        <li>Aceptar todas las cookies</li>
                        <li>Rechazar cookies no esenciales</li>
                        <li>Personalizar sus preferencias</li>
                        <li>Obtener más información sobre cada tipo</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">
                        4.2 Configuración del Navegador
                      </p>
                      <p className="mb-2">
                        También puede gestionar las cookies desde su navegador:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 ml-2 sm:ml-4">
                        <li>
                          <strong>Chrome:</strong> Configuración {">"}{" "}
                          Privacidad y seguridad {">"} Cookies
                        </li>
                        <li>
                          <strong>Firefox:</strong> Opciones {">"} Privacidad y
                          seguridad {">"} Cookies
                        </li>
                        <li>
                          <strong>Safari:</strong> Preferencias {">"} Privacidad{" "}
                          {">"} Cookies
                        </li>
                        <li>
                          <strong>Edge:</strong> Configuración {">"} Privacidad{" "}
                          {">"} Cookies
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">
                        4.3 Modificar Preferencias
                      </p>
                      <p>
                        Puede cambiar sus preferencias de cookies en cualquier
                        momento desde el pie de página de nuestro sitio web o
                        contactándonos directamente.
                      </p>
                    </div>
                  </div>
                </AccordionSection>

                {/* Section 5 */}
                <AccordionSection
                  id="implicaciones"
                  number={5}
                  title="IMPLICACIONES DE RECHAZAR COOKIES"
                  isOpen={openSections.has("implicaciones")}
                  onToggle={() => toggleSection("implicaciones")}
                  delay={1.0}
                >
                  <div className="space-y-3 sm:space-y-4 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Si decide rechazar o deshabilitar las cookies no
                      esenciales:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>Podrá seguir navegando por el sitio web</li>
                      <li>
                        Algunas funcionalidades pueden no estar disponibles
                      </li>
                      <li>
                        La experiencia de usuario puede ser menos personalizada
                      </li>
                      <li>No podremos recordar sus preferencias</li>
                      <li>Los análisis de uso serán menos precisos</li>
                    </ul>
                    <p className="mt-3 text-muted-foreground italic">
                      Nota: Las cookies técnicas necesarias no pueden ser
                      deshabilitadas sin afectar el funcionamiento del sitio.
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 6 */}
                <AccordionSection
                  id="actualizaciones"
                  number={6}
                  title="ACTUALIZACIONES DE ESTA POLÍTICA"
                  isOpen={openSections.has("actualizaciones")}
                  onToggle={() => toggleSection("actualizaciones")}
                  delay={1.1}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Nos reservamos el derecho de actualizar esta Política de
                      Cookies para reflejar cambios en las tecnologías
                      utilizadas o en la normativa aplicable. Le notificaremos
                      los cambios significativos mediante un aviso en nuestro
                      sitio web.
                    </p>
                    <p>
                      Le recomendamos revisar periódicamente esta política para
                      estar informado sobre cómo utilizamos las cookies.
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 7 */}
                <AccordionSection
                  id="base-legal"
                  number={7}
                  title="BASE LEGAL"
                  isOpen={openSections.has("base-legal")}
                  onToggle={() => toggleSection("base-legal")}
                  delay={1.2}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>Esta política cumple con:</p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>Reglamento (UE) 2016/679 (RGPD)</li>
                      <li>
                        Ley Orgánica 3/2018 de Protección de Datos (LOPDGDD)
                      </li>
                      <li>
                        Ley 34/2002 de Servicios de la Sociedad de la
                        Información (LSSI)
                      </li>
                      <li>Directiva 2009/136/CE (Directiva de Cookies)</li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Section 8 */}
                <AccordionSection
                  id="contacto"
                  number={8}
                  title="CONTACTO"
                  isOpen={openSections.has("contacto")}
                  onToggle={() => toggleSection("contacto")}
                  delay={1.3}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Para cualquier consulta sobre esta Política de Cookies:
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
                      <li>
                        <strong>Ubicación:</strong> Málaga, España
                      </li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
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
