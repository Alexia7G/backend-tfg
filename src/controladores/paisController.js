import { connect } from "../basededatos";

export const getPaises = async (req, res) => {
  const con = await connect();
  const [rows] = await con.query("SELECT * FROM PAISES");
  res.json(rows);
};