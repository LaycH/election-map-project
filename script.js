

function createPolitician (name) {
  
  var politician = {};
    politician.name = "";
    politician.electionResults = null;
    politician.totalVotes = 0;

  return politician;
  
}

var politicianTwo = createPolitician("jane");

console.log(createPolitician("jane"));