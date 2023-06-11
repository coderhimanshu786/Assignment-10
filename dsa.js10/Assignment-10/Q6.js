//Complexity
//Time Complexity: O(2^n)
//Auxiliary Space: O(n)

// javascript recursive function t0 solv tower of hanoi puzzle
function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
  if (n == 0) {
    return;
  }
  towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
  console.log(
    "Move disk " + n + " from rod " + from_rod + " to rod " + to_rod + "<br/>"
    );
  towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}
// Question to puzzle problem
// A, B and C are names of rods
towerOfHanoi(2, "A", "C", "B");
towerOfHanoi(3, "A", "C", "B");
