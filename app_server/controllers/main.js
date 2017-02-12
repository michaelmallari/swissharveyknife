// GET Home page - http://swissharveyknife.herokuapp.com
module.exports.p1 = function(req, res, next) {
	res.render('default', {
		meta: {
			title: 'Swiss Harvey Knife',
			description: 'Prototype for Team Swiss Harvey Knife for the NYC Media Lab + MLBAM hackathon on February 10-12, 2017 at NYU.',
			url_base,
			url_path: '/'
		}
	});
};

// GET Home page - http://swissharveyknife.herokuapp.com
module.exports.p2 = function(req, res, next) {
	res.render('p2', {
		meta: {
			title: 'Swiss Harvey Knife',
			description: 'Prototype for Team Swiss Harvey Knife for the NYC Media Lab + MLBAM hackathon on February 10-12, 2017 at NYU.',
			url_base,
			url_path: '/'
		}
	});
};

// GET Home page - http://swissharveyknife.herokuapp.com
module.exports.p3 = function(req, res, next) {
	res.render('p3', {
		meta: {
			title: 'Swiss Harvey Knife',
			description: 'Prototype for Team Swiss Harvey Knife for the NYC Media Lab + MLBAM hackathon on February 10-12, 2017 at NYU.',
			url_base,
			url_path: '/'
		}
	});
};
