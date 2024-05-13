
'use strict';


const checkNum = (obj) => {
	try {
		if (obj.result.lastNumber === obj.result.number) return 0;
		const changeNumber = obj.result.lastNumber - obj.result.number;
		console.log(`Изменение позиции в рейтинге ${obj.name} ${changeNumber}`);
	} catch (err) {
		console.error(err.name);
	}
};
checkNum();




