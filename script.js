const preguntas = [
  {
    q: "1. ¿Qué se entiende por empleabilidad en el contexto actual?",
    a: [
      "A) La capacidad de adaptarse a los cambios del mercado laboral.",
      "B) La garantía de obtener un contrato indefinido por tener un título.",
      "C) El número total de horas trabajadas en la vida.",
      "D) La acumulación de títulos sin necesidad de práctica."
    ],
    c: "A"
  },
  {
    q: "2. ¿Qué factor define mejor al perfil emprendedor?",
    a: [
      "A) La gestión exclusiva de patrimonios familiares.",
      "B) La iniciativa personal y la capacidad para asumir riesgos e innovar.",
      "C) El rechazo absoluto a cualquier tipo de formación.",
      "D) La búsqueda de un empleo estable por cuenta ajena."
    ],
    c: "B"
  },
  {
    q: "3. En un análisis DAFO, ¿cuál es una \"Amenaza\"?",
    a: [
      "A) La falta de experiencia del equipo.",
      "B) Contar con una patente tecnológica.",
      "C) La entrada de nuevos competidores con precios más bajos.",
      "D) La alta motivación de los empleados."
    ],
    c: "C"
  },
  {
    q: "4. ¿Cuál es la función principal del DUE?",
    a: [
      "A) Sustituir la contabilidad diaria.",
      "B) Registrar marcas a nivel internacional.",
      "C) Establecer el contrato de alquiler del local.",
      "D) Unificar en un solo formulario los datos para la constitución."
    ],
    c: "D"
  },
  {
    q: "5. ¿Qué representa el Umbral de Rentabilidad?",
    a: [
      "A) El punto donde los ingresos igualan a los costes totales.",
      "B) La cantidad máxima que se puede fabricar.",
      "C) El nivel de impuestos a pagar al año.",
      "D) El precio más alto que el cliente está dispuesto a pagar."
    ],
    c: "A"
  },
  {
    q: "6. ¿Cuál es una \"Soft Skill\" fundamental en el sector IT?",
    a: [
      "A) Conocimiento avanzado de SQL.",
      "B) Comunicación asertiva para perfiles no técnicos.",
      "C) Capacidad de escribir código en Python.",
      "D) Certificación oficial en redes CISCO."
    ],
    c: "B"
  },
  {
    q: "7. En el Marketing Mix, la \"Promoción\" abarca:",
    a: [
      "A) El diseño físico del producto.",
      "B) La elección de canales logísticos.",
      "C) Acciones de comunicación para dar a conocer el producto.",
      "D) El cálculo de descuentos y formas de pago."
    ],
    c: "C"
  },
  {
    q: "8. Diferencia entre gasto e inversión:",
    a: [
      "A) La inversión se recupera a largo plazo; el gasto se consume en el ejercicio.",
      "B) Los gastos siempre son mayores que las inversiones.",
      "C) Las inversiones solo las hacen las grandes empresas.",
      "D) Un gasto nunca es necesario para el negocio."
    ],
    c: "A"
  },
  {
    q: "9. La ventaja de la Sociedad Limitada (S.L.) es:",
    a: [
      "A) No es necesario aportar capital inicial.",
      "B) La responsabilidad de los socios es ilimitada.",
      "C) La protección del patrimonio personal de los socios.",
      "D) La exención total del Impuesto de Sociedades."
    ],
    c: "C"
  },
  {
    q: "10. Impuesto que grava el beneficio de una sociedad:",
    a: [
      "A) IVA.",
      "B) Impuesto sobre Sociedades (IS).",
      "C) IAE.",
      "D) IBI."
    ],
    c: "B"
  },
  {
    q: "11. Herramienta visual de 9 bloques para modelos de negocio:",
    a: [
      "A) Cronograma de Gantt.",
      "B) Pirámide de Maslow.",
      "C) Lienzo Canvas.",
      "D) Balance de Situación."
    ],
    c: "C"
  },
  {
    q: "12. ¿Qué es un Producto Mínimo Viable (PMV)?",
    a: [
      "A) Un producto final listo para marketing.",
      "B) Versión básica para ser probada por clientes reales.",
      "C) Producto defectuoso a bajo precio.",
      "D) Diseño gráfico en papel."
    ],
    c: "B"
  },
  {
    q: "13. Característica del Empresario Individual (Autónomo):",
    a: [
      "A) Responsabilidad limitada.",
      "B) Capital mínimo de 3.000€.",
      "C) Tributa por Impuesto de Sociedades.",
      "D) No hay diferenciación entre patrimonio empresarial y personal."
    ],
    c: "D"
  },
  {
    q: "14. Documento que acredita que el cliente recibió la mercancía:",
    a: [
      "A) Presupuesto.",
      "B) Factura proforma.",
      "C) Albarán.",
      "D) Pagaré."
    ],
    c: "C"
  },
  {
    q: "15. ¿Qué significa ODS?",
    a: [
      "A) Objetivos de Desarrollo Sostenible.",
      "B) Orden de Distribución de Software.",
      "C) Organización de Datos de Seguridad.",
      "D) Obligación de Derechos Sociales."
    ],
    c: "A"
  },
  {
    q: "16. ¿Qué hace un Business Angel?",
    a: [
      "A) Auditar cuentas de empresas públicas.",
      "B) Aportar capital, experiencia y contactos a startups.",
      "C) Gestionar subvenciones de la UE.",
      "D) Ofrecer préstamos hipotecarios."
    ],
    c: "B"
  },
  {
    q: "17. Tarea \"Urgente e Importante\" en gestión del tiempo:",
    a: [
      "A) Planificación estratégica anual.",
      "B) Correos de publicidad.",
      "C) Crisis de servidor caído.",
      "D) Llamada de un amigo para café."
    ],
    c: "C"
  },
  {
    q: "18. ¿Qué es la Propuesta de Valor?",
    a: [
      "A) El precio de venta al público.",
      "B) El valor de la empresa en el mercado.",
      "C) Conjunto de beneficios que resuelve un problema al cliente.",
      "D) El margen bruto por unidad."
    ],
    c: "C"
  },
  {
    q: "19. Medio de pago donde el banco garantiza el pago:",
    a: [
      "A) Cheque conformado.",
      "B) Transferencia ordinaria.",
      "C) Pago al contado.",
      "D) Letra de cambio."
    ],
    c: "A"
  },
  {
    q: "20. Función del Registro Mercantil:",
    a: [
      "A) Dar publicidad legal a los actos de las sociedades.",
      "B) Cobrar multas de tráfico.",
      "C) Registrar patentes de invención.",
      "D) Gestionar altas en Seguridad Social."
    ],
    c: "A"
  },
  {
    q: "21. ¿Qué es el Marketing Mix Digital?",
    a: [
      "A) Vender solo en tiendas físicas.",
      "B) Sustituir productos por suscripciones.",
      "C) Eliminar la variable precio.",
      "D) Adaptar las 4P al entorno online."
    ],
    c: "D"
  },
  {
    q: "22. ¿Qué analiza el modelo PESTEL?",
    a: [
      "A) Procesos internos de fabricación.",
      "B) Factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales.",
      "C) Satisfacción de los empleados.",
      "D) Calidad del código fuente."
    ],
    c: "B"
  },
  {
    q: "23. Base Imponible vs. Total Factura:",
    a: [
      "A) Son conceptos idénticos.",
      "B) La base es el precio sin impuestos; el total incluye el IVA.",
      "C) La base incluye envíos y el total no.",
      "D) El total es lo que se paga antes de descuentos."
    ],
    c: "B"
  },
  {
    q: "24. Ventaja del Crowdfunding (además del dinero):",
    a: [
      "A) Garantiza cero fallos técnicos.",
      "B) Valida la idea de negocio en el mercado.",
      "C) Elimina el pago de impuestos.",
      "D) Obliga a los bancos a dar préstamos."
    ],
    c: "B"
  },
  {
    q: "25. ¿Qué significa que el IRPF sea progresivo?",
    a: [
      "A) El tipo impositivo aumenta según aumenta la base.",
      "B) Se paga a lo largo de 10 años.",
      "C) Solo lo pagan empresas que progresan.",
      "D) El porcentaje es el mismo para todos."
    ],
    c: "A"
  },
  {
    q: "26. ¿Para qué sirve un Elevator Pitch?",
    a: [
      "A) Calcular mantenimiento de ascensores.",
      "B) Presentar una idea de forma breve y persuasiva.",
      "C) Redactar estatutos de una S.A.",
      "D) Pedir una baja laboral."
    ],
    c: "B"
  },
  {
    q: "27. ¿Qué es un KPI?",
    a: [
      "A) Indicador clave de rendimiento.",
      "B) Código de acceso a bases de datos.",
      "C) Técnica de relajación.",
      "D) Contrato para informáticos junior."
    ],
    c: "A"
  },
  {
    q: "28. Resultado negativo en cuenta de resultados:",
    a: [
      "A) Demasiado dinero en el banco.",
      "B) Gastos superiores a los ingresos.",
      "C) Éxito total en ventas.",
      "D) No hay obligación de declarar renta."
    ],
    c: "B"
  },
  {
    q: "29. Función de una incubadora de empresas:",
    a: [
      "A) Vender hardware usado.",
      "B) Ofrecer espacio, asesoría y apoyo a startups.",
      "C) Sustituir al equipo directivo.",
      "D) Pagar luz y agua para siempre."
    ],
    c: "B"
  },
  {
    q: "30. Primer paso antes de invertir en un negocio:",
    a: [
      "A) Certificado de defunción.",
      "B) Plan de empresa (Business Plan).",
      "C) Manual de usuario de la App.",
      "D) Invitación a la fiesta."
    ],
    c: "B"
  }
];

const quizForm = document.getElementById("quizForm");
const resultado = document.getElementById("resultado");

function renderizarQuiz() {
  quizForm.innerHTML = "";

  preguntas.forEach((pregunta, index) => {
    const div = document.createElement("div");
    div.className = "question";

    let html = `<p>${pregunta.q}</p>`;

    pregunta.a.forEach((opcion) => {
      const letra = opcion.charAt(0);
      html += `
        <label class="option">
          <input type="radio" name="q${index}" value="${letra}">
          ${opcion}
        </label><br>
      `;
    });

    div.innerHTML = html;
    quizForm.appendChild(div);
  });
}

function corregir() {
  let aciertos = 0;

  preguntas.forEach((pregunta, index) => {
    const bloque = quizForm.children[index];
    const respuestaAnterior = bloque.querySelector(".respuesta-correcta");

    if (respuestaAnterior) {
      respuestaAnterior.remove();
    }

    bloque.classList.remove("correcta", "incorrecta");

    const seleccionada = document.querySelector(`input[name="q${index}"]:checked`);

    if (seleccionada && seleccionada.value === pregunta.c) {
      aciertos++;
      bloque.classList.add("correcta");
    } else {
      bloque.classList.add("incorrecta");

      const p = document.createElement("p");
      p.className = "respuesta-correcta";
      p.textContent = `Respuesta correcta: ${pregunta.c}`;
      bloque.appendChild(p);
    }
  });

  const nota = ((aciertos / preguntas.length) * 10).toFixed(2);
  resultado.textContent = `Has acertado ${aciertos} de ${preguntas.length}. Nota: ${nota} / 10`;
}

renderizarQuiz();