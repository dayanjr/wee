""" Shopping Cart
   Daniel Checketts """
import time
menu = """
Please select one of the following: 
    1. Add item 
    2. View cart 
    3. Remove/edit item 
    4. Compute total 
    5. Quit
"""
running = True; conf = ['y','yes']; cart = []; prices = []
while running: # str format deals with non-int input error.
    print(menu); action = input('Input: '); total = sum(prices)
    if action == '1': # Add item - functional
        addition = input('\nItem: ').capitalize()
        if addition in cart: # check if item in cart
            print(f'\nYou already have {addition} in your cart. ')
        elif addition not in cart: # run if item not in cart
            cart.append(addition); price = (input('Price: $')); pa = []; act = ''; dig = ['1','2','3','4','5','6','7','8,','9','0','.']
            for i in price: # process price input
                if i in dig: # remove non-numeric input
                    pa.append(i)
            for i in pa: # recombine input after processing
                act += i
            prices.append(float(act))
    elif action == '2': # View cart - functional
        if cart == 0: # feedback if cart empty
            print('Your cart is empty!')
        else: # if cart not empty
            print('\nCart: ')
            for i in cart: # if cart not empty, prints content
                id_num = cart.index(i) + 1; cost = prices[id_num-1]; print(f'    {id_num}. {i}    $ {cost :.2f}')
            if len(cart) > 1: # print total if cart has more than one item
                print(f'\n        Total: ${total :.2f}')
        time.sleep(1)
    elif action == '3': # Remove item - functional
        rem = len(cart) + 1
        while rem not in range(len(cart)): # item remove query
            rem = (int(input('Number of item to remove: ')) - 1)
            if rem > (len(cart) -1 ): # if item num not on list, return err message
                print('\n---- Invalid input. Please try again. ----\n'); time.sleep(1)
        else: # if on list, then remove
                cart.pop(rem); prices.pop(rem)
        if cart != 0: # display updated cart and price
            print('Updated Cart: ')
            for i in cart: # if cart not empty, prints content
                id_num = cart.index(i) + 1; print(f'    {id_num}. {i}    $ {prices[id_num - 1] :.2f}')
            total = sum(prices); print(f'\nUpdated total: ${total :.2f}'); time.sleep(1)
        else: # feedback if cart now empty
            print('Your cart is now empty!')
    elif action == '4': # Compute total - functional
        print(f'Your total is: ${total :.2f}'); time.sleep(1)
    elif action == '5': # Quit - functional
        sure = ''; sure = input('Are you sure you want to quit? (y/n) ')
        if sure in conf: # confirmed quit
            print('\nYour final cart will now be displayed. \n \nCart:')
            for i in cart: # if cart not empty, prints content
                id_num = cart.index(i) + 1; cost = prices[id_num-1]; print(f'    {id_num}. {i}    $ {cost :.2f}')
            if len(cart) > 1: # if more than one item in cart, print total
                print(f'Total: ${total :.2f}')
            print(' \nThank you! Goodbye.'); running = False
    else: # Err for incompatable action - functional
        print('\n---- Invalid input. Please try again. ----\n'); time.sleep(1)
