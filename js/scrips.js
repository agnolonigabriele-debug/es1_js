 function acquista(){
    let eta;

    eta = prompt("Inserisci la tua età");

    if (eta != null || eta != ""){
        if(eta<5){
            alert("eta: " + eta + " paghi 8 euro");
        } else if (eta >= 18 && eta <= 25){
            alert("eta: " + eta + " paghi 3.5 euro");
        } else if(eta >= 50 && eta <= 55){
            alert("eta: " + eta + " paghi 5 euro");
        } else{
            alert("eta: " + eta + " paghi 8 euro");
        } 
    } else{
            alert("Nessuna età inserita!");
    }
 }