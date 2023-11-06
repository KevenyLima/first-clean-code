class Main {
  constructor(private readonly name: string) {}
  helloWorld() {
    return console.log(`Hello World, ${this.name}.`);
  }
}
new Main("Keveny").helloWorld();
