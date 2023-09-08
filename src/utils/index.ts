//Tranforms array with values to an array with unique values
export const uniqueValuesFromArray = (arrayWithValues: any) => {
  const arrayWithUniqueValues = new Set(arrayWithValues);
  return Array.from(arrayWithUniqueValues);
};
