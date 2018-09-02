var FacebookClass = /** @class */ (function () {
    //Constrructor Decalaration 
    function FacebookClass(url, name, dateOfBirth, email, mobile, twitterId, website, studyAt, viewPlaces, birthDate, birthYear, totalFriends) {
        var _this = this;
        //get url
        this.getUrl = function () {
            return _this.url;
        };
        //get Name
        this.getName = function () {
            return _this.name;
        };
        //get Date of Birth 
        this.getDateOfBirth = function () {
            return _this.dateOfBirth;
        };
        //get email
        this.getEmail = function () {
            return _this.email;
        };
        //get mobile number
        this.getMobile = function () {
            return _this.mobile;
        };
        //get twitterId
        this.getTwitterId = function () {
            return _this.twitterId;
        };
        //get website
        this.getWebsite = function () {
            return _this.website;
        };
        //get studyAt
        this.getStudyAt = function () {
            return _this.studyAt;
        };
        //get view Palces 
        this.getViewPlaces = function () {
            return _this.viewPlaces;
        };
        //get birth date
        this.getBirthDate = function () {
            return _this.birthDate;
        };
        //get Birth Year
        this.getBirthYear = function () {
            return _this.birthYear;
        };
        //get current Age 
        this.getCurrentAge = function () {
            return 2018 - _this.birthYear;
        };
        // get total friends
        this.gettotalFriends = function () {
            return _this.totalFriends;
        };
        this.url = url;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.mobile = mobile;
        this.twitterId = twitterId;
        this.website = website;
        this.studyAt = studyAt;
        this.viewPlaces = viewPlaces;
        this.birthDate = birthDate;
        this.birthYear = birthYear;
        this.totalFriends = totalFriends;
    }
    return FacebookClass;
}());
//Object Declaration  
var fbInfo = new FacebookClass('https://www.facebook.com/krdheeraj51', 'Dheeraj Kumar', '28 february 1994', 'krdheeraj51@gmail.com', '9166060321', 'krdheeraj51', 'krdheeraj.info', 'PIET', 'Jaipur', '28 feb', 1994, 554);
console.log("Profile Url : " + fbInfo.getUrl());
console.log("Get Name : " + fbInfo.getName());
console.log("Date Of Birth : " + fbInfo.getDateOfBirth());
console.log("Get Email Info : " + fbInfo.getEmail());
console.log("Get Mobile : " + fbInfo.getMobile());
console.log("Get TwitterId : " + fbInfo.getTwitterId());
console.log("Get website : " + fbInfo.getWebsite());
console.log("Study At :" + fbInfo.getStudyAt());
console.log("View Places :" + fbInfo.getViewPlaces());
console.log("Current Age :" + fbInfo.getCurrentAge());
console.log("Total Friends : " + fbInfo.gettotalFriends());
