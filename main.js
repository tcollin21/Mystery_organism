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

function pAewuorFac(num, arr) {
  return {
    specNum: num,
    dna: arr,
    mutate() {
      const i = Math.floor(Math.random() * this.dna.length);
      let base = this.dna[i];
      let mutBase = returnRandBase();
      if (base === mutBase) {
        mutBase = returnRandBase();
      }
      if (base !== mutBase) {
        base = mutBase;
        this.dna[i] = base;
      }
    },
    comp(pAequor) {
      const spec1 = newSpec;
      const spec2 = pAequor;
      let count = 0;
      for (let i = 0; i < spec1.dna.length; i++) {
        for (let j = 0; j < spec2.dna.length; j++) {
          if (i === j && spec1.dna[i] === spec2.dna[j]) {
            count++;
          }
        }
      }
      const per = (count / 15) * 100;
      return `Specimen ${spec1.specNum} and specimen ${spec2.specNum} are a ${per.toFixed(2)}% match.`
    },
    willSurvive() {
      let count = 0;
      for (letter of this.dna) {
        if (letter === 'G' || letter === 'C') {
          count++;
        }
      }
      let per = (count / 15) * 100;
      if (per >= 60) {
        return true;
      }
      return false;
    }
  }
}

// get 30 likely to survive
function thirtySpec() {
  let specArr = [];
  let count = 0;
  while (specArr.length < 30) {
    count++;
    const spec = pAewuorFac(count, mockUpStrand());
    if (spec.willSurvive() === true) {
      specArr.push(spec);
    }
  }
  return specArr;
}

// testing

// const pAequor = pAewuorFac(2, mockUpStrand());
// const newSpec = pAewuorFac(1, mockUpStrand());

// console.log(newSpec.dna);
// console.log(pAequor.dna);

// newSpec.mutate();

// console.log(newSpec.dna)

// console.log(newSpec.comp(pAewuorFac(2, mockUpStrand())));

// console.log(newSpec.comp(pAequor));

// console.log(newSpec.willSurvive());

// console.log(thirtySpec());