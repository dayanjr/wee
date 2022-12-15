ITEMS = []
PRICES = []

def display_items():
    print("cart:")
    for i in range(1, len(ITEMS) + 1):
        print(f"{i}. {ITEMS[i - 1]}........${PRICES[i - 1]:.2f}")
    print()

def main():
    print("Welcome to the shopping cart!")
    print()
    
    done = False
 
    while done == False:
        print("What would you like to do?")
        print("Menu: ")
        print("1. Add a new item")
        print("2. Display the contents of the shopping cart")
        print("3. Remove an item ")
        print("4. Compute the total ")
        print("5. Quit")
        print()

        choice = int(input("Enter an option (1-5): "))
        
        # Add new item
        if choice == 1:
            item = input("What is the item called? ").lower()
            price = float(input(f"What is the price of {item}? "))

            ITEMS.append(item)
            PRICES.append(price)

            print(f"{item} has been added to cart")

        # Display contents
        elif choice == 2:
            display_items()
        # Remove Item
        elif choice == 3:
            display_items()

            remove = int(input("What item number do you want to remove?: ")) - 1
            if remove <= len(ITEMS):
                ITEMS.pop(remove)
                PRICES.pop(remove)
                print("Item removed.")
            else:
                print("Dummy, there is no item with that number.")
        #compute total
        elif choice == 4:
            display_items()

            total = 0
            for price in PRICES:
                total += price

            print(f"total: ${total:.2f}")
        # Quit
        elif choice == 5:
            done = True
        # Its good progamming practice -jarom anderson
        # invalid choice
        else:
            print("you have messed up. Your number was too big, try again. (failure) or for coders (user errrrr)")
        print()
        
main()