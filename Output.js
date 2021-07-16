const calculateBMI = require('./BMI');
test('HeightCm = 171 and WeightKg = 96. Output should bmi = 32.8, bmiCategory = Moderately obese, healthRisk = Medium risk', () => {
  expect(calculateBMI({}, 171/100, 96)).toEqual({bmi: '32.8',bmiCategory: 'Moderately obese',healthRisk: 'Medium risk'})
})