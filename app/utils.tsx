// let sum = (x: number, y: number): number => {
//         return x + y;
// }

export const getRandom = (n : number)  : number => Math.floor(Math.random() * n);

export const shuffleArr = (arr : Array<string>) : Array<string> => {
    const shuffled = arr.slice(0, arr.length);
    const n = arr.length;
    const k = Math.min(n, 5);
    for (let i = k - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap the elements at indices i and j
    }
    return shuffled;
}

