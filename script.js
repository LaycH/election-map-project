function createPolitician (name, color) {
  
  let politician = {
    name,
    color,
    electionResults:null,
    totalVotes : function () {

      let tallyVotes = 0;

      for (let votes of this.electionResults)
      tallyVotes += votes;
      console.log (tallyVotes);
    }
  };
  return politician;
};

const mrsRivers= createPolitician("Mrs.Rivers", [132, 17, 11]);
const mrBloom= createPolitician("Mr.Bloom", [245, 141, 136]);


console.log(mrsRivers);
console.log(mrBloom);

mrsRivers.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,
  8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
  
  mrBloom.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,
    14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
    
    mrsRivers.electionResults[9] = 1;
    mrBloom.electionResults[9] = 28;
    
    mrsRivers.electionResults[4]=17;
    mrBloom.electionResults[4]= 38;
    
    mrsRivers.electionResults[43] = 11;
    mrBloom.electionResults[43]= 27;
    


mrsRivers.totalVotes();
mrBloom.totalVotes();

console.log(mrsRivers.totalVotes);
console.log(mrBloom.totalVotes);




  
//FIRST TRY:
  //   let winner = getWinner();
  //   console.log(winner);
    
  //   function getWinner () {
  // if (mrsRivers.totalVotes > mrBloom.totalVotes)
  //   return mrsRivers.name;
  // else if (mrsRivers.totalVotes < mrBloom.totalVotes)
  //   return mrBloom.name;
  // else 
  //   return "draw";
  //   };

    
      
    
//SECOND TRY:

  //  let winner = "";
   

  //   if (mrsRivers.totalVotes > mrBloom.totalVotes){
  //     console.log(mrsRivers.name);
  //   }
  //   else if (mrsRivers.totalVotes < mrBloom.totalVotes){
  //     console.log(mrBloom.name);
  //   }
  //   else {
  //     console.log("draw");
  //   }

  //   console.log();

//THIRD TRY:

// const winner = findWinner;
// console.log(winner);

// function findWinner() {
// if (mrsRivers.totalVotes > mrBloom.totalVotes)
//   console.log(mrsRivers.name);
// else if (mrsRivers.totalVotes < mrBloom.totalVotes)
//   console.log(mrBloom.name);
//   else
//   console.log("draw");
//  return findWinner;
// }


//Here I copy pasted the Solution Code from "Bonus Election Map...Part 2...Setep 4 Of 4",
//but still not working for me, I am at a loss right now?? Please help?: 

//     var winner = "???";
 
// if (mrsRivers.totalVotes > mrBloom.totalVotes){
//     winner = mrsRivers.name;
// }else if (mrsRivers.totalVotes < mrBloom.totalVotes){
//     winner = mrBloom.name;
// }else{
//     winner = "DRAW."
// }
 
// console.log("AND THE WINNER IS..." + winner + "!!!");





