# 读取测试用例数量
t = int(input())

# 循环处理每个用例
for _ in range(t):
    x, n = map(int, input().split())
    # 核心逻辑：n 奇数总和为 x，偶数总和为 0
    total = x if n % 2 == 1 else 0
    print(total)