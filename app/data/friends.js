var friends = [
        {
                "name": "Holly",
                "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "scores": [
                        5,
                        1,
                        4,
                        4,
                        5,
                        1,
                        2,
                        5,
                        4,
                        1
                ]
        },
        {
                "name": "Tony",
                "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "scores": [
                        5,
                        1,
                        2,
                        4,
                        5,
                        2,
                        2,
                        1,
                        4,
                        1
                ]
        },
        {
                "name": "Ahmed",
                "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "scores": [
                        5,
                        1,
                        4,
                        2,
                        3,
                        5,
                        5,
                        1,
                        3,
                        1
                ]
        },
        {
                "name": "Kate",
                "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "scores": [
                        1,
                        3,
                        4,
                        3,
                        3,
                        5,
                        2,
                        5,
                        4,
                        1
                ]
        },
]

let result = [];
for (let i = 0; i < friends.length; i++) {
        let subtractArr = (arr1, arr2) => {
                let resultArr = arr1[i] - arr2[i];
                console.log(resultArr);
                var sum = resultArr.reduce(function(a, b) { return a + b; }, 0);
                console.log(sum);
         }
        subtractArr(friends[0],friends[1]);
}

/* for (var i=0; i < friends.length; i++) {
        let friendOne = friends[i].scores;        
        let totals = [];
        let oneTotal = friendOne.reduce(function(a, b) { return a + b; }, 0);
        totals.push(oneTotal);
        console.log(friends[i].name + " total points: " + totals);
}; */

/* Array.prototype.diff = function(a) {
        return this.filter(function(i) {return a.indexOf(i) < 0;});
    };
    for(var i = 0; friends.length; i++) {
            friends[i].diff(friends[i+1]);
    }; */
         /* let compareFriends = (char) => {
                let difference = [];
                difference = Math.abs(totals[i]-char);
                console.log(difference);
                 for (var i = 0; i < difference.length; i++) {
                        if (difference[i] < value) {
                          value = difference[i];
                          index = i;
                          console.log("value: " + value + "index: " + index);
                        }
                      }; 
        };
         compareFriends()
        
} 



        let oneTotal = friendOne.reduce(function(a, b) { return a + b; }, 0);
         console.log([].reduce((a, b) => a + b, 0))
        console.log(friends[i]);
        console.log(friends[i].name + " has a total score of " + oneTotal + " points.");  
        for(i=0;i < friends.length; i++) {
                let totals = [];
                totals.push(oneTotal);
                 console.log(totals); 
        }  */


  /* let compareFriends = (first, second) => {
        if(first)
}




 let friendTwo = friends[1].scores;
console.log(friendTwo); 

  let num1 = 0;
let num2 = 1;
 let rep = 0;
 

let compareFriends = (num1, num2) => {
         let difference = Math.abs(rep1 - rep2);
        console.log(num1 + " are " + difference + " points different than " + num2); 
        for(i=0; i < friends[num1].scores[i].length; i++) {
          let rep1 = 0;
          rep1 = rep1 + friends[num1].scores[i];
           let rep += friends[num1].scores[i];
           console.log(rep1);
        };
};

compareFriends();
 for(i=0; i < friends[i].scores.length; i++) {
        let friendOne = friends[i].scores;
        let friendTwo = friends[i + 1].scores;
        for(i=0; i < friends[i].scores.length; i++) {
                oneTotal += parseInt(friendOne[i]);
        }
        console.log("friendOne: " + friendOne);
        console.log(friendTwo);
} 

var nums = ['100','300','400','60','40'];

for(var i=1; i < nums.length; i++){

        var num = nums[i] + nums[i];

        alert(num);
}​
let friendOne = friends[i].scores;
let friendTwo = friends[i + 1].scores;


for(i=0; friends.length; i++) {
        let friendOne = friends[i].scores;
        let friendTwo = friends[i + 1].scores;
};
 */