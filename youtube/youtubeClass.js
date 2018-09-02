var YoutubeclassExamp = /** @class */ (function () {
    function YoutubeclassExamp(url, title, channel, publishDate, videoCategory, noOfViews, noOfSubscribers, noOfLike, noOfDislike, noOfComments, description) {
        var _this = this;
        //get Url
        this.getUrl = function () {
            return _this.url;
        };
        //get title
        this.getTitle = function () {
            return _this.title;
        };
        //getChannel
        this.getChannel = function () {
            return _this.channel;
        };
        //get Publish Date
        this.getPublishDate = function () {
            return _this.publishDate;
        };
        //get Video Category
        this.getVideoCategory = function () {
            return _this.videoCategory;
        };
        //get no Of views
        this.getNoOfViews = function () {
            return _this.noOfViews;
        };
        //set no Of views
        this.setNoOfViews = function (noOfViews) {
            _this.noOfViews = noOfViews;
        };
        //No of Subscribers
        this.getNoOfSubscribers = function () {
            return _this.noOfSubscribers;
        };
        //Set No of subscribers
        this.setNoOfSubscribers = function (noOfSubscribers) {
            _this.noOfSubscribers = noOfSubscribers;
        };
        //No Of Likes
        this.getNoOfLikes = function () {
            return _this.noOfLike;
        };
        //set No Of Likes
        this.setNoOfLikes = function (noOfLike) {
            _this.noOfLike = noOfLike;
        };
        //get No Of DisLikes
        this.getNoOfDisLikes = function () {
            return _this.noOfDislike;
        };
        //set no of Dislikes
        this.setNoOfDislkes = function (noOfDislike) {
            _this.noOfDislike = noOfDislike;
        };
        //get No Of Comments
        this.getNoOfComments = function () {
            return _this.noOfComments;
        };
        //set No of Comments
        this.setNoOfComments = function (noOfComments) {
            _this.noOfComments = noOfComments;
        };
        this.getDescription = function () {
            return _this.description;
        };
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
    return YoutubeclassExamp;
}());
var videosInform = new YoutubeclassExamp("https://www.youtube.com/watch?v=u19mQlQeMmE", "How NASA's Mission Control Supports Space Missions", "Tested", "Jul 5 2013", "Science & Technology", 81127, 4000000, 934, 15, 153, "We visit NASA's Mission Control to learn how teams of controllers coordinate and support current space exploration and research missions. Find out how astronauts aboard the International Space Station communicate with NASA plus get a sneak peek at the next-generation Mission Control facility.");
console.log("Url:  " + videosInform.getUrl());
console.log("Title: " + videosInform.getTitle());
console.log("Channel: " + videosInform.getChannel());
console.log("Publish date : " + videosInform.getPublishDate());
console.log("Video Category : " + videosInform.getVideoCategory());
console.log("No Of Views : " + videosInform.getNoOfViews());
console.log("No Of Subscribers : " + videosInform.getNoOfSubscribers());
console.log("Total Likes : " + videosInform.getNoOfLikes());
console.log("Total Dislikes : " + videosInform.getNoOfDisLikes());
console.log("Comments : " + videosInform.getNoOfComments());
console.log("Video Description : " + videosInform.getDescription() + "\n");
videosInform.setNoOfLikes(videosInform.getNoOfLikes() + 100);
videosInform.setNoOfViews(videosInform.getNoOfViews() + 100);
videosInform.setNoOfDislkes(videosInform.getNoOfDisLikes() + 100);
videosInform.setNoOfComments(videosInform.getNoOfComments() + 100);
videosInform.setNoOfSubscribers(videosInform.getNoOfSubscribers() + 100);
console.log('Values of Views, subscribers, likes and dislikes after adding  100 in each ');
console.log('\n');
console.log("No Of Views : " + videosInform.getNoOfViews());
console.log("No Of Subscribers : " + videosInform.getNoOfSubscribers());
console.log("Total Likes : " + videosInform.getNoOfLikes());
console.log("Total Dislikes : " + videosInform.getNoOfDisLikes());
console.log("Comments : " + videosInform.getNoOfComments());
