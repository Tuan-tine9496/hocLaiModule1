let listCustomers = [];
let checkDeleteCustomer = false;
let checkEditCustomer = false;
let checkDisplayTotalPay = false;
let validateBirthday = /^((0)[1-9]|[1-2][0-9]|(3)[0-1])(\/)((0)[1-9]|((1)[0-2]))(\/)\d{4}$/;
let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function displayMainMenu() {
    let choose = prompt(
        "1. Add New Customer" +
        "\n2. Display Information Customer" +
        "\n3. Display Total Pay of customer" +
        "\n4. Edit Information Customer" +
        "\n5. Delete Customer" +
        "\n6. Exit");
    switch (choose) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomers();
            break;
        case "3":
            chooseDisplayTotalPay();
            break;
        case "4":
            chooseCustomerEdit();
            break;
        case "5":
            chooseDeleteCustomer();
            break;
        case "6":
            return;
        default:
            alert("Fail!!!");
            break;
    }
}

function addNewCustomer() {
    let checkBirthday = false;
    let checkEmail = false;
    let cus = new Customer();
    cus.setNameCustomer(prompt("Enter name customer: "));
    cus.setIdCard(prompt("Enter id card customer: "));
    do {
        cus.setBirthdayCustomer(prompt("Enter Birthday Customer (dd/MM/YYYY): "));
        if (validateBirthday.test(cus.getBirthdayCustomer())) {
            checkBirthday = true;
        }else{
            alert("Birth is invalid. Please try again");
        }
    }
    while (!checkBirthday);
    do {
        cus.setEmailCustomer(prompt("Enter Email Customer: "));
        if(validateEmail.test(cus.getEmailCustomer())){
            checkEmail = true;
        }
        else {
            alert("Email is invalid. Please try again");
        }
    }while (!checkEmail);
    cus.setAddressCustomer(prompt("Enter Address Customer: "));
    cus.setTypeCustomer(prompt("Enter Type Customer: "));
    cus.setDiscount(prompt("Enter Discount: "));
    cus.setNumberOfAccompanying(prompt("Enter Number Of Accompanying: "));
    cus.setTypeRoom(prompt("Enter Type Room: "));
    cus.setRentDays(prompt("Enter Rent Days: "));
    cus.setTypeService(prompt("Enter Type Service: "));
    listCustomers.push(cus);
    displayMainMenu();
}

function displayCustomers() {
    let result = "";
    for (var i = 0; i < listCustomers.length; i++) {
        result += "\n" + (i + 1) + "." + "Name: " + listCustomers[i].getNameCustomer() +
            "; Id Card: " + listCustomers[i].getIdCard();
    }
    result += "\n" + (listCustomers.length + 1) + ".Back to menu.";
    let chooseDisplayInfo = prompt(result);
    if (chooseDisplayInfo.toString() !== (listCustomers.length + 1).toString()) {
        if(!checkDeleteCustomer && !checkDisplayTotalPay) {
            displayInformationCustomer(Number.parseInt(chooseDisplayInfo) - 1);
        }else if(checkDeleteCustomer){
            deleteCustomer(Number.parseInt(chooseDisplayInfo) - 1);
        }else{
            displayTotalPay(Number.parseInt(chooseDisplayInfo) - 1);
        }
    } else {
        checkDisplayTotalPay=false;
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        displayMainMenu();
    }
}

function displayInformationCustomer(index) {
    if (checkEditCustomer) {
        let chooseInfoEdit = prompt(
            "1.Name : " + listCustomers[index].getNameCustomer() +
            "\n2.Id Card : " + listCustomers[index].getIdCard() +
            "\n3.Birthday : " + listCustomers[index].getBirthdayCustomer() +
            "\n4.Email : " + listCustomers[index].getEmailCustomer() +
            "\n5.Address : " + listCustomers[index].getAddressCustomer() +
            "\n6.Type Customer : " + listCustomers[index].getTypeCustomer() +
            "\n7.Discount : " + listCustomers[index].getDiscount() +
            "\n8.Accompanying : " + listCustomers[index].getNumberOfAccompanying() +
            "\n9.Type Room : " + listCustomers[index].getTypeRoom() +
            "\n10.Rent Days : " + listCustomers[index].getRentDays() +
            "\n11.Type Service : " + listCustomers[index].getTypeService() +
            "\n12.Back. "
        );
        if (chooseInfoEdit.toString() !== "12") {
            editInfomationCustomer(Number.parseInt(chooseInfoEdit) - 1);
        } else {
            checkEditCustomer = false;
            displayCustomers();
        }
    } else {
        alert("Information of customer:\n" +
            "Name : " + listCustomers[index].getNameCustomer() +
            "\nId Card : " + listCustomers[index].getIdCard() +
            "\nBirthday : " + listCustomers[index].getBirthdayCustomer() +
            "\nEmail : " + listCustomers[index].getEmailCustomer() +
            "\nAddress : " + listCustomers[index].getAddressCustomer() +
            "\nType Customer : " + listCustomers[index].getTypeCustomer() +
            "\nDiscount : " + listCustomers[index].getDiscount() +
            "\nAccompanying : " + listCustomers[index].getNumberOfAccompanying() +
            "\nType Room : " + listCustomers[index].getTypeRoom() +
            "\nRent Days : " + listCustomers[index].getRentDays() +
            "\nType Service : " + listCustomers[index].getTypeService()
        );
        displayMainMenu();
    }
}

function chooseDisplayTotalPay() {
    checkDisplayTotalPay = true;
    displayCustomers();
}

function displayTotalPay(index) {
    alert(listCustomers[index].totalPays());
    checkDisplayTotalPay = false;
    displayMainMenu();
}
function chooseCustomerEdit() {
    checkEditCustomer = true;
    displayCustomers();
}

function editInfomationCustomer(index) {
    let editInfo = prompt("Enter Info You Want Change:");
    switch (index) {
        case 0:
            listCustomers[index].setNameCustomer(editInfo);
            break;
        case 1:
            listCustomers[index].setIdCard(editInfo);
            break;
        case 2:
            listCustomers[index].setBirthdayCustomer(editInfo);
            break;
        case 3:
            listCustomers[index].setEmailCustomer(editInfo);
            break;
        case 4:
            listCustomers[index].setAddressCustomer(editInfo);
            break;
        case 5:
            listCustomers[index].setTypeCustomer(editInfo);
            break;
        case 6:
            listCustomers[index].setDiscount(editInfo);
            break;
        case 7:
            listCustomers[index].setNumberOfAccompanying(editInfo);
            break;
        case 8:
            listCustomers[index].setTypeRoom(editInfo);
            break;
        case 9:
            listCustomers[index].setRentDays(editInfo);
            break;
        case 10:
            listCustomers[index].setTypeService(editInfo);
            break;
        default:
            alert("Faild");
            return;
    }
    checkEditCustomer = false;
    displayMainMenu();
}

function chooseDeleteCustomer() {
    checkDeleteCustomer = true;
    displayCustomers();
}

function deleteCustomer(index) {
    let chooseConfirm = prompt(
        "Are you sure delete Customer: Name: "
        + listCustomers[index].getNameCustomer() +
        "Id Card: " + listCustomers[index].getIdCard() +
        "\n 1.Yes \n 2.No");
    if (chooseConfirm === "1") {
        listCustomers.splice(index, 1);
        alert("Delete Complete!!!");
    }
    checkDeleteCustomer = false;
    displayMainMenu();
}
displayMainMenu();