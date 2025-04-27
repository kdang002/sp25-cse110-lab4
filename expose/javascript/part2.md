## Part 2
1. 3
2. 150
3. 150
4. It will return a list of discounted price on each responding item i: [50, 100, 150]
5. It will cause an error, because of the code is trying to print variable i, which doesn't exist in scope.
6. Same issue as #5, where discountedPrice uses a "let" keyword, therefore line 13 is accessing out-of-scope variable.
7. At line 14, it will print out 150.
8. It will return a list of discounted price on each responding item i: [50, 100, 150]
9. It will cause an error, because of the code is trying to print variable i, which doesn't exist in scope.
10. It will print out 3
11. It will return a list of discounted price on each responding item i: [50, 100, 150]
12. 
    A. student.name;
    B. student['Grad Year'];
    C. student.greeting();
    D. student['Favorite Teacher']['name'];
    E. student.courseLoad[0]

13. 
    A. '3' + 2 = '32' // "+" operation is a string concatnation, which make 2 into a string
    B. '3' - 2 = 1    // "-" is an arithmatic operation, which changes '3' back into a number 3
    C. 3 + null = 3   // null is just 0
    D. '3' + null = '3null' //String concatnation once again, into '3null'
    E. true + 3 = 4   // default value for true is 1
    F. false + null = 0     //default value for false is 0
    G. '3' + undefined = '3undefined'   //String concat., again.
    H. '3' - undefined = NaN            //The value 3 - undefined, results in Not-a-Number

14. 
    A. '2' > 1 : True    //'2' converts into value 2, which greater than 1
    B. '2' < '12': False //Compare lexico where compare first letter '2' > '1'
    C. 2 == '2': True    //'2' converts into value 2, which equal to 2
    D. 2 === '2': false  // === is a strictly equality, does not allow type conversion
    E. true == 2: false  // true becomes 1: 1 != 2
    F. true === Boolean(2): true   //Any number that is not 0, is true.

15. == allows type convertions. While === STRICTLY NO type conversion; data type must match.

17. The result of the initial array will be double at every element: [2,4,6]. The modifyArray functions iterates through each element of the array, then applies the "callback" function (which is doSomething) to every element. Then, "callback" returns the value from "doSomething", and stored into the newArr.

19. Output: 1 4 3 2
    1 is being printed immediately (arbitrary). But then line 3 puts a 1000ms delay on 2, so '2' will be print out 1000ms later.
    Then 3 is set to be print out 0ms later, but in the printing queue, 4 will be print out first, as it has no delay.