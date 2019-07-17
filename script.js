// DECLARATIONS
const co = document.querySelector('.co');
const claim = document.querySelector('.claim');
const header = document.querySelector('header');
// HOME
const casinoHome = document.querySelector('.casinoHome');
const hiddenHome = document.querySelector('.hiddenHome');
// OFFERS
const offer = document.querySelector('.offer');
const offer1 = document.querySelector('.offer1');
const offer2 = document.querySelector('.offer2');
const offer3 = document.querySelector('.offer3');
// SUBOFFERS
const subOffer1 = document.querySelector('.subOffer1');
const subOffer2 = document.querySelector('.subOffer2');
const subOffer3 = document.querySelector('.subOffer3');
// REVEAL BUTTON
const revealBtn1 = document.querySelector('.revealBtn1');
const revealBtn2 = document.querySelector('.revealBtn2');
const revealBtn3 = document.querySelector('.revealBtn3');
// CARD CLAIM BUTTON
const cardClaim = document.querySelector('.cardClaim');
const cardClaim2 = document.querySelector('.cardClaim2');
const cardClaim3 = document.querySelector('.cardClaim3');
// DOLLAR IMAGES
const dollarIMG = document.querySelector('.dollarIMG');
const dollarIMG2 = document.querySelector('.dollarIMG2');
const dollarIMG3 = document.querySelector('.dollarIMG3');
// OFFER IMAGES
const offerIMG = document.querySelector('.offerIMG');
const offerIMG2 = document.querySelector('.offerIMG2');
const offerIMG3 = document.querySelector('.offerIMG3');
// MODAL
let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
// LEAD FORM
const leadForm = document.querySelector('#leadForm');
const leadForm2 = document.querySelector('#leadForm2');
const leadForm3 = document.querySelector('#leadForm3');
const redirect = document.querySelector('#a');
const redirect2 = document.querySelector('#a2');
const redirect3 = document.querySelector('#a3');

// FUNCTIONS
claim.addEventListener('click', function(){
	header.style.animation = 'fadeOut 1s';
	casinoHome.style.animation = 'cog3 1s';
    setTimeout(showHidden, 200);
});

function showHidden(){
	header.style.display = 'none';
	casinoHome.style.display = 'none';
	hiddenHome.style.animation = 'fadeIn 0.7s';
    hiddenHome.style.display = 'block';
    offer.style.animation = 'float 1s infinite';
	offer.style.animationTimingFunction = 'linear';
}


//SUBOFFER1 FUNCTION

subOffer1.addEventListener('click', clickOffer1);

function clickOffer1(){
	dollarIMG.style.display = 'none';
	let w = window.innerWidth;
	if(w <= 767){
		subOffer1.style.transform = 'scale(0.85)';
	}
	else{
		subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
	}
	subOffer1.style.background = 'linear-gradient(yellow, white)';
	offerIMG.style.display = 'block';
	revealBtn1.style.display = 'block';
	cardClaim.style.display = 'block';
	revealBtn1.addEventListener('click', function (){
		cardClaim2.style.display = 'block';
		dollarIMG2.style.display = 'none';
		subOffer2.style.animation = 'cog2 1s';
		let w = window.innerWidth;
		if(w <= 767){
			subOffer2.style.transform = 'scale(0.85)';
		}
		else{
			subOffer2.style.transform = 'scale(1.2)';
		}
		subOffer2.style.background = 'linear-gradient(yellow, white)';
		offerIMG2.style.display = 'block';
		revealBtn2.style.display = 'block';
	});
	revealBtn2.addEventListener('click', function (){
		cardClaim3.style.display = 'block';
		dollarIMG3.style.display = 'none';
		subOffer3.style.animation = 'cog2 1s';
		if(w <= 767){
			subOffer3.style.transform = 'scale(0.85)';
		}
		else{
			subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
		}
		subOffer3.style.background = 'linear-gradient(yellow, white)';
		offerIMG3.style.display = 'block';
		revealBtn3.style.display = 'block';
		revealBtn3.innerHTML = 'Reveal All';
	});
	revealBtn3.addEventListener('click', function (){
		revealBtn1.remove();
		revealBtn2.remove();
		revealBtn3.remove();
		cardClaim.remove();
		cardClaim2.remove();
		cardClaim3.remove();

		offer.style.animation = 'fadeOut 0.5s';
		setTimeout(fadingOut, 100);
		function fadingOut(){
			let w = window.innerWidth;
			if(w > 767){
				co.innerHTML = 'CONGRATULATIONS!';
				co.style.borderTop = 'none';
				co.style.fontSize = '3em';
				co.style.animation = 'slideInFromTop 1s, float 1s infinite';
				hiddenHome.style.background = 'rgba(177, 177, 0, 0.19)';
				offer1.style.animation = 'slideInFromBottom 1s';
				offer2.style.animation = 'slideInFromBottom 1.5s';
				offer3.style.animation = 'slideInFromBottom 1.8s';
				offer1.style.marginTop = '40px';
				offer2.style.margin = '50px';
				offer3.style.marginTop = '40px';
				offer.style.transform = 'scale(0.7)';
				subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
				subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
			}
			else{
				co.innerHTML = 'CONGRATULATIONS!';
				subOffer1.style.transform = 'scale(0.7)';
				subOffer2.style.transform = 'scale(0.7)';
				subOffer3.style.transform = 'scale(0.7)';
			}
		}
	});
}


//SUBOFFER2 FUNCTION

subOffer2.addEventListener('click', clickOffer2);

function clickOffer2(){
	dollarIMG2.style.display = 'none';
	let w = window.innerWidth;
	if(w <= 767){
		subOffer2.style.transform = 'scale(0.85)';
	}
	else{
		subOffer2.style.transform = 'scale(1.2)';
	}
	subOffer2.style.background = 'linear-gradient(yellow, white)';
	offerIMG2.style.display = 'block';
	revealBtn2.style.display = 'block';
	cardClaim2.style.display = 'block';
	revealBtn2.addEventListener('click', function (){
		cardClaim3.style.display = 'block';
		dollarIMG3.style.display = 'none';
		subOffer3.style.animation = 'cog2 1s';
		let w = window.innerWidth;
		if(w <= 767){
			subOffer3.style.transform = 'scale(0.85)';
		}
		else{
			subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
		}
		subOffer3.style.background = 'linear-gradient(yellow, white)';
		offerIMG3.style.display = 'block';
		revealBtn3.style.display = 'block';
	});
	revealBtn3.addEventListener('click', function (){
		cardClaim.style.display = 'block';
		dollarIMG.style.display = 'none';
		subOffer1.style.transition = 'all 0.5s';
		let w = window.innerWidth;
		if(w <= 767){
			subOffer1.style.transform = 'scale(0.85)';
		}
		else{
			subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
		}
		subOffer1.style.background = 'linear-gradient(yellow, white)';
		offerIMG.style.display = 'block';
		revealBtn1.style.display = 'block';
		revealBtn1.innerHTML = 'Reveal All';
	});
	revealBtn1.addEventListener('click', function (){
		revealBtn1.remove();
		revealBtn2.remove();
		revealBtn3.remove();
		cardClaim.remove();
		cardClaim2.remove();
		cardClaim3.remove();

		offer.style.animation = 'fadeOut 1s';
		setTimeout(fadingOut2, 500);
		function fadingOut2(){
			let w = window.innerWidth;
			if(w > 767){
				co.innerHTML = 'CONGRATULATIONS!';
				co.style.borderTop = 'none';
				co.style.fontSize = '3em';
				co.style.animation = 'slideInFromTop 1s, float 1s infinite';
				hiddenHome.style.background = 'rgba(177, 177, 0, 0.19)';
				offer1.style.animation = 'slideInFromBottom 1s';
				offer2.style.animation = 'slideInFromBottom 1.5s';
				offer3.style.animation = 'slideInFromBottom 1.8s';
				offer1.style.marginTop = '40px';
				offer2.style.margin = '50px';
				offer3.style.marginTop = '40px';
				offer.style.transform = 'scale(0.7)';
				subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
				subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
			}
			else{
				co.innerHTML = 'CONGRATULATIONS!';
				subOffer1.style.transform = 'scale(0.7)';
				subOffer2.style.transform = 'scale(0.7)';
				subOffer3.style.transform = 'scale(0.7)';
			}
		}
	});
}

//SUBOFFER3 FUNCTION

subOffer3.addEventListener('click', clickOffer3);

function clickOffer3(){
	dollarIMG3.style.display = 'none';
	let w = window.innerWidth;
	if(w <= 767){
		subOffer3.style.transform = 'scale(0.85)';
	}
	else{
		subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
	}
	subOffer3.style.background = 'linear-gradient(yellow, white)';
	offerIMG3.style.display = 'block';
	revealBtn3.style.display = 'block';
	cardClaim3.style.display = 'block';
	revealBtn3.addEventListener('click', function (){
		dollarIMG2.style.display = 'none';
		cardClaim2.style.display = 'block';
		subOffer2.style.animation = 'cog2 1s';
		let w = window.innerWidth;
		if(w <= 767){
			subOffer2.style.transform = 'scale(0.85)';
		}
		else{
			subOffer2.style.transform = 'scale(1.2)';
		}
		subOffer2.style.background = 'linear-gradient(yellow, white)';
		offerIMG2.style.display = 'block';
		revealBtn2.style.display = 'block';
	});
	revealBtn2.addEventListener('click', function (){
		dollarIMG.style.display = 'none';
		cardClaim.style.display = 'block';
		subOffer1.style.transition = 'all 0.5s';
		if(w <= 767){
			subOffer1.style.transform = 'scale(0.85)';
		}
		else{
			subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
		}
		subOffer1.style.background = 'linear-gradient(yellow, white)';
		offerIMG.style.display = 'block';
		revealBtn1.style.display = 'block';
		revealBtn1.innerHTML = 'Rveal All';
	});
	revealBtn1.addEventListener('click', function (){
		revealBtn1.remove();
		revealBtn2.remove();
		revealBtn3.remove();

		offer.style.animation = 'fadeOut 1s';
		setTimeout(fadingOut3, 500);
		function fadingOut3(){
			let w = window.innerWidth;
			if(w > 767){
				co.innerHTML = 'CONGRATULATIONS!';
				co.style.borderTop = 'none';
				co.style.fontSize = '3em';
				co.style.animation = 'slideInFromTop 1s, float 1s infinite';
				hiddenHome.style.background = 'rgba(177, 177, 0, 0.19)';
				offer1.style.animation = 'slideInFromBottom 1s';
				offer2.style.animation = 'slideInFromBottom 1.5s';
				offer3.style.animation = 'slideInFromBottom 1.8s';
				offer1.style.marginTop = '40px';
				offer2.style.margin = '50px';
				offer3.style.marginTop = '40px';
				offer.style.transform = 'scale(0.7)';
				subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
				subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
			}
			else{
				co.innerHTML = 'CONGRATULATIONS!';
				subOffer1.style.transform = 'scale(0.7)';
				subOffer2.style.transform = 'scale(0.7)';
				subOffer3.style.transform = 'scale(0.7)';
			}
		}
	});
}

//  FUNCTION: CARD CLAIM
cardClaim.addEventListener('click', (e) =>{
	modal.style.display = "block";
});

cardClaim2.addEventListener('click', (e) =>{
	modal2.style.display = "block";
});

cardClaim3.addEventListener('click', (e) =>{
	modal3.style.display = "block";
});

leadForm.addEventListener('submit', (e) =>{
	// Prevent actual submit
	e.preventDefault();

	// Validate Lead Collection Box
	let email = document.querySelector('#email');
	let checkbox = document.querySelector('#checkbox');

	if(email.value === ''){
		email.style.border = '2px solid red';
	}
	else if(checkbox.checked === false){
		alert('Please confirm registration');
	}
	else{
		modal.style.display = "none";
		// Sample Offer Link
		let CasinoOffers = 'CasinoOffers.pdf';
		window.open(CasinoOffers);
	}
});
leadForm2.addEventListener('submit', (e) =>{
	// Prevent actual submit
	e.preventDefault();

	// Validate Lead Collection Box
	let email2 = document.querySelector('#email2');
	let checkbox2 = document.querySelector('#checkbox2');

	if(email2.value === ''){
		email2.style.border = '2px solid red';
	}
	else if(checkbox2.checked === false){
		alert('Please confirm registration');
	}
	else{
		modal2.style.display = "none";
		// Sample Offer Link
		let CasinoOffers = 'CasinoOffers.pdf';
		window.open(CasinoOffers);
	}
});
leadForm3.addEventListener('submit', (e) =>{
	// Prevent actual submit
	e.preventDefault();

	// Validate Lead Collection Box
	let email3 = document.querySelector('#email3');
	let checkbox3 = document.querySelector('#checkbox3');

	if(email3.value === ''){
		email3.style.border = '2px solid red';
	}
	else if(checkbox3.checked === false){
		alert('Please confirm registration');
	}
	else{
		modal3.style.display = "none";
		// Sample Offer Link
		let CasinoOffers = 'CasinoOffers.pdf';
		window.open(CasinoOffers);
	}
});
redirect.onclick = function(){
	let TermsConditions = 'TermsConditions.pdf';
	window.open(TermsConditions);
}
redirect2.onclick = function(){
	let TermsConditions = 'TermsConditions.pdf';
	window.open(TermsConditions);
}
redirect3.onclick = function(){
	let TermsConditions = 'TermsConditions.pdf';
	window.open(TermsConditions);
}