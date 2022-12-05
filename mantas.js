import { get } from "request";
import { writeFile } from "fs";

const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const SONGS = ["Back In Black", "Stairway to Heaven", "Hey Jude"];
const ARTISTS = ["ACDC", "Led Zeppelin", "The Beatles"];

function eraseDatabase() {}
function restoreDatabase() {}

class Animal {}
class Alpaca {}

const Car = {
    make: "Honda",
    model: "Accord",
    color: "Blue"
};

function hashIt(data) {
    let hash = 0;
    const length = data.length;

    for (let i = 0; i < length; i++) {
        const char = data.charCodeAt(i);
        hash = (hash << 5) - hash + char;

        // Convert to 32-bit integer
        hash &= hash;
    }
}

async function getCleanCodeArticle() {
    try {
        const body = await get("https://en.wikipedia.org/wiki/Robert_Cecil_Martin");
        await writeFile("article.html", body);
        console.log("File written");
    } catch (err) {
        console.error(err);
    }
}

getCleanCodeArticle();

const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;

setTimeout(blastOff, MILLISECONDS_PER_DAY);