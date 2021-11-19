const mongoose = require('mongoose');

mongoose.connect(
	process.env.DATABASE_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (!err) console.log('mongodb connected ');
		else console.log('connectin error' + err);
	}
);
