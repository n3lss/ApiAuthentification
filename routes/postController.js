const express = require('express');
const router = express.Router();

const { PostsModel } = require('../modeles/PostsModel');

router.get('/', (req, res) => {
	PostsModel.find((err, docs) => {
		console.log(docs);
		if (!err) res.send(docs);
		else console.log('erreur to get data' + err);
	});
});

module.exports = router;
