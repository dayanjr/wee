import random


secret_word = ''
words = ['apple', 'ivory', 'monarch', 'threat', 'craft', 'bounce', 'mercy', 'horse', 'potential', 'acute', 'generation', 'commitment', 'article', 'misery', 'painter', 'buried', 'sword', 'drum', 'dance', 'knife', 'blacksmith', 'blocks', 'seat', 'branch', 'firewood', 'honey', 'darkness', 'before', 'yearning', 'wonder', 'dish', 'generation', 'hairloss', 'piano', 'trombone']
num_of_guesses = 0
correct_guess = False
filtered_word = ''
play_again = True
Match = False
letter_place = -1

while play_again:

    
    list_num = random.randint(0, 15)
    secret_word = words[list_num]
    
    for i in secret_word:
        filtered_word = filtered_word + ' _'


    print(f"Welcome to wordle. Please make a guess {filtered_word}")

    while not correct_guess:
        filtered_word = ''        
        guess = input('')
        num_of_guesses += 1
        if len(guess) != len(secret_word):
            print('Your guess must be the same number of letters as the secret word')
        else:
            if guess.lower() == secret_word:
                print(f'You guessed the word in {num_of_guesses} guesses!')
                correct_guess = True
            else:
                i = 0
                for index in range(len(guess)):
                    if guess[index] == secret_word[index]:
                        filtered_word = filtered_word + guess[index].upper()
                        #print uppercase
                    else:
                        for letter in secret_word:
                            if guess[index].lower() == letter.lower():
                                match = True
                        if match == True:
                            filtered_word = filtered_word + guess[index].lower()
                            match = False
                        else:
                            filtered_word = filtered_word + ' _'
                print(f'Your hint is: {filtered_word}')
    num_of_guesses = 0
    Play_again_in = input('would you like to play again? (yes/no) ')
    if Play_again_in.lower() == 'yes':
        correctGuess = False
    else:
        play_again = False
        print("Have a nice day!")