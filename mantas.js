import { get } from "request";
import { writeFile } from "fs";

const DAYS_IN_WEEK = 7;
const daysInMonth = 30;

const songs = ["Back In Black", "Stairway to Heaven", "Hey Jude"];
const Artists = ["ACDC", "Led Zeppelin", "The Beatles"];

function eraseDatabase() {}
function restore_database() {}

class animal {}
class Alpaca {}

const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};

function hashIt(data) {
    // The hash
    let hash = 0;

    // Length of string
    const length = data.length;

    // Loop through every character in data
    for (let i = 0; i < length; i++) {
        // Get character code.
        const char = data.charCodeAt(i);
        // Make the hash
        hash = (hash << 5) - hash + char;
        // Convert to 32-bit integer
        hash &= hash;
    }
}

get(
    "https://en.wikipedia.org/wiki/Robert_Cecil_Martin",
    (requestErr, response, body) => {
        if (requestErr) {
            console.error(requestErr);
        } else {
            writeFile("article.html", body, writeErr => {
                if (writeErr) {
                    console.error(writeErr);
                } else {
                    console.log("File written");
                }
            });
        }
    }
);

setTimeout(blastOff, 86400000);