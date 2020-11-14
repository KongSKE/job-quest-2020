import App from "./src/App";
const main = async () => {
  const app = new App(8080);
  await app.listen();
};

main();
