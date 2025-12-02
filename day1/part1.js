import { open } from "node:fs/promises";

let counter = 0;
let position = 50;

const solution = async () => {
	const file = await open("./day1/input.txt");

	for await (const line of file.readLines()) {
		if (line.charAt(0) === "L") {
			position = turnLeft(position, Number(line.slice(1)));
		} else {
			position = turnRight(position, Number(line.slice(1)));
		}
		if (position === 0) {
			counter += 1;
		}
	}

	console.log(counter);
};

const turnLeft = (position, number) => {
	position -= number;

	while (position < 0) {
		position += 100;
	}

	return position;
};

const turnRight = (position, number) => {
	position += number;

	while (position >= 100) {
		position -= 100;
	}

	return position;
};

solution();
