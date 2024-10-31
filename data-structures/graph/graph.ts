class Graph {
  adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex: any) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: any, vertex2: any) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: any, vertex2: any) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (item: any) => item !== vertex2
      );
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (item: any) => item !== vertex1
      );
  }

  removeVertex(vertex: any) {
    // Method One to remove vertex
    const vert = this.adjacencyList[vertex];
    vert.map((item: any) => {
      this.adjacencyList[item] = this.adjacencyList[item].filter(
        (el: any) => el !== vertex
      );
    });
    delete this.adjacencyList[vertex];

    // Method Two to remove vertex
  }

  DFSRecursive(start: any) {
    const result: any[] = [];
    const visitedVertices: any = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex: any) {
      if (!vertex) return;
      visitedVertices[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour: any) => {
        if (!visitedVertices[neighbour]) return dfs(neighbour);
      });
    })(start);
    return result;
  }

  DFSIterative(start: any) {
    const stack: any[] = [];
    const result: any[] = [];
    const visited: any = {};
    stack.push(start);
    visited[start] = true;
    let last;
    while (stack.length) {
      last = stack.pop();
      result.push(last);
      this.adjacencyList[last].map((neighbour: any) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }

  BFS(start: any) {
    const queue: any[] = [start];
    const result: any[] = [];
    const visited: any = {};
    // const adjacencyList = this.adjacencyList;
    let first;

    visited[start] = true;
    while (queue.length) {
      first = queue.shift();
      result.push(first);
      this.adjacencyList[first].map((neighbour: any) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph);
console.log(graph.BFS("A"));
