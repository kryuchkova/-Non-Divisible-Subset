# -Non-Divisible-Subset
size of subset of integers not evenly divisible by given integer n


Given a set, S, of n  distinct integers, print the size of a maximal subset, , of  where the sum of any  numbers in S'  are not evenly divisible by k .

Input Format

The first line contains 2 space-separated integers, n and k, respectively. 
The second line contains  space-separated integers (we'll refer to the  value as ) describing the unique values of the set.



All of the given numbers are distinct.
Output Format

Print the size of the largest possible subset ().

Sample Input

4 3
1 7 2 4
Sample Output

3
Explanation

The largest possible subset of integers is , because no two integers will have a sum that is evenly divisible by :

1+7 = 8, and  8 is not evenly divisible by .
1+4=5, 5and  is not evenly divisible by .
7+4=11, 11 and  is not evenly divisible by .
The number  cannot be included in our subset because it will produce an integer that is evenly divisible by  when summed with any of the other integers in our set:

1+2 = 3, and 3 mod 3 =0 .
4+2=6,and 6 mod 3= 0.
7+2=9, and 9 mod 3 = 0 .
Thus, we print the length of S' on a new line, which is 3.

