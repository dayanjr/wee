item_list=[]
item_price_list=[]
shop='yes'
while shop=='yes':
    choice=input ("Welcome to generic mart. would you like to: 1 add items to cart, 2 view cart, 3 remove item, 4 proceed to checkout? Alternitivly, type 5 to cancel perchase.")
    if choice=='1':
        item=input ("What would you like to add?")
        price=float(input (f"What price for {item}?"))
        item_list.append(item)
        item_price_list.append(price)
    elif choice=='2':
        print (item_list)
        print (sum(item_price_list))
    elif choice=='3':
        print(item_list)
        e1=int(input ("Which would you like to remove? Select by printing the number of the position. The first is 1, the second is 2, so forth."))
        if e1>len(item_list) or e1<0:
            print ("Unable to comply. There is no item at this location.")
        else:
            del item_list[e1-1]
            del item_price_list[e1-1]
            print ("Item removed.")
    elif choice=='4':
        print (f"Your total is {sum(item_price_list)} thank you for shopping at generic mart.")
        shop='no'
    elif choice=='5':
        shop='no'
        print ("Please come again!")