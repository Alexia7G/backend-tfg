import { connect } from "../basededatos";
//const bcrypt = require("bcrypt");

export const guardarUsuario = async (req, res) => {
    const connection = await connect();
  
    // var saltRounds = 10;
    // bcrypt.hash(req.body.password, saltRounds, function (err, myHash) {
    //   const [results] = connection.query(
    //     "INSERT INTO USUARIOS (us_email,us_contrasena) VALUES(?,?)",[req.body.email, myHash],
    //     function (err, insertResults, insertFields) {
    //       if (err) {
    //         console.log(err + " al insertar a la bdd");
    //       } else {
    //         res.json({
    //           id: results.insertId,
    //           ...req.body,
    //         });
    //       }
    //     }
    //   );
    // });
  //   //para que traiga solo la parte results de todoo lo que devuelve
    const [results] = await connection.query(
      "INSERT INTO USUARIOS (us_email,us_contrasena)  VALUES (?,?)",
      [req.body.email, req.body.password]
    );
    res.json({
      id: results.insertId,
      ...req.body,
    });
  };
  
  export const getUsuario = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM USUARIOS WHERE us_email = ? and us_contrasena = ?", [
      req.params.email, req.params.password
    ]);
    //para que devuelva el primer objeto del arreglo de resultados
    res.json(rows[0]);
  };

  