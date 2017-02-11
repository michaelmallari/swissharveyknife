// GET Home page - http://swissharveyknife.herokuapp.com
module.exports.index = function(req, res, next) {
	res.render('default', {
		meta: {
			title: 'Swiss Harvey Knife',
			description: 'Prototype for Team Swiss Harvey Knife for the NYC Media Lab + MLBAM hackathon on February 10-12, 2017 at NYU.',
			url_base,
			url_path: '/'
		}
	});
};