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