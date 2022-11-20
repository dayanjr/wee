import random
file = open("output.txt").read().splitlines()
do_again="yes"
while do_again=="yes":
    random_word = random.choice(file)
guess = print("Starting the Wordle Game")
while guess != random_word:
    guess = str(input("What is your guess?"))
    if guess == random_word:
        print("You Won")
        do_again=str(input("Do you want to play again"))
    if guess != random_word:
        print("Not Correct")
        