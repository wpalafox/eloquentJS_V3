#The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.
#Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.
#Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
#Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
#Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.



def tickets(people):
    i=0
    twenty_five=0
    fifty=0
    hundred=0
    Valid=False
    while i < len(people):
        if people[i] == 25:
            twenty_five+=1
        elif people[i] == 50:
            fifty+=1
            if twenty_five>0:
                Valid=True
                twenty_five-=1
            elif twenty_five==0:
                Valid=False
        elif people[i] == 100:
            hundred +=1
            if fifty>0 and twenty_five>0:
                Valid=True
                fifty-=1
                twenty_five-=1
            elif fifty==0 and twenty_five==3:
                Valid=True
                twenty_five-=3
            else:
                Valid=False
        i+=1
    if Valid==True:
        print "YES"
    else:
        print "NO"



#Passes these tests
tickets([25,25,50])  #YES
tickets([25,100])  #NO. Vasya would need three 25s or a 25 and a 50 to break change to the 100
tickets([25,25,50,50,100]) # NO.  Vasya does not have the right bills to give change to the 100 
