/**
 * Created by geoffreyboss on 2/24/14.
 */


rocketLogo = "static/img/rocket-ship.jpg"
// cohabName = $('#userInput').val();
// cohabInfo = $('#newCohab').val();

$(document).ready(function(){

	$('#new-cohab').click(function() {
		$('#createModal').modal('show');
	});

	$('#creater').click(function(){

		cohabName = $('#userInput').val();
		cohabInfo = $('#newCohab').val();
		$('#cohabList').append('<div class="col-xs-6 col-sm-3 placeholder"><img data-src="'+ rocketLogo+'" id="img-animate" class="img-responsive" alt="New Cohab" src="'+ rocketLogo +'"><h4>'+ cohabName +'</h4>' + '<span class="text-muted">'+cohabInfo +'</span>' + '</div>')
		console.log('We are close');
	});

	$('#addCohab').click(function(){
		console.log('New cohab created');
	});

	$('#overview').click(function(){
		$('#overviewModal').modal('show');

	});

});