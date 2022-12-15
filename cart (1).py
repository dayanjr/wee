print('Welcome to the Shopping Cart Program!')
items = []
prices = []
choice = 0
while choice != 5:
    print('\nPlease select one of the following:\n1. Add item\n2. View cart\n3. Remove item\n4. Compute total\n5. Quit')
    choice = int(input('Please enter an action: '))
    if choice == 1:
        item = input('What item would you like to add? ')
        items.append(item)
        price = float(input(f'What is the price of {item}? '))
        prices.append(price)
        print(f'{item} has been added to the cart.')
    elif choice == 2:
        print('The contents of the shopping cart are:')
        for i in range(len(items)):
            print(f'{i+1}. {items[i]} - ${prices[i]:.2f}')
    elif choice == 3:
        delete = int(input('Which item would you like to remove? '))
        if delete > len(items):
            print('Invalid Choice')
        else:
            items.pop(delete - 1)
            prices.pop(delete - 1)
            print('Item Removed')
    elif choice == 4:
        print(f'The total price of the items in the shopping cart is ${sum(prices):.2f}')
    elif choice == 5:
        print('Goodbye')
    else:
        print('Invalid Choice')