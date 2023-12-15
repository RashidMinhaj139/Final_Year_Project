export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const respose = await fetch("http://localhost:8080/products");
    const data = await respose.json();
    resolve({ data });
  });
}
