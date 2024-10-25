class Graph {
  adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex: any) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

const graph = new Graph();

graph.addVertex("Dhaka");
graph.addVertex("Raj");
graph.addVertex("Delhi");
graph.adjacencyList["Dhaka"].push("Something");
graph.addVertex("Dhaka");
console.log(graph);
