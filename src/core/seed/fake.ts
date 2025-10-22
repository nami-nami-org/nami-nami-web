import { BusquedaIA } from '../entities/BusquedaIA'
import { Pedido } from '../entities/Pedido'
import { PedidoItem } from '../entities/PedidoItem'
import { Platillo } from '../entities/Platillo'
import { CategoriaPlatillo, PlatilloCategoria } from '../entities/PlatilloCategoria'
import { Restaurante } from '../entities/Restaurante'
import { CategoriaRestaurante, RestauranteCategoria } from '../entities/RestauranteCategoria'
import { Usuario } from '../entities/Usuario'
import { RolUsuarios, UsuarioRol } from '../entities/UsuarioRol'
import { Valoracion } from '../entities/Valoracion'

export const USUARIOS: Usuario[] = [
  {
    id: 1,
    nombre: 'María Elena García',
    email: 'maria.garcia@email.com',
    telefono: '+51987654321',
    activo: true,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:30:00Z'
  },
  {
    id: 2,
    nombre: 'Carlos Alberto Mendoza',
    email: 'carlos.mendoza@email.com',
    telefono: '+51923456789',
    activo: true,
    created_at: '2024-01-20T14:45:00Z',
    updated_at: '2024-02-10T16:20:00Z'
  },
  {
    id: 3,
    nombre: 'Ana Lucía Rodríguez',
    email: 'ana.rodriguez@email.com',
    telefono: '+51965432187',
    activo: true,
    created_at: '2024-02-05T09:15:00Z',
    updated_at: '2024-02-05T09:15:00Z'
  },
  {
    id: 4,
    nombre: 'Pedro José Castillo',
    email: 'pedro.castillo@email.com',
    telefono: '+51945678912',
    activo: true,
    created_at: '2024-02-12T11:30:00Z',
    updated_at: '2024-02-12T11:30:00Z'
  },
  {
    id: 5,
    nombre: 'Sofía Beatriz López',
    email: 'sofia.lopez@email.com',
    telefono: '+51978123456',
    activo: true,
    created_at: '2024-02-18T13:45:00Z',
    updated_at: '2024-02-18T13:45:00Z'
  },
  {
    id: 6,
    nombre: 'Luis Fernando Torres',
    email: 'luis.torres@email.com',
    telefono: '+51912345678',
    activo: true,
    created_at: '2024-03-01T08:00:00Z',
    updated_at: '2024-03-01T08:00:00Z'
  },
  {
    id: 7,
    nombre: 'Carmen Rosa Flores',
    email: 'carmen.flores@email.com',
    telefono: '+51998765432',
    activo: true,
    created_at: '2024-03-05T10:20:00Z',
    updated_at: '2024-03-05T10:20:00Z'
  },
  {
    id: 8,
    nombre: 'Roberto Carlos Sánchez',
    email: 'roberto.sanchez@email.com',
    telefono: '+51934567890',
    activo: true,
    created_at: '2024-03-10T14:30:00Z',
    updated_at: '2024-03-10T14:30:00Z'
  },
  {
    id: 9,
    nombre: 'Patricia Mónica Vega',
    email: 'patricia.vega@email.com',
    telefono: '+51956781234',
    activo: true,
    created_at: '2024-03-15T16:45:00Z',
    updated_at: '2024-03-15T16:45:00Z'
  },
  {
    id: 10,
    nombre: 'Jorge Luis Ramírez',
    email: 'jorge.ramirez@email.com',
    telefono: '+51967890123',
    activo: true,
    created_at: '2024-03-20T09:10:00Z',
    updated_at: '2024-03-20T09:10:00Z'
  },
  {
    id: 11,
    nombre: 'Daniela Fernanda Campos',
    email: 'daniela.campos@email.com',
    telefono: '+51989012345',
    activo: true,
    created_at: '2024-03-25T11:25:00Z',
    updated_at: '2024-03-25T11:25:00Z'
  },
  {
    id: 12,
    nombre: 'Miguel Ángel Herrera',
    email: 'miguel.herrera@email.com',
    telefono: '+51923451234',
    activo: true,
    created_at: '2024-04-01T13:40:00Z',
    updated_at: '2024-04-01T13:40:00Z'
  },
  {
    id: 13,
    nombre: 'Gabriela Isabel Morales',
    email: 'gabriela.morales@email.com',
    telefono: '+51945672345',
    activo: true,
    created_at: '2024-04-05T15:55:00Z',
    updated_at: '2024-04-05T15:55:00Z'
  },
  {
    id: 14,
    nombre: 'Ricardo Antonio Paredes',
    email: 'ricardo.paredes@email.com',
    telefono: '+51967893456',
    activo: true,
    created_at: '2024-04-10T08:15:00Z',
    updated_at: '2024-04-10T08:15:00Z'
  },
  {
    id: 15,
    nombre: 'Valentina Cristina Rojas',
    email: 'valentina.rojas@email.com',
    telefono: '+51978904567',
    activo: true,
    created_at: '2024-04-15T10:30:00Z',
    updated_at: '2024-04-15T10:30:00Z'
  }
]

export const ROLES: RolUsuarios[] = [
  {
    id: 1,
    nombre: 'consumidor',
    activo: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    nombre: 'restaurante',
    activo: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    nombre: 'admin',
    activo: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    nombre: 'delivery',
    activo: true,
    created_at: '2024-01-01T00:00:00Z'
  }
]

export const USUARIO_ROLES: UsuarioRol[] = [
  {
    id: 1,
    id_usuario: 1,
    id_rol: 1,
    activo: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: 2,
    id_usuario: 2,
    id_rol: 2,
    activo: true,
    created_at: '2024-01-20T14:45:00Z'
  },
  {
    id: 3,
    id_usuario: 3,
    id_rol: 2,
    activo: true,
    created_at: '2024-02-05T09:15:00Z'
  },
  {
    id: 4,
    id_usuario: 4,
    id_rol: 1,
    activo: true,
    created_at: '2024-02-12T11:30:00Z'
  },
  {
    id: 5,
    id_usuario: 4,
    id_rol: 2,
    activo: true,
    created_at: '2024-02-12T11:35:00Z'
  },
  {
    id: 6,
    id_usuario: 5,
    id_rol: 1,
    activo: true,
    created_at: '2024-02-18T13:45:00Z'
  },
  {
    id: 7,
    id_usuario: 6,
    id_rol: 1,
    activo: true,
    created_at: '2024-03-01T08:00:00Z'
  },
  {
    id: 8,
    id_usuario: 7,
    id_rol: 2,
    activo: true,
    created_at: '2024-03-05T10:20:00Z'
  },
  {
    id: 9,
    id_usuario: 8,
    id_rol: 2,
    activo: true,
    created_at: '2024-03-10T14:30:00Z'
  },
  {
    id: 10,
    id_usuario: 9,
    id_rol: 1,
    activo: true,
    created_at: '2024-03-15T16:45:00Z'
  },
  {
    id: 11,
    id_usuario: 10,
    id_rol: 1,
    activo: true,
    created_at: '2024-03-20T09:10:00Z'
  },
  {
    id: 12,
    id_usuario: 11,
    id_rol: 2,
    activo: true,
    created_at: '2024-03-25T11:25:00Z'
  },
  {
    id: 13,
    id_usuario: 12,
    id_rol: 4,
    activo: true,
    created_at: '2024-04-01T13:40:00Z'
  },
  {
    id: 14,
    id_usuario: 13,
    id_rol: 1,
    activo: true,
    created_at: '2024-04-05T15:55:00Z'
  },
  {
    id: 15,
    id_usuario: 14,
    id_rol: 4,
    activo: true,
    created_at: '2024-04-10T08:15:00Z'
  },
  {
    id: 16,
    id_usuario: 15,
    id_rol: 1,
    activo: true,
    created_at: '2024-04-15T10:30:00Z'
  }
]

export const CATEGORIAS_RESTAURANTE: CategoriaRestaurante[] = [
  {
    id: 1,
    nombre: 'Pizza',
    descripcion: 'Restaurantes especializados en pizzas artesanales e italianas',
    activa: true,
    orden: 1,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    nombre: 'Hamburguesas',
    descripcion: 'Restaurantes de comida rápida y hamburguesas gourmet',
    activa: true,
    orden: 2,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    nombre: 'Comida China',
    descripcion: 'Cocina asiática tradicional y fusión',
    activa: true,
    orden: 3,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    nombre: 'Pollo a la Brasa',
    descripcion: 'Tradicional pollo a la brasa peruano',
    activa: true,
    orden: 4,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    nombre: 'Desayunos',
    descripcion: 'Especialistas en desayunos y brunch',
    activa: true,
    orden: 5,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 6,
    nombre: 'Sushi',
    descripcion: 'Restaurantes de comida japonesa y sushi',
    activa: true,
    orden: 6,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 7,
    nombre: 'Comida Criolla',
    descripcion: 'Gastronomía tradicional peruana',
    activa: true,
    orden: 7,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 8,
    nombre: 'Tacos y Burritos',
    descripcion: 'Comida mexicana auténtica',
    activa: true,
    orden: 8,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 9,
    nombre: 'Parrillas',
    descripcion: 'Carnes a la parrilla y cortes premium',
    activa: true,
    orden: 9,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 10,
    nombre: 'Postres',
    descripcion: 'Especialistas en postres y dulces',
    activa: true,
    orden: 10,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 11,
    nombre: 'Cafeterías',
    descripcion: 'Café de especialidad y bebidas',
    activa: true,
    orden: 11,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 12,
    nombre: 'Comida Vegana',
    descripcion: 'Opciones 100% vegetales y veganas',
    activa: true,
    orden: 12,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 13,
    nombre: 'Comida Marina',
    descripcion: 'Ceviches, pescados y mariscos',
    activa: true,
    orden: 13,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 14,
    nombre: 'Comida Italiana',
    descripcion: 'Pastas, risottos y cocina italiana',
    activa: true,
    orden: 14,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 15,
    nombre: 'Sandwiches',
    descripcion: 'Sandwiches gourmet y clásicos',
    activa: true,
    orden: 15,
    created_at: '2024-01-01T00:00:00Z'
  }
]

export const RESTAURANTES: Restaurante[] = [
  {
    id: 1,
    id_usuario: 2,
    nombre_comercial: 'Pizza Express',
    descripcion:
      'Pizzas artesanales con ingredientes frescos. Especializados en recetas tradicionales italianas con un toque moderno.',
    direccion: 'Av. José Pardo 485, Miraflores, Lima',
    telefono: '+51923456789',
    costo_envio: 5.5,
    tiempo_entrega: 35,
    estado: 'abierto',
    calificacion_promedio: 4.5,
    created_at: '2024-01-20T14:45:00Z',
    updated_at: '2024-09-15T18:30:00Z'
  },
  {
    id: 2,
    id_usuario: 3,
    nombre_comercial: 'Burguer Master',
    descripcion: 'Hamburguesas gourmet con carne premium. Ingredientes frescos y salsas caseras que hacen la diferencia.',
    direccion: 'Jirón de la Unión 654, Lima Centro, Lima',
    telefono: '+51965432187',
    costo_envio: 4.0,
    tiempo_entrega: 25,
    estado: 'abierto',
    calificacion_promedio: 4.2,
    created_at: '2024-02-05T09:15:00Z',
    updated_at: '2024-09-16T12:15:00Z'
  },
  {
    id: 3,
    id_usuario: 4,
    nombre_comercial: 'Dragón Dorado',
    descripcion: 'Auténtica comida china preparada por chefs especializados. Platos tradicionales y opciones vegetarianas.',
    direccion: 'Av. Arequipa 1245, San Isidro, Lima',
    telefono: '+51945678912',
    costo_envio: 6.0,
    tiempo_entrega: 40,
    estado: 'cerrado',
    calificacion_promedio: 4.7,
    created_at: '2024-02-12T11:30:00Z',
    updated_at: '2024-09-17T20:00:00Z'
  },
  {
    id: 4,
    id_usuario: 7,
    nombre_comercial: 'El Pollón',
    descripcion: 'Pollo a la brasa tradicional peruano con papas doradas y cremas especiales.',
    direccion: 'Av. Universitaria 987, Los Olivos, Lima',
    telefono: '+51998765432',
    costo_envio: 3.5,
    tiempo_entrega: 30,
    estado: 'abierto',
    calificacion_promedio: 4.6,
    created_at: '2024-03-05T10:20:00Z',
    updated_at: '2024-09-18T15:00:00Z'
  },
  {
    id: 5,
    id_usuario: 8,
    nombre_comercial: 'Sushi Zen',
    descripcion: 'Sushi de alta calidad con pescado fresco. Especialistas en rolls creativos y makis tradicionales.',
    direccion: 'Av. Conquistadores 456, San Isidro, Lima',
    telefono: '+51934567890',
    costo_envio: 7.0,
    tiempo_entrega: 45,
    estado: 'abierto',
    calificacion_promedio: 4.8,
    created_at: '2024-03-10T14:30:00Z',
    updated_at: '2024-09-18T16:30:00Z'
  },
  {
    id: 6,
    id_usuario: 11,
    nombre_comercial: 'La Criollita',
    descripcion: 'Comida criolla peruana casera. Lomo saltado, ají de gallina y más delicias peruanas.',
    direccion: 'Av. Brasil 789, Breña, Lima',
    telefono: '+51989012345',
    costo_envio: 4.5,
    tiempo_entrega: 35,
    estado: 'abierto',
    calificacion_promedio: 4.3,
    created_at: '2024-03-25T11:25:00Z',
    updated_at: '2024-09-19T10:15:00Z'
  },
  {
    id: 7,
    id_usuario: 7,
    nombre_comercial: 'Tacos Locos',
    descripcion: 'Tacos y burritos mexicanos auténticos. Recetas originales con ingredientes importados.',
    direccion: 'Av. Larco 321, Miraflores, Lima',
    telefono: '+51998765432',
    costo_envio: 5.0,
    tiempo_entrega: 28,
    estado: 'abierto',
    calificacion_promedio: 4.4,
    created_at: '2024-04-02T13:00:00Z',
    updated_at: '2024-09-19T12:00:00Z'
  },
  {
    id: 8,
    id_usuario: 8,
    nombre_comercial: 'La Parrilla del Chef',
    descripcion: 'Carnes premium a la parrilla. Cortes importados y nacionales con guarniciones gourmet.',
    direccion: 'Av. Primavera 567, Santiago de Surco, Lima',
    telefono: '+51934567890',
    costo_envio: 6.5,
    tiempo_entrega: 40,
    estado: 'abierto',
    calificacion_promedio: 4.9,
    created_at: '2024-04-08T15:30:00Z',
    updated_at: '2024-09-19T14:20:00Z'
  },
  {
    id: 9,
    id_usuario: 11,
    nombre_comercial: 'Dulce Tentación',
    descripcion: 'Postres artesanales y tortas personalizadas. Especialistas en repostería fina.',
    direccion: 'Av. Javier Prado 890, San Borja, Lima',
    telefono: '+51989012345',
    costo_envio: 4.0,
    tiempo_entrega: 25,
    estado: 'abierto',
    calificacion_promedio: 4.7,
    created_at: '2024-04-15T09:45:00Z',
    updated_at: '2024-09-19T16:00:00Z'
  },
  {
    id: 10,
    id_usuario: 7,
    nombre_comercial: 'Café Cultural',
    descripcion: 'Café de especialidad y snacks saludables. Ambiente acogedor para trabajar o reunirse.',
    direccion: 'Av. Benavides 234, Miraflores, Lima',
    telefono: '+51998765432',
    costo_envio: 3.0,
    tiempo_entrega: 20,
    estado: 'abierto',
    calificacion_promedio: 4.5,
    created_at: '2024-04-20T10:00:00Z',
    updated_at: '2024-09-20T08:30:00Z'
  },
  {
    id: 11,
    id_usuario: 8,
    nombre_comercial: 'Green Life',
    descripcion: 'Comida 100% vegana y saludable. Bowls nutritivos, smoothies y opciones sin gluten.',
    direccion: 'Av. Salaverry 456, Jesús María, Lima',
    telefono: '+51934567890',
    costo_envio: 5.5,
    tiempo_entrega: 30,
    estado: 'abierto',
    calificacion_promedio: 4.6,
    created_at: '2024-04-25T11:15:00Z',
    updated_at: '2024-09-20T10:45:00Z'
  },
  {
    id: 12,
    id_usuario: 11,
    nombre_comercial: 'Mar Azul',
    descripcion: 'Ceviches y pescados frescos del día. Especialistas en comida marina peruana.',
    direccion: 'Av. Grau 678, Barranco, Lima',
    telefono: '+51989012345',
    costo_envio: 6.0,
    tiempo_entrega: 35,
    estado: 'abierto',
    calificacion_promedio: 4.8,
    created_at: '2024-05-01T12:30:00Z',
    updated_at: '2024-09-20T13:00:00Z'
  },
  {
    id: 13,
    id_usuario: 2,
    nombre_comercial: 'Pasta e Vino',
    descripcion: 'Pastas frescas hechas en casa al estilo italiano. Salsas tradicionales y vinos selectos.',
    direccion: 'Av. La Fontana 123, La Molina, Lima',
    telefono: '+51923456789',
    costo_envio: 5.0,
    tiempo_entrega: 32,
    estado: 'abierto',
    calificacion_promedio: 4.7,
    created_at: '2024-05-05T14:00:00Z',
    updated_at: '2024-09-20T15:30:00Z'
  },
  {
    id: 14,
    id_usuario: 3,
    nombre_comercial: 'Sandwich Factory',
    descripcion: 'Sandwiches gourmet y clásicos con pan recién horneado. Ingredientes de primera calidad.',
    direccion: 'Av. Petit Thouars 345, San Isidro, Lima',
    telefono: '+51965432187',
    costo_envio: 3.5,
    tiempo_entrega: 22,
    estado: 'abierto',
    calificacion_promedio: 4.4,
    created_at: '2024-05-10T16:20:00Z',
    updated_at: '2024-09-20T17:45:00Z'
  },
  {
    id: 15,
    id_usuario: 4,
    nombre_comercial: 'Desayunos del Sol',
    descripcion: 'Desayunos completos y brunch de fin de semana. Jugos naturales y opciones saludables.',
    direccion: 'Av. Aviación 567, San Borja, Lima',
    telefono: '+51945678912',
    costo_envio: 4.0,
    tiempo_entrega: 25,
    estado: 'abierto',
    calificacion_promedio: 4.5,
    created_at: '2024-05-15T08:00:00Z',
    updated_at: '2024-09-20T19:00:00Z'
  }
]

export const RESTAURANTE_CATEGORIAS: RestauranteCategoria[] = [
  {
    id: 1,
    id_restaurante: 1,
    id_categoria: 1,
    es_principal: true,
    created_at: '2024-01-20T14:50:00Z'
  },
  {
    id: 2,
    id_restaurante: 2,
    id_categoria: 2,
    es_principal: true,
    created_at: '2024-02-05T09:20:00Z'
  },
  {
    id: 3,
    id_restaurante: 3,
    id_categoria: 3,
    es_principal: true,
    created_at: '2024-02-12T11:35:00Z'
  },
  {
    id: 4,
    id_restaurante: 4,
    id_categoria: 4,
    es_principal: true,
    created_at: '2024-03-05T10:25:00Z'
  },
  {
    id: 5,
    id_restaurante: 5,
    id_categoria: 6,
    es_principal: true,
    created_at: '2024-03-10T14:35:00Z'
  },
  {
    id: 6,
    id_restaurante: 6,
    id_categoria: 7,
    es_principal: true,
    created_at: '2024-03-25T11:30:00Z'
  },
  {
    id: 7,
    id_restaurante: 7,
    id_categoria: 8,
    es_principal: true,
    created_at: '2024-04-02T13:05:00Z'
  },
  {
    id: 8,
    id_restaurante: 8,
    id_categoria: 9,
    es_principal: true,
    created_at: '2024-04-08T15:35:00Z'
  },
  {
    id: 9,
    id_restaurante: 9,
    id_categoria: 10,
    es_principal: true,
    created_at: '2024-04-15T09:50:00Z'
  },
  {
    id: 10,
    id_restaurante: 10,
    id_categoria: 11,
    es_principal: true,
    created_at: '2024-04-20T10:05:00Z'
  },
  {
    id: 11,
    id_restaurante: 11,
    id_categoria: 12,
    es_principal: true,
    created_at: '2024-04-25T11:20:00Z'
  },
  {
    id: 12,
    id_restaurante: 12,
    id_categoria: 13,
    es_principal: true,
    created_at: '2024-05-01T12:35:00Z'
  },
  {
    id: 13,
    id_restaurante: 13,
    id_categoria: 14,
    es_principal: true,
    created_at: '2024-05-05T14:05:00Z'
  },
  {
    id: 14,
    id_restaurante: 14,
    id_categoria: 15,
    es_principal: true,
    created_at: '2024-05-10T16:25:00Z'
  },
  {
    id: 15,
    id_restaurante: 15,
    id_categoria: 5,
    es_principal: true,
    created_at: '2024-05-15T08:05:00Z'
  },
  {
    id: 16,
    id_restaurante: 1,
    id_categoria: 14,
    es_principal: false,
    created_at: '2024-01-20T14:55:00Z'
  }
]

export const CATEGORIAS_PLATILLO: CategoriaPlatillo[] = [
  {
    id: 1,
    nombre: 'vegetariano',
    descripcion: 'Platillos sin carne, aptos para vegetarianos',
    tipo: 'dieta',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    nombre: 'picante',
    descripcion: 'Platillos con nivel de picante medio a alto',
    tipo: 'sabor',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    nombre: 'desayuno',
    descripcion: 'Ideal para consumir en horas de la mañana',
    tipo: 'momento_consumo',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    nombre: 'almuerzo',
    descripcion: 'Perfecto para el almuerzo',
    tipo: 'momento_consumo',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    nombre: 'sin_gluten',
    descripcion: 'Libre de gluten para personas celíacas',
    tipo: 'dieta',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 6,
    nombre: 'vegano',
    descripcion: 'Platillos 100% vegetales, sin productos de origen animal',
    tipo: 'dieta',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 7,
    nombre: 'cena',
    descripcion: 'Ideal para la cena',
    tipo: 'momento_consumo',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 8,
    nombre: 'bajo_calorias',
    descripcion: 'Platillos bajos en calorías para dietas',
    tipo: 'dieta',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 9,
    nombre: 'dulce',
    descripcion: 'Platillos con sabor dulce predominante',
    tipo: 'sabor',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 10,
    nombre: 'salado',
    descripcion: 'Platillos con sabor salado predominante',
    tipo: 'sabor',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 11,
    nombre: 'para_compartir',
    descripcion: 'Platillos grandes ideales para compartir',
    tipo: 'tamaño',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 12,
    nombre: 'individual',
    descripcion: 'Porción individual',
    tipo: 'tamaño',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 13,
    nombre: 'alto_proteinas',
    descripcion: 'Platillos con alto contenido proteico',
    tipo: 'dieta',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 14,
    nombre: 'sin_lactosa',
    descripcion: 'Platillos sin productos lácteos',
    tipo: 'dieta',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 15,
    nombre: 'kids',
    descripcion: 'Platillos especiales para niños',
    tipo: 'especial',
    activa: true,
    created_at: '2024-01-01T00:00:00Z'
  }
]

export const PLATILLOS: Platillo[] = [
  {
    id: 1,
    id_restaurante: 1,
    nombre: 'Pizza Margherita Familiar',
    descripcion: 'Pizza clásica con salsa de tomate, mozzarella fresca y albahaca. Masa artesanal fermentada 48 horas.',
    precio: 25.9,
    imagen_url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
    disponible: true,
    tiempo_preparacion: 20,
    popular: true,
    created_at: '2024-01-21T10:00:00Z',
    updated_at: '2024-09-10T15:30:00Z'
  },
  {
    id: 2,
    id_restaurante: 1,
    nombre: 'Pizza Vegetariana',
    descripcion: 'Pizza con pimientos, champiñones, aceitunas, cebolla roja y queso mozzarella. Vegetariana 100%.',
    precio: 28.5,
    imagen_url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
    disponible: true,
    tiempo_preparacion: 22,
    popular: false,
    created_at: '2024-01-21T10:15:00Z',
    updated_at: '2024-09-10T15:30:00Z'
  },
  {
    id: 3,
    id_restaurante: 2,
    nombre: 'Burguer Classic',
    descripcion: 'Hamburguesa de carne de res 180g, lechuga, tomate, cebolla, pepinillos y salsa especial. Incluye papas.',
    precio: 18.9,
    imagen_url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    disponible: true,
    tiempo_preparacion: 15,
    popular: true,
    created_at: '2024-02-06T11:00:00Z',
    updated_at: '2024-09-12T14:20:00Z'
  },
  {
    id: 4,
    id_restaurante: 2,
    nombre: 'Burguer Veggie',
    descripcion: 'Hamburguesa vegetal de quinoa y lentejas, con aguacate, tomate y salsa vegana. Incluye papas al horno.',
    precio: 21.5,
    imagen_url: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    disponible: true,
    tiempo_preparacion: 18,
    popular: false,
    created_at: '2024-02-06T11:15:00Z',
    updated_at: '2024-09-12T14:20:00Z'
  },
  {
    id: 5,
    id_restaurante: 3,
    nombre: 'Chaufa de Pollo',
    descripcion: 'Arroz chaufa con pollo, tortilla, cebolla china y salsa de soya. Receta tradicional china.',
    precio: 16.9,
    imagen_url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
    disponible: false,
    tiempo_preparacion: 12,
    popular: true,
    created_at: '2024-02-13T12:00:00Z',
    updated_at: '2024-09-17T19:45:00Z'
  },
  {
    id: 6,
    id_restaurante: 3,
    nombre: 'Wantán Frito',
    descripcion: 'Deliciosos wantanes fritos rellenos de cerdo y camarones, acompañados de salsa agridulce.',
    precio: 22.0,
    imagen_url: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c',
    disponible: true,
    tiempo_preparacion: 15,
    popular: false,
    created_at: '2024-02-13T12:15:00Z',
    updated_at: '2024-09-15T16:30:00Z'
  },
  {
    id: 7,
    id_restaurante: 4,
    nombre: 'Pollo a la Brasa 1/4',
    descripcion: 'Cuarto de pollo a la brasa con papas doradas y ensalada fresca. Incluye cremas.',
    precio: 15.5,
    imagen_url: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6',
    disponible: true,
    tiempo_preparacion: 20,
    popular: true,
    created_at: '2024-03-05T11:00:00Z',
    updated_at: '2024-09-18T15:30:00Z'
  },
  {
    id: 8,
    id_restaurante: 5,
    nombre: 'Roll California',
    descripcion: 'Roll de sushi con cangrejo, palta, pepino y masago. 8 piezas.',
    precio: 24.0,
    imagen_url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
    disponible: true,
    tiempo_preparacion: 18,
    popular: true,
    created_at: '2024-03-10T15:00:00Z',
    updated_at: '2024-09-18T17:00:00Z'
  },
  {
    id: 9,
    id_restaurante: 6,
    nombre: 'Lomo Saltado',
    descripcion: 'Clásico lomo saltado con papas fritas, arroz blanco y vegetales salteados.',
    precio: 22.5,
    imagen_url: 'https://images.unsplash.com/photo-1626074353765-517a681e40be',
    disponible: true,
    tiempo_preparacion: 18,
    popular: true,
    created_at: '2024-03-25T12:00:00Z',
    updated_at: '2024-09-19T11:00:00Z'
  },
  {
    id: 10,
    id_restaurante: 7,
    nombre: 'Tacos al Pastor (3 unid)',
    descripcion: 'Tres tacos de cerdo marinado con piña, cilantro y cebolla. Tortillas hechas a mano.',
    precio: 18.0,
    imagen_url: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47',
    disponible: true,
    tiempo_preparacion: 15,
    popular: true,
    created_at: '2024-04-02T13:30:00Z',
    updated_at: '2024-09-19T12:30:00Z'
  },
  {
    id: 11,
    id_restaurante: 8,
    nombre: 'Bife de Chorizo 300g',
    descripcion: 'Corte premium argentino a la parrilla, término al gusto. Con guarnición de papas y vegetales.',
    precio: 45.0,
    imagen_url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
    disponible: true,
    tiempo_preparacion: 25,
    popular: true,
    created_at: '2024-04-08T16:00:00Z',
    updated_at: '2024-09-19T14:45:00Z'
  },
  {
    id: 12,
    id_restaurante: 9,
    nombre: 'Torta de Chocolate',
    descripcion: 'Deliciosa torta de chocolate de tres leches. Porción generosa.',
    precio: 12.0,
    imagen_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    disponible: true,
    tiempo_preparacion: 10,
    popular: true,
    created_at: '2024-04-15T10:15:00Z',
    updated_at: '2024-09-19T16:30:00Z'
  },
  {
    id: 13,
    id_restaurante: 10,
    nombre: 'Cappuccino Grande',
    descripcion: 'Café espresso con leche vaporizada y espuma de leche. Granos de especialidad.',
    precio: 8.5,
    imagen_url: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d',
    disponible: true,
    tiempo_preparacion: 8,
    popular: true,
    created_at: '2024-04-20T10:30:00Z',
    updated_at: '2024-09-20T09:00:00Z'
  },
  {
    id: 14,
    id_restaurante: 11,
    nombre: 'Bowl Buddha Vegano',
    descripcion: 'Bowl nutritivo con quinoa, garbanzos, palta, vegetales asados y aderezo tahini.',
    precio: 19.0,
    imagen_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    disponible: true,
    tiempo_preparacion: 15,
    popular: true,
    created_at: '2024-04-25T11:45:00Z',
    updated_at: '2024-09-20T11:15:00Z'
  },
  {
    id: 15,
    id_restaurante: 12,
    nombre: 'Ceviche Clásico',
    descripcion: 'Ceviche de pescado fresco con limón, cebolla morada, camote y choclo. Porción generosa.',
    precio: 26.0,
    imagen_url: 'https://images.unsplash.com/photo-1564671165093-20688ff1ffaa',
    disponible: true,
    tiempo_preparacion: 15,
    popular: true,
    created_at: '2024-05-01T13:00:00Z',
    updated_at: '2024-09-20T13:30:00Z'
  }
]

export const PLATILLO_CATEGORIAS: PlatilloCategoria[] = [
  {
    id: 1,
    id_platillo: 1,
    id_categoria: 4,
    created_at: '2024-01-21T10:05:00Z'
  },
  {
    id: 2,
    id_platillo: 2,
    id_categoria: 1,
    created_at: '2024-01-21T10:20:00Z'
  },
  {
    id: 3,
    id_platillo: 2,
    id_categoria: 4,
    created_at: '2024-01-21T10:20:00Z'
  },
  {
    id: 4,
    id_platillo: 3,
    id_categoria: 4,
    created_at: '2024-02-06T11:05:00Z'
  },
  {
    id: 5,
    id_platillo: 4,
    id_categoria: 1,
    created_at: '2024-02-06T11:20:00Z'
  },
  {
    id: 6,
    id_platillo: 4,
    id_categoria: 4,
    created_at: '2024-02-06T11:20:00Z'
  },
  {
    id: 7,
    id_platillo: 5,
    id_categoria: 4,
    created_at: '2024-02-13T12:05:00Z'
  },
  {
    id: 8,
    id_platillo: 6,
    id_categoria: 2,
    created_at: '2024-02-13T12:20:00Z'
  },
  {
    id: 9,
    id_platillo: 7,
    id_categoria: 4,
    created_at: '2024-03-05T11:05:00Z'
  },
  {
    id: 10,
    id_platillo: 7,
    id_categoria: 13,
    created_at: '2024-03-05T11:05:00Z'
  },
  {
    id: 11,
    id_platillo: 8,
    id_categoria: 4,
    created_at: '2024-03-10T15:05:00Z'
  },
  {
    id: 12,
    id_platillo: 9,
    id_categoria: 4,
    created_at: '2024-03-25T12:05:00Z'
  },
  {
    id: 13,
    id_platillo: 9,
    id_categoria: 13,
    created_at: '2024-03-25T12:05:00Z'
  },
  {
    id: 14,
    id_platillo: 10,
    id_categoria: 4,
    created_at: '2024-04-02T13:35:00Z'
  },
  {
    id: 15,
    id_platillo: 11,
    id_categoria: 4,
    created_at: '2024-04-08T16:05:00Z'
  },
  {
    id: 16,
    id_platillo: 11,
    id_categoria: 13,
    created_at: '2024-04-08T16:05:00Z'
  },
  {
    id: 17,
    id_platillo: 12,
    id_categoria: 9,
    created_at: '2024-04-15T10:20:00Z'
  },
  {
    id: 18,
    id_platillo: 13,
    id_categoria: 3,
    created_at: '2024-04-20T10:35:00Z'
  },
  {
    id: 19,
    id_platillo: 14,
    id_categoria: 6,
    created_at: '2024-04-25T11:50:00Z'
  },
  {
    id: 20,
    id_platillo: 14,
    id_categoria: 8,
    created_at: '2024-04-25T11:50:00Z'
  },
  {
    id: 21,
    id_platillo: 15,
    id_categoria: 4,
    created_at: '2024-05-01T13:05:00Z'
  }
]

export const PEDIDOS: Pedido[] = [
  {
    id: 1,
    codigo: 'ABC123XYZ789',
    id_usuario: 1,
    id_restaurante: 1,
    estado: 'entregado',
    direccion_entrega: 'Av. Benavides 1955, Dpto 301, Surco, Lima',
    telefono_entrega: '+51987654321',
    subtotal: 25.9,
    costo_envio: 5.5,
    total: 31.4,
    metodo_pago: 'yape',
    notas: 'Tocar timbre del edificio, apto 301',
    fecha_entrega_estimada: '2024-09-15T19:30:00Z',
    fecha_entrega_real: '2024-09-15T19:25:00Z',
    created_at: '2024-09-15T18:45:00Z',
    updated_at: '2024-09-15T19:25:00Z'
  },
  {
    id: 2,
    codigo: 'DEF456UVW012',
    id_usuario: 4,
    id_restaurante: 2,
    estado: 'en_camino',
    direccion_entrega: 'Jirón Cusco 234, Cercado de Lima',
    telefono_entrega: '+51945678912',
    subtotal: 40.4,
    costo_envio: 4.0,
    total: 44.4,
    metodo_pago: 'efectivo',
    notas: 'Sin cebolla en las hamburguesas por favor',
    fecha_entrega_estimada: '2024-09-17T20:15:00Z',
    fecha_entrega_real: undefined,
    created_at: '2024-09-17T19:30:00Z',
    updated_at: '2024-09-17T19:50:00Z'
  },
  {
    id: 3,
    codigo: 'GHI789STU345',
    id_usuario: 5,
    id_restaurante: 1,
    estado: 'preparando',
    direccion_entrega: 'Av. La Marina 2355, Pueblo Libre, Lima',
    telefono_entrega: '+51978123456',
    subtotal: 54.4,
    costo_envio: 5.5,
    total: 59.9,
    metodo_pago: 'tarjeta',
    notas: undefined,
    fecha_entrega_estimada: '2024-09-17T21:30:00Z',
    fecha_entrega_real: undefined,
    created_at: '2024-09-17T20:15:00Z',
    updated_at: '2024-09-17T20:45:00Z'
  },
  {
    id: 4,
    codigo: 'JKL012MNO678',
    id_usuario: 6,
    id_restaurante: 4,
    estado: 'entregado',
    direccion_entrega: 'Av. Colonial 1234, Callao',
    telefono_entrega: '+51912345678',
    subtotal: 15.5,
    costo_envio: 3.5,
    total: 19.0,
    metodo_pago: 'yape',
    notas: undefined,
    fecha_entrega_estimada: '2024-09-18T13:30:00Z',
    fecha_entrega_real: '2024-09-18T13:28:00Z',
    created_at: '2024-09-18T12:45:00Z',
    updated_at: '2024-09-18T13:28:00Z'
  },
  {
    id: 5,
    codigo: 'PQR345STU901',
    id_usuario: 9,
    id_restaurante: 5,
    estado: 'entregado',
    direccion_entrega: 'Av. Conquistadores 888, San Isidro, Lima',
    telefono_entrega: '+51956781234',
    subtotal: 48.0,
    costo_envio: 7.0,
    total: 55.0,
    metodo_pago: 'tarjeta',
    notas: 'Favor de no llamar, dejar en portería',
    fecha_entrega_estimada: '2024-09-18T20:00:00Z',
    fecha_entrega_real: '2024-09-18T19:55:00Z',
    created_at: '2024-09-18T19:00:00Z',
    updated_at: '2024-09-18T19:55:00Z'
  },
  {
    id: 6,
    codigo: 'VWX678YZA234',
    id_usuario: 10,
    id_restaurante: 6,
    estado: 'entregado',
    direccion_entrega: 'Av. Universitaria 567, Los Olivos, Lima',
    telefono_entrega: '+51967890123',
    subtotal: 22.5,
    costo_envio: 4.5,
    total: 27.0,
    metodo_pago: 'efectivo',
    notas: undefined,
    fecha_entrega_estimada: '2024-09-19T14:00:00Z',
    fecha_entrega_real: '2024-09-19T14:10:00Z',
    created_at: '2024-09-19T13:15:00Z',
    updated_at: '2024-09-19T14:10:00Z'
  },
  {
    id: 7,
    codigo: 'BCD901EFG567',
    id_usuario: 1,
    id_restaurante: 7,
    estado: 'entregado',
    direccion_entrega: 'Av. Benavides 1955, Dpto 301, Surco, Lima',
    telefono_entrega: '+51987654321',
    subtotal: 36.0,
    costo_envio: 5.0,
    total: 41.0,
    metodo_pago: 'yape',
    notas: undefined,
    fecha_entrega_estimada: '2024-09-19T20:30:00Z',
    fecha_entrega_real: '2024-09-19T20:25:00Z',
    created_at: '2024-09-19T19:45:00Z',
    updated_at: '2024-09-19T20:25:00Z'
  },
  {
    id: 8,
    codigo: 'HIJ234KLM890',
    id_usuario: 13,
    id_restaurante: 8,
    estado: 'entregado',
    direccion_entrega: 'Av. Primavera 1000, Surco, Lima',
    telefono_entrega: '+51945672345',
    subtotal: 45.0,
    costo_envio: 6.5,
    total: 51.5,
    metodo_pago: 'tarjeta',
    notas: 'Término 3/4',
    fecha_entrega_estimada: '2024-09-20T13:30:00Z',
    fecha_entrega_real: '2024-09-20T13:32:00Z',
    created_at: '2024-09-20T12:40:00Z',
    updated_at: '2024-09-20T13:32:00Z'
  },
  {
    id: 9,
    codigo: 'NOP567QRS123',
    id_usuario: 15,
    id_restaurante: 9,
    estado: 'entregado',
    direccion_entrega: 'Av. Javier Prado 2000, San Borja, Lima',
    telefono_entrega: '+51978904567',
    subtotal: 24.0,
    costo_envio: 4.0,
    total: 28.0,
    metodo_pago: 'yape',
    notas: undefined,
    fecha_entrega_estimada: '2024-09-20T16:00:00Z',
    fecha_entrega_real: '2024-09-20T15:58:00Z',
    created_at: '2024-09-20T15:20:00Z',
    updated_at: '2024-09-20T15:58:00Z'
  },
  {
    id: 10,
    codigo: 'TUV890WXY456',
    id_usuario: 4,
    id_restaurante: 10,
    estado: 'listo',
    direccion_entrega: 'Jirón Cusco 234, Cercado de Lima',
    telefono_entrega: '+51945678912',
    subtotal: 17.0,
    costo_envio: 3.0,
    total: 20.0,
    metodo_pago: 'efectivo',
    notas: undefined,
    fecha_entrega_estimada: '2024-09-20T10:30:00Z',
    fecha_entrega_real: undefined,
    created_at: '2024-09-20T09:50:00Z',
    updated_at: '2024-09-20T10:15:00Z'
  },
  {
    id: 11,
    codigo: 'ZAB123CDE789',
    id_usuario: 9,
    id_restaurante: 11,
    estado: 'entregado',
    direccion_entrega: 'Av. Conquistadores 888, San Isidro, Lima',
    telefono_entrega: '+51956781234',
    subtotal: 19.0,
    costo_envio: 5.5,
    total: 24.5,
    metodo_pago: 'tarjeta',
    notas: 'Sin gluten por favor',
    fecha_entrega_estimada: '2024-09-20T13:00:00Z',
    fecha_entrega_real: '2024-09-20T12:55:00Z',
    created_at: '2024-09-20T12:15:00Z',
    updated_at: '2024-09-20T12:55:00Z'
  },
  {
    id: 12,
    codigo: 'FGH456IJK012',
    id_usuario: 10,
    id_restaurante: 12,
    estado: 'entregado',
    direccion_entrega: 'Av. Universitaria 567, Los Olivos, Lima',
    telefono_entrega: '+51967890123',
    subtotal: 26.0,
    costo_envio: 6.0,
    total: 32.0,
    metodo_pago: 'yape',
    notas: undefined,
    fecha_entrega_estimada: '2024-09-20T14:30:00Z',
    fecha_entrega_real: '2024-09-20T14:28:00Z',
    created_at: '2024-09-20T13:45:00Z',
    updated_at: '2024-09-20T14:28:00Z'
  },
  {
    id: 13,
    codigo: 'LMN789OPQ345',
    id_usuario: 5,
    id_restaurante: 13,
    estado: 'preparando',
    direccion_entrega: 'Av. La Marina 2355, Pueblo Libre, Lima',
    telefono_entrega: '+51978123456',
    subtotal: 28.5,
    costo_envio: 5.0,
    total: 33.5,
    metodo_pago: 'tarjeta',
    notas: undefined,
    fecha_entrega_estimada: '2024-09-20T20:30:00Z',
    fecha_entrega_real: undefined,
    created_at: '2024-09-20T19:45:00Z',
    updated_at: '2024-09-20T20:00:00Z'
  },
  {
    id: 14,
    codigo: 'RST012UVW678',
    id_usuario: 6,
    id_restaurante: 14,
    estado: 'en_camino',
    direccion_entrega: 'Av. Colonial 1234, Callao',
    telefono_entrega: '+51912345678',
    subtotal: 21.0,
    costo_envio: 3.5,
    total: 24.5,
    metodo_pago: 'efectivo',
    notas: 'Sin mayonesa',
    fecha_entrega_estimada: '2024-09-20T13:00:00Z',
    fecha_entrega_real: undefined,
    created_at: '2024-09-20T12:20:00Z',
    updated_at: '2024-09-20T12:45:00Z'
  },
  {
    id: 15,
    codigo: 'XYZ345ABC901',
    id_usuario: 13,
    id_restaurante: 15,
    estado: 'entregado',
    direccion_entrega: 'Av. Primavera 1000, Surco, Lima',
    telefono_entrega: '+51945672345',
    subtotal: 18.0,
    costo_envio: 4.0,
    total: 22.0,
    metodo_pago: 'yape',
    notas: undefined,
    fecha_entrega_estimada: '2024-09-20T09:30:00Z',
    fecha_entrega_real: '2024-09-20T09:27:00Z',
    created_at: '2024-09-20T08:50:00Z',
    updated_at: '2024-09-20T09:27:00Z'
  }
]

export const PEDIDO_ITEMS: PedidoItem[] = [
  {
    id: 1,
    id_pedido: 1,
    id_platillo: 1,
    nombre_platillo: 'Pizza Margherita Familiar',
    cantidad: 1,
    precio_unitario: 25.9,
    subtotal: 25.9,
    notas: undefined,
    created_at: '2024-09-15T18:45:00Z'
  },
  {
    id: 2,
    id_pedido: 2,
    id_platillo: 3,
    nombre_platillo: 'Burguer Classic',
    cantidad: 2,
    precio_unitario: 18.9,
    subtotal: 37.8,
    notas: 'Sin cebolla',
    created_at: '2024-09-17T19:30:00Z'
  },
  {
    id: 3,
    id_pedido: 2,
    id_platillo: 4,
    nombre_platillo: 'Burguer Veggie',
    cantidad: 1,
    precio_unitario: 21.5,
    subtotal: 21.5,
    notas: undefined,
    created_at: '2024-09-17T19:30:00Z'
  },
  {
    id: 4,
    id_pedido: 3,
    id_platillo: 1,
    nombre_platillo: 'Pizza Margherita Familiar',
    cantidad: 1,
    precio_unitario: 25.9,
    subtotal: 25.9,
    notas: undefined,
    created_at: '2024-09-17T20:15:00Z'
  },
  {
    id: 5,
    id_pedido: 3,
    id_platillo: 2,
    nombre_platillo: 'Pizza Vegetariana',
    cantidad: 1,
    precio_unitario: 28.5,
    subtotal: 28.5,
    notas: undefined,
    created_at: '2024-09-17T20:15:00Z'
  },
  {
    id: 6,
    id_pedido: 4,
    id_platillo: 7,
    nombre_platillo: 'Pollo a la Brasa 1/4',
    cantidad: 1,
    precio_unitario: 15.5,
    subtotal: 15.5,
    notas: undefined,
    created_at: '2024-09-18T12:45:00Z'
  },
  {
    id: 7,
    id_pedido: 5,
    id_platillo: 8,
    nombre_platillo: 'Roll California',
    cantidad: 2,
    precio_unitario: 24.0,
    subtotal: 48.0,
    notas: undefined,
    created_at: '2024-09-18T19:00:00Z'
  },
  {
    id: 8,
    id_pedido: 6,
    id_platillo: 9,
    nombre_platillo: 'Lomo Saltado',
    cantidad: 1,
    precio_unitario: 22.5,
    subtotal: 22.5,
    notas: undefined,
    created_at: '2024-09-19T13:15:00Z'
  },
  {
    id: 9,
    id_pedido: 7,
    id_platillo: 10,
    nombre_platillo: 'Tacos al Pastor (3 unid)',
    cantidad: 2,
    precio_unitario: 18.0,
    subtotal: 36.0,
    notas: undefined,
    created_at: '2024-09-19T19:45:00Z'
  },
  {
    id: 10,
    id_pedido: 8,
    id_platillo: 11,
    nombre_platillo: 'Bife de Chorizo 300g',
    cantidad: 1,
    precio_unitario: 45.0,
    subtotal: 45.0,
    notas: 'Término 3/4',
    created_at: '2024-09-20T12:40:00Z'
  },
  {
    id: 11,
    id_pedido: 9,
    id_platillo: 12,
    nombre_platillo: 'Torta de Chocolate',
    cantidad: 2,
    precio_unitario: 12.0,
    subtotal: 24.0,
    notas: undefined,
    created_at: '2024-09-20T15:20:00Z'
  },
  {
    id: 12,
    id_pedido: 10,
    id_platillo: 13,
    nombre_platillo: 'Cappuccino Grande',
    cantidad: 2,
    precio_unitario: 8.5,
    subtotal: 17.0,
    notas: undefined,
    created_at: '2024-09-20T09:50:00Z'
  },
  {
    id: 13,
    id_pedido: 11,
    id_platillo: 14,
    nombre_platillo: 'Bowl Buddha Vegano',
    cantidad: 1,
    precio_unitario: 19.0,
    subtotal: 19.0,
    notas: 'Sin gluten',
    created_at: '2024-09-20T12:15:00Z'
  },
  {
    id: 14,
    id_pedido: 12,
    id_platillo: 15,
    nombre_platillo: 'Ceviche Clásico',
    cantidad: 1,
    precio_unitario: 26.0,
    subtotal: 26.0,
    notas: undefined,
    created_at: '2024-09-20T13:45:00Z'
  },
  {
    id: 15,
    id_pedido: 13,
    id_platillo: 2,
    nombre_platillo: 'Pizza Vegetariana',
    cantidad: 1,
    precio_unitario: 28.5,
    subtotal: 28.5,
    notas: undefined,
    created_at: '2024-09-20T19:45:00Z'
  },
  {
    id: 16,
    id_pedido: 14,
    id_platillo: 3,
    nombre_platillo: 'Burguer Classic',
    cantidad: 1,
    precio_unitario: 18.9,
    subtotal: 18.9,
    notas: 'Sin mayonesa',
    created_at: '2024-09-20T12:20:00Z'
  },
  {
    id: 17,
    id_pedido: 15,
    id_platillo: 9,
    nombre_platillo: 'Lomo Saltado',
    cantidad: 1,
    precio_unitario: 18.0,
    subtotal: 18.0,
    notas: undefined,
    created_at: '2024-09-20T08:50:00Z'
  }
]

export const VALORACIONES: Valoracion[] = [
  {
    id: 1,
    id_pedido: 1,
    id_usuario: 1,
    id_restaurante: 1,
    calificacion: 5,
    comentario: 'Excelente pizza, muy fresca y llegó caliente. El delivery fue muy puntual, definitivamente volvería a pedir.',
    respuesta_restaurante:
      '¡Muchas gracias por tu reseña! Nos alegra que hayas disfrutado nuestra pizza Margherita. Te esperamos pronto.',
    fecha_respuesta: '2024-09-16T10:30:00Z',
    created_at: '2024-09-15T20:15:00Z',
    updated_at: '2024-09-16T10:30:00Z'
  },
  {
    id: 2,
    id_pedido: 4,
    id_usuario: 6,
    id_restaurante: 4,
    calificacion: 5,
    comentario: 'El pollo a la brasa estaba delicioso y las papas muy doradas. Excelente servicio.',
    respuesta_restaurante: 'Gracias por preferirnos. Esperamos verte pronto nuevamente.',
    fecha_respuesta: '2024-09-18T14:00:00Z',
    created_at: '2024-09-18T14:00:00Z',
    updated_at: '2024-09-18T14:00:00Z'
  },
  {
    id: 3,
    id_pedido: 5,
    id_usuario: 9,
    id_restaurante: 5,
    calificacion: 5,
    comentario: 'El sushi estaba fresco y de muy buena calidad. Los rolls perfectamente elaborados.',
    respuesta_restaurante: null,
    fecha_respuesta: null,
    created_at: '2024-09-18T20:30:00Z',
    updated_at: '2024-09-18T20:30:00Z'
  },
  {
    id: 4,
    id_pedido: 6,
    id_usuario: 10,
    id_restaurante: 6,
    calificacion: 4,
    comentario: 'Buen lomo saltado, sabor casero. Solo que llegó un poco tarde.',
    respuesta_restaurante: 'Lamentamos el retraso. Trabajaremos en mejorar nuestros tiempos de entrega.',
    fecha_respuesta: '2024-09-19T15:00:00Z',
    created_at: '2024-09-19T14:45:00Z',
    updated_at: '2024-09-19T15:00:00Z'
  },
  {
    id: 5,
    id_pedido: 7,
    id_usuario: 1,
    id_restaurante: 7,
    calificacion: 5,
    comentario: 'Los tacos al pastor son los mejores que he probado. Muy auténticos.',
    respuesta_restaurante: '¡Muchas gracias! Nos esforzamos por mantener la receta tradicional.',
    fecha_respuesta: '2024-09-19T21:00:00Z',
    created_at: '2024-09-19T20:50:00Z',
    updated_at: '2024-09-19T21:00:00Z'
  },
  {
    id: 6,
    id_pedido: 8,
    id_usuario: 13,
    id_restaurante: 8,
    calificacion: 5,
    comentario: 'La carne estaba en su punto perfecto. Calidad premium. Vale cada sol.',
    respuesta_restaurante: 'Agradecemos tu preferencia. Trabajamos con los mejores cortes para nuestros clientes.',
    fecha_respuesta: '2024-09-20T14:00:00Z',
    created_at: '2024-09-20T13:50:00Z',
    updated_at: '2024-09-20T14:00:00Z'
  },
  {
    id: 7,
    id_pedido: 9,
    id_usuario: 15,
    id_restaurante: 9,
    calificacion: 5,
    comentario: 'La torta de chocolate estaba espectacular. Perfecta para compartir.',
    respuesta_restaurante: null,
    fecha_respuesta: null,
    created_at: '2024-09-20T16:30:00Z',
    updated_at: '2024-09-20T16:30:00Z'
  },
  {
    id: 8,
    id_pedido: 11,
    id_usuario: 9,
    id_restaurante: 11,
    calificacion: 4,
    comentario: 'Buena opción vegana y saludable. El bowl estaba delicioso y nutritivo.',
    respuesta_restaurante: '¡Gracias! Nos alegra que hayas disfrutado tu bowl vegano.',
    fecha_respuesta: '2024-09-20T13:30:00Z',
    created_at: '2024-09-20T13:15:00Z',
    updated_at: '2024-09-20T13:30:00Z'
  },
  {
    id: 9,
    id_pedido: 12,
    id_usuario: 10,
    id_restaurante: 12,
    calificacion: 5,
    comentario: 'El ceviche estaba fresco y con el punto exacto de limón. Excelente.',
    respuesta_restaurante: 'Muchas gracias por tu comentario. Pescado fresco todos los días.',
    fecha_respuesta: '2024-09-20T15:00:00Z',
    created_at: '2024-09-20T14:50:00Z',
    updated_at: '2024-09-20T15:00:00Z'
  },
  {
    id: 10,
    id_pedido: 15,
    id_usuario: 13,
    id_restaurante: 15,
    calificacion: 4,
    comentario: 'Buen desayuno, completo y llegó temprano.',
    respuesta_restaurante: null,
    fecha_respuesta: null,
    created_at: '2024-09-20T09:45:00Z',
    updated_at: '2024-09-20T09:45:00Z'
  },
  {
    id: 11,
    id_pedido: 1,
    id_usuario: 1,
    id_restaurante: 1,
    calificacion: 5,
    comentario: 'Segunda vez que pido y sigue siendo excelente.',
    respuesta_restaurante: 'Es un placer servirte nuevamente.',
    fecha_respuesta: '2024-09-16T11:00:00Z',
    created_at: '2024-09-16T10:45:00Z',
    updated_at: '2024-09-16T11:00:00Z'
  },
  {
    id: 12,
    id_pedido: 2,
    id_usuario: 4,
    id_restaurante: 2,
    calificacion: 4,
    comentario: 'Las hamburguesas estaban buenas, pero la entrega demoró un poco.',
    respuesta_restaurante: null,
    fecha_respuesta: null,
    created_at: '2024-09-17T21:00:00Z',
    updated_at: '2024-09-17T21:00:00Z'
  },
  {
    id: 13,
    id_pedido: 4,
    id_usuario: 6,
    id_restaurante: 4,
    calificacion: 5,
    comentario: 'El pollo siempre está jugoso y bien preparado.',
    respuesta_restaurante: 'Gracias por tu fidelidad.',
    fecha_respuesta: '2024-09-18T14:30:00Z',
    created_at: '2024-09-18T14:15:00Z',
    updated_at: '2024-09-18T14:30:00Z'
  },
  {
    id: 14,
    id_pedido: 6,
    id_usuario: 10,
    id_restaurante: 6,
    calificacion: 5,
    comentario: 'Me encanta la comida criolla de este lugar.',
    respuesta_restaurante: null,
    fecha_respuesta: null,
    created_at: '2024-09-19T15:00:00Z',
    updated_at: '2024-09-19T15:00:00Z'
  },
  {
    id: 15,
    id_pedido: 7,
    id_usuario: 1,
    id_restaurante: 7,
    calificacion: 5,
    comentario: 'Volvería a pedir sin dudarlo. Muy rico todo.',
    respuesta_restaurante: '¡Te esperamos pronto!',
    fecha_respuesta: '2024-09-19T21:15:00Z',
    created_at: '2024-09-19T21:00:00Z',
    updated_at: '2024-09-19T21:15:00Z'
  }
]

export const BUSQUEDAS_IA: BusquedaIA[] = [
  {
    id: 1,
    id_usuario: 1,
    query_usuario: 'quiero pizza vegana cerca',
    intent: 'buscar_comida',
    parametros_extraidos: '{"tipo": "pizza", "dieta": "vegana", "ubicacion": "cerca"}',
    resultados_encontrados: '{"restaurantes": [1], "platillos": [2]}',
    total_resultados: 1,
    satisfaccion: 4,
    tiempo_respuesta_ms: 1250,
    sesion_id: 'sess_2024091510_user1',
    created_at: '2024-09-15T10:45:00Z'
  },
  {
    id: 2,
    id_usuario: 4,
    query_usuario: 'hamburguesas con papas para almorzar',
    intent: 'buscar_comida',
    parametros_extraidos: '{"tipo": "hamburguesas", "acompañamiento": "papas", "momento": "almuerzo"}',
    resultados_encontrados: '{"restaurantes": [2], "platillos": [3, 4]}',
    total_resultados: 2,
    satisfaccion: 5,
    tiempo_respuesta_ms: 980,
    sesion_id: 'sess_2024091719_user4',
    created_at: '2024-09-17T19:15:00Z'
  },
  {
    id: 3,
    id_usuario: undefined,
    query_usuario: 'comida china picante',
    intent: 'filtrar_sabor',
    parametros_extraidos: '{"cocina": "china", "sabor": "picante"}',
    resultados_encontrados: '{"restaurantes": [3], "platillos": [6]}',
    total_resultados: 1,
    satisfaccion: undefined,
    tiempo_respuesta_ms: 1100,
    sesion_id: 'sess_2024091612_anon',
    created_at: '2024-09-16T12:30:00Z'
  },
  {
    id: 4,
    id_usuario: 5,
    query_usuario: 'opciones vegetarianas para cenar',
    intent: 'filtrar_dieta',
    parametros_extraidos: '{"dieta": "vegetariana", "momento": "cena"}',
    resultados_encontrados: '{"restaurantes": [1, 2], "platillos": [2, 4]}',
    total_resultados: 4,
    satisfaccion: 4,
    tiempo_respuesta_ms: 1350,
    sesion_id: 'sess_2024091720_user5',
    created_at: '2024-09-17T20:10:00Z'
  },
  {
    id: 5,
    id_usuario: 1,
    query_usuario: 'pizza familiar para compartir',
    intent: 'recomendar',
    parametros_extraidos: '{"tipo": "pizza", "tamaño": "familiar", "contexto": "compartir"}',
    resultados_encontrados: '{"restaurantes": [1], "platillos": [1]}',
    total_resultados: 1,
    satisfaccion: 5,
    tiempo_respuesta_ms: 850,
    sesion_id: 'sess_2024091518_user1',
    created_at: '2024-09-15T18:30:00Z'
  },
  {
    id: 6,
    id_usuario: 6,
    query_usuario: 'pollo a la brasa económico',
    intent: 'buscar_comida',
    parametros_extraidos: '{"tipo": "pollo a la brasa", "precio": "económico"}',
    resultados_encontrados: '{"restaurantes": [4], "platillos": [7]}',
    total_resultados: 1,
    satisfaccion: 5,
    tiempo_respuesta_ms: 920,
    sesion_id: 'sess_2024091812_user6',
    created_at: '2024-09-18T12:30:00Z'
  },
  {
    id: 7,
    id_usuario: 9,
    query_usuario: 'sushi para dos personas',
    intent: 'recomendar',
    parametros_extraidos: '{"tipo": "sushi", "porciones": "2"}',
    resultados_encontrados: '{"restaurantes": [5], "platillos": [8]}',
    total_resultados: 1,
    satisfaccion: 5,
    tiempo_respuesta_ms: 1050,
    sesion_id: 'sess_2024091818_user9',
    created_at: '2024-09-18T18:45:00Z'
  },
  {
    id: 8,
    id_usuario: 10,
    query_usuario: 'comida peruana tradicional',
    intent: 'filtrar_cocina',
    parametros_extraidos: '{"cocina": "peruana", "estilo": "tradicional"}',
    resultados_encontrados: '{"restaurantes": [6, 12], "platillos": [9, 15]}',
    total_resultados: 4,
    satisfaccion: 4,
    tiempo_respuesta_ms: 1180,
    sesion_id: 'sess_2024091913_user10',
    created_at: '2024-09-19T13:00:00Z'
  },
  {
    id: 9,
    id_usuario: 1,
    query_usuario: 'tacos mexicanos auténticos',
    intent: 'buscar_comida',
    parametros_extraidos: '{"tipo": "tacos", "cocina": "mexicana", "autenticidad": "auténticos"}',
    resultados_encontrados: '{"restaurantes": [7], "platillos": [10]}',
    total_resultados: 1,
    satisfaccion: 5,
    tiempo_respuesta_ms: 890,
    sesion_id: 'sess_2024091919_user1',
    created_at: '2024-09-19T19:30:00Z'
  },
  {
    id: 10,
    id_usuario: 13,
    query_usuario: 'carne premium para almorzar',
    intent: 'buscar_comida',
    parametros_extraidos: '{"tipo": "carne", "calidad": "premium", "momento": "almuerzo"}',
    resultados_encontrados: '{"restaurantes": [8], "platillos": [11]}',
    total_resultados: 1,
    satisfaccion: 5,
    tiempo_respuesta_ms: 1020,
    sesion_id: 'sess_2024092012_user13',
    created_at: '2024-09-20T12:30:00Z'
  },
  {
    id: 11,
    id_usuario: 15,
    query_usuario: 'postre de chocolate',
    intent: 'buscar_comida',
    parametros_extraidos: '{"tipo": "postre", "sabor": "chocolate"}',
    resultados_encontrados: '{"restaurantes": [9], "platillos": [12]}',
    total_resultados: 1,
    satisfaccion: 5,
    tiempo_respuesta_ms: 780,
    sesion_id: 'sess_2024092015_user15',
    created_at: '2024-09-20T15:10:00Z'
  },
  {
    id: 12,
    id_usuario: 4,
    query_usuario: 'café para llevar',
    intent: 'buscar_comida',
    parametros_extraidos: '{"tipo": "café", "servicio": "para llevar"}',
    resultados_encontrados: '{"restaurantes": [10], "platillos": [13]}',
    total_resultados: 1,
    satisfaccion: 4,
    tiempo_respuesta_ms: 650,
    sesion_id: 'sess_2024092009_user4',
    created_at: '2024-09-20T09:40:00Z'
  },
  {
    id: 13,
    id_usuario: 9,
    query_usuario: 'comida vegana saludable',
    intent: 'filtrar_dieta',
    parametros_extraidos: '{"dieta": "vegana", "atributo": "saludable"}',
    resultados_encontrados: '{"restaurantes": [11], "platillos": [14]}',
    total_resultados: 1,
    satisfaccion: 5,
    tiempo_respuesta_ms: 1150,
    sesion_id: 'sess_2024092012_user9',
    created_at: '2024-09-20T12:05:00Z'
  },
  {
    id: 14,
    id_usuario: 10,
    query_usuario: 'ceviche fresco del día',
    intent: 'buscar_comida',
    parametros_extraidos: '{"tipo": "ceviche", "frescura": "del día"}',
    resultados_encontrados: '{"restaurantes": [12], "platillos": [15]}',
    total_resultados: 1,
    satisfaccion: 5,
    tiempo_respuesta_ms: 890,
    sesion_id: 'sess_2024092013_user10',
    created_at: '2024-09-20T13:30:00Z'
  },
  {
    id: 15,
    id_usuario: undefined,
    query_usuario: 'desayuno completo',
    intent: 'buscar_comida',
    parametros_extraidos: '{"tipo": "desayuno", "tamaño": "completo"}',
    resultados_encontrados: '{"restaurantes": [15], "platillos": []}',
    total_resultados: 1,
    satisfaccion: undefined,
    tiempo_respuesta_ms: 720,
    sesion_id: 'sess_2024092008_anon',
    created_at: '2024-09-20T08:30:00Z'
  }
]
