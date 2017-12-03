function fizzBuzz(value) {
  const isMultipleOf3 = isMultipleOf(value, 3);
  const isMultipleOf5 = isMultipleOf(value, 5);
  const has3inValue = hasNumberInValue(value, 3);
  const has5inValue = hasNumberInValue(value, 5);

  if (isMultipleOf3 && isMultipleOf5 || has3inValue && has5inValue) return 'FizzBuzz';
  else if (isMultipleOf3 || has3inValue) return 'Fizz';
  else if (isMultipleOf5 || has5inValue) return 'Buzz';
  else return value.toString();
}

function isMultipleOf(value, divider) {
  return value % divider === 0;
}

function hasNumberInValue(value, number) {
  return [...value.toString()].filter(n => n == number).length > 0;
}

export default fizzBuzz;