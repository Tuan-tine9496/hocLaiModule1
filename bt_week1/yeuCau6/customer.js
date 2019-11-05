let customer = function () {
    this.setNameCustomer = function (namCustomer) {
        this.nameCustomer = namCustomer();
    };
    this.getNameCustomer = function () {
        return this.nameCustomer;

    };
    this.setIdCard = function (idCard) {
        this.idCard = idCard();
    };
    this.getIdCard = function () {
        return this.idCard;
    };
    this.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    this.getBirthday = function () {
        return this.birthday;
    };
    this.  setEmail = function (email) {
        this.email = email;
    };
    let getEmail = function () {
        return this.email;
    };
    let setAddress = function (address) {
        this.address = address;
    };
    let getAddress = function () {
        return this.address;
    };
    let setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer
    };
    let getTypeCustomer = function () {
        return this.typeCustomer;
    };
    let setDiscount = function (discount) {
        this.discount = discount;
    };
    let getDiscoumt = function () {
        return this.discount;
    };
    let setNumberOfAccompanying = function (number) {
        this.number = number;
    };
    let getNumberOfAccompanying = function () {
        return this.number;
    };
    let setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };
    let getTypeRoom = function () {
        return this.typeRoom;
    };
    let setRentDay = function (rentDay) {
        this.rentDay = rentDay;
    };
    let getRentDay = function () {
        return this.rentDay;
    };
    let setTypeService = function (typeService) {
        this.typeService = typeService;
    };
    let getTypeService = function () {
        return this.typeService;
    }
};