document.addEventListener("DOMContentLoaded", function() {

	alert('Website is still under construction!');

});


document.addEventListener("DOMContentLoaded", function() {
    
    // voer code uit als je op de knop klikt
    document.getElementById("toonVerhaalAsh").addEventListener("click", function() {
    
				// test of de knop werkt
        console.log('Toon verhaal');

        // verwijder en voeg de .verborgen class toe
        document.getElementById("ash").classList.remove("ash");
        document.getElementById("balistic").classList.remove("balistic");
        
    });

});