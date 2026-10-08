console.log("gogi")

let roomName: string = "Sea View";
let floor: number = 5;
let isAvailable: boolean = true;
let price: number = 180;

console.log(roomName);
console.log(floor);
console.log(isAvailable);
console.log(price);


function getRoomInfo(
    roomName: string,
    floor: number,
    isAvailable: boolean,
    price: number
): string {
    return `ოთახი: ${roomName}, სართული: ${floor}, თავისუფალია: ${isAvailable}, ფასი ღამეში: ${price} ლარი`;
}

console.log(getRoomInfo(roomName, floor, isAvailable, price));


function getRoomCategory(price: number): string {
    if (price < 100) {
        return "Economy";
    } else if (price <= 250) {
        return "Standard";
    } else {
        return "Luxury";
    }
}

console.log(getRoomCategory(80));
console.log(getRoomCategory(180));
console.log(getRoomCategory(300));

let cities: string[] = ["Tbilisi", "Batumi", "Kutaisi", "Borjomi", "Telavi"];

for (let i = 0; i < cities.length; i++) {
    console.log(i + " - " + cities[i]);
}


let ratings: number[] = [8, 9, 7, 10];

let sum: number = 0;

for (let rating of ratings) {
    sum += rating;
}

let average: number = sum / ratings.length;

console.log("საშუალო შეფასება: " + average);

type TRoom = {
    id: number;
    name: string;
    type: string;
    capacity: number;
    price: number;
};

interface IHotel {
    name: string;
    city: string;
    country: string;
    foundedYear: number;
    website?: string;
}


let hotel: IHotel = {
    name: "Sea Hotel",
    city: "Batumi",
    country: "Georgia",
    foundedYear: 2010,
    website: "www.seahotel.ge"
};

let room: TRoom = {
    id: 1,
    name: "Sea View",
    type: "Double",
    capacity: 2,
    price: 180
};

console.log(hotel);
console.log(room);



let rooms: TRoom[] = [
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

rooms.forEach(function(room) {
    console.log(room.name + " - " + room.price + " ლარი");
});


class Guest {
    public firstName: string;
    public lastName: string;
    public email: string;
    private age: number;

    constructor(firstName: string, lastName: string, email: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    getProfile(): string {
        return `სტუმარი: ${this.firstName} ${this.lastName}, ელ-ფოსტა: ${this.email}, ასაკი: ${this.age}`;
    }
}

class VipGuest extends Guest {
    bookedRooms: string[];

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        bookedRooms: string[]
    ) {
        super(firstName, lastName, email, age);
        this.bookedRooms = bookedRooms;
    }

    getBookedRooms(): string[] {
        return this.bookedRooms;
    }
}


let guest = new Guest(
    "გიორგი",
    "ბერიძე",
    "giorgi@mail.com",
    25
);

console.log(guest.firstName);
console.log(guest.lastName);
console.log(guest.email);



let vipGuest = new VipGuest(
    "ნინო",
    "გელაშვილი",
    "nino@mail.com",
    30,
    ["Sea View", "Luxury Suite"]
);

console.log(vipGuest.getProfile());
console.log(vipGuest.getBookedRooms());


