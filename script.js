var createOwner = function (owner) {

var petOwner = {};  // new blank object created!
  petOwner.name = "";  //set the name property to the value of the (owner) parameter
  petOwner.ownerResults = null;
  petOwner.totalPets = 0;

  return petOwner();

};

var catOwners = createOwner ("Cat Owners");
var dogOwners = createOwner ("Dog Owners");

//testing git pus
