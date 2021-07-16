function calculateBMI (person, inputHeight, inputWeight) 
{
  const height = parseFloat(inputHeight);
  const weight = parseFloat(inputWeight);
  let bmi = weight / (height * height);
  person.bmi = bmi.toFixed(1);
  if (person.bmi <= 18.4) 
  {
    person.bmiCategory = 'Underweight';
    person.healthRisk = 'Malnutrition risk';
  } 
  else if (18.5 <= person.bmi && person.bmi <= 24.9) 
  {
    person.bmiCategory = 'Normalweight';
    person.healthRisk = 'Low risk';
  } 
  else if (25 <= person.bmi && person.bmi <= 29.9) 
  {
    person.bmiCategory = 'Overweight';
    person.healthRisk = 'Enhanced risk';
  } 
  else if (30 <= person.bmi && person.bmi <= 34.9) 
  {
    person.bmiCategory = 'Moderately obese';
    person.healthRisk = 'Medium risk';
  } 
  else if (35 <= person.bmi && person.bmi <= 39.9) 
  {
    person.bmiCategory = 'Severely obese';
    person.healthRisk = 'High risk';
  } 
  else 
  {
    person.bmiCategory = 'Very severely obese';
    person.healthRisk = 'Very high risk';
  }
  console.log(person)
  return person;
}

module.exports = calculateBMI
