# Estructura de Carpetas del Proyecto 🚀

#### 🔙 Regresar al README.md

[⬅ Volver al README](./README.md)

```
src/
├─ app/                        # Next.js (rutas, layouts, metadata)
│  ├─ layout.tsx               # Usa shared/config/metadata.ts
│  ├─ page.tsx
│  └─ globals.css
│
├─ core/                       # Lógica independiente
│  ├─ entities/                # Interfaces de las entidades de la api
   │  └─ Usuario
│  ├─ types/                   # Tipos TS globales
│  ├─ services/                # Casos de uso (reciben repositorios como dependencia)
   │  └─ user
│  ├─ hooks/                   # Hooks genéricos (tanstack query)
   │  └─ user
│  ├─ utils/                   # Helpers puros
│  ├─ api/                     # Cliente HTTP (axios).
│  └─ constants/               # Constantes globales (URLs base, etc).
│
├─ infrastructure/             # Implementaciones concretas
│  └─ persistence/             # Caché, localStorage, etc.
│
├─ presentation/               # Módulos específicos de dominio (usuario, restaurante, etc.).
│  ├─ usuario/
│  │  ├─ components/
│  │  ├─ hooks/
│  │  └─ types/
│  └─ restaurante/
│     ├─ components/
│     ├─ hooks/
│     └─ types/
│
├─ shared/                     # Recursos globales y reutilizables.
│  ├─ ui/
│  │  ├─ components/           # Componentes genéricos (ej: Button, Modal).
│  │  └─ assets/               # Fuentes, iconos, imágenes
│  └─ config/
│     └─ metadata/             # Metadatos globales
```

# Detalles

## `app/` ⚡

Contiene la estructura de Next.js: rutas, layouts y metadata.

- **`layout.tsx`**: Layout principal que usa la metadata global.
- **`page.tsx`**: Página principal o rutas específicas.

- **`loading.tsx`**: Página o componente que se muestra mientras se carga un route segment.
- **`not-found.tsx`**: Página 404 personalizada.

---

## `core/` 🧩

**Lógica independiente del framework**, reutilizable en otros proyectos.

- **`entities/`**: Interfaces de las entidades de la API. “Usuario, Pedido.”

- **`types/`**: Tipos TypeScript globales.

- **`services/`**: Casos de uso que reciben repositorios como dependencia. “Crear usuario, obtener restaurantes.”
  - **`user/`**: Servicios personalizados para un usuario

- **`hooks/`** 🔗: Hooks genéricos para toda la app
  - **`user/`**: Hooks personalizados para un usuario

- **`utils/`**: Helpers puros. “Función para formatear fechas o validar emails.”

- **`api/`**: Cliente HTTP (axios) configurado. “Llamadas a `GET /users` o `POST /login`.”

- **`constants/`**: Constantes globales. “URL base de la API o roles de usuario.”

---

## `infrastructure/` 🏗️

Implementaciones concretas que interactúan con la persistencia.

- **`persistence/`**: Caché, localStorage o almacenamiento temporal. “Guardar token de sesión en localStorage.”

---

## `presentation/` 🎨

Módulos específicos por dominio con sus componentes, hooks y páginas.

### `home/` 👤

- **`components/`**: Botones, formularios o tarjetas.
- **`hooks/`**: Hooks específicos del dominio.
- **`types/`**: Tipos de usuario y sus relaciones. “Tipo `UserRole` con valores admin, user.”

---

## `shared/` 🌐

Recursos globales y reutilizables.

- **`ui/`**: Componentes y assets genéricos.
  - **`components/`**: Botón, modal, card. “Botón primario con estilo estándar de la app.”
  - **`assets/`**: Fuentes, iconos, imágenes globales.
- **`config/`**: Configuraciones globales.
  - **`metadata/`**: Metadatos que afectan toda la app. “Título y descripción SEO de la app.”
