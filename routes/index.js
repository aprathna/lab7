var projects = require('../projects.json');

/*
 * GET home page.
 */

 exports.view = function(req, res){
 	//res.render('index', projects);
 	//projects["grid"] = false;

 	var random_num = Math.random();
 	console.log(random_num);

 	if (random_num >= 0) {
 		projects['grid'] = false;
 		res.render('index', projects);
 	} else {
 		res.redirect('/grid');
 	}
 };

 exports.viewGrid = function(req, res){
  	res.render('index', projects);
  	projects["grid"] = true;
};