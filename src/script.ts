let add = (a: number, b: number) => { return a + b }


let myString: string = "Hello World";
let myNumber: number = 123; //15.2, NaN -> Also works!
let myBoolean: boolean = true;
let myNull: null = null; //relevant for handling Union Types
let myUndefined: undefined; //relevant for optional properties i.e. in API configurations, form data, or user profiles.

console.log(myString, myNumber, myBoolean, myNull, myUndefined);

// User might be found, or might not exist yet
let currentUser: string | null = null;

currentUser = "Alice"; // Valid state change


type ProfileUpdate = {
    username: string;
    bio?: string; // Equivalent to: string | undefined
};

function updateProfile(userId: string, data: ProfileUpdate) {
    // If 'bio' was omitted, data.bio is `undefined`
    if (data.bio === undefined) {
        console.log("Do not change the bio in the database.");
    } else {
        console.log(`Update bio to: ${data.bio}`);
    }
}

// Case 1: Updating the bio
updateProfile("user_123", {
    username: "alex99",
    bio: "Software developer & runner"
});

// Case 2: Omitting the bio ('data.bio' becomes undefined automatically)
updateProfile("user_123", {
    username: "alex99"
});

function sendNotification(message: string) {
    console.log(message.toUpperCase());
}

let userStatusNote: string | undefined; // Not initialized yet

// ❌ TypeScript Error: Argument of type 'string | undefined' 
// is not assignable to parameter of type 'string'.
sendNotification(userStatusNote);

// ✅ Fix: Guard against undefined
if (userStatusNote !== undefined) {
    sendNotification(userStatusNote);
}

let myVariable: string | number; //UNION-Type
myVariable = 123;









let myLiteral: "admin" | "member" | boolean | 42 = true;

console.log(myLiteral);


let myArray: (number | string)[] = [123, 321, 621, "hi"];


console.log(myArray);






let myTupelArray: [string, number, number] = ["hi", 42, 621];
//The tupel is:  [string, number, number]

function withReturn(a: number, b: number): number {
    return a + b;
}

//first: (name?:string) declares name to be a string or undefined
//logs: if name is a NON-EMPTY-STRING
// withoutReturn("") -> logs "unknown"
// withoutReturn("Alice") -> logs "Alice"
// withoutReturn() -> logs "unknown"
function withoutReturn(name?: string): void {
    console.log(name ? name : "unknown");
}

console.log(myTupelArray);

//name has to be present AND be a string
//price is optional (can be number or is undefined)
//logger takes string and returns void (declared in line 7)
let product: {
    name: string,
    price?: number,
    logger: (msg: string) => void
} = {
    name: "book",
    logger: (msg) => {
        console.log(msg);
    }
}




import { User } from './interfaces'

function logAdmin(user: User): User {
    return user;
}

function logAdmin(user: { name: string, role: string }): { name: string, role: string } {
    return user
}