export default function numberWithComma(number: string | number) {
  // Convert the number to a string
  let numberString = number.toString();

  // Split the string into an array of characters
  let characters = numberString.split("");

  // Reverse the array of characters
  characters.reverse();

  // Insert commas every three characters
  for (let i = 3; i < characters.length; i += 4) {
    characters.splice(i, 0, ",");
  }

  // Reverse the array of characters back
  characters.reverse();

  // Join the array of characters into a string
  let result = characters.join("");

  return result;
}
