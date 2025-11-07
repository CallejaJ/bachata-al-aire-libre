import React from "react";

interface GMapsProps {
  className?: string;
  height?: string | number;
}

const GMaps: React.FC<GMapsProps> = ({ className = "", height = 500 }) => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.1559759340234!2d-4.420047024316219!3d36.72061547226998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7eab9b5d1db%3A0x72bc70c964779521!2sC%2F%20Alcazabilla%2C%201%2C%20Distrito%20Centro%2C%2029015%20M%C3%A1laga!5e1!3m2!1ses!2ses!4v1762448363629!5m2!1ses!2ses";

  return (
    <section className={`w-full ${className}`}>
      <div className="w-full h-full">
        <iframe
          src={mapSrc}
          width="100%"
          height={height}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Clases de Bachata - C/ Alcazabilla, 1, Málaga"
          className="w-full border-0 block"
        />
      </div>
    </section>
  );
};

export default GMaps;
