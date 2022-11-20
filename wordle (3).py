print('Welcome to the Knockoff Wordle!')
guess_count = 0
loop = True
while loop:
    guess_count = guess_count + 1
    guess = input('Your hint is _ _ _ _ _\n')
    wordle = 'storm'
    if len(guess.lower()) != len(wordle):
        print('That is not the right amount of letters, try again')
    else:
        for i in range(len(wordle)):
                if wordle[i] == guess.lower()[i]:
                    print(wordle[i].upper(), end=' ')
                elif guess.lower()[i] in wordle:
                    print(guess[i].lower(), end=' ')
                else:
                    print('_', end=' ')
    if guess == wordle:
        print(f'Congrats! You got it! It took you {guess_count} guesses')
        loop = False