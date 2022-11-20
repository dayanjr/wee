'''
Week 07 - Prove Assignment
Word Guessing Game
'''

print("Welcome to the Word Guessing Game!\n")
secret_word = "legend"
#other words: twitch, tricky, dragon, lovely, legend, create, secret 
guess = ""
guess_count = 0
wrong_count = False
length = True

print("Your hint is: _ _ _ _ _ _", end= "")

while guess.lower() != secret_word:

    if length == False:
        print("Your guess must have the same amount of letters. Guess again!")
        guess = input("What is your guess? ")
        guess_count += 1
    else:
        print()
        guess = input("What is your guess? ")
        guess_count += 1

    print()
    print("Your hint is: ", end= "")

    for i in range(len(secret_word)):
        if len(secret_word) == len(guess):
            if secret_word[i] == guess[i]:
                length = True
                print(guess[i].upper(), end= "")
            elif guess[i] in secret_word:
                lenght =True
                print(guess[i].lower(), end= "")
            else:
                length = True
                print("_ ", end="")
        else:
            length = False

print()
print("Congrats! You've guessed the word!")
print(f"It took you {guess_count} guesses.")
print()