"use strict";
// this is an unweighted graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1])
            this.adjacencyList[vertex1].push(vertex2);
        if (this.adjacencyList[vertex2])
            this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1])
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((item) => item !== vertex2);
        if (this.adjacencyList[vertex2])
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((item) => item !== vertex1);
    }
    removeVertex(vertex) {
        // Method One to remove vertex
        const vert = this.adjacencyList[vertex];
        vert.map((item) => {
            this.adjacencyList[item] = this.adjacencyList[item].filter((el) => el !== vertex);
        });
        delete this.adjacencyList[vertex];
        // Method Two to remove vertex
    }
    DFSRecursive(start) {
        const result = [];
        const visitedVertices = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex)
                return;
            visitedVertices[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbour) => {
                if (!visitedVertices[neighbour])
                    return dfs(neighbour);
            });
        })(start);
        return result;
    }
    DFSIterative(start) {
        const stack = [];
        const result = [];
        const visited = {};
        stack.push(start);
        visited[start] = true;
        let last;
        while (stack.length) {
            last = stack.pop();
            result.push(last);
            this.adjacencyList[last].map((neighbour) => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result;
    }
    BFS(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        // const adjacencyList = this.adjacencyList;
        let first;
        visited[start] = true;
        while (queue.length) {
            first = queue.shift();
            result.push(first);
            this.adjacencyList[first].map((neighbour) => {
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
// console.log(graph);
// console.log(graph.BFS("A"));
// Weighted graph
class WGrpah {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1])
            this.adjacencyList[vertex1].push({ node: vertex2, weight });
        if (this.adjacencyList[vertex2])
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
}
class PQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}
const q = new PQueue();
q.enqueue("A", 10);
q.enqueue("A", 5);
q.enqueue("A", 1);
q.enqueue("A", 11);
const wGraph = new WGrpah();
wGraph.addVertex("A");
wGraph.addVertex("B");
wGraph.addVertex("C");
wGraph.addEdge("A", "B", 10);
// console.log(wGraph.adjacencyList["A"]);
console.log(q.dequeue());
