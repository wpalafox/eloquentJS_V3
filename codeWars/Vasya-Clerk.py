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
tickets([25,25,50])
tickets([25,100])
tickets([25,25,50,50,100])
