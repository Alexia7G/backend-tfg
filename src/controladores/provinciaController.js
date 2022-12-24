import { connect } from "../basededatos";

export const getProvincias = async (req, res) => {
  const con = await connect();
  const [rows] = await con.query("SELECT * FROM PROVINCIAS");
  res.json(rows);
};