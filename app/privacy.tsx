import React from "react";

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-4 text-white">
      <h1 className="font-serif text-4xl font-bold mb-8 text-[#C4A962]">Política de Privacidad</h1>
      <p className="mb-4 text-[#8C8C8C]">Última actualización: {new Date().toLocaleDateString('es-AR')}</p>
      <p className="mb-4">
        En <strong>W Bar de tapas y vinos</strong> valoramos y respetamos la privacidad de nuestros usuarios y clientes. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas a través de nuestro sitio web.
      </p>
      <h2 className="font-bold text-2xl mt-8 mb-2 text-[#C4A962]">1. Información que recopilamos</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Datos de navegación:</strong> Cuando visitas nuestro sitio, recopilamos información no identificable personalmente, como tu dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia, mediante cookies y tecnologías similares.</li>
        <li><strong>Google Analytics:</strong> Utilizamos Google Analytics para analizar el uso del sitio y mejorar la experiencia del usuario. Google Analytics puede recopilar información sobre tu navegación en nuestro sitio. Puedes consultar la política de privacidad de Google aquí: <a href="https://policies.google.com/privacy?hl=es" target="_blank" className="underline text-[#C4A962]">https://policies.google.com/privacy?hl=es</a></li>
        <li><strong>Datos de contacto:</strong> Si nos contactas por correo electrónico, WhatsApp o formularios, podemos almacenar tu nombre, correo electrónico, número de teléfono y el contenido de tu mensaje para responder a tus consultas.</li>
      </ul>
      <h2 className="font-bold text-2xl mt-8 mb-2 text-[#C4A962]">2. Uso de la información</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Mejorar y personalizar tu experiencia en el sitio.</li>
        <li>Analizar el tráfico y uso del sitio web.</li>
        <li>Responder a tus consultas o solicitudes.</li>
      </ul>
      <h2 className="font-bold text-2xl mt-8 mb-2 text-[#C4A962]">3. Compartir información</h2>
      <p className="mb-4">No compartimos tu información personal con terceros, salvo en los siguientes casos:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Proveedores de servicios que nos ayudan a operar el sitio (por ejemplo, Google Analytics).</li>
        <li>Cuando sea requerido por ley o autoridad competente.</li>
      </ul>
      <h2 className="font-bold text-2xl mt-8 mb-2 text-[#C4A962]">4. Cookies</h2>
      <p className="mb-4">Utilizamos cookies propias y de terceros (Google Analytics) para mejorar la experiencia de navegación. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar el funcionamiento del sitio.</p>
      <h2 className="font-bold text-2xl mt-8 mb-2 text-[#C4A962]">5. Seguridad</h2>
      <p className="mb-4">Adoptamos medidas razonables para proteger tu información personal, aunque ningún sistema es completamente seguro.</p>
      <h2 className="font-bold text-2xl mt-8 mb-2 text-[#C4A962]">6. Derechos del usuario</h2>
      <p className="mb-4">Tienes derecho a acceder, rectificar o eliminar tus datos personales. Para ejercer estos derechos, contáctanos a <a href="mailto:wbardetapasyvinos@gmail.com" className="underline text-[#C4A962]">wbardetapasyvinos@gmail.com</a>.</p>
      <h2 className="font-bold text-2xl mt-8 mb-2 text-[#C4A962]">7. Cambios en la política</h2>
      <p className="mb-4">Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página.</p>
      <h2 className="font-bold text-2xl mt-8 mb-2 text-[#C4A962]">8. Contacto</h2>
      <p className="mb-4">Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Correo electrónico:</strong> <a href="mailto:wbardetapasyvinos@gmail.com" className="underline text-[#C4A962]">wbardetapasyvinos@gmail.com</a></li>
        <li><strong>Dirección:</strong> Av. del Libertador 14658, B1641 Acassuso, Provincia de Buenos Aires, Argentina.</li>
      </ul>
    </section>
  );
} 