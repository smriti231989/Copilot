def bubble_sort(arr):
    n = len(arr)
    
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap arr[j] and arr[j + 1]
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

arr = [5, 2, 8, 12, 1, 6]
bubble_sort(arr)

print("Sorted array:")
for num in arr:
    print(num, end=" ")
