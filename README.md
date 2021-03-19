# Instaliation and running tests

```
npm install
npm test
```

## Psuedo Code
```
initialize a results array

initialize a traversing function
    function takes in the path taken so far, 
    the total sum, 
    the current value, 
    which row we at, 
    and the column positon of the current value


    multiply the sum with the current value
    if the sum is greater than the target
        return
    if we are at the last row and if sum is the same as the target
        set the results array to be the path taken so far
        return
    if there are still more rows to traverse
        iterate on the row counter
        set the left column to be the same as the current column
        set the right column to be one over to the right as the current column
        call the traversing function with both left and right values
call the traversing function, passing in the tip of the pyramid and a sum of 1
return the results array
```
## My Approach to the problem

Since I knew I needed to visit every path, I implemented DFS using recursion. I also needed to backtrack when I went down an invalid path. To implement my recursive function, I broke down the problem into the smallest unit possible. 

Since we can only go either left or right from any particular point in the pyramid, we only need the current value and what is left and right of it. I treated this unit as simply a tree. We also pass down the current directions traveresed, the sum, and which row we are currently at. 

I also included some possible edge cases to test, such as a pyramid with a depth of one. Since there is no direction to take, I return an empty array.

