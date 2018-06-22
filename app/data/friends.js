function Friend(name, photo, scores){
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    //this.sum = sumScores(this.scores);
    
};
//DUMMY DATA GOES HERE

var friends = [
    new Friend("Matthew", "/images/jimhalpert.jpg", [1,2,3,4,5,5,4,3,2,1]),
    new Friend("Mike", "/images/michaelscott.jpeg", [1,2,3,4,4,4,4,3,2,1]),
    new Friend("Justin", "/images/dwightschrute.jpg", [3,2,3,4,5,5,4,3,2,3]),
    new Friend("Chloe", "images/pambeesley.jpg", [3,4,5,4,5,5,4,3,2,1]),
    new Friend("Creed", "/images/creed.jpg", [1,1,1,1,1,1,1,1,1,1])
];

module.exports = {
    Friend,
    friends
}