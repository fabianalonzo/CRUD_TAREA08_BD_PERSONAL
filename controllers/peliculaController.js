const db = require("../config/db");

// Crear película
exports.crearPelicula = async (req, res) => {
  const {
    titulo,
    director,
    genero,
    fecha_estreno,
    duracion_minutos,
    clasificacion,
    sinopsis,
    franquicia
  } = req.body;

  if (!titulo) {
    return res.status(400).json({ mensaje: "El título es obligatorio" });
  }

  try {
    const sql = `
      INSERT INTO peliculas 
      (titulo, director, genero, fecha_estreno, duracion_minutos, clasificacion, sinopsis, franquicia)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(sql, [
      titulo,
      director,
      genero,
      fecha_estreno,
      duracion_minutos,
      clasificacion,
      sinopsis,
      franquicia
    ]);

    res.status(201).json({ id: result.insertId, mensaje: "Película creada correctamente" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

// Listar todas las películas
exports.obtenerPeliculas = async (req, res) => {
  const sql = `
    SELECT 
      id_pelicula,
      titulo,
      director,
      genero,
      DATE_FORMAT(fecha_estreno, '%Y-%m-%d') AS fecha_estreno,
      duracion_minutos,
      clasificacion,
      sinopsis,
      franquicia
    FROM peliculas
  `;

  try {
    const [peliculas] = await db.query(sql);
    res.status(200).json(peliculas);
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error al obtener películas" });
  }
};


// Obtener película por ID
exports.obtenerPeliculaPorId = async (req, res) => {
  const { id } = req.params;

  const sql = `SELECT * FROM peliculas WHERE id_pelicula = ?`;

  try {
    const [rows] = await db.query(sql, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ mensaje: "Película no encontrada" });
    }

    res.status(200).json(rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno" });
  }
};

// Actualizar película
exports.actualizarPelicula = async (req, res) => {
  const { id } = req.params;
  const {
    titulo,
    director,
    genero,
    fecha_estreno,
    duracion_minutos,
    clasificacion,
    sinopsis,
    franquicia
  } = req.body;

  try {
    let campos = [];
    let valores = [];

    if (titulo) {
      campos.push("titulo = ?");
      valores.push(titulo);
    }
    if (director) {
      campos.push("director = ?");
      valores.push(director);
    }
    if (genero) {
      campos.push("genero = ?");
      valores.push(genero);
    }
    if (fecha_estreno) {
      campos.push("fecha_estreno = ?");
      valores.push(fecha_estreno);
    }
    if (duracion_minutos) {
      campos.push("duracion_minutos = ?");
      valores.push(duracion_minutos);
    }
    if (clasificacion) {
      campos.push("clasificacion = ?");
      valores.push(clasificacion);
    }
    if (sinopsis) {
      campos.push("sinopsis = ?");
      valores.push(sinopsis);
    }
    if (franquicia) {
      campos.push("franquicia = ?");
      valores.push(franquicia);
    }

    if (campos.length === 0) {
      return res.status(400).json({ mensaje: "No hay datos para actualizar" });
    }

    valores.push(id);
    const sql = `UPDATE peliculas SET ${campos.join(", ")} WHERE id_pelicula = ?`;

    const [result] = await db.query(sql, valores);
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "Película no encontrada" });
    }

    res.status(200).json({ mensaje: "Película actualizada correctamente" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

// Eliminar película
exports.eliminarPelicula = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM peliculas WHERE id_pelicula = ?";

  try {
    const [result] = await db.query(sql, [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "Película no encontrada" });
    }

    res.status(200).json({ mensaje: "Película eliminada correctamente" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};
