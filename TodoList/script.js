//
data = [
	{
		userName: "andrei",
		password: "supersecret",
	},
	{
		userName: "sally",
		password: "123",
	},
	{
		userName: "ingrid",
		password: "777",
	},
	{
		userName: "222y",
		password: "123",
	},
	{
		userName: "in333d",
		password: "777",
	},
];

function callRandom(range, num) {
	let listNum = [];
	for (let i = 0; i < range.length; i++) {
		listNum.push(i);
	}
	let result = [];
	for (let i = 0; i < num; i++) {
		let randomNum = Math.floor(Math.random() * Math.pow(10, Math.ceil(Math.log10(range.length)))) % listNum.length;

		result.push(range[listNum[randomNum]]);
		listNum.splice(randomNum, 1);
	}
	return result;
}

console.log(callRandom(data, 3));
