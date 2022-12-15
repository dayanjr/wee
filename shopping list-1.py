'''
Shopping list 
Joshua Chatfield 
'''

cart = []
item = ""
prices = []
price = -1
print ('Welcome to walmart, please select what you would like to do.')

option = ''

while option != '5':
    print ('\n\n1. Add item to cart \n2. View cart \n3. Remove item \n4. Check out \n5. Quit')
    option = input ('what would you like to do? ')
    if option ==  '1': 
    
            item = input('What item would you like to add? ')
            if item != 'quit':
                price = float(input(f"What is the pirce for '{item}'? "))
                print (f'{item} was added to your cart.')
                cart.append(item)
                prices.append(price)
           
    elif option == '2': 
        print ('The items in your cart are: ') 
        for i in range(len(cart)):
           
            print (f'{i+1}. {cart[i]} ${prices[i]} ')

    elif option == '3':
        remove = int(input('Please enter the number of the item you would like to remove: ')) 
        cart.remove(cart[remove-1])
        prices.remove(prices[remove-1])
        print (f'Item {remove} was removed from the cart')

    elif option == '4':
        total = sum(prices)
        print (f'Your total is ${total}')

if option == '5':
    print ('Have a nice day, and thank you for shopping at Walmart')


