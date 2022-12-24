import { connect } from "../basededatos";

export const getCategorias = async (req, res) => {
  const con = await connect();
  const [rows] = await con.query("SELECT * FROM CATEGORIAS");
  res.json(rows);
};