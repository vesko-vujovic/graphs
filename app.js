// Graph implementation 


// Here we store wheter or not vertex has been visited and to identify 
function Vertex(label) {
	this.label = label;
}

// Graph class - adjacency list 

/** 
  * The class keeps track how many edges are represented in graph, as well as the number of vertices,
  * by utilizing an array whose length is equal to the number of vertices in the graph. In each element
  * of the array, the for loops adds subarray to store all the adjacent vertices, and it initializes each 
  * element to the empty string
  */
function Graph(v) {
	this.vertces = v;
	this.edges   = 0;
	this.adj     = [];
	for(var i = 0; i < this.vertices; ++i){
		this.adj[i]    = [];
		this.adj[i].push('');
	}

	this.addEdge   = addEdge;
	this.toString  = toString;
}




 