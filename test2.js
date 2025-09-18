/**
 * kiemtra_songuyento(x): trả về true nếu x là số nguyên tố, ngược lại false.
 * - Không phải số nguyên hoặc < 2 => false
 * - Duyệt i từ 2..sqrt(x), nếu x % i == 0 => không phải SNT
 */
function kiemtra_songuyento(x) {
  if (!Number.isInteger(x) || x < 2) return false;
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) return false;
  }
  return true;
}

/**
 * thongke_mang(n):
 * - Tạo mảng gồm n số nguyên ngẫu nhiên trong [1..100]
 * - Đếm có bao nhiêu số nguyên tố
 * - In kết quả ra #ketqua và chi tiết ra #chitiet
 */
function thongke_mang(n) {
  const out = document.getElementById("ketqua");
  const detail = document.getElementById("chitiet");

  if (!Number.isInteger(n) || n <= 0) {
    out.textContent = "n không hợp lệ. Hãy nhập số nguyên dương.";
    detail.textContent = "";
    return;
  }

  const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1);
  const primes = arr.filter(kiemtra_songuyento);
  const dem = primes.length;

  out.textContent = `Mảng có ${n} phần tử trong [1..100]. Có ${dem} số nguyên tố.`;
  detail.textContent =
    `Mảng: [${arr.join(", ")}]\n` +
    `Số nguyên tố: [${primes.join(", ")}]`;
}

/* Gắn sự kiện nút bấm */
document.getElementById("run").addEventListener("click", () => {
  const n = Number(document.getElementById("n").value);
  // Gọi đúng tên hàm yêu cầu trong đề
  thongke_mang(n);
});

/* Expose ra window để GV có thể gọi trực tiếp trên console nếu muốn */
window.kiemtra_songuyento = kiemtra_songuyento;
window.thongke_mang = thongke_mang;
