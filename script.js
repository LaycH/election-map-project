  function createPolitician (name,partyColor) {
      let politician = {
        name,
        electionResults:null,
        totalVotes: 0,
        partyColor,
        tallyVotes : function () {
        for (let votes of this.electionResults)
        this.totalVotes += votes;
        }
      };
      return politician;
    }

const mrsRivers= createPolitician("Mrs.Rivers",[132, 17, 11]);
const mrsBloom= createPolitician("Mrs.Bloom",[245, 141, 136]);

console.log(mrsRivers.partyColor);
console.log(mrsBloom.partyColor);

// Arrays for each canidates state votes:

mrsRivers.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,
  8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
  
  mrsBloom.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,
    14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
    
    mrsRivers.electionResults[9] = 1;
    mrsBloom.electionResults[9] = 28;
    
    mrsRivers.electionResults[4]=17;
    mrsBloom.electionResults[4]= 38;
    
    mrsRivers.electionResults[43] = 11;
    mrsBloom.electionResults[43]= 27;

    //tallVotes method is called for politician object:
    mrsRivers.tallyVotes();
    mrsBloom.tallyVotes();
    
    console.log(mrsRivers.totalVotes);
    console.log(mrsBloom.totalVotes);
    
    //Declaring the winner:
    let winner = "";
    if (mrsRivers.totalVotes > mrsBloom.totalVotes){
      winner = mrsRivers.name;
    }
    else if (mrsRivers.totalVotes < mrsBloom.totalVotes){
      winner = mrsBloom.name;
    }
    else {
      winner = "draw";
    }
    console.log(winner);
    
    let setStateResults = function (state) {
      theStates[state].winner = null;
      if (mrsRivers.electionResults[state] > mrsBloom.electionResults[state]){
        theStates[state].winner = mrsRivers;
      }
      else if (mrsRivers.electionResults[state] < mrsBloom.electionResults[state]){
        theStates[state].winner = mrsBloom;
      }
      // store the winner in a new variable and assign their party color:
      const storeNewWinner = theStates[state].winner;
      if (storeNewWinner !== null) {
        theStates[state].rgbColor = storeNewWinner.partyColor;
      }
      else { 
        theStates[state].rgbColor = [11,32,57]; 
  }
  
  let stateTable = document.getElementById('stateResults');
  
  let header = stateTable.children[0];
  
  let stateBody = stateTable.children[1]; //this gets you to the body element, the 1st <tr> tag at body
  
  let stateName = header.children[0].children[0]; //this brings you to the 1st <th> tag so you can name it
  let abbrev = header.children[0].children[1];
  
  let name1 = stateBody.children[0].children[0];
  let results1 = stateBody.children[0].children[1];
  
  let name2 = stateBody.children[1].children[0];
  let results2 = stateBody.children[1].children[1];
  
  let namedWinner = stateBody.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = theStates[state].nameAbbrev;

  name1.innerText = mrsRivers.name;
  results1.innerText = mrsRivers.electionResults[state];
  
  name2.innerText = mrsBloom.name;
  results2.innerText = mrsBloom.electionResults[state];
  
  if (theStates[state].winner === null){
    namedWinner.innerText = "Draw";
  }
  else {
    namedWinner.innerText = theStates[state].winner.name;
  }
  
} 

let countryTable = document.getElementById('countryResults');
let countryBody = countryTable.children[0].children[0]; //here we are at the table element and then at the 1st childelement
//element that is the <tr> tag NOTE* is there was another <tr> tag down the line you would have "children[1] or children[2]"etc."
// Next you will get to the individual class names starting from "0 thru 3" skip
// skip the first </th> tag where it says winner and then access the next "child" in line that will be the 5th

countryBody.children[0].innerText = mrsRivers.name;
countryBody.children[1].innerText = mrsRivers.totalVotes;
countryBody.children[2].innerText = mrsBloom.name;
countryBody.children[3].innerText = mrsBloom.totalVotes;
countryBody.children[5].innerText = winner;







