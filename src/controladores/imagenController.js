import { connect } from "../basededatos";

export const guardarImagen = async (req, res) => {
    const con = await connect();
    const [results] = await con.query(
      "INSERT INTO IMAGENES (im_imagen, im_es_establecimiento, im_fecha_creacion)"
      + "VALUES (?,?,NOW())",
      [
        req.body.imagen,
        req.body.establecimiento,
      ]
    );
    res.json({
      id: results.insertId,
      ...req.body,
    });
}