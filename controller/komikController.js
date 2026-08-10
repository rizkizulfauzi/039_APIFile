const db = require("../models");

async function getAllKomik(req, res) {
  try {
    const komik = await db.Komik.findAll();
    res.status(200).json(komik);
  } catch (err) {
    console.error("error fetching komik: ", err.message);
    res.status(500).json({ error: "failed to fetch komik" });
  }
}

async function getKomikById(req, res) {
  const { id } = req.params;
  try {
    const komik = await db.Komik.findByPk(id);
    if (!komik) {
      return res.status(404).json({ error: "komik not found" });
    }
    res.status(200).json(komik);
  } catch (err) {
    console.error("error fetching komik by id: ", err.message);
    res.status(500).json({ error: "failed to fetch komik by id" });
  }
}

async function createKomik(req, res) {
  const { judul, sinopsis, tahun_terbit, penulis_id } = req.body;
  try {
    const penulis = await db.Penulis.findByPk(penulis_id);
    if (!penulis) {
      return res.status(404).json({ error: "penulis not found" });
    }

    const gambar = req.file
        ? req.file.filename
        : null;

    const komik = await db.Komik.create({
        judul,
        sinopsis,
        tahun_terbit,
        penulis_id,
        gambar,
    });

    res.status(201).json(komik);
  } catch (err) {
    console.error("error creating komik: ", err.message);
    res.status(500).json({ error: "failed to create komik" });
  }
}
