

function createPolitician (name) {
  
  let politician = {
    name,
    electionResults:null,
    totalVotes: 0,
  };
  return politician;
  
}

const mrsRivers= createPolitician("Mrs.Rivers");
const mrBloom= createPolitician("Mr.Bloom");

console.log(mrsRivers);
console.log(mrBloom);
