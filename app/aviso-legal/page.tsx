"use client";

import type React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
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

export default function AvisoLegalPage() {
  const { t, language } = useLanguage();
  const sections: Section[] = useMemo(
    () => [
      { id: "info-general", title: "1. INFORMACIÓN GENERAL" },
      { id: "objeto", title: "2. OBJETO Y SERVICIOS" },
      { id: "condiciones", title: "3. CONDICIONES DE USO" },
      { id: "responsabilidades", title: "4. RESPONSABILIDADES" },
      { id: "propiedad", title: "5. PROPIEDAD INTELECTUAL" },
      { id: "proteccion-datos", title: "6. PROTECCIÓN DE DATOS" },
      { id: "enlaces", title: "7. ENLACES EXTERNOS" },
      { id: "modificaciones", title: "8. MODIFICACIONES" },
      { id: "legislacion", title: "9. LEGISLACIÓN APLICABLE" },
      { id: "contacto", title: "10. CONTACTO" },
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
            {t.legal.legalNotice}
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
                  El presente Aviso Legal regula el uso del sitio web de Bachata
                  al Aire Libre, propiedad de Carlos Yépez (en adelante, "el
                  titular", "nosotros" o "nuestro").
                </motion.p>

                {/* Section 1 */}
                <AccordionSection
                  id="info-general"
                  number={1}
                  title="INFORMACIÓN GENERAL"
                  isOpen={openSections.has("info-general")}
                  onToggle={() => toggleSection("info-general")}
                  delay={0.6}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p className="font-medium">Datos del titular:</p>
                    <ul className="list-none space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>
                        <strong>Nombre:</strong> Carlos Yépez
                      </li>
                      <li>
                        <strong>Actividad:</strong> Clases de bachata y salsa al
                        aire libre
                      </li>
                      <li>
                        <strong>Ubicación:</strong> Málaga, España
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
                  id="objeto"
                  number={2}
                  title="OBJETO Y SERVICIOS"
                  isOpen={openSections.has("objeto")}
                  onToggle={() => toggleSection("objeto")}
                  delay={0.7}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Bachata al Aire Libre ofrece clases y servicios
                      relacionados con el baile de bachata y salsa en la ciudad
                      de Málaga. Nuestros servicios incluyen:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>Clases grupales de bachata y salsa al aire libre</li>
                      <li>Clases particulares personalizadas</li>
                      <li>Talleres especiales y eventos</li>
                      <li>
                        Información sobre horarios y ubicaciones de las clases
                      </li>
                    </ul>
                  </div>
                </AccordionSection>

                {/* Section 3 */}
                <AccordionSection
                  id="condiciones"
                  number={3}
                  title="CONDICIONES DE USO"
                  isOpen={openSections.has("condiciones")}
                  onToggle={() => toggleSection("condiciones")}
                  delay={0.8}
                >
                  <div className="space-y-3 sm:space-y-4 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <div>
                      <p className="font-semibold mb-2">
                        3.1 Acceso al Sitio Web
                      </p>
                      <p>
                        El acceso y uso de este sitio web es gratuito. Los
                        usuarios que deseen acceder al sitio web deberán hacerlo
                        de forma responsable y respetando la legalidad vigente,
                        la buena fe, el orden público, los usos del tráfico y
                        las presentes condiciones.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">3.2 Uso Adecuado</p>
                      <p>
                        El usuario se compromete a utilizar el sitio web, sus
                        contenidos y servicios de conformidad con:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4 mt-2">
                        <li>La legislación española vigente</li>
                        <li>Las presentes condiciones de uso</li>
                        <li>
                          La moral y buenas costumbres generalmente aceptadas
                        </li>
                        <li>El orden público</li>
                      </ul>
                    </div>
                  </div>
                </AccordionSection>

                {/* Section 4 */}
                <AccordionSection
                  id="responsabilidades"
                  number={4}
                  title="RESPONSABILIDADES"
                  isOpen={openSections.has("responsabilidades")}
                  onToggle={() => toggleSection("responsabilidades")}
                  delay={0.9}
                >
                  <div className="space-y-3 sm:space-y-4 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <div>
                      <p className="font-semibold mb-2">
                        4.1 Contenidos del Sitio Web
                      </p>
                      <p>
                        El titular se reserva el derecho a modificar, en
                        cualquier momento y sin previo aviso, la presentación,
                        configuración y localización del sitio web, así como los
                        contenidos y las condiciones requeridas para utilizar
                        los mismos.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">
                        4.2 Disponibilidad del Servicio
                      </p>
                      <p>
                        El titular no garantiza la disponibilidad y continuidad
                        del funcionamiento del sitio web. Cuando ello sea
                        razonablemente posible, se advertirá previamente de las
                        interrupciones en el funcionamiento del sitio web.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">
                        4.3 Responsabilidad en las Clases
                      </p>
                      <p>
                        Los participantes en las clases de baile lo hacen bajo
                        su propia responsabilidad. Se recomienda consultar con
                        un médico antes de participar en actividades físicas
                        intensas.
                      </p>
                    </div>
                  </div>
                </AccordionSection>

                {/* Section 5 */}
                <AccordionSection
                  id="propiedad"
                  number={5}
                  title="PROPIEDAD INTELECTUAL"
                  isOpen={openSections.has("propiedad")}
                  onToggle={() => toggleSection("propiedad")}
                  delay={1.0}
                >
                  <div className="space-y-3 sm:space-y-4 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Todos los contenidos del sitio web, incluyendo pero no
                      limitándose a textos, fotografías, gráficos, imágenes,
                      iconos, tecnología, software, links y demás contenidos
                      audiovisuales o sonoros, así como su diseño gráfico y
                      códigos fuente, son propiedad exclusiva de Carlos Yépez o
                      de terceros que han autorizado su uso.
                    </p>
                    <p>
                      Quedan reservados todos los derechos. Queda prohibida la
                      reproducción, distribución, comunicación pública,
                      transformación o cualquier otra actividad que se pueda
                      realizar con los contenidos sin la autorización por
                      escrito del titular.
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 6 */}
                <AccordionSection
                  id="proteccion-datos"
                  number={6}
                  title="PROTECCIÓN DE DATOS"
                  isOpen={openSections.has("proteccion-datos")}
                  onToggle={() => toggleSection("proteccion-datos")}
                  delay={1.1}
                >
                  <div className="space-y-3 sm:space-y-4 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      De conformidad con lo establecido en el Reglamento (UE)
                      2016/679 del Parlamento Europeo y del Consejo, de 27 de
                      abril de 2016, relativo a la protección de las personas
                      físicas (RGPD) y en la Ley Orgánica 3/2018, de 5 de
                      diciembre, de Protección de Datos Personales y garantía de
                      los derechos digitales (LOPDGDD), le informamos:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <li>
                        <strong>Responsable:</strong> Carlos Yépez
                      </li>
                      <li>
                        <strong>Finalidad:</strong> Gestión de consultas,
                        reservas de clases y envío de información sobre nuestros
                        servicios
                      </li>
                      <li>
                        <strong>Legitimación:</strong> Consentimiento del
                        interesado
                      </li>
                      <li>
                        <strong>Destinatarios:</strong> No se cederán datos a
                        terceros salvo obligación legal
                      </li>
                      <li>
                        <strong>Derechos:</strong> Acceso, rectificación,
                        supresión, limitación, portabilidad y oposición
                      </li>
                    </ul>
                    <p className="mt-2">
                      Para más información, consulte nuestra{" "}
                      <a
                        href="/privacidad"
                        className="text-primary hover:underline"
                      >
                        Política de Privacidad
                      </a>
                      .
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 7 */}
                <AccordionSection
                  id="enlaces"
                  number={7}
                  title="ENLACES EXTERNOS"
                  isOpen={openSections.has("enlaces")}
                  onToggle={() => toggleSection("enlaces")}
                  delay={1.2}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Este sitio web puede contener enlaces a sitios web de
                      terceros. El titular no controla ni se responsabiliza del
                      contenido de dichos sitios web externos ni de las
                      prácticas de privacidad de los mismos.
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 8 */}
                <AccordionSection
                  id="modificaciones"
                  number={8}
                  title="MODIFICACIONES"
                  isOpen={openSections.has("modificaciones")}
                  onToggle={() => toggleSection("modificaciones")}
                  delay={1.3}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      El titular se reserva el derecho de modificar este Aviso
                      Legal en cualquier momento. Las modificaciones entrarán en
                      vigor desde su publicación en el sitio web. Se recomienda
                      revisar periódicamente este aviso legal.
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 9 */}
                <AccordionSection
                  id="legislacion"
                  number={9}
                  title="LEGISLACIÓN APLICABLE"
                  isOpen={openSections.has("legislacion")}
                  onToggle={() => toggleSection("legislacion")}
                  delay={1.4}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Este Aviso Legal se rige por la legislación española
                      vigente. Para la resolución de cualquier controversia
                      derivada del acceso y uso de este sitio web, las partes se
                      someten expresamente a los Juzgados y Tribunales de
                      Málaga, España.
                    </p>
                  </div>
                </AccordionSection>

                {/* Section 10 */}
                <AccordionSection
                  id="contacto"
                  number={10}
                  title="CONTACTO"
                  isOpen={openSections.has("contacto")}
                  onToggle={() => toggleSection("contacto")}
                  delay={1.5}
                >
                  <div className="space-y-2 sm:space-y-3 leading-relaxed text-foreground/90 text-sm sm:text-base">
                    <p>
                      Para cualquier consulta relacionada con este Aviso Legal o
                      nuestros servicios:
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
                  transition={{ duration: 0.6, delay: 1.6 }}
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
