const findTheOldest = function (people) {
  const calcd_ages = people.map((person) => {
    return findAge(person.yearOfBirth, person.yearOfDeath);
  });
  const index = calcd_ages.indexOf(Math.max(...calcd_ages));
  return people[index];
};

const findAge = function (birth_year, death_year) {
  if (!death_year) {
    death_year = new Date().getFullYear();
  }
  return death_year - birth_year;
};

// Do not edit below this line
module.exports = findTheOldest;
