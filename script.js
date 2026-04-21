const preguntas = [
  ["1. ¿Qué se entiende por empleabilidad en el contexto actual?",
    [
      "A) La capacidad de adaptarse a los cambios del mercado laboral.",
      "B) La garantía de obtener un contrato indefinido por tener un título.",
      "C) El número total de horas trabajadas en la vida.",
      "D) La acumulación de títulos sin necesidad de práctica."
    ],
    "A"
  ],
  ["2. ¿Qué factor define mejor al perfil emprendedor?",
    [
      "A) La gestión exclusiva de patrimonios familiares.",
      "B) La iniciativa personal y la capacidad para asumir riesgos e innovar.",
      "C) El rechazo absoluto a cualquier tipo de formación.",
      "D) La búsqueda de un empleo estable por cuenta ajena."
    ],
    "B"
  ],
  ["3. En un análisis DAFO, ¿cuál es una \"Amenaza\"?",
    [
      "A) La falta de experiencia del equipo.",
      "B) Contar con una patente tecnológica.",
      "C) La entrada de nuevos competidores con precios más bajos.",
      "D) La alta motivación de los empleados."
    ],
    "C"
  ],
  ["4. ¿Cuál es la función principal del DUE?",
    [
      "A) Sustituir la contabilidad diaria.",
      "B) Registrar marcas a nivel internacional.",
      "C) Establecer el contrato de alquiler del local.",
      "D) Unificar en un solo formulario los datos para la constitución."
    ],
    "D"
  ],
  ["5. ¿Qué representa el Umbral de Rentabilidad?",
    [
      "A) El punto donde los ingresos igualan a los costes totales.",
      "B) La cantidad máxima que se puede fabricar.",
      "C) El nivel de impuestos a pagar al año.",
      "D) El precio más alto que el cliente está dispuesto a pagar."
    ],
    "A"
  ],
  ["6. ¿Cuál es una \"Soft Skill\" fundamental en el sector IT?",
    [
      "A) Conocimiento avanzado de SQL.",
      "B) Comunicación asertiva para perfiles no técnicos.",
      "C) Capacidad de escribir código en Python.",
      "D) Certificación oficial en redes CISCO."
    ],
    "B"
  ],
  ["7. En el Marketing Mix, la \"Promoción\" abarca:",
    [
      "A) El diseño físico del producto.",
      "B) La elección de canales logísticos.",
      "C) Acciones de comunicación para dar a conocer el producto.",
      "D) El cálculo de descuentos y formas de pago."
    ],
    "C"
  ],
  ["8. Diferencia entre gasto e inversión:",
    [
      "A) La inversión se recupera a largo plazo; el gasto se consume en el ejercicio.",
      "B) Los gastos siempre son mayores que las inversiones.",
      "C) Las inversiones solo las hacen las grandes empresas.",
      "D) Un gasto nunca es necesario para el negocio."
    ],
    "A"
  ],
  ["9. La ventaja de la Sociedad Limitada (S.L.) es:",
    [
      "A) No es necesario aportar capital inicial.",
      "B) La responsabilidad de los socios es ilimitada.",
      "C) La protección del patrimonio personal de los socios.",
      "D) La exención total del Impuesto de Sociedades."
    ],
    "C"
  ],
  ["10. Impuesto que grava el beneficio de una sociedad:",
    [
      "A) IVA.",
      "B) Impuesto sobre Sociedades (IS).",
      "C) IAE.",
      "D) IBI."
    ],
    "B"
  ],
  ["11. Herramienta visual de 9 bloques para modelos de negocio:",
    [
      "A) Cronograma de Gantt.",
      "B) Pirámide de Maslow.",
      "C) Lienzo Canvas.",
      "D) Balance de Situación."
    ],
    "C"
  ],
  ["12. ¿Qué es un Producto Mínimo Viable (PMV)?",
    [
      "A) Un producto final listo para marketing.",
      "B) Versión básica para ser probada por clientes reales.",
      "C) Producto defectuoso a bajo precio.",
      "D) Diseño gráfico en papel."
    ],
    "B"
  ],
  ["13. Característica del Empresario Individual (Autónomo):",
    [
      "A) Responsabilidad limitada.",
      "B) Capital mínimo de 3.000€.",
      "C) Tributa por Impuesto de Sociedades.",
      "D) No hay diferenciación entre patrimonio empresarial y personal."
    ],
    "D"
  ],
  ["14. Documento que acredita que el cliente recibió la mercancía:",
    [
      "A) Presupuesto.",
      "B) Factura proforma.",
      "C) Albarán.",
      "D) Pagaré."
    ],
    "C"
  ],
  ["15. ¿Qué significa ODS?",
    [
      "A) Objetivos de Desarrollo Sostenible.",
      "B) Orden de Distribución de Software.",
      "C) Organización de Datos de Seguridad.",
      "D) Obligación de Derechos Sociales."
    ],
    "A"
  ],
  ["16. ¿Qué hace un Business Angel?",
    [
      "A) Auditar cuentas de empresas públicas.",
      "B) Aportar capital, experiencia y contactos a startups.",
      "C) Gestionar subvenciones de la UE.",
      "D) Ofrecer préstamos hipotecarios."
    ],
    "B"
  ],
  ["17. Tarea \"Urgente e Importante\" en gestión del tiempo:",
    [
      "A) Planificación estratégica anual.",
      "B) Correos de publicidad.",
      "C) Crisis de servidor caído.",
      "D) Llamada de un amigo para café."
    ],
    "C"
  ],
  ["18. ¿Qué es la Propuesta de Valor?",
    [
      "A) El precio de venta al público.",
      "B) El valor de la empresa en el mercado.",
      "C) Conjunto de beneficios que resuelve un problema al cliente.",
      "D) El margen bruto por unidad."
    ],
    "C"
  ],
  ["19. Medio de pago donde el banco garantiza el pago:",
    [
      "A) Cheque conformado.",
      "B) Transferencia ordinaria.",
      "C) Pago al contado.",
      "D) Letra de cambio."
    ],
    "A"
  ],
  ["20. Función del Registro Mercantil:",
    [
      "A) Dar publicidad legal a los actos de las sociedades.",
      "B) Cobrar multas de tráfico.",
      "C) Registrar patentes de invención.",
      "D) Gestionar altas en Seguridad Social."
    ],
    "A"
  ],
  ["21. ¿Qué es el Marketing Mix Digital?",
    [
      "A) Vender solo en tiendas físicas.",
      "B) Sustituir productos por suscripciones.",
      "C) Eliminar la variable precio.",
      "D) Adaptar las 4P al entorno online."
    ],
    "D"
  ],
  ["22. ¿Qué analiza el modelo PESTEL?",
    [
      "A) Procesos internos de fabricación.",
      "B) Factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales.",
      "C) Satisfacción de los empleados.",
      "D) Calidad del código fuente."
    ],
    "B"
  ],
  ["23. Base Imponible vs. Total Factura:",
    [
      "A) Son conceptos idénticos.",
      "B) La base es el precio sin impuestos; el total incluye el IVA.",
      "C) La base incluye envíos y el total no.",
      "D) El total es lo que se paga antes de descuentos."
    ],
    "B"
  ],
  ["24. Ventaja del Crowdfunding (además del dinero):",
    [
      "A) Garantiza cero fallos técnicos.",
      "B) Valida la idea de negocio en el mercado.",
      "C) Elimina el pago de impuestos.",
      "D) Obliga a los bancos a dar préstamos."
    ],
    "B"
  ],
  ["25. ¿Qué significa que el IRPF sea progresivo?",
    [
      "A) El tipo impositivo aumenta según aumenta la base.",
      "B) Se paga a lo largo de 10 años.",
      "C) Solo lo pagan empresas que progresan.",
      "D) El porcentaje es el mismo para todos."
    ],
    "A"
  ],
  ["26. ¿Para qué sirve un Elevator Pitch?",
    [
      "A) Calcular mantenimiento de ascensores.",
      "B) Presentar una idea de forma breve y persuasiva.",
      "C) Redactar estatutos de una S.A.",
      "D) Pedir una baja laboral."
    ],
    "B"
  ],
  ["27. ¿Qué es un KPI?",
    [
      "A) Indicador clave de rendimiento.",
      "B) Código de acceso a bases de datos.",
      "C) Técnica de relajación.",
      "D) Contrato para informáticos junior."
    ],
    "A"
  ],
  ["28. Resultado negativo en cuenta de resultados:",
    [
      "A) Demasiado dinero en el banco.",
      "B) Gastos superiores a los ingresos.",
      "C) Éxito total en ventas.",
      "D) No hay obligación de declarar renta."
    ],
    "B"
  ],
  ["29. Función de una incubadora de empresas:",
    [
      "A) Vender hardware usado.",
      "B) Ofrecer espacio, asesoría y apoyo a startups.",
      "C) Sustituir al equipo directivo.",
      "D) Pagar luz y agua para siempre."
    ],
    "B"
  ],
  ["30. Primer paso antes de invertir en un negocio:",
    [
      "A) Certificado de defunción.",
      "B) Plan de empresa (Business Plan).",
      "C) Manual de usuario de la App.",
      "D) Invitación a la fiesta."
    ],
    "B"
  ]
];

const form = document.getElementById("quizForm");
const resultado = document.getElementById("resultado");

function renderizarQuiz() {
  form.innerHTML = "";

  preguntas.forEach((p, i) => {
    let html = `<div class="question"><p>${p[0]}</p>`;
    p[1].forEach(op => {
      html += `<label class="option"><input type="radio" name="q${i}" value="${op[0]}"> ${op}</label><br>`;
    });
    html += `</div>`;
    form.innerHTML += html;
  });
}

function corregir() {
  let nota = 0;

  preguntas.forEach((p, i) => {
    const resp = document.querySelector(`input[name="q${i}"]:checked`);
    const bloque = form.children[i];

    bloque.classList.remove("correcta", "incorrecta");

    const anterior = bloque.querySelector(".respuesta-correcta");
    if (anterior) anterior.remove();

    if (resp && resp.value === p[2]) {
      nota++;
      bloque.classList.add("correcta");
    } else {
      bloque.classList.add("incorrecta");
      bloque.innerHTML += `<p class="respuesta-correcta">Respuesta correcta: ${p[2]}</p>`;
    }
  });

  const final = (nota / preguntas.length * 10).toFixed(2);
  resultado.innerText = "Nota: " + final + " / 10";
}

document.addEventListener("DOMContentLoaded", renderizarQuiz);