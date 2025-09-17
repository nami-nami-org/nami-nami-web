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
  }
]
