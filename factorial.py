num=4

def fact(num):
    if num==1:
        return 1
    else:
        return fact(num-1)*num


print("factorial",fact(num));

