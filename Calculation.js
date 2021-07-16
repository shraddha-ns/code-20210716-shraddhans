const calculateBMI = require('./BMI');

const input = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, 
                {"Gender": "Male", "HeightCm": 161, "WeightKg":85 }, 
                {"Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, 
                {"Gender": "Female", "HeightCm": 166,"WeightKg": 62}, 
                {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, 
                {"Gender": "Female","HeightCm": 167, "WeightKg": 82}]

for(let i = 0; i < input.length; i++) 
{
  calculateBMI(input[i],input[i].HeightCm/100, input[i].WeightKg)
}
console.log('BMI output', input)

var count = input.reduce(function (n, input) 
{
  return n + (input.bmiCategory == 'Overweight');
}, 0);

console.log(count);
