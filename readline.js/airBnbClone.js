var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var rooms = [
    {
        price: 200,
        location: '11 Broadway, NY',
        maxOccupants: 3,
        amenities: ['washer/dryer', 'wifi', 'cable']
    },
    {
        price: 100,
        location: '11 Delancey, NY',
        maxOccupants: 1,
        amenities: []
    },
    {
        price: 2000,
        location: '1 Park Pl, NY',
        maxOccupants: 2,
        amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
    }
];

// make the string exactly as long as len
function padTo(str, len) {
    if (str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {
        while (str.length < len) {
            str += ' '
        }
        return str;
    }
}

// make the string exactly as long as len
function padLeft(str, len) {
    var money = str
    if (money.length > len) {
        return money.slice(0, len - 3) + '...'
    } else {
        while (money.length < len) {
            money = ' ' + money
        }
        return money;
    }
}

function toMoney(num) {
    return '$' + num.toString()
}

function whatsAvailable(rooms) {
    for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].reserved) {
            continue;
        }
        var counter = i + 1;
        console.log(
            "#",
            "...",
            counter.toString(),
            padTo(rooms[i].location, 30), 
            ' ', 
            padLeft(toMoney(rooms[i].price), 8)
        );
    }
}

function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function showDetails(room) {
    console.log('Location:', room.location)
    console.log('Price:', toMoney(room.price))
    console.log('Max. Occupancy:', room.maxOccupants)
    console.log('Amenities:', bulletPoints(room.amenities))
}

function reserve(which) {
    if (rooms[which].reserve){
        console.log ("sorry room already reserved")
    }
    rooms[which].reserved = true
    console.log('Thank you for reserving')
}

rl.on('line', function(input) {
    var inputArr = input.split(' ')
    if (inputArr[0] === 'list') {
        console.log(inputArr)
        whatsAvailable(inputArr[1]);        
    } else if(inputArr[0]=== "show"){
        showDetails(rooms[inputArr[1]-1])
    }

    console.log('\n\nSelect one of [list, ...] $')
})

console.log('Please chose one of [list, ...] $')