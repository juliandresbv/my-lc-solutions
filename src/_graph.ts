class Graph {
  adjList: Map<unknown, unknown[]>;

  constructor() {
    this.adjList = new Map<unknown, unknown[]>();
  }

  addNode(node: string) {
    if (!this.adjList.has(node)) {
      this.adjList.set(node, []);
    }
  }

  addEdge(fromNode: string, toNode: string) {
    if (!this.adjList.has(fromNode)) {
      this.addNode(fromNode);
    }
    if (!this.adjList.has(toNode)) {
      this.addNode(toNode);
    }

    this.adjList.get(fromNode)?.push(toNode);
    this.adjList.get(toNode)?.push(fromNode);
  }

  getNodes() {
    return Array.from(this.adjList.keys());
  }

  getNeighbors() {
    return this.adjList;
  }

  queueBfsTraverse(startNode: string) {
    const queue: string[] = [];
    const visited = new Set<string>();

    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
      const currNode = queue.shift() as string;
      
      console.log(currNode);

      const neighbors = this.adjList.get(currNode) as string[];

      if (neighbors) {
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
            visited.add(neighbor);
          }
        }
      }
    }
  }

  stackDfsTraverse(startNode: string) {
    const stack: string[] = [];
    const visited = new Set<string>();

    stack.push(startNode);

    while (stack.length > 0) {
      const currNode = stack.pop() as string;

      visited.add(currNode);

      console.log(currNode);

      const neighbors = this.adjList.get(currNode) as string[];

      if (neighbors) {
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
  }

  recursiveDfsTraverse(startNode: string) {
    const visited = new Set<string>();
  
    this.dfsRecursion(startNode, visited);
  }
  
  private dfsRecursion(node: string, visited: Set<string>) {
    visited.add(node);
  
    console.log(node);
    
    const neighbors = this.adjList.get(node) as string[];
  
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfsRecursion(neighbor, visited);
        }
      }
    }
  }  
}

const g = new Graph();

g.addEdge('0', '1');
g.addEdge('0', '2');
g.addEdge('3', '2');

// console.log(g.getNodes());
console.log(g.getNeighbors());

// g.recursiveDfsTraverse('a');
// g.stackDfsTraverse('a');

// g.queueBfsTraverse('2');
