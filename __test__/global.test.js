// const text = "Hola Mundo";
// test("Debe contener un texto", () => {
//   expect(text).toMatch(/Mundo/);
// });

// const fruits = ["manzana", "banana", "pera"];

// test("¿Tenemos una banana?", () => {
//   expect(fruits).toContain("banana");
// });

// test("Mayor que", () => {
//   expect(10).toBeGreaterThan(9);
// });

// test("Verdadero", () => {
//   expect(true).toBeTruthy();
// });

// const reverseString = (str, callback) => {
//   callback(str.split("").reverse().join(""));
// };
// test("Probar un callback", () => {
//   reverseString("hola", (str) => {
//     expect(str).toBe("aloh");
//   });
// });

// const reverseStringPromise = (str) => {
//   return new Promise((resolve, reject) => {
//     if (!str) {
//       reject(Error("Error"));
//     }
//     resolve(str.split("").reverse().join(""));
//   });
// };

// test("Probar una promesa", () => {
//   return reverseStringPromise("hola").then((string) => {
//     expect(string).toBe("aloh");
//   });
// });

// test("Probar async/await", async () => {
//   const string = await reverseStringPromise("hola");
//   expect(string).toBe("aloh");
// });

// //Correr algo antes y después de nuestras pruebas
// afterEach(() => {
//   console.log("Despues de cada prueba");
// });

// afterAll(() => {
//   console.log("Despues de todas las pruebas");
// });

// beforeEach(() => {
//   console.log("Antes de cada prueba");
// });

// beforeAll(() => {
//   console.log("Antes de todas las pruebas");
// });
