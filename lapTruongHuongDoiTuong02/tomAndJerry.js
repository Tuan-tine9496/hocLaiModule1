function mouse() {
    this.getNameMouse = function (Jerry) {
        this.nameMouse = nameMouse;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setSpeed = function (speed) {
        this.speed = speed;
    };
    this.getSpeed = function () {
        return this.speed;
    };
    this.getStatus = function (alive) {
        this.alive = alive;
    };
    this.setTalk = function (talk) {
        this.talk = talk;
    };
    this.getTalk = function () {
        return this.talk;
    };
    function cat() {
        this.getNameCat = function (tom) {
            this.nameCat = tom;
        };
        this.setWeightCat = function (weightCat) {
            this.weightCat = weightCat;
        };
        this.getWeightCat = function () {
            return this.weightCat;
        };
        this.setMaxSpeed = function (maxSpeed) {
            this.maxSpeed = maxSpeed;
        };
        this.getMaxSpeed = function () {
            return this.maxSpeed;
        };
        this.getCatchMouse = function (catchMouse,) {
            this.catchMouse = catchMouse;

        };
        this.getEat = function (eat) {
            this.eat = eat;
        }
    }