// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      mutate(){
        for (let i = 0; i < 15; i++){
          const currentDna = this.dna[i];
          do {
            this.dna[i] = returnRandBase();
          }while(currentDna === this.dna[i])
        }
      },
      compareDNA(another){
        let similarities = 0;
        for (let i = 0; i < 15; i++){
          if (another.dna[i] === this.dna[i]){
            similarities++;
          }
        }
        const percentOfDNAinCommon = 100 / 15 * similarities;
        console.log(`specimen #${this.specimenNum} and specimen #${another.specimenNum} have ${percentOfDNAinCommon} DNA in common`)
      },
      willLikelySurvive(){
        const CandG = this.dna.filter(base => base === 'C' || base === 'G');
        return CandG.length / this.dna.length >= 0.6;
      }
    }
  };
  
  const strongSpecimen = [];
  
  while (strongSpecimen.length < 30){
    let idCount = 0;
    let newInstance = pAequorFactory(idCount, mockUpStrand());
    if (newInstance.willLikelySurvive()){
      strongSpecimen.push(newInstance);
    }
    idCount++;
  }
  console.log(strongSpecimen);
  