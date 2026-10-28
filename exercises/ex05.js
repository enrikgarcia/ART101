function paintPage (color){
$("body").css("background-color",color);
}

paintPage("pink");
let count=0;
let colorsCount=0; // new line

// an indexed array of data
let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];
let mood= ["fresh and happy", "keep pushing", "so tired"];
let buttonText="";

// we listend for when an htnl element with id "needy-button" is clicked and then...

$("#needy-button").click( function(){ 

    // what to do when the button is clicked
    // first, set a new value for "count", which is the current value + 1

    count = count +1; 

    console.log(count);
    console.log(colors[colorsCount]); // changed line

    // now let's find our button and set a new text for it

    buttonText="I was kicked " + count + " times and color is " + colors[colorsCount]; // changed line

    $("#needy-button").html( buttonText ); 

    //$("body").css( "background-color", colors[colorsCount] ); // changed line

   if (count>=5){$("needy-button").after("<p> my mood is... agitated</p>");}

    // if we are run out of colors start fron the first one anew
paintPage(colors[colorsCount]);
    colorsCount = colorsCount +1;  // new line

    if ( colorsCount >= 8 ) { colorsCount = 0;  } // new line
   
    

});
$("#green").click( function(){

console.log("green was clicked");
paintPage("green");
});
$("#orange").click( function(){

console.log("orange was clicked");
paintPage("orange");
});
$("#pink").click( function(){
console.log("pink was clicked");
paintPage("pink");
});
$("#black").click( function(){
console.log("black was clicked");
paintPage("black");
});
$("#white").click( function(){
console.log("white was clicked");
paintPage("white");
});
$("color-circle").css("background-color", this.id);
$(".color-circle").click(function (){

console.log("a circle was clicked")
paintPage(this.id);
});