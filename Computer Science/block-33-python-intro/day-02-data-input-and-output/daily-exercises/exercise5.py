import json
import random

def main():
    with open("pokemons.json", mode="r") as pokemons_file:
        pokemons = json.load(pokemons_file)["results"]

    pokemon = random.choice(pokemons)["name"]
    print(pokemon)

    print("Who is this pokemon?")
    count = 0

    while count < len(pokemon):
        print(pokemon[0:count])
        guess = input("Guess: ")
        if guess.lower() == pokemon.lower():
            return print("You won!")
        count += 1

    print("You lose!")

main()
