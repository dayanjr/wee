print()
print("Welcome to the Shopping Cart Program!")
items = []
prices = []
action = 0
while action != 5:
    # Options
    print()
    print("Please select one of the following:")
    print("1. Add item")
    print("2. View cart")
    print("3. Remove item")
    print("4. Compute total")
    print("5. Quit")
    print("6. Add multiple items")
    print("7. Empty cart")
    action = int(input("Please enter an action: "))
    print()

    if action == 1:
        item = input("What item would you like to add? ").title()
        price = float(input(f"What is the price of {item}? "))
        items.append(item)
        prices.append(price)
        print(f"'{item}' has been added to cart.")
    
    elif action == 2:
        if len(items) > 0: # Extra function: Check if cart is empty or not
            print("The contents of the shopping cart are:")
            for i in range(len(items)):
                print(f"{i + 1}. {items[i]} - ${prices[i]:.2f}")
        else:
            print("Your cart is currently empty.")
    
    elif action == 3:
        if len(items) > 0: # Extra function: Check if cart is empty or not
            removal_index = int(input("Which item would you like to remove? "))
            removal_index += -1 # Convert to 0-based index
            
            # Check if removal index matches an index in the list
            if removal_index in range(len(items)): 
                items.pop(removal_index)
                prices.pop(removal_index)
                print("Item removed.")
            else: # Removal index does NOT match a list index
                print(f"There is no item {removal_index + 1}. No items were removed.")
        else:
            print("Your cart is already empty.")
    
    elif action == 4:
        print(f"The total price of the items in the shopping cart is ${sum(prices):.2f}")
    
    elif action == 5:
        print("Thank you. Goodbye!")
        print()
    
    elif action == 6: # Extra function: Add multiple items
        print('You selected the "Add multiple items" option!')
        print("Add as many items as you'd like.")
        print("To finish, leave the item input blank and press enter.")
        item = "initialize"
        count = 0
        while item != "":
            print()
            item = input("What item would you like to add? (leave blank to finish) ").title()
            if item != "":
                price = float(input(f"What is the price of {item}? "))
                items.append(item)
                prices.append(price)
                print(f"'{item}' has been added to cart.")
                count += 1
        print()
        print(f"{count} items have been added to the cart.")
    
    elif action == 7: # Extra function: Empty cart
        if len(items) > 0: # First check if cart is empty or not
            print("This action will remove all items from your shopping cart.")
            action = input("Are you sure you want to empty cart? (yes/no) ").lower()
            if action == "yes":
                items = []
                prices = []
                print("Complete! All items have been removed.")
            else:
                print("Action cancelled. No items were removed.")
        else:
            print("Your cart is already empty.")

    else:
        print("Sorry, that was an invalid input. Try again.")

# While loop code ends here, it will repeat unless action 5 was selected, which ends the program.