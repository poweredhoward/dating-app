function Friend(name, photo, scores){
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    //this.sum = sumScores(this.scores);
    
};
//DUMMY DATA GOES HERE

var friends = [
    new Friend("Matthew", "1.png", [1,2,3,4,5,5,4,3,2,1]),
    new Friend("Mike", "2.png", [1,2,3,4,4,4,4,3,2,1]),
    new Friend("Justin", "3.png", [3,2,3,4,5,5,4,3,2,3]),
    new Friend("Chloe", "4.png", [3,4,5,4,5,5,4,3,2,1]),
    new Friend("Dummy", "5.png", [2,2,2,2,2,2,2,2,2,2])
];

module.exports = {
    Friend,
    friends
}