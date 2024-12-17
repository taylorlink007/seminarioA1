## Aplicación de Gestión de Encuestas en Angular para el GI2T

### Descripción del Proyecto
**seminarioA1** es una aplicación web desarrollada en Angular para la gestión eficiente de encuestas, preguntas y tipos de preguntas. Esta herramienta incluye funcionalidades completas de CRUD (Crear, Leer, Actualizar y Eliminar) en su versión beta, y está diseñada para satisfacer las necesidades del Grupo de Investigación e Innovación Tecnológica [GI2T](https://gi2t.org/inicio).

### Características Principales

#### 1. Autenticación
- Implementación de una página de inicio de sesión con campos para usuario y contraseña.
- Redirección automática a la página principal tras una autenticación exitosa.

#### 2. Estructura de la Aplicación
- Diseño modular con una página principal (Home) que incluye un menú de navegación intuitivo.
- Gestión de tres entidades principales:
  - **Encuestas**
  - **Preguntas**
  - **Tipos de Preguntas**

#### 3. Funcionalidades por Módulo
- **Listado**: Visualización de todos los registros disponibles.
- **Creación**: Agregado de nuevos registros.
- **Edición**: Modificación de registros existentes.
- **Eliminación**: Eliminación de registros con confirmación modal para evitar acciones accidentales.

### Requerimientos Técnicos
- Desarrollo basado en Angular.
- Implementación de una estructura modular clara y escalable.
- Configuración de rutas mediante el sistema de **Angular Router**.
- Uso de servicios para la gestión de datos y comunicación con el backend.
- Creación de componentes reutilizables para una mejor mantenibilidad.

### Tecnologías Utilizadas
- Angular
- TypeScript
- HTML
- CSS

### Guía de Instalación

#### Paso 1: Clonar el repositorio
Ejecute el siguiente comando:
```bash
git clone https://github.com/taylorlink007/seminarioA1.git
```

#### Paso 2: Instalar las dependencias necesarias
Ejecute los siguientes comandos en el directorio del proyecto:
```bash
npm install
npm install json-server
npm install bootstrap @popperjs/core
npm install uuid
```

#### Paso 3: Configurar estilos y scripts
En el archivo `angular.json`, añada las siguientes líneas en la línea 34:
```json
"styles": [
  "src/styles.sass",
  "node_modules/bootstrap/scss/bootstrap.scss"
],
"scripts": [
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

#### Paso 4: Iniciar el servidor de desarrollo
Ejecute los siguientes comandos en dos terminales diferentes:
1. Para iniciar Angular:
   ```bash
   ng serve
   ```
2. Para iniciar el servidor JSON:
   ```bash
   npx json-server db.json
   ```

### Autores
-Freddy Jair Mondragón
-Juan Carlos Sinisterra
-Taylor Quiñones Caicedo

### Licencia
Este proyecto está bajo la licencia GNU General Public License v3.0. Consulte el archivo LICENSE para más detalles.

