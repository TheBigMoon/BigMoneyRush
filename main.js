const min = 1200;
const max = 4599;

const num1 = (min - 0.5 + Math.random() * (max - min + 1)).toFixed(0);
const num2 = (min - 0.5 + Math.random() * (max - min + 1)).toFixed(0);

let bid, ask;

if(num1 > num2) {
	ask = num1;
	bid = num2;
} else {
	ask = num2;
	bid = num1;
}

const bidElelemt = document.getElementById('bid_count');
const askElelemt = document.getElementById('ask_count');

bidElelemt.innerHTML += bid;
askElelemt.innerHTML += ask;
