var createOwner = function (owner) {

var petOwner = {};  //new blank object created!*/
  petOwner.name = "";  //set the name property to the value of the (owner) parameter*/
  petOwner.ownerResults = null;
  petOwner.totalPets = 0;

  petOwner.countTotalPets =function() /* check BONUS ELECTION MAP: WRITE YOUR JAVASCRIPT (PART 2)
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

  return petOwner();

};

var catOwners1= createOwner ("Cat Owners");  /*subsitute "winner" with "mostly" and "winner name" for "Pet Owners"*/
var dogOwners2 = createOwner ("Dog Owners");

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

//calling the method for each politician, add below the code that updates the electionResults arrays*/
  catOwners1.countTotalPets();
  dogOwners2.countTotalPets();

  console.log(catOwners1.totalPets);
  console.log(dogOwners2.totalPets);

