class FacebookClass{
    private url:string;
    private name:string;
    private dateOfBirth:string;
    private email:string;
    private mobile:string;
    private twitterId:string;
    private website:string;
    private studyAt:string;
    private viewPlaces:string;
    private birthDate:string;
    private birthYear:number;
    private totalFriends:number;
   
//Constrructor Decalaration 
    constructor(url:string,name:string,dateOfBirth:string,email:string,mobile:string,twitterId:string,website:string,studyAt:string,viewPlaces:string,birthDate:string,birthYear:number,totalFriends:number){
    this.url=url;
    this.name=name;
    this.dateOfBirth=dateOfBirth;
    this.email=email;
    this.mobile=mobile;
    this.twitterId=twitterId;
    this.website=website;
    this.studyAt=studyAt;
    this.viewPlaces=viewPlaces;
    this.birthDate=birthDate;
    this.birthYear=birthYear;
    this.totalFriends=totalFriends;  
    }
    //get url
    getUrl=()=>{
        return this.url;
    }
    //get Name
    getName=()=>{
        return this.name;
    } 
    //get Date of Birth 
    getDateOfBirth=()=>{
        return this.dateOfBirth;
    }
    //get email
    getEmail=()=>{
        return this.email;
    } 
    //get mobile number
    getMobile=()=>{
        return this.mobile;
    }
    //get twitterId
    getTwitterId=()=>{
        return this.twitterId;
    }
    //get website
    getWebsite=()=>{
        return this.website;
    }
    //get studyAt
    getStudyAt=()=>{
        return this.studyAt;
    }
    //get view Palces 
    getViewPlaces=()=>{
        return this.viewPlaces;
    }
    //get birth date
    getBirthDate=()=>{
        return this.birthDate;
    }
    //get Birth Year
    getBirthYear=()=>{
        return this.birthYear;
    }
    //get current Age 
    getCurrentAge=()=>{
        return 2018-this.birthYear;
    }
    // get total friends
    gettotalFriends=()=>{
        return this.totalFriends;
    }
}
//Object Declaration  
let fbInfo=new FacebookClass('https://www.facebook.com/krdheeraj51','Dheeraj Kumar','28 february 1994','krdheeraj51@gmail.com','9166060321','krdheeraj51','krdheeraj.info','PIET','Jaipur','28 feb',1994,554);
console.log(`Profile Url : ${fbInfo.getUrl()}`);
console.log(`Get Name : ${fbInfo.getName()}`);
console.log(`Date Of Birth : ${fbInfo.getDateOfBirth()}`);
console.log(`Get Email Info : ${fbInfo.getEmail()}`);
console.log(`Get Mobile : ${fbInfo.getMobile()}`);
console.log(`Get TwitterId : ${fbInfo.getTwitterId()}`);
console.log(`Get website : ${fbInfo.getWebsite()}`);
console.log(`Study At :${fbInfo.getStudyAt()}`);
console.log(`View Places :${fbInfo.getViewPlaces()}`);
console.log(`Current Age :${fbInfo.getCurrentAge()}`);
console.log(`Total Friends : ${fbInfo.gettotalFriends()}`);
