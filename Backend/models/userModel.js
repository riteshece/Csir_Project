module.exports = (sequelize, DataTypes) => {
  const Signup = sequelize.define(
    "signup",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "signup", // optional: specify the table name
       timestamps: false, // optional: adds createdAt and updatedAt timestamps
    }
  );

  return Signup;
};
