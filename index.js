const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

let port = process.env.PORT || 5000;
let connectionStation = "";

app.use(cors());
mongoose.connect( "mongodb+srv://devadmin:elT16PlPKurjwqbv@cluster0.eu3sn.mongodb.net/Cluster0?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
	}, () => {
		if (mongoose.connection.readyState === 1) connectionStation = "DB connection: Successful";
		else connectionStation = "DB connection: Failure";
		console.log(connectionStation);
	}
);

app.use((req,res,next)=>{
    const API_KEY = req.headers["api-key"];
    if(!req.headers["api-key"] || API_KEY!= "dji24jicxijjwrj543fkomfi&&ew50934nfjs42nn?fah:da1@dsajio-djasidj321kleml"){
        // res.status(401).json({message:"Unauthorized"})
		next()
    }else{
        next()
    }
});

app.get("/", (req, res) => {
	res.send(connectionStation);
});

app.listen(port, () => {
	console.log(`Running on port: ${port}`);
});

const profileRoutes = require('./routes/profile');
app.use('/api/profile', profileRoutes);

const QuestionRoutes = require('./routes/question');
app.use('/api/question', QuestionRoutes);