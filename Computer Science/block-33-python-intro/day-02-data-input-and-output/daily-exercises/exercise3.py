import random


def main():
    with open("exercise3.txt", mode="r") as exercise3_file:
        languages = exercise3_file.read().split("\n")

    word = random.choice(languages)
    scrambled_word = "".join(random.sample(word, len(word)))

    print(scrambled_word)
    guesses = 3

    while guesses > 0:
        guess = input("Guess the word: ")
        if guess.lower() == word.lower():
            return print("You won!")
        guesses -= 1

    print("You lose!")


main()
