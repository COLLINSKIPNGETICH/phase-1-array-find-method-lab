// Define the superbowlWin function
function superbowlWin(record) {
  // Use the find method to search for a win ("W")
  const winningRecord = record.find(entry => entry.result === "W");

  // If a win is found, return the corresponding year
  if (winningRecord) {
    return winningRecord.year;
  }

  // If no win is found, return undefined
  return undefined;
}
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
];

const winningYear = superbowlWin(record);
console.log(winningYear); 

