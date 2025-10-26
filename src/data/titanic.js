import titanic from './titanic.json';

// mimic your R data prep:
export const titanicData = titanic.map(row => ({
  Survived: row.Survived === 1 ? "Survived" : "Not survived",
  Sex: row.Sex,
  Age: row.Age,
  Pclass: row.Pclass === 1 ? "First class" :
          row.Pclass === 2 ? "Second class" : "Third class",
  Fare: row.Fare
}));
