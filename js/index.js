// Bài 1: Quản lý tuyển sinh

var xetDauRotBtn = document.getElementById('xetDauRotBtn');
var dauRotKetQua = document.getElementById('dauRotKetQua');

function xetDauRot() {
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var khuVuc = Number(document.getElementById('khuVuc').value);
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var diemMon1 = Number(document.getElementById('diemMon1').value);
    var diemMon2 = Number(document.getElementById('diemMon2').value);
    var diemMon3 = Number(document.getElementById('diemMon3').value);

    var diemUuTien = khuVuc + doiTuong;
    var diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

    if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
        dauRotKetQua.innerText = '>Kết quả : bạn đã rớt. Do có điểm nhỏ hơn hay bằng 0';
    } else if (diemTongKet < diemChuan) {
        dauRotKetQua.innerText = '>Kết quả : bạn đã rớt. Tổng điểm : ' + diemTongKet;
    } else {
        dauRotKetQua.innerText = '>Kết quả : bạn đã đậu. Tổng điểm : ' + diemTongKet;
    }
}

xetDauRotBtn.onclick = xetDauRot;


// Bài 2: Tính tiền điện

var tinhTienDienBtn = document.getElementById('tinhTienDienBtn');
var tienDienKetQua = document.getElementById('tienDienKetQua');

function tinhTienDien() {
    var hoTen = document.getElementById('hoTen').value;
    var soKw = Number(document.getElementById('soKw').value);

    var tienDien = 0;
    var tienTichLuy = 0;
    var kwMin = 0;
    var kwMax = 0;
    var gia = 0;

    function condition(thayDoi, giaMoi) {
        tienTichLuy += (kwMax - kwMin) * gia;
        kwMin = kwMax;
        kwMax += thayDoi;
        gia = giaMoi;

        return soKw <= kwMax;
    }

    if (soKw > 0) {
        if (condition(50, 500)) {
            tienDien = tienTichLuy + (soKw - kwMin) * gia;
        } else if (condition(50, 650)) {
            tienDien = tienTichLuy + (soKw - kwMin) * gia;
        } else if (condition(100, 850)) {
            tienDien = tienTichLuy + (soKw - kwMin) * gia;
        } else if (condition(150, 1100)) {
            tienDien = tienTichLuy + (soKw - kwMin) * gia;
        } else if (condition(soKw, 1300)) {
            tienDien = tienTichLuy + (soKw - kwMin) * gia;
        }

        tienDien = new Intl.NumberFormat('VN-vn').format(tienDien);
        tienDienKetQua.innerText = '>Họ tên: ' + hoTen + ' .Tiền điện: ' + tienDien + ' VND';
    } else {
        alert('Số kw không hợp lệ! Vui lòng nhập lại')
    }

}

tinhTienDienBtn.onclick = tinhTienDien;


// Bài 3: Tính thuế thu nhập cá nhân

var tinhTienThueBtn = document.getElementById('tinhTienThueBtn');
var tienThueKetQua = document.getElementById('tienThueKetQua');

function tinhThue() {
    var hoTenThue = document.getElementById('hoTenThue').value;
    var thuNhapNam = Number(document.getElementById('thuNhapNam').value);
    var nguoiPhuThuoc = Number(document.getElementById('nguoiPhuThuoc').value);

    var thuNhapChiuThue = thuNhapNam - 4e+6 - nguoiPhuThuoc * 1.6e+6;

    if (thuNhapChiuThue > 0) {
        var thueSuat = 0;

        if (thuNhapChiuThue <= 60e+6) {
            thueSuat = 0.05;
        } else if (thuNhapChiuThue <= 120e+6) {
            thueSuat = 0.1;
        } else if (thuNhapChiuThue <= 210e+6) {
            thueSuat = 0.15;
        } else if (thuNhapChiuThue <= 384e+6) {
            thueSuat = 0.2;
        } else if (thuNhapChiuThue <= 624e+6) {
            thueSuat = 0.25;
        } else if (thuNhapChiuThue <= 960e+6) {
            thueSuat = 0.3;
        } else {
            thueSuat = 0.35;
        }

        var tienThue = thuNhapChiuThue * thueSuat;

        tienThue = new Intl.NumberFormat('VN-vn').format(tienThue);
        tienThueKetQua.innerText = '>Họ tên: ' + hoTenThue + ' .Tiền thuế thu nhập cá nhân: ' + tienThue + ' VND';
    } else {
        alert('Số tiền thu nhập không hợp lệ! Vui lòng nhập lại')
    }

}

tinhTienThueBtn.onclick = tinhThue;


// Bài 4: Tính tiền cáp

var tinhTienCapBtn = document.getElementById('tinhTienCapBtn');
var tienCapKetQua = document.getElementById('tienCapKetQua');
var loaiKhachHang = document.getElementById('loaiKhachHang');

function anHien() {
    loaiKhachHang.value === 'doangNghiep'
        ? soKetNoi.style.display = 'block'
        : soKetNoi.style.display = 'none';
}

function tinhTienCap() {
    var maKhachHang = document.getElementById('maKhachHang').value;
    var soKenh = Number(document.getElementById('soKenh').value);
    var soKetNoi = Number(document.getElementById('soKetNoi').value);

    var tienCap = 0;
    var phiDichVu = 0;

    switch (loaiKhachHang.value) {
        case 'nhaDan':
            tienCap = 4.5 + 20.5 + soKenh * 7.5;
            tienCapKetQua.innerText = '>Mã khách hàng: ' + maKhachHang + ' .Tiền cáp: ' + tienCap + ' USD';
            break;
        case 'doanhNghiep':
            soKetNoi <= 10
                ? phiDichVu = 75
                : phiDichVu = 75 + (soKetNoi - 10) * 5;
            tienCap = 15 + phiDichVu + soKenh * 50;
            tienCapKetQua.innerText = '>Mã khách hàng: ' + maKhachHang + ' .Tiền cáp: ' + tienCap + ' USD';
            break;
        default:
            alert('Vui lòng chọn loại khách hàng')
    }
}

loaiKhachHang.onchange = anHien;
tinhTienCapBtn.onclick = tinhTienCap;