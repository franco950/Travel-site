# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(N):
    binary=[]
    def findbinary(N):
        if N==0:
            return
        binary.append(N%2)
        findbinary(N//2)
    findbinary(N)
    print(binary)
    answer= binary
    lengths=[]
    i=0
    count=0
    while i<len(answer):
        
        if answer[i]==1:
            if count>0:
                lengths.append(count)
                count=0
                i+=1
            elif count==0:
                i+=1
        elif answer[i]==0:
            count+=1
            i+=1
    solution=0
    for i in lengths:
        if i>solution:
            solution=i
    return solution        

print(solution(1041))
print(solution(101))
print(solution(104))
print(solution(111))