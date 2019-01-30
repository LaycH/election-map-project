/*updated factory function parameters add color*/
var createOwner = function (owner,animalColor) {

var petOwner = {};  //new blank object created!*/
  petOwner.name = "";  //set the name property to the value of the (owner) parameter*/
  petOwner.ownerResults = null;
  petOwner.totalPets = 0;
  petOwner.animalColor = animalColor;
  

  petOwner.countTotalPets =function( ) /* check BONUS ELECTION MAP: WRITE YOUR JAVASCRIPT (PART 2)
  STEP 3 OF 4: WRITE A METHOD FOR TALLYING UP YOUR RESULTS for where to put this/ method for
   tallying votes, add to factory function above return statement*/ 
  {
    this.totalPets = 0;
    
    for (var i=0; i < this.ownerRestults.length; i ++)
    {
      this.totalPets = this.totalPets + this.ownerResults [i];
    console.log(this.totalPets);
  }
  };

  return createOwner();

};

var catOwners1= createOwner ("Cat Owners");  
var dogOwners2 = createOwner ("Dog Owners");

var catOwners1 = createOwner ("Cat Owners", [245, 141, 136]);
var dogOwners2 = createOwner ("Dog Owners" , [132,17, 11]);

catOwners1.ownerResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1,
  11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

dogOwners2.ownerResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3,
   9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

   //updated election array to follow this note*/
  catOwners1.ownerResults[9] = 1;
  dogOwners2.ownerResults[9] = 28;

  catOwners1.ownerResults[4] = 17;
  dogOwners2.ownerResults[4]= 38;

  catOwners1.ownerResutls[43] = 11;
  dogOwners2.ownerResults[43] = 27;

var setStateResults = (state){

  theStates[state].mostly =null;

  if (catOwners1.ownerResults[state] > dogOwners2.ownerResults[state]){

    theStates[state].mostly = catOwners1; 

  } else if (catOwners1.ownerResults[state] < dogOwners2.ownerResults[state]){

    theStates[state].mostly =dogOwners1;

  }

  stateName.innerText= theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

  catOwners1Name.innerText = catOwners1.name;
  dogOwners2Name.innerText = dogOwners2.name;

  catOwners1Results.innerText = catOwners1.ownerResults[state];
  dogOwners2.Results.innerText = dogOwners2.ownerResults[state];

  if (theStates[state].mostly ===null) {
    mostlyName.innerText = "Draw";
  } else {
    mostlyName.innerText = theStates[state].mostly.name;
  }
  
var stateMostly = theStates[state].mostly;

if (stateMostly !==null) {
  theStates[state].rgbColor = stateMostly.animalColor;
} else {
    theStates[state].rgbColor = [11,32,57];
}

};

var stateInfoTable = document.getElementById('stateResuts');

var header = stateInfoTable.children[0];
var body= stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var catOwners1Name = body.children[0].children[0];
var dogOwners2Name = body.children[1].children[0];
var catOwners1Results = body.children[0].children[1];
car dogOwners2Results = body.children[1].children[1];
var mostlyName = body.children[2].children[1];




//calling the method for each politician, add below the code that updates the electionResults arrays*/
  catOwners1.countTotalPets();
  dogOwners2.countTotalPets();

  console.log(catOwners1.totalPets);
  console.log(dogOwners2.totalPets);

  console.log("Cat Owners color is:" + catOwners1.animalColor)
  console.log("Dog Owners color is:" + dogOwners2.animalColor)

  /*subsitute "winner" with "mostly" and "winner name" for "Pet Owners"*/

  var mostly = "???";

if (catOwners1.totalPets > dogOwners2.totalPets) {
  mostly = catOwners1; /*or this might need to be "petOwners.name" or something ?*/
} else if (catOwners2.totalPets < dogOwners2.totalPets) {
  mostly= dogOwners2;
} else {
  mostly = "Draw."
}

console.log("And This State Is..." + mostly + "!" );

var countryInfoTable = document.getElementById('countryResults');

var countryInfoTable.children[0].children[0];

row.children[0].innerText = catOwners1.name;
row.children[1].innerText = catOwners1.totalPets;
row.children[2].innerText = dogOwners2.name;
row.children[3].innerText = dogOwners2.totalPets;
row.children[5].innerText = mostly;

