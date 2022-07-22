const today = new Date();
const year = today.getFullYear();

const findTheOldest = function (people) {
  let calcd_age = [];
  for (const person of people) {
    if (!("yearOfDeath" in person)) {
      const total_age = year - person.yearOfBirth;
      calcd_age.push(total_age);
    } else {
      const total_age = person.yearOfDeath - person.yearOfBirth;
      calcd_age.push(total_age);
    }
  }
  const index = calcd_age.indexOf(Math.max(...calcd_age));
  return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
