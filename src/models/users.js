module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
        segundo_nombre: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
        apellido_paterno: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
        apellido_materno: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
        fecha_nacimiento: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
        telefono: {
			type: DataTypes.STRING(256),
			allowNull: false
		}
	}, {
		tableName: 'users_test_ulisesmarmolejo',
		timestamps: false
	});

	return User;
};