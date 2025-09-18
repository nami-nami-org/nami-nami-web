<div align="center">
<h1>Ñami Ñami 🍽️</h1>

**Plataforma de delivery con IA para restaurantes locales en Lima**, <br />que protege datos, mejora visibilidad y reduce comisiones, ofreciendo <br />soluciones innovadoras para negocios gastronómicos.

<img src="./public/openGraph.webp" width="500px" alt="Ñami Ñami" />
</div>

---

## 📌 Nuestro Objetivo

Impulsar la digitalización de los restaurantes locales para que puedan:

- Explorar menús y realizar pedidos en línea.
- Gestionar perfiles y pedidos en tiempo real.
- Proteger la privacidad de clientes, restaurantes y repartidores.
- Reducir comisiones y garantizar transparencia en transacciones.
- Optimizar la visibilidad digital de los negocios.

**Diseño Figma**: [Diseños de Ñami Ñami](https://www.figma.com/design/n68169GuRuKjgX4FlL812a/%C3%91ami-%C3%91ami?node-id=0-1&t=hUDKXrN3AcZCZ1sy-1)

---

## 📂 Estructura del Proyecto

**Más información**: [Folders.md](./Folders.md)

```
src/
├─ app/                        # Next.js (rutas, layouts, metadata)
│  ├─ layout.tsx               # Usa shared/config/metadata.ts
│  ├─ page.tsx
│  └─ globals.css
│
├─ core/                       # Lógica independiente
│  ├─ repositories/            # Interfaces de repositorios
│  ├─ types/                   # Tipos TS globales
│  ├─ services/                # Casos de uso (reciben repositorios como dependencia)
│  ├─ hooks/                   # Hooks genéricos (ej. tanstack query)
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
│  │  ├─ pages/
│  │  └─ types/
│  └─ restaurante/
│     ├─ components/
│     ├─ hooks/
│     ├─ pages/
│     └─ types/
│
├─ shared/                     # Recursos globales y reutilizables.
│  ├─ ui/
│  │  ├─ components/           # Componentes genéricos (ej: Button, Modal).
│  │  └─ assets/               # Fuentes, iconos, imágenes
│  └─ config/
│     └─ metadata/             # Metadatos globales
```

---

## ⚡ Funcionalidades Principales

1. **Privacidad y control de datos**
   - Consentimiento explícito para uso de información personal.
   - Opciones para descargar o eliminar datos.
2. **Registro y autenticación**
   - Roles diferenciados: clientes, restaurantes y repartidores.
3. **Gestión de restaurantes**
   - Perfil, menú, disponibilidad y horarios.
4. **Exploración y búsqueda inteligente**
   - IA para filtrar por proximidad, calidad y disponibilidad.
5. **Pedidos y pagos**
   - Carrito, confirmación de pedidos y pagos digitales.
   - Comisiones reducidas y transparentes.
6. **Gestión en tiempo real**
   - Actualización del estado de pedidos y notificaciones instantáneas.
7. **Herramientas financieras**
   - Simulador de food cost y margen.
   - Reportes exportables en PDF y Excel.
8. **Modelo de negocio alternativo**
   - Suscripción + comisiones reducidas.

---

## 🧩 Arquitectura

```

Next.js (Web) → API REST (Spring Boot) → MySQL
↑
Expo (Mobile)

```

---

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone git@github.com:nami-nami-org/nami-nami-web.git
cd ñami-nami
```

2. Instalar dependencias:

```bash
bun i
# o
pnpm i
# o
npm i
```

3. Configurar variables de entorno en `.env`:

```env
DATABASE_URL=mysql://user:password@host:port/dbname
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Ejecutar el proyecto:

```bash
bun dev
# o
pnpm dev
# o
npm dev
```

5. Acceder a la aplicación en [http://localhost:4321](http://localhost:4321).

---

## 📖 Uso

- Crear cuenta de usuario o restaurante.
- Explorar menús y realizar pedidos.
- Administrar perfil y pedidos desde el panel de control.
- Usar el buscador inteligente para encontrar opciones rápidamente.
- Exportar reportes financieros desde la sección de herramientas.

---

## 📝 Contribución

1. Crear un fork del repositorio.
2. Crear un branch con tu feature:

```bash
git checkout -b feature/nueva-funcionalidad
```

3. Hacer commit siguiendo [Conventional Commits](https://www.conventionalcommits.org/).
4. Push al branch:

```bash
git push origin feature/nueva-funcionalidad
```

5. Crear un Pull Request y esperar revisión.

---

## 🏆 Equipo

- Alfaro Muñoz, Anderson - U21209775
- Melgar Pizarro, Luis - U22234855 - @Luis-Fernando-MP
- Gonzalez Chaca, Angel Jefferson - U21202623
- Condori Navarro, Leonardo Matias - U22228593
