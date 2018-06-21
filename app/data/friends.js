function Friend(name, photo, scores){
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.sum = sumScores(this.scores);
    
};

var friends = [];

module.exports = {
    Friend,
    friends
}