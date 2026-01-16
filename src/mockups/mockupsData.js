
export const people = [
    {
      id: '1',
      atencion: '001231',
      nombre: 'Ana Brenda Martínez',
      cedula: '8254125',
      edad: '21',
      aseguradora: 'Seguros Caracas',
      servicio: ['Laboratorio', 'Cirugia', 'Procedimiento'],
      creacion: '28/10/2023',
      via: 'OMT'
    },
    {
      id: '2',
      atencion: '001245',
      nombre: 'Calvin Hawkins',
      cedula: '5212012',
      edad: '24',
      aseguradora: 'Seguros Mercantil',
      servicio: ['RayosX', 'Ecografia', 'Laboratorio', 'Procedimiento'],
      creacion: '28/10/2023 - 8:00',
      via: 'OMV'
    },
    {
      id: '3',
      atencion: '001236',
      nombre: 'Sofia Rodriguez',
      cedula: '5212012',
      edad: '38',
      aseguradora: 'Seguros Mercantil',
      servicio: ['RayosX', 'Ecografia', 'Laboratorio', 'Tratamiento'],
      creacion: '28/10/2023 - 8:00',
      via: 'OMT'
    },
    {
      id: '4',
      atencion: '0124252',
      nombre: 'Alfonso Colmenares',
      cedula: '8254125',
      edad: '16',
      aseguradora: 'Seguros Caracas',
      servicio: ['Laboratorio', 'Ecografia', 'Tratamiento'],
      creacion: '28/10/2023 - 8:00',
      via: 'OMT'
    },
    {
      id: '5',
      atencion: '00147548',
      nombre: 'Carlos Guillen',
      cedula: '8254125',
      edad: '35',
      aseguradora: 'Seguros Caracas',
      servicio: ['Laboratorio', 'Interconsulta', 'Procedimiento'],
      creacion: '28/10/2023 - 8:00',
      via: 'OMT'
    },
    {
      id: '6',
      atencion: '010199',
      nombre: 'Carlos Guillen',
      cedula: '8254125',
      edad: '35',
      aseguradora: 'Seguros Caracas',
      servicio: ['Pediatria', 'Interconsulta', 'Procedimiento'],
      creacion: '28/10/2023 - 8:00',
      via: 'OMT'
    }
  ]

/* CARDS CONUNTERS - LISTADO ATENCIONES */

 export const cardsTickets = [
  {
    servicio: 'AMD',
    total: '3'
  },
  {
    servicio: 'EMD',
    total: '8'
  },
  {
    servicio: 'TLD',
    total: '2'
  },
  {
    servicio: 'LAB',
    total: '5'
  },
  {
    servicio: 'PHD',
    total: '1'
  },
 ]

 /* TABLA - LISTADO ATENCIONES DESPACHO */

export const atencionesDesp = [
  {
    id: "1",
    atencion: "000121",
    nombre: "Carolina Leal",
    cedula: "5212012",
    fecha: "28/10/2023 - 8:00",
    estado: "Distrito Capital",
    aseguradora: "Seguros Mercantil",
    servicio: "AMD",
    estatus: {
      text: "Creado",
      color: "bg-primary/20 text-primary"
    },
    plan: "Plan salud primaria",
    contratante: "Empresas Polar",
  },
  {
    id: "2",
    atencion: "000122",
    nombre: "Rodrigo Alegendra",
    cedula: "20145207",
    fecha: "28/10/2023 - 9:00",
    estado: "Distrito Capital",
    aseguradora: "Seguros Caracas",
    servicio: "EMD",
    estatus: {
      text: "Programado",
      color: "bg-status-programado/20 text-status-programado"
    },
    plan: "Estar Seguros",
    contratante: "Digitel",
  },
  {
    id: "3",
    atencion: "000133",
    nombre: "Juan Marcos Martínez",
    cedula: "20145207",
    fecha: "28/10/2023 - 9:00",
    estado: "Distrito Capital",
    aseguradora: "Seguros Caracas",
    servicio: "TLD",
    estatus: {
      text: "Espera",
      color: "bg-status-espera bg-opacity-20 text-status-espera"
    },
    plan: "Estar Seguros",
    contratante: "Digitel",
  },
  {
    id: "4",
    atencion: "002567",
    nombre: "Cristian Ronaldo",
    cedula: "20145207",
    fecha: "28/10/2023 - 10:00",
    estado: "Distrito Capital",
    aseguradora: "Seguros Oceanica",
    servicio: "TLD",
    estatus: {
      text: "Espera",
      color: "bg-status-espera/20 text-status-espera"
    },
    plan: "Estar Seguros",
    contratante: "Digitel",
  },
];
export const gestionServicios = [
  {
    id: "1",
    nombre: "Carol Catalano",
    aseguradora: "Seguros Mercantil",
    status: "Vencido",
    fecha: "28/10/2024 - 8:00",
    ubicacion: "Avenida Romulo Gallegos, Edificio El Bosque",
    motivo: "Fuerte caida, posible fractura.",
    diagnostico: "Paciente alerta y orientado, sin signos de angustia aguda. Piel: Coloración normal, sin lesiones visibles, hidratada. Cabeza y cuello: Sin deformidades, cuello simétrico, sin masas palpables.",
    sintomas: "Paciente alerta y orientado, sin signos de angustia aguda. Piel: Coloración normal, sin lesiones visibles, hidratada. Cabeza y cuello: Sin deformidades, cuello simétrico, sin masas palpables."
  },
  {
    id: "2",
    nombre: "Valentina Catalano",
    aseguradora: "Seguros Mercantil",
    status: "Vencido",
    fecha: "28/10/2024 - 8:15",
    ubicacion: "Avenida Romulo Gallegos, Edificio El Bosque",
    motivo: "Mareos",
    diagnostico: "Paciente alerta y orientado, sin signos de angustia aguda. Piel: Coloración normal, sin lesiones visibles, hidratada. Cabeza y cuello: Sin deformidades, cuello simétrico, sin masas palpables.",
    sintomas: "Paciente alerta y orientado, sin signos de angustia aguda. Piel: Coloración normal, sin lesiones visibles, hidratada. Cabeza y cuello: Sin deformidades, cuello simétrico, sin masas palpables."
  },
  {
    id: "3",
    nombre: "Roberto Mendoza",
    aseguradora: "Seguros Caracas",
    status: "Vencido",
    fecha: "28/10/2024 - 8:24",
    ubicacion: "Avenida Romulo Gallegos, Edificio El Bosque",
    motivo: "Dolor de cabeza",
    diagnostico: "Paciente alerta y orientado, sin signos de angustia aguda. Piel: Coloración normal, sin lesiones visibles, hidratada. Cabeza y cuello: Sin deformidades, cuello simétrico, sin masas palpables.",
    sintomas: "Paciente alerta y orientado, sin signos de angustia aguda. Piel: Coloración normal, sin lesiones visibles, hidratada. Cabeza y cuello: Sin deformidades, cuello simétrico, sin masas palpables."
  },
];
 /* DASHBOARDS SERVICIOS Y PROGRAMADAS - COLUMNAS */
export const columnData = [
  {
    title: "Entrega de medicamentos",
    cards: [
      people.map(person => ({
        nombre: person.nombre,
        aseguradora: person.aseguradora,
        status: "Vencido", 
        ubicacion: "Avenida Romulo Gallegos, Edificio El Bosque", 
        motivo: "Fuerte caida, posible fractura."
      }))
    ],
  },
  {
    title: "Atención medica domiciliaria",
    cards: [
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Vencido", ubicacion: "Avenida Romulo Gallegos, Edificio El Bosque", motivo: "Fuerte caida, posible fractura." },
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Creado", ubicacion: "Avenida Andrés Bello, Calle 17", motivo: "Migrañas, Emergencia hipertensiva, Hipermelanosis." },
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Retrasado", ubicacion: "Calle Los Angeles, Edificio Laguna Azul", motivo: "Vomitos." },
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Vencido", ubicacion: "Avenida Romulo Gallegos, Torre 20 Sur", motivo: "Nauseas y dolor de cabeza." },
    ],
  },
  {
    title: "Traslado",
    cards: [
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Creado", ubicacion: "Avenida Andrés Bello, Calle 17", motivo: "Migrañas, Emergencia hipertensiva, Hipermelanosis." },
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Retrasado", ubicacion: "Calle Los Angeles, Edificio Laguna Azul", motivo: "Vomitos." },
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Vencido", ubicacion: "Avenida Romulo Gallegos, Edificio El Bosque", motivo: "Fuerte caida, posible fractura." },
    ],
  },
  {
    title: "Laboratorio",
    cards: [
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Vencido", ubicacion: "Avenida Romulo Gallegos, Edificio El Bosque", motivo: "Fuerte caida, posible fractura." },
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Vencido", ubicacion: "Avenida Andrés Bello, Calle 17", motivo: "Migrañas, Emergencia hipertensiva, Hipermelanosis." },
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Retrasado", ubicacion: "Calle Los Angeles, Edificio Laguna Azul", motivo: "Vomitos." },
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Vencido", ubicacion: "Avenida Romulo Gallegos, Torre 20 Sur", motivo: "Nauseas y dolor de cabeza." },
    ],
  },
  {
    title: "Hospitalización domiciliaria",
    cards: [
      { nombre: people.nombre, aseguradora: people.aseguradora, status: "Creado", ubicacion: "Calle Los Angeles, Edificio Laguna Azul", motivo: "Vomitos." },
    ],
  },
];