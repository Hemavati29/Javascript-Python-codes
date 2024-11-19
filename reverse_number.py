num=123

numlength=len(str(num))
print(numlength)
reverse=0

for i in range(0,numlength): 
    temp=num%10
    reverse=reverse*10+temp
    num=int(num/10)

print(reverse)