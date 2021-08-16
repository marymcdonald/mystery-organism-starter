// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


//returns an object that contains 2 parameters:
//a number & an array of 15 DNA bases

const pAequorFactory = (number, dnaArray) => {
  return{
    specimenNum: number,
    dna: dnaArray,
    mutate(){
      const randIndex = Math.floor(Math.random() * 15);
      const randomBase = this.dna[randIndex];
      let switchBase = returnRandBase();
      while(randomBase === switchBase){
        switchBase = returnRandBase();
      }
      this.dna[randIndex] = switchBase;
      return this.dna;
    },
    compareDNA(pAequor2){ //computes how many bases are identical
      let counter = 0;    //& in the same location

      this.dna.forEach((base,index) => {
        if(base === pAequor2.dna[index]){counter++;};
      });
      const commonPercent = Math.round(counter/15*100);
      return console.log(`specimen #1 and specimen #2 have ${commonPercent}%
        DNA in common.`)
    },
    willLikelySurvive(){ //returns true if dna array contains 60% C or G
      let numCorG = 0;
      this.dna.forEach(base => {if(base ==='C' || base === 'G'){numCorG++;};});
      if(numCorG/15 >= 0.6){
        return true;
      } else{
        return false;
      }
    },
    complementStrand(){
      let complementary = [];
      this.dna.forEach(base => {
        switch(base){
          case 'A': complementary.push('T');
          break;
          case 'T': complementary.push('A');
          break;
          case 'C': complementary.push('G');
          break;
          case 'G': complementary.push('C');
          break;
        }
      });
      return complementary;
    }
  };
};


//let data = pAequorFactory(5, mockUpStrand());
//const data2 = pAequorFactory(10, mockUpStrand());

function thirtypAqequor(){ //creates 30 instances of pAqequor
  let thirtyInstances = [];
  for(i=0; i<30; i++){
    thirtyInstances.push(pAequorFactory(i, mockUpStrand()));
  }
  return thirtyInstances;
}

const studyArrays = thirtypAqequor();
//console.log(studyArrays.length);
console.log(studyArrays[20]);
console.log(studyArrays[20].complementStrand());
