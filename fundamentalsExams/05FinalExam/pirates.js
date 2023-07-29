function solve(input) {
  let cities = {};

  let command = input.shift();

  while (command != "Sail") {
    const [city, citizens, gold] = command.split("||");
    if (!cities.hasOwnProperty(city)) {
      cities[city] = {
        citizens: 0,
        gold: 0,
      };
    }

    cities[city].citizens += Number(citizens);
    cities[city].gold += Number(gold);

    command = input.shift();
  }

  command = input.shift();

  while (command != "End") {
    const props = command.split("=>");

    const action = props[0];
    const town = props[1];
    switch (action) {
      case "Plunder":
        const people = Number(props[2]);
        const gold = Number(props[3]);
        cities[town].citizens -= people;
        cities[town].gold -= gold;

        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );

        if (cities[town].citizens == 0 || cities[town].gold == 0) {
          delete cities[town];
          console.log(`${town} has been wiped off the map!`);
        }
        break;
      case "Prosper":
        const goldAdd = Number(props[2]);
        if (goldAdd >= 0) {
          cities[town].gold += goldAdd;
          console.log(
            `${goldAdd} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`
          );
        } else {
          console.log("Gold added cannot be a negative number!");
        }
        break;
    }

    command = input.shift();
  }

  const countTowns = Object.values(cities).length;

  if (countTowns == 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${countTowns} wealthy settlements to go to:`
    );

    for (const city in cities) {
      console.log(
        `${city} -> Population: ${cities[city].citizens} citizens, Gold: ${cities[city].gold} kg`
      );
    }
  }
}

solve([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
