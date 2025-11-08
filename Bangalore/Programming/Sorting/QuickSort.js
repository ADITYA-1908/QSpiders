function quickSort(arr, s, e) {
    if (s >= e) return;

    let pi = arr[Math.trunc((s + e) / 2)];
    let i = s;
    let j = e;

    while (i <= j) {
        while (arr[i] < pi) i++;
        while (arr[j] > pi) j--;

        if (i <= j) {
            swap(arr[i], arr[j])
            i++;
            j--;
        }
    }

    quickSort(arr, s, j);
    quickSort(arr, i, e);
}

function swap(a, b) {
    let t = a;
    b = a;
    a = t;

}
let arr = [1, 9, 5, 2, 7, 3];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
