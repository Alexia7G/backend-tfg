import { connect } from "../basededatos";
import fs from "fs";
import path from 'path';

const CARPETA_IMAGEN = path.join(__dirname, '../uploads');

//export const RUTA_IMAGEN = "/home/alexia/imagenestfg";

export const guardarImagen = async (imagenes, idEstablecimiento) => {
  const con = await connect();
  //console.log(JSON.parse(imagenes)[0].uri);
  let jsonImg = JSON.parse(imagenes);

  for (const img of jsonImg) {
    // If no image submitted, exit
    if (!img) return res.sendStatus(400);

    // Grab the extension to resolve any image error
    // let ext = img.base64.split(';')[0].match(/jpeg|png|gif/)[0];
    // strip off the data: url prefix to get just the base64-encoded bytes
    //let data = img.base64.replace(/^data:image\/\w+;base64,/, "");
    let buf = Buffer.from(img.base64, "base64");
    let imgName = `${idEstablecimiento}_${img.name}.jpeg`;

    fs.writeFile(`${CARPETA_IMAGEN}/${imgName}`, buf, (error) => {
      if (error) {
        console.error(error);
        return;
      }
    });

    const [results] = await con.query(
      "INSERT INTO IMAGENES (im_imagen, im_es_establecimiento, im_fecha_creacion)" +
        "VALUES (?,?,NOW())",
      [imgName, idEstablecimiento]
    );
  }
};
