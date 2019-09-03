
app.get("/api/friends", function(req, res){
    res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.post("/api/friends", newUser,






    
let friends = [
    {name: "Dave", scores: [1, 1, 4, 4, 5, 1, 2, 5, 4, 1]},
    {name: "Cindy", scores: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]},
    {name: "George", scores: [4, 1, 3, 5, 4, 2, 1, 1, 2, 1]}
]
    
    
    function difference(){
        const newArray = [];
        let lowestDiff = Infinity;
        let bestMatch = {};
        const myArray = [1, 3, 2, 4, 5, 4, 2, 3, 1, 1];
        for (let i = 0; i < friends.length; i++) {
            let bestMatchScore = 0;
            for (let j= 0; j < friends[i].scores.length; j++){
                // newArray.push(Math.abs(friends[i].scores[j] - myArray[j]));
                bestMatchScore += (Math.abs(friends[i].scores[j] - myArray[j]));
            }
            console.log(bestMatchScore);
            if (bestMatchScore < lowestDiff) {
                lowestDiff = bestMatchScore;
                bestMatch = friends[i]
            }
        }
        console.log(bestMatch);
        return bestMatch;
    }

    difference( );

