const findTheOldest = function(arr) {
    const getAge = (birth, death) => {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    };
    
    return arr.reduce((personOldest, currentPerson) => {
        const oldestAge = getAge(personOldest.yearOfBirth, personOldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : personOldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
