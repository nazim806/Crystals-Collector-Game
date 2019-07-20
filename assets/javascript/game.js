$(document).ready(function() {



	let compChoice = Math.floor(Math.random() * 102) + 19; 
		console.log("compChoice: " + compChoice); 
		$(".randomNumber").html(compChoice); 

	

	let gemOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 1: " + gemOne); 
		$("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gemOne + ">"); 

	let gemTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 2: " + gemTwo); 
		$("#img2").html("<img src=" + "assets/images/image2.jpg" + " value=" + gemTwo + ">"); 

	let gemThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 3: " + gemThree); 
		$("#img3").html("<img src=" + "assets/images/image3.jpg" + " value=" + gemThree + ">");
	
	let gemFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 4: " + gemFour); 
		$("#img4").html("<img src=" + "assets/images/image4.jpg" + " value=" + gemFour + ">");
		
	let wins = 0; 
		console.log("wins: " + wins); 

	let losses = 0; 
		console.log("losses: " + losses); 

	let score = 0; 
		console.log("score: " + score); 

	function reset () {
		compChoice = Math.floor(Math.random() * 102) + 19; 
			console.log("compChoice: " + compChoice); 
		$(".randomNumber").html(compChoice); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		gemOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + gemOne); 
		$("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gemOne + ">"); 

		gemTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + gemTwo); 
		$("#img2").html("<img src=" + "assets/images/image2.jpg" + " value=" + gemTwo + ">"); 

		gemThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + gemThree); 
		$("#img3").html("<img src=" + "assets/images/image3.jpg" + " value=" + gemThree + ">");
	
		gemFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + gemFour); 
		$("#img4").html("<img src=" + "assets/images/image4.jpg" + " value=" + gemFour + ">");

		$("img").on("click", function () {
			let newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === compChoice) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > compChoice) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		let newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compChoice) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compChoice) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 
