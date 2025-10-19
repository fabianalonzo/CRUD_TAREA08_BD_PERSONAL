##  Proyecto: API de Franquicias de Películas

Este proyecto consiste en una API REST para administrar películas asociadas a franquicias. Permite realizar operaciones CRUD sobre una base de datos MySQL.

---

##  Tecnologías utilizadas

- Node.js
- Express
- MySQL
- JavaScript (Fetch API)
- Thunder Client

---

##  Pasos para la configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/fabianalonzo/CRUD_TAREA08_BD_PERSONAL.git
```

## 2. Crear y restaurar la base de datos

Abre Workbench y ejecuta:

```
CREATE DATABASE franquicias;
USE franquicias;

CREATE TABLE peliculas (
  id_pelicula INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  director VARCHAR(100) NOT NULL,
  genero VARCHAR(50) NOT NULL,
  fecha_estreno DATE NOT NULL,
  duracion_minutos INT NOT NULL,
  clasificacion VARCHAR(10) NOT NULL,
  sinopsis TEXT NOT NULL,
  franquicia VARCHAR(100) NOT NULL
) ENGINE=INNODB;

INSERT INTO peliculas (titulo, director, genero, fecha_estreno, duracion_minutos, clasificacion, sinopsis, franquicia) VALUES
('Iron Man', 'Jon Favreau', 'Acción', '2008-05-02', 126, 'PG-13', 'Tony Stark se convierte en Iron Man después de construir una armadura tecnológica.', 'Marvel'),
('It', 'Andy Muschietti', 'Terror', '2017-09-08', 135, 'R', 'Un grupo de niños enfrenta a un ente maligno que toma la forma de un payaso.', 'Stephen King Universe');
```

## 3. Abrir el proyecto en VS Code
```
cd franquicias
code .
```

## 4. Instalar dependencias

En la terminal:
```
npm install
```

## 5. Configurar archivo .env

Crea un archivo .env en la raíz del proyecto con tus credenciales de base de datos:
```
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=3000
```

## 6. Iniciar servidor
```
nodemon server
```

## 7. Probar la API con Thunder Client o Postman

Rutas disponibles:
```
Método	Ruta	            Descripción
GET	    /api/peliculas	    Listar todas las películas
GET	    /api/peliculas/:id	Obtener una película por ID
POST	/api/peliculas	    Crear una nueva película
PUT	    /api/peliculas/:id	Actualizar una película
DELETE	/api/peliculas/:id	Eliminar una película
```

Asegúrate de usar Content-Type: application/json al enviar datos por POST o PUT.

```
Ejemplo JSON para POST
{
  "titulo": "It",
  "director": "Andy Muschietti",
  "genero": "Terror",
  "fecha_estreno": "2017-09-08",
  "duracion_minutos": 135,
  "clasificacion": "R",
  "sinopsis": "Un grupo de niños enfrenta a un ente maligno que toma la forma de un payaso.",
  "franquicia": "Stephen King Universe"
}
```