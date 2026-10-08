console.log("gogi");
let roomName = "Sea View";
let floor = 5;
let isAvailable = true;
let price = 180;
console.log(roomName);
console.log(floor);
console.log(isAvailable);
console.log(price);
function getRoomInfo(roomName, floor, isAvailable, price) {
    return `ოთახი: ${roomName}, სართული: ${floor}, თავისუფალია: ${isAvailable}, ფასი ღამეში: ${price} ლარი`;
}
console.log(getRoomInfo(roomName, floor, isAvailable, price));
function getRoomCategory(price) {
    if (price < 100) {
        return "Economy";
    }
    else if (price <= 250) {
        return "Standard";
    }
    else {
        return "Luxury";
    }
}
console.log(getRoomCategory(80));
console.log(getRoomCategory(180));
console.log(getRoomCategory(300));
let cities = ["Tbilisi", "Batumi", "Kutaisi", "Borjomi", "Telavi"];
for (let i = 0; i < cities.length; i++) {
    console.log(i + " - " + cities[i]);
}
let ratings = [8, 9, 7, 10];
let sum = 0;
for (let rating of ratings) {
    sum += rating;
}
let average = sum / ratings.length;
console.log("საშუალო შეფასება: " + average);
let hotel = {
    name: "Sea Hotel",
    city: "Batumi",
    country: "Georgia",
    foundedYear: 2010,
    website: "www.seahotel.ge"
};
let room = {
    id: 1,
    name: "Sea View",
    type: "Double",
    capacity: 2,
    price: 180
};
console.log(hotel);
console.log(room);
let rooms = [
    {
        id: 1,
        name: "Sea View",
        type: "Double",
        capacity: 2,
        price: 180
    },
    {
        id: 2,
        name: "Mountain View",
        type: "Double",
        capacity: 2,
        price: 150
    },
    {
        id: 3,
        name: "Luxury Suite",
        type: "Suite",
        capacity: 4,
        price: 300
    }
];
rooms.forEach(function (room) {
    console.log(room.name + " - " + room.price + " ლარი");
});
class Guest {
    firstName;
    lastName;
    email;
    age;
    constructor(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    getProfile() {
        return `სტუმარი: ${this.firstName} ${this.lastName}, ელ-ფოსტა: ${this.email}, ასაკი: ${this.age}`;
    }
}
class VipGuest extends Guest {
    bookedRooms;
    constructor(firstName, lastName, email, age, bookedRooms) {
        super(firstName, lastName, email, age);
        this.bookedRooms = bookedRooms;
    }
    getBookedRooms() {
        return this.bookedRooms;
    }
}
let guest = new Guest("გიორგი", "ბერიძე", "giorgi@mail.com", 25);
console.log(guest.firstName);
console.log(guest.lastName);
console.log(guest.email);
let vipGuest = new VipGuest("ნინო", "გელაშვილი", "nino@mail.com", 30, ["Sea View", "Luxury Suite"]);
console.log(vipGuest.getProfile());
console.log(vipGuest.getBookedRooms());
export {};
//# sourceMappingURL=main.js.map