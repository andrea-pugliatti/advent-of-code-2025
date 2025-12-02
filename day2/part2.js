import fs from "node:fs/promises";

const invalidIds = [];

const solution = async () => {
	try {
		const data = await fs.readFile("./day2/input.txt", { encoding: "utf-8" });
		const pairs = data.split(",");
		pairs.forEach((pair) => {
			handlePair(pair);
		});
		console.log(invalidIds.reduce((sum, value) => sum + value));
	} catch (err) {
		console.error(err);
	}
};

const handlePair = (pair) => {
	const [firstId, lastId] = pair.split("-");
	const first = Number(firstId);
	const last = Number(lastId);

	for (let i = first; i <= last; i++) {
		const id = i.toString();
		const maxLength = id.length / 2;

		for (let j = 1; j <= maxLength; j++) {
			const repeatedSlice = id.slice(0, j).repeat(id.length / j);
			if (repeatedSlice === id) {
				invalidIds.push(i);
				break;
			}
		}
	}
};

solution();
