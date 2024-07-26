// const generateNumberInRange = (min: number, max: number) => {
//     return Math.random() * (max + 1 - min) + min;
// };
//
// function createRandomNumberGenerator(min: number, max: number) {
//     let currentNumber = min; // 0
//
//     return function () {
//         const direction = Math.random() < 0.5 ? -5 : 5; // -1
//
//         console.log('currentNumber - ', currentNumber);
//
//         console.log('direction - ', direction);
//
//         let nextNumber = currentNumber + direction; // -1
//
//         console.log('nextNumber - ', nextNumber);
//         if (nextNumber < min) {
//             nextNumber = min + 1;
//         }
//         if (nextNumber > max) {
//             nextNumber = max - 1;
//         }
//
//         currentNumber = nextNumber;
//
//         console.log('currentNumber before return - ', currentNumber); // 1
//
//         return currentNumber;
//     };
// }
//
// export const randomNumberGenerator = (min: number, max: number) => {
//     const x = createRandomNumberGenerator(min, max);
//     for (let i = 0; i < 20; i++) {
//         x();
//     }
// };

export const generateRandomNumberInRange = (min: number, max: number) => {
    return Math.random() * (max + 1 - min) + min;
};
