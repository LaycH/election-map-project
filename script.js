var createOwner = function (owner) {

var petOwner = {};  // new blank object created!
  petOwner.name = "";  //set the name property to the value of the (owner) parameter
  petOwner.ownerResults = null;
  petOwner.totalPets = 0;

  return petOwner();

};

var catOwners1= createOwner ("Cat Owners");
var dogOwners2 = createOwner ("Dog Owners");

catOwners1.ownerResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1,
  11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

dogOwners2.ownerResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3,
   9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

  catOwners1.ownerResults[9] = 1;
  dogOwners2.ownerResults[9] = 28;

  catOwners1.ownerResults[4] = 17;
  dogOwners2.ownerResults[4]= 38;

  catOwners1.ownerResutls[43] = 11;
  dogOwners2.ownerResults[43] = 27;