import { connect } from "../basededatos";

export const getCiudades = async (req, res) => {
  const con = await connect();
  const [rows] = await con.query("SELECT * FROM CIUDADES");
  res.json(rows);
};