class Soldier:
    def __init__(self, level: int):
        self.level = level

    def attack(self) -> int:
        return self.level * 1


class Jedi:
    def __init__(self, level: int):
        self.level = level

    def attackWithSaber(self) -> int:
        return self.level * 100


class JediAdapter:
    def __init__(self, jedi: Jedi):
        self.__jedi = jedi

    def attack(self):
        return self.__jedi.attackWithSaber()


class StarWarsGame:
    def __init__(self, character: Soldier | JediAdapter):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(JediAdapter(Jedi(20))).fight_enemy()
