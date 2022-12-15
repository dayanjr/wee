print("This is your dream shopping Cart!\n")

names = []
prices = []
number = []
new_names = ""
menu = 0

while menu !=5:
    menu = int(input("Please select one of the following:\n1. Add item\n2. view cart\n3. Remove item\n4. Compute Totall\n 5. Quit\n"))
    if menu > 5 or menu < 0:
        print("Not the Right Input buddy")
    elif menu == 1:
            new_names= input("What item would you like to add?")
            quantity = float(input(f"What is the amount of {new_names} you are getting?"))
            value = float(input(f"What is the price {new_names}"))
            names.append(new_names)
            number.append(quantity)
            prices.append(value)
            prices(f"'{new_names}' has been added to the shopping cart.\n")
    elif menu == 2:
            print("Your shopping cart has:")
            for i in range(len(names)):
                names = names[i]
                price = prices[i]* number[i]
                print(f"{i + 1} {names} - ${price: }")
    elif menu == 3: 
        remove = int(input("Which item do you not want? "))
        remove = remove - 1
        names.pop (remove)
        prices.pop (remove)
        number.pop(remove)
        print("Item removed\n")
    elif menu == 4:
        total = 0

        for i in range(len(prices)):
            total += prices[i] * number[i]
        print(f"The total price of the items in the shopping cart is ${total}\n")

print("Thanks for shopping whith us")

        

