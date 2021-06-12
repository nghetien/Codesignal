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
        + Khác với hàm sorted() : Có trả về giá trị khi gán vào biến
    - `list.reverse()` : Đảo ngược lại các phần tử trong mảng
    sảu