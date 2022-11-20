secret_word="mosiah"
attempts = 1
max_guesses = 5
guesses_end= False
print("")
print("Welcome to the word guessing game!")
print("You have 5 attemps")
print("your hint is : ", end ="")
for i in secret_word:
    print("_", end=" ")
print()
word_guess = input("What is your guess? ") 

while secret_word!=word_guess and guesses_end!=True: 

    if len(word_guess) != len(secret_word):
        print("Sorry, the guess must have the same number of letters as the secret word.")
    else:
        print("your hint is : ", end ="")
        
        for i, letter in enumerate(word_guess):
            indexa=i
            indexb=-1
            isfound = False
            for j, letter2 in enumerate(secret_word):
                if letter == letter2:
                    indexb = j
                    isfound = True 
                    break
            if indexa == indexb and isfound==True:
                 print(letter.capitalize(), end= " ")
            elif isfound==True:
                print(letter, end=" ")
            else:
                print("_", end=" ")
    
    print()
    word_guess = input("What is your guess? ") 
    attempts+=1
    if max_guesses==attempts:
        guesses_end = True 
print()
if guesses_end == True:
    print(f"you exceeded your attempts")
else:
    print("Congratulations! You guessed it!")
    print(f"It took you {attempts} guesses.")
    print()