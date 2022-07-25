
var Win = 0;
var loss = 0;

for(var x=0;x<5;x++){
    var EnterNumber = parseInt(prompt("Enter Gussing Number 1 - 5 :"));
    var Result = Math.floor(Math.random()*5)+1;
    if(EnterNumber==Result){
    TotalHistory ="<h6 class='text-center'> Your Enter Number : "+ EnterNumber +" and Gussing  Number Was : "+ Result +"<br> </h6>";
      Win++
    }
    else{
    TotalHistory ="<h6 class='text-center'> Your Enter Number : "+ EnterNumber +" and Gussing  Number Was : "+ Result +"<br> </h6>";
        loss++
    }
    // console.log(TotalHistory); 
    document.write(TotalHistory);
    document.getElementById("win").innerHTML= Win;
    document.getElementById("loss").innerHTML= loss;
}




