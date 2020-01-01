let hocSinh = function () {
    this.setTenHs = function (tenHs) {
        this.tenHs = tenHs;
    };
    this.getTenHs = function () {
        return this.tenHs;
    };
    this.setStt = function (Stt) {
        this.Stt = Stt;
    };
    this.getStt = function () {
        return this.Stt;
    };
    this.setNgaySinh = function (ngaySinh) {
        this.ngaySinh = ngaySinh;
    };
    this.getNgaySinh = function () {
        return this.ngaySinh;
    };
    this.setDiem = function (diem) {
        this.diem = diem;
    };
    this.getDiem =function () {
        return this.diem;
    }

};