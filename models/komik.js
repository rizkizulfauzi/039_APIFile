module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define(
    "Komik",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      judul: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sinopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tahun_terbit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gambar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      penulis_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "komik",
      timestamps: true,
    },
  );

  
  return Komik;
};
