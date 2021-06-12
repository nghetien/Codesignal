arr = [ [0]*6 for i in range(6) ]
value = [1, 2, 3, 2, 1, 2]

for i in range(0, len(value)):
    arr[i][i] = value[i]
    for j in range(i + 1, len(value)):
        arr[i][j] = arr[i][j - 1] + value[j]

print(arr)