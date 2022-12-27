import { connect } from "../basededatos";
import { guardarImagen } from "./imagenController";

export const getEstablecimientos = async (req, res) => {
  //abro la conexión
  const con = await connect();
  //hago la consulta
  const [rows] = await con.query("SELECT * FROM ESTABLECIMIENTOS");
  res.json(rows);
};

export const guardarEstablecimiento = async (req, res) => {
  //console.log(req.body);
  let jsonData = JSON.parse(req.body.establecimiento);
  const con = await connect();
  const [results] = await con.query(
    "INSERT INTO ESTABLECIMIENTOS (es_establecimiento, es_cat_categoria, es_horarios, es_calle, es_nro_calle, es_ci_ciudad, es_web, es_telefono, es_facebook, es_instagram, es_descripcion, es_fecha_creacion)"
    + "VALUES (?,?,?,?,?,?,?,?,?,?,?,NOW())",
    [
      jsonData.nombre,
      jsonData.categoria,
      jsonData.horarios,
      jsonData.calle,
      jsonData.nroCalle,
      jsonData.ciudad,
      jsonData.web,
      jsonData.telefono,
      jsonData.face,
      jsonData.insta,
      jsonData.descripcion,
    ]
  );
  await guardarImagen(req.body.imagenes, results.insertId);
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

