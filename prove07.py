import random
import sys
from termcolor import colored

def print_menu():
   print("\nWelcome to the word guessing game: Wordle! Animal Edition:\n")
   print("Yellow letters are included in the word but not in the rght placing.\nRed letters show the right letter in the right place.")
   print("\nType a 5 letter animal and hit enter\n")

def read_random_word():
   with open("words.txt") as f:
      words = f.read().splitlines()
      return random.choice(words)

print_menu()
play_again = ""
while play_again != "no".lower():
   word = read_random_word()
   for attempt in range(1, 10):
      guess = input().lower()

      sys.stdout.write('\x1b[1A')
      sys.stdout.write('\x1b[2K')


      for i in range( min(len(guess), 5) ):
         if guess[i] == word[i]:
            print(colored(guess[i], 'red'), end="")
         elif guess[i] in word:
            print(colored(guess[i], 'yellow'), end="")
         else: 
            print(guess[i], end="")
      print()

      if guess == word:
         print(colored(f"Congrats! You guessed the word. It took you {attempt} guesses", 'blue'))
         break
   play_again = input("Would you like to play again? Type yes or no.")
print("Thanks for playing!")
