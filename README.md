# Backend Practice - Express & TypeScript

Este proyecto es un **backend de práctica** desarrollado con **Express y TypeScript**, enfocado en refrescar conceptos fundamentales de backend como arquitectura, middlewares, logging y manejo de errores.

No incluye frontend ni base de datos, ya que el objetivo principal es **practicar y consolidar conocimientos de backend**.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* TypeScript
* Morgan (logging)
* Express middlewares
* Git & GitHub

---

## 📂 Estructura del proyecto

```
src/
├── controllers/
│   └── health.controllers.ts
│
├── routes/
│   └── health.routes.ts
│
├── middlewares/
│   ├── log.middleware.ts
│   └── error.middleware.ts
│
├── index.ts
└── tsconfig.json
```

---

## 🔧 Funcionalidades

* Health check del servidor
* Información del servidor (uptime, timestamp)
* Uso de memoria
* Uso de CPU
* Logging de requests (Morgan + middleware propio)
* Manejo global de errores
* Manejo de rutas inexistentes (404)

---

## 📌 Endpoints disponibles

| Método | Ruta            | Descripción              |
| ------ | --------------- | ------------------------ |
| GET    | `/health`       | Estado del servidor      |
| GET    | `/ping`         | Ping de prueba           |
| GET    | `/server-info`  | Información del servidor |
| GET    | `/memory-usage` | Uso de memoria           |
| GET    | `/cpu-usage`    | Uso de CPU               |

---

## ▶️ Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

El servidor se levanta en:

```
http://localhost:3000
```

---

## 🎯 Objetivo del proyecto

Este proyecto fue creado con fines educativos para:

* Practicar backend con Express
* Reforzar el uso de TypeScript
* Entender el flujo request → middleware → controller → response
* Aplicar buenas prácticas de arquitectura

---

## 📬 Autor

Desarrollado por **Matías**
Backend Developer en formación
