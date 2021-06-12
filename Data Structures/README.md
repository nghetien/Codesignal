# 1. Lists
- `list.append(x)` : Thêm phần tử vào cuối của list
- `list.extend(iterable)` : Gộp 2 mảng vào thành 1 với iterable mảng được thêm vào
- `list.insert(index, element)` : Thêm một phần tử vào vị trí bất kì của mảng
- `list.remove(x)` : Xóa phần tử đầu tiên có giá trị bằng x trong mảng
- `list.pop(index)` : Xóa phần tử trong mảng vị trí thứ index
- `list.clear()` : Xóa tất cả phần tử trong mảng
- `list.index(item, start, end)` : Lấy ra phần từ từ index thứ start -> end, nếu không có sẽ có lỗi (có thể bỏ 2 trường start, end)
- `list.count(x)` : Đếm số lần xuất hiện của x trong list
- `list.sort(key=None,reverse=True or False)` : sắp xếp mảng và không trả về giá trị (None)
    + Khác với hàm `sorted()` : Có trả về giá trị khi gán vào biến
- `list.reverse()` : Đảo ngược lại các phần tử trong mảng
## 1.1. Sử dụng lists như một Stacks
- Vào trước ra sau, vào sau ra trước
- Với việc thêm phần từ vào cuối dùng `append(item)`
- Với việc xóa phần tử ở cuối `pop()`
## 1.2. Sử dụng lists như một Queues
- Vào trước ra trước, vào sau ra sau
- Với việc thêm phần từ vào cuối dùng `append(item)`
- Với việc xóa phần tử ở đầu `popLeft()`
## 1.3. Tạo một lists nhanh
- Sử dụng là kết quả trả về của phần tử trong một trình tự hoặc vòng lặp

    ```lists = [x**2 for i in range(10)]```
    
    ``` Kết quả trả về: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81] ```
# 2. Tuples and Sequences
- Là kiểu cấu trúc dữ liệu không thể thêm sửa xóa được dữ liệu bên trong chỉ được phép lấy ra bằng temp[i]
- Có thể khởi tạo tuples bên trong chứ một list

    ```v = ([1, 2, 3], [3, 2, 1])```

    ``` Kết quả trả về: ([1, 2, 3], [3, 2, 1]) ```
# 3. Sets
- Là kiểu dữ liệu mà lưu trong đó không có sự trùng lặp
- Khi thêm phần tử vào set() thì sẽ được check sự trùng lặp nếu không trùng mới thêm vào

        a = set('abracadabra')
        >>> b = set('alacazam')
        >>> a                                  # unique letters in a
        {'a', 'r', 'b', 'c', 'd'}
        >>> a - b                              # letters in a but not in b
        {'r', 'd', 'b'}
        >>> a | b                              # letters in a or b or both
        {'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
        >>> a & b                              # letters in both a and b
        {'a', 'c'}
        >>> a ^ b                              # letters in a or b but not both
        {'r', 'd', 'b', 'm', 'z', 'l'}
# 4. Dictionaries
- Là kiểu dữ liệu lưu trữ theo dạng cặp key và value 
- Lấy ra danh sách key bằng cách list(dict)
- Sorted lại và trả về key được sắp xếp sorted(dict)
- Xây dựng dict từ sequences của cặp (key, value)
- Áp dụng cho việc khởi tạo nhanh dict

        >>> tel = {'jack': 4098, 'sape': 4139}
        >>> tel['irv'] = 4127
        >>> list(tel)
        ['jack', 'guido', 'irv']
        >>> sorted(tel)
        ['guido', 'irv', 'jack']
        >>> dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])
        {'sape': 4139, 'guido': 4127, 'jack': 4098}
# 5. Vòng lặp
- Dict: Sử dựng dict.items() - Chuyển từ dict sang dạng sequences theo cặp (key, value)

        >>> for k, v in dict.items():
- Set, list: Sử dụng hàm enumerate(set or list) gần giống như hàm forEach trong js có biến item và biên index

        >>> for i, v in enumerate(['tic', 'tac', 'toe']):
- Lặp 2 hoặc nhiều sequences cùng một lúc với hàm zip(sequences1, sequences2)

        >>> questions = ['name', 'quest', 'favorite color']
        >>> answers = ['lancelot', 'the holy grail', 'blue']
        >>> for q, a in zip(questions, answers):