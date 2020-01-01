function nameForU() {
    let arr = [];
    let uChoose = prompt("1.Tên Của bạn" +
        "\n2.Tuổi" +
        "\n3.Địa chỉ" +
        "\n4.Số điện thoại" +
        "\n5.Email(nếu có)" +
        "\n6.Thông tin của bạn");
    switch (uChoose) {
        case "1":
            name();
            break;
        case "2":
            age();
            break;
        case "3":
            address();
            break;
        case "4":
            yourPhoneNumber();
            break;
        case "5":
            email();
            break;
        case "6":
            listInformation();
        default :
            alert("nhập số cho đúng!!");
            break;
    }

    function name() {
        let nameU = prompt("Nhập tên bạn vào");
        arr.push(nameU);
    }name();
    function age() {
        let ageU = prompt("Nhập tuổi bạn vào");
        arr.push(ageU);

    }age();
    function address() {
        let addressU = prompt("Nhập địa chỉ bạn vào");
        arr.push(addressU);
    }address();
    function yourPhoneNumber() {
        let yourphone = prompt("Nhập số điện thoại bạn vào");
        arr.push(yourphone);
    }yourPhoneNumber();
    function email() {
        let emailU = prompt("Nhập email bạn vào");
        arr.push(emailU);
    }email();
    function listInformation(index) {
        alert("1.Tên: " + arr[index][0] +
            "\n2.Tuổi: " + arr[index][1] +
            "\n3.địa chỉ: " + arr[index][2] +
            "\n4.Số điện thoại:" + arr[index][3] +
            "\n5.email:" + arr[index][4] +
            "");
        listInformation();


    }

}
nameForU();