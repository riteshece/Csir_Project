module.exports = (sequelize, DataTypes) => {
  const Csirdetails = sequelize.define(
    "Csirdetails",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      technologyRefNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fileNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      keywordTechnology: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nameKnowhow: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      industrialSector: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      multiLabInstitute: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      leadLaboratory: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      associateInstitute: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      technologyLevel: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      scaleDevelopment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      yearDevelopment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      briefKnowhow: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      competitivePosition: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      technoPeriod: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      marketPotential: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      environmentalStatutory: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      highPicture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      laboratoryDetail: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "csir_data",
      timestamps: false,
    }
  );

  return Csirdetails;
};
