import { resolvePtr } from "dns";

class Youtubeclass {
    private url: string;
    private title: string;
    private channel: string;
    private publishDate: string;
    private videoCategory: string;
    private noOfViews: number;
    private noOfSubscribers:number;
    private noOfLike:number;
    private noOfDislike:number;
    private noOfComments:number;
    private description:string;
    constructor(url: string, title: string, channel: string, publishDate: string, videoCategory: string, noOfViews: number, noOfSubscribers: number, noOfLike: number, noOfDislike: number, noOfComments: number, description: string) {
        this.url = url;
        this.title = title;
        this.channel = channel;
        this.publishDate = publishDate;
        this.videoCategory = videoCategory;
        this.noOfViews = noOfViews;
        this.noOfSubscribers = noOfSubscribers;
        this.noOfLike = noOfLike;
        this.noOfDislike = noOfDislike;
        this.noOfComments = noOfComments;
        this.description = description;

    }
    //get Url
    getUrl=()=>{
        return this.url;
    }
    //get title
    getTitle=()=>{
        return this.title;
    }
    //getChannel
    getChannel=()=>{
        return this.channel;

    }
    //get Publish Date
    getPublishDate=()=>{
        return this.publishDate;
    }
    //get Video Category
    getVideoCategory=()=>{
        return this.videoCategory;
    }
    //get no Of views
    getNoOfVies=()=>{
       return this.noOfViews;
    }
    //set no Of views
    setNoOfViews=(noOfViews:number)=>{
      this.noOfViews=noOfViews;
    }
    //No of Subscribers
    getNoOfSubscribers=()=>{
        return this.getNoOfSubscribers;
    }
    //Set No of subscribers
    setNoOfSubscribers=(noOfSubscribers:number)=>{
        this.noOfSubscribers=noOfSubscribers;
    }
    //No Of Likes
    getNoOfLikes=()=>{
        return this.getNoOfLikes;
    }
    //set No Of Likes
    setNoOfLikes=(noOfLike:number)=>{
        this.noOfLike=noOfLike;
    } 
    //get No Of DisLikes
    getNoOfDisLikes=()=>{
        return this.noOfDislike;
    }
    //set no of Dislikes
    setNoOfDislkes=(noOfDislike:number)=>{
         this.noOfDislike=noOfDislike;
    }
    //get No Of Comments
    getNoOfComments=()=>{
        return this.noOfComments;
    } 
    //set No of Comments
    setNoOfComments=(noOfComments:number)=>{
        this.noOfComments=noOfComments;
    }
    getDescription=()=>{
        return this.description;
    }

}
let videosInfo=new Youtubeclass("https://www.youtube.com/watch?v=u19mQlQeMmE","How NASA's Mission Control Supports Space Missions","Tested","Jul 5 2013","Science & Technology",81,127,4000000,934,15,153,"We visit NASA's Mission Control to learn how teams of controllers coordinate and support current space exploration and research missions. Find out how astronauts aboard the International Space Station communicate with NASA, plus get a sneak peek at the next-generation Mission Control facility.");