import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("abc123", 10),
		isAdmin: true,
	},
	{
		name: "Vlad Luna",
		email: "vladluna@test.com",
		password: bcrypt.hashSync("abc123", 10),
	},
	{
		name: "John Doe",
		email: "johndoe@test.com",
		password: bcrypt.hashSync("abc123", 10),
	},
];

export default users;
