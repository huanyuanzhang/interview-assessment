t = int(input())
for _ in range(t):
    n = int(input())
    
    # 无解情况
    if n % 2 == 1 or n < 4:
        print(-1)
        continue
    
    # 最大飞船数：全用A型（4个推进器）
    max_cft = n // 4
    
    # 最小飞船数：尽量用B型（6个）
    temp = n
    while temp % 6 != 0:
        temp -= 4
        if temp < 0:
            break
    b = temp // 6
    a = (n - 6 * b) // 4
    min_cft = a + b
    
    print(min_cft, max_cft)