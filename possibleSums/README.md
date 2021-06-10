1. Problem
  - You have a collection of `coins`, and you know the values of the `coins` and the `quantity` of each type of coin in it. You want to know how many distinct sums you can make from non-empty groupings of these `coins`.
2. Example
  - For `coins = [10, 50, 100]` and `quantity = [1, 2, 1]`, the output should be
  `possibleSums(coins, quantity) = 9`.

  Here are all the possible sums:

    - 50 = 50;
    - 10 + 50 = 60;
    - 50 + 100 = 150;
    - 10 + 50 + 100 = 160;
    - 50 + 50 = 100;
    - 10 + 50 + 50 = 110;
    - 50 + 50 + 100 = 200;
    - 10 + 50 + 50 + 100 = 210;
    - 10 = 10;
    - 100 = 100;
    - 10 + 100 = 110.

  -> As you can see, there are 9 distinct sums that can be created from non-empty groupings of your coins.
3. Solution
  - Create a set save all each other sum. (1)
  - Create a set() save all element[i] * j (j is the number of occurrences). (2)
  - Create a set() save all element sum for (1) and (2). (3) 
  - Merge (2) and (3) -> back to (2)
