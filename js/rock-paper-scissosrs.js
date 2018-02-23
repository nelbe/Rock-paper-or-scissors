$(document).ready(function(){
	var elements = ["rock", "paper", "scissors"];
	var count = 3;
	var round = 0;
	var roundAutomatic = 0;
	var playImageChild;
	var itemSelectedComputer;
	var itemSelectedUser;

	$('#playImages').hide();
	$('#roundToAutomaticPlay').hide();
	$('#roundManualPlay').hide();
	$("article button").addClass("disable");

	// Enable and disable Manual and Automatic
	$('#manual, #automatic').click(function () {
		if (this.id == 'manual') {
			$('#automatic').addClass("disable");
			$('#playImages').show();
			$('#roundToAutomaticPlay').hide();
			$('#roundManualPlay').show();
	    	$('#roundManualPlay h1').html(round);
	    	$('#userImage').prepend('<h1 class="guest">GUEST</h1>');
			$('#computerImage').prepend('<h1 class="computer">COMPUTER</h1>');
	   	}
	    else if (this.id == 'automatic') {
	        $('#manual').addClass("disable");
	        $('#playImages').hide();
	        $('#roundToAutomaticPlay').show();
	        $('#roundManualPlay').hide();
	        $('#roundToAutomaticPlay h1').html(round);
	        $('#userImage').prepend('<h1 class="guest">GUEST</h1>');
			$('#computerImage').prepend('<h1 class="computer">COMPUTER</h1>');
	   	}
	});
	
	// New game button
	// $('#newGame').click(function() {
	// 	$('#roundToAutomaticPlay').hide();
	// 	$('#roundManualPlay').hide();
	// 	$('#startButton').removeClass("disable");
	// 	$('#stopButton').removeClass("disable");
	// }); 

	// Start button
	$('#startButton').click(function() {
		round = 0;
		$('#automaticMode').hide();
		$('#numberRounds').prop('disabled', 'disabled');
		$('#startButton').addClass("disable");
		$('#automaticMode').addClass("disable");
		$('#stopButton').removeClass("disable");
		$("#scoreBoardTable").find("tbody>tr").remove();

		if ($('select').val() != "unlimited") {
			roundAutomatic = parseInt($('select').val());
		}else{
			roundAutomatic = 1;	
		};
		
		numberAutomaticRound()
	});  

	// Stop button
	$('#stopButton').click(function() {
		roundAutomatic = 0;
		// $('#automaticMode').show();
		$('#numberRounds').prop('disabled', false);
		$('#startButton').removeClass("disable");
		$('#stopButton').addClass("disable");
		$('#automaticMode').removeClass("disable");
		$("#numberRounds").val('1');
		$("article button").addClass("disable");
		

	}); 

	// Exit automatic button
	$('#automaticMode').click(function() {
		roundAutomatic = 0;
		round = 0;
		$('#roundToAutomaticPlay').hide();
		$('#manual').removeClass("disable");
		$('#userImage > img').remove();
		$('#computerImage > img').remove();
		$("#scoreBoardTable").find("tbody>tr").remove();
		$('.guest').remove();
		$('.computer').remove();
		
	}); 

	// Exit manual button
	$('#manualMode').click(function() {
		round = 0;
		$('#roundManualPlay').hide();
		$('#playImages').hide();
		$('#automatic').removeClass("disable");
		// $('#playImages').hide();
		$('#userImage > img').remove();
		$('#computerImage > img').remove();
		$("#scoreBoardTable").find("tbody>tr").remove();
		$("article button").addClass("disable");
		$('.guest').remove();
		$('.computer').remove();
	}); 

	function numberAutomaticRound() {
		if ($('select').val() === "unlimited") {
			round++;
			animAutomatic();
		}else{
			roundAutomatic--;
			round++;
			animAutomatic();
		};

		
	}	

	function animAutomatic() {
		$('#roundToAutomaticPlay h1').html(round + " - PLAYING");
		$('#userImage img').hide();
		$('#computerImage img').hide();
		$('.count').show();
		$('#automaticMode').addClass("disable");

	    if (count > 0) {
	        $('.count').html(count);
	        count--;
	        setTimeout(animAutomatic, 700);
	        // clearInterval(timer);
	    }
	    else {
	        $('.count').hide();
	        automaticRound();
	        count = 3;
	    }
	}

	function automaticRound() {
		choiceRandomComputer();
		choiceRandomUser();
		
		if (itemSelectedComputer == "rock"){
			$('#computerImage').prepend('<img id="" src="../img/simple_rock.png" />');
			$('#computerImage').prepend('<h1 class="computer">COMPUTER</h1>');
		}else if (itemSelectedComputer == "paper") {
			$('#computerImage').prepend('<img id="" src="../img/simple_paper.png" />');
			$('#computerImage').prepend('<h1 class="computer">COMPUTER</h1>');
		}else{
			$('#computerImage').prepend('<img id="" src="../img/simple_scissors.png" />');
			$('#computerImage').prepend('<h1 class="computer">COMPUTER</h1>');
		};	
		
		if (itemSelectedUser == "rock"){
			$('#userImage').prepend('<img id="" src="../img/simple_rock.png" />');
			$('#userImage').prepend('<h1 class="guest">GUEST</h1>');
		}else if (itemSelectedUser == "paper") {
			$('#userImage').prepend('<img id="" src="../img/simple_paper.png" />');
			$('#userImage').prepend('<h1 class="guest">GUEST</h1>');
		}else{
			$('#userImage').prepend('<img id="" src="../img/simple_scissors.png" />');
			$('#userImage').prepend('<h1 class="guest">GUEST</h1>');
		};		

		$('#automaticMode').removeClass("disable");

		addResultsToTheTable();

		if (roundAutomatic > 0) {
				setTimeout(function() { numberAutomaticRound(); }, 4000);
		}else{
			$('#automaticMode').show();
			$('#roundToAutomaticPlay h1').html(round + " - GAME OVER");
			// alert("TU JUEGO HA TERMINADO")
		};
	}

	function animManual() {
		$('#roundManualPlay h1').html(round + 1 + " - PLAYING");
		$('#userImage img').hide();
		$('#computerImage img').hide();
		$('.count').show();

	    if (count > 0) {
	        console.log("ANIM MANUAL " + count);
	        $('.count').html(count);
	        count--;
	        setTimeout(animManual, 700);
	        // clearInterval(timer);
	    }
	    else {
	        $('.count').hide();
	        choiceUser();
	        count = 3;
	        // $('#playImages').prepend('<img id="rock" src="../img/rock.png" alt="rock" name="rock">');
	    }
	}


	$( "#playImages img:first-child" ).click(function() {
		$('#manualMode').hide();
		$( "#playImages img:first-child").addClass("imageSelected");
		$( "#playImages img:nth-child(2)").removeClass("imageSelected");
		$( "#playImages img:nth-child(3)").removeClass("imageSelected");

		
		playImageChild = "#playImages img:nth-child(1)";
		animManual();
		// choiceUser($( "#playImages img:nth-child(1)" ));
	});

	$( "#playImages img:nth-child(2)" ).click(function() {
		$('#manualMode').hide();
		$( "#playImages img:nth-child(2)").addClass("imageSelected");
		$( "#playImages img:nth-child(1)").removeClass("imageSelected");
		$( "#playImages img:nth-child(3)").removeClass("imageSelected");

		playImageChild = "#playImages img:nth-child(2)";
		animManual();
	  // choiceUser($( "#playImages img:nth-child(2)" ));
	});

	$( "#playImages img:nth-child(3)" ).click(function() {
		$('#manualMode').hide();
		$( "#playImages img:nth-child(3)").addClass("imageSelected");
		$( "#playImages img:nth-child(1)").removeClass("imageSelected");
		$( "#playImages img:nth-child(2)").removeClass("imageSelected");

	
		playImageChild = "#playImages img:nth-child(3)";
		animManual();
	  // choiceUser($( "#playImages img:nth-child(3)" ));
	});

	get_random = function (elements) {
	  return elements[Math.floor((Math.random()*elements.length))];
	} 

	function choiceUser() {
		round++;
		choiceRandomComputer();
		deleteImageComputer();
		deleteImageUser();
	$('.computer').remove();
	
		if (playImageChild == "#playImages img:nth-child(1)") {
			$('#userImage').prepend('<img id="simpleRock" src="../img/simple_rock.png" />');
			$('#userImage').prepend('<h1 class="guest">GUEST</h1>')
			itemSelectedUser = $("#playImages img:first-child").attr("name");

		}else if (playImageChild == "#playImages img:nth-child(2)") {
			$('#userImage').prepend('<img id="simplePaper" src="../img/simple_paper.png" />');
			$('#userImage').prepend('<h1 class="guest">GUEST</h1>')
			itemSelectedUser = $("#playImages img:nth-child(2)").attr("name");

		}else{
			$('#userImage').prepend('<img id="simpleScissors" src="../img/simple_scissors.png" />');
			$('#userImage').prepend('<h1 class="guest">GUEST</h1>')
			itemSelectedUser = $("#playImages img:nth-child(3)").attr("name");
		};
		
		if (itemSelectedComputer == "rock"){
			$('#computerImage').prepend('<img id="" src="../img/simple_rock.png" />');
			$('#computerImage').prepend('<h1 class="computer">COMPUTER</h1>');
		}else if (itemSelectedComputer == "paper") {
			$('#computerImage').prepend('<img id="" src="../img/simple_paper.png" />');
			$('#computerImage').prepend('<h1 class="computer">COMPUTER</h1>');
		}else{
			$('#computerImage').prepend('<img id="" src="../img/simple_scissors.png" />');
			$('#computerImage').prepend('<h1 class="computer">COMPUTER</h1>');
		};

		addResultsToTheTable()
		$('#manualMode').show();
	    // $('#computerImage').prepend('<h1>' + itemSelectedComputer + '</h1>')
	    // $('#computerImage h1').html(itemSelectedComputer)
	}	    

	function choiceRandomComputer() {
		$('.guest').remove();
		itemSelectedComputer = get_random(elements);
	}

	function choiceRandomUser() {
		$('.computer').remove();
		itemSelectedUser = get_random(elements);
	}

	function deleteImageUser() {
		$('#userImage > img').remove();	
	}

	function deleteImageComputer() {
		$('#computerImage > img').remove();	
	}	

	//Add results to the table
	function addResultsToTheTable() {
		$("article button").removeClass("disable");

		if (itemSelectedUser == itemSelectedComputer){
			$("#scoreBoardTable").find('tbody')
		    .append($('<tr>')
		        .append($('<td>').text(round))
		        .append($('<td>').text('Tie'))
		        .append($('<td>').text('Tie'))
			);
		}else if (itemSelectedUser === "rock" && itemSelectedComputer === "paper") {
			$("#scoreBoardTable").find('tbody')
			.append($('<tr>')
		        .append($('<td>').text(round))
		        .append($('<td>').text('Loser'))
		        .append($('<td>').text('Winner'))
			);
		}else if (itemSelectedUser === "rock" && itemSelectedComputer === "scissors") {
			$("#scoreBoardTable").find('tbody')
			.append($('<tr>')
		        .append($('<td>').text(round))
		        .append($('<td>').text('Winner'))
		        .append($('<td>').text('Loser'))
			);
		}else if (itemSelectedUser === "paper" && itemSelectedComputer === "rock") {
			$("#scoreBoardTable").find('tbody')
			.append($('<tr>')
		        .append($('<td>').text(round))
		        .append($('<td>').text('Winner'))
		        .append($('<td>').text('Loser'))
			);
		}else if (itemSelectedUser === "paper" && itemSelectedComputer === "scissors") {
			$("#scoreBoardTable").find('tbody')
			.append($('<tr>')
		        .append($('<td>').text(round))
		        .append($('<td>').text('Loser'))
		        .append($('<td>').text('Winner'))
			);
		}else if (itemSelectedUser === "scissors" && itemSelectedComputer === "rock") {
			$("#scoreBoardTable").find('tbody')
			.append($('<tr>')
		        .append($('<td>').text(round))
		        .append($('<td>').text('Loser'))
		        .append($('<td>').text('Winner'))
			);
		}else if (itemSelectedUser === "scissors" && itemSelectedComputer === "paper") {
			$("#scoreBoardTable").find('tbody')
			.append($('<tr>')
		        .append($('<td>').text(round))
		        .append($('<td>').text('Winner'))
		        .append($('<td>').text('Loser'))
			);
		};	
	}	

	

	$("article button").click(function() {
		$('#scoreBoardTable').tableExport({type:'pdf',
								fileName: 'SCORE-ROCK-PAPER-SICSSORS',
	                            jspdf:  {orientation: 'l',
	                                    format: 'a4',
	                                    margins: {left:10, right:10, top:20, bottom:20},
	                                    autotable: {styles: {fillColor: 'inherit', 
	                                                        textColor: 'inherit'},
	                                                tableWidth: 'auto'}
	                                    }
        });
	});

	$("#scoreBoardTable").datatable();
});

