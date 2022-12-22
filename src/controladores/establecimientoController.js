import { connect } from "../basededatos";

export const getEstablecimientos = async (req, res) => {
  //abro la conexión
  const con = await connect();
  //hago la consulta
  const [rows] = await con.query("SELECT * FROM ESTABLECIMIENTOS");
  res.json(rows);
};

export const guardarEstablecimiento = async (req, res) => {
  const con = await connect();
  const [results] = await con.query(
    "INSERT INTO ESTABLECIMIENTOS (es_establecimiento, es_cat_categoria, es_horarios, es_calle, es_nro_calle, es_ci_ciudad, es_web, es_telefono, es_tipo_precio, es_facebook, es_instagram, es_descripcion, es_fecha_creacion) "
    + "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,NOW())",
    [
      req.body.nombre,
      req.body.categoria,
      req.body.horarios,
      req.body.calle,
      req.body.nroCalle,
      req.body.ciudad,
      req.body.web,
      req.body.telefono,
      req.body.tipoPrecio,
      req.body.facebook,
      req.body.instagram,
      req.body.descripcion,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

