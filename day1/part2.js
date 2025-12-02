import { open } from "node:fs/promises";

let passesZero = 0;
let position = 50;

const solution = async () => {
	const file = await open("./day1/input.txt");

	for await (const line of file.readLines()) {
		if (line.charAt(0) === "L") {
			position = turnLeft(position, Number(line.slice(1)));
		} else {
			position = turnRight(position, Number(line.slice(1)));
		}
	}

	console.log(passesZero);
};

const turnLeft = (position, number) => {
	const next = position - number;
	const passes = Math.ceil(position / 100) - Math.ceil(next / 100);
	passesZero += passes;
	return next;
};

const turnRight = (position, number) => {
	const next = position + number;
	const passes = Math.floor(next / 100) - Math.floor(position / 100);
	passesZero += passes;
	return next;
};

solution();

// 5963
