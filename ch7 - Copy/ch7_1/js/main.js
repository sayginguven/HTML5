$(document).ready(function(){

	function swap(a,b){
		var temp  = a;
		a = b;
		b = temp; 
	}

	var x=1, y=2;

	swap(x,y);

	function itentifyx(x){
		return function(){
			return x;
		}
	}

	function add(first,second){
		return first+second;
	}

	function sub(first,second){
		return first-second;
	}

	function mul(first,second){
		return first*second;
	}

	function identify(x){
		return function(){
			return x;
		};
	}



	function addf(first){
		return function(second){
			return first+second;
		};
	}

	function liftf(binary){
		return function(first){
			return function(second){
				return binary(first,second);
			};

		};
	}

	// var addf = liftf(add);
	$('#demo1').html(addf(4)(5));
	$('#demo2').html(liftf(mul)(4)(5));

});

