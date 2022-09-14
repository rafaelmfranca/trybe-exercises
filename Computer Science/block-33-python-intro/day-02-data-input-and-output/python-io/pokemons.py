import json

with open('pokemons.json') as pokemons_file:
    pokemons = json.load(pokemons_file)["results"]

grass_type_pokemons = [pokemon for pokemon in pokemons if "Grass" in pokemon["type"]]

with open("grass_pokemons.json", "w") as grass_pokemons_file:
    json.dump(grass_type_pokemons, grass_pokemons_file)