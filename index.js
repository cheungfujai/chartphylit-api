const express = require("express");
const mongoose = require('mongoose');
const app = express();

require('dotenv').config({path:'../.env'});

let port = process.env.PORT || 5000;

mongoose.connect( "mongodb+srv://devadmin:elT16PlPKurjwqbv@cluster0.eu3sn.mongodb.net/Cluster0?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
	/*,
	useFindAndModify: false,
	useCreateIndex: true,
	*/
	}, () => {
		let connectionStation = "";
		if (mongoose.connection.readyState === 1) connectionStation = "DB connection: Successful";
		else connectionStation = "DB connection: Failure";
		console.log(connectionStation);
	}
);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Running on port: ${port}`);
});