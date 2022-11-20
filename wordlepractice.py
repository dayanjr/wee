secret_word = "phone"
guess = "_"
times = 0

print("Welcome to the Wordle guessing game!")
print()

while secret_word != guess:
    guess = input("What is your guess? ").lower()
    times += 1
    if secret_word != guess:
        print("Here is your hint")
        print()
        for i in range(len(secret_word)):
            if len(secret_word) == len(guess):
                if secret_word[i] == guess[i]:
                    print(guess[i].upper(), end = "")
                elif guess[i] in secret_word:
                    print(guess[i].lower(), end = "")
                else:
                    print(end = "_")
            elif len(secret_word) != len(guess):
                print("Sorry that doesn't match the correct number of characters in the word. Try again!")
        print()
    print()
print(f"Congratulations! The secret word was {secret_word}! It took you {times} times to guess the word.")

    
    
