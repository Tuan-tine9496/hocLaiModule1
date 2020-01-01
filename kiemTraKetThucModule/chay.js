let danhSach = [];

function Hocluc() {
    let choose = prompt("1.Nhập Học Sinh Mới" +
        "\n2.Hiện thị thông tin học sinh" + "\n3.Exit");
    switch (choose) {
        case "1":
            hocSinhMoi();
            break;
        case "2":
            thongTinHs();
            break;
        case "3":
            exit;
            break;
        default:
            break;
    }
}

function hocSinhMoi() {
    let cus = new hocSinh();
    cus.setStt(prompt("nhập số thứ tự học sinh"));
    cus.setTenHs(prompt("nhập họ và tên của học sinh"));
    cus.setNgaySinh(prompt("nhập ngày sinh của học sinh"));
    cus.setDiem(prompt("nhập điểm trung bình của học sinh"));
    danhSach.push(cus);
    Hocluc();

}

function thongTinHs() {
    let diem = danhSach[i].getDiem();
    if (diem > 10 || diem < 0) {
        alert("Nhập điểm sai,  mời nhập lại!!!");
    } else if (diem >= 8) {
        alert("Học sinh giỏi");
    } else if (diem >= 6.5) {
        alert("Học Sinh khá");
    } else if (diem >= 4.5) {
        alert("học sinh yếu");
    } else
        alert("học sinh kém");
    alert("THÔNG TIN HỌC SINH" +
        "\1Tên : " + danhSach[i].getTenHs() +
        "\n2Stt : " + danhSach[i].getStt() + "\n3.Ngay Sinh : " + danhSach[i].getNgaySinh() + "điểm: " + diem)


}


Hocluc();