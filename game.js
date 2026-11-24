// Об'єкт гравця
const player = {
  name: "Герой",
  health: 100,
  attackPower: 20
};

// Об'єкт монстра
const monster = {
  name: "Гоблін",
  health: 80,
  attackPower: 15
};

// Інвентар гравця
const inventory = ["меч", "щит", "зілля здоров'я"];

// Розрахунок бонусу від зброї
function getInventoryBonus() {
  let bonusAttack = 0;

  for (let i = 0; i < inventory.length; i++) {
    switch (inventory[i]) {
      case "меч":
        bonusAttack += 5;
        break;
      case "щит":
        break;
      case "зілля здоров'я":
        break;
    }
  }
  return bonusAttack;
}

// Атака гравця
function attack() {
  const totalDamage = player.attackPower + getInventoryBonus();
  monster.health -= totalDamage;

  if (monster.health < 0) {
    monster.health = 0;
  }

  console.log(player.name + " атакує монстра!");
  console.log("Здоров'я монстра: " + monster.health + " HP\n");
}

// Атака монстра та використання предметів
function monsterAttack() {
  let damage = monster.attackPower;

  if (inventory.includes("щит")) {
    damage -= 5;
  }

  player.health -= damage;

  if (player.health < 0) {
    player.health = 0;
  }

  console.log("Монстр атакує героя!");
  console.log("Здоров'я героя: " + player.health + " HP\n");

  if (player.health > 0 && player.health < 40 && inventory.includes("зілля здоров'я")) {
    player.health += 20;
    const potionIndex = inventory.indexOf("зілля здоров'я");
    inventory.splice(potionIndex, 1);
    console.log(player.name + " використав зілля здоров'я! Поточне HP: " + player.health + "\n");
  }
}

// Виведення поточного стану
function showStatus() {
  console.log("Гравець: " + player.name);
  console.log("Здоров'я: " + player.health + " HP\n");

  console.log("Монстр: " + monster.name);
  console.log("Здоров'я: " + monster.health + " HP\n");
}

// Запуск гри
console.log("Гра «Битва з монстром»\n");
showStatus();

let round = 1;

// Основний цикл битви
while (player.health > 0 && monster.health > 0) {
  console.log("=== Раунд " + round + " ===");

  attack();

  if (monster.health > 0) {
    monsterAttack();
  }

  round++;
}

// Визначення переможця
if (player.health > 0) {
  console.log("Перемога!");
  console.log(player.name + " переміг монстра!");
} else {
  console.log("Поразка!");
  console.log(monster.name + " переміг героя!");
}