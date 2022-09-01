const airports = "PHX YHZ BKK OKC JFK LAX LHR LIM LOS".split(" ");
const routes = [
  ["PHX", "YHZ"],
  ["YHZ", "LHR"],
  ["JFK", "BKK"],
  ["LAX", "LOS"],
  ["BKK", "YHZ"],
  ["YHZ", "BKK"],
];

const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

/**
 * If the destination node is not in the origin node's list, add it
 * @param origin - The node we're adding an edge to.
 * @param destination - The node we're adding an edge to
 */
function addEdge(origin, destination) {
  if (!adjacencyList.get(origin).includes(destination)) {
    adjacencyList.get(origin).push(destination);
  }
  if (!adjacencyList.get(destination).includes(origin)) {
    adjacencyList.get(destination).push(origin);
  }
}

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

/**
 * We start at the start airport, and then we visit all of the airports that are directly connected to
 * the start airport, and then we visit all of the airports that are directly connected to those
 * airports, and so on
 * @param start - the starting airport
 */
function bfs(start) {
  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log(`BFS FOUND BKK: ${airport} -> ${destination}`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

function dfs(start, visited = new Set()) {
  visited.add(start);
  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log(`DFS FOUND BKK: ${start} -> ${destination}`);
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

console.log(adjacencyList);
bfs("PHX");
dfs("PHX");
