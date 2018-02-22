$(document).ready(function(){
	
	var myObj = {
	    "product": {
		    "ref": "81144U-EDB",
		    "name": "UMBRO MEDUSAE PRO",
		    "pvp": "€65,95",
		    "size": "42"
		},
	    "product2": {
		    "ref": "76144U-EDB",
		    "name": "FUTSAL STREET V IC",
		    "pvp": "€90",
		    "size": "44"
	    },
	    "product3": {
		    "ref": "80957U-DKD",
		    "name": "UMBRO SPECIALI ETERNAL PRO HG",
		    "pvp": "€130,59",
		    "size": "36"
	    },
	    "product4": {
		    "ref": "96787I-300",
		    "name": "UMBRO ATTAK IC",
		    "pvp": "€40,60",
		    "size": "38"
	    },
		    "product5": {
		    "ref": "81095U-EDE",
		    "name": "UMBRO MEDUSAE PREMIER",
		    "pvp": "€82",
		    "size": "40"
	    },
	    "product6": {
		    "ref": "76144U-EDB",
		    "name": "FUTSAL STREET V IC",
		    "pvp": "€90",
		    "size": "44"
	    },
	    "product7": {
		    "ref": "80957U-DKD",
		    "name": "UMBRO SPECIALI ETERNAL PRO HG",
		    "pvp": "€130,59",
		    "size": "36"
	    },
	    "product8": {
		    "ref": "96787I-300",
		    "name": "UMBRO ATTAK IC",
		    "pvp": "€40,60",
		    "size": "38"
	    },
		"product9": {
		    "ref": "81095U-EDE",
		    "name": "UMBRO MEDUSAE PREMIER",
		    "pvp": "€82",
		    "size": "40"
	    }
	}
	

	$.each(myObj, function(key, value) {
	    $('.products').append('<div class="product"><h1>'+value.name+'</h1><p>'+value.pvp+'</p>');

	});

	$('.product').prepend('<img id="" src="../img/product.png" />')
	

});

