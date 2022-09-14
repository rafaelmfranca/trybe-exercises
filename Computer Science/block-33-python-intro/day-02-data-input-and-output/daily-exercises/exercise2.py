import random


def main():
    word = random.choice(["python", "java", "kotlin", "javascript"])
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
