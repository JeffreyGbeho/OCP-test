export const chapter3 = {
  title: "Chapter 3: Making Decisions",
  questions: [
    {
      question:
        "Which of the following data types can be used in a switch expression? (Choose all that apply.)",
      options: [
        "A. enum",
        "B. int",
        "C. Byte",
        "D. long",
        "E. String",
        "F. char",
        "G. var",
        "H. double",
      ],
      answer: ["A", "B", "C", "E", "F", "G"],
      explanation:
        "A switch expression supports only the primitives int, byte, short, and char, along with their associated wrapper classes Integer, Byte, Short, and Character, respectively, making options B, C, and F correct. It also supports enum and String, making options A and E correct. Finally, switch supports var if the type can be resolved to a supported switch data type, making option G correct. Options D and H are incorrect as long and double are not supported in switch expressions.",
    },
    {
      question:
        'What is the output of the following code snippet? (Choose all that apply.)\n\n3: int temperature = 4;\n4: long humidity = -temperature + temperature * 3;\n5: if (temperature>=4)\n6: if (humidity < 6) System.out.println("Too Low");\n7: else System.out.println("Just Right");\n8: else System.out.println("Too High");',
      options: [
        "A. Too Low",
        "B. Just Right",
        "C. Too High",
        "D. A NullPointerException is thrown at runtime.",
        "E. The code will not compile because of line 7.",
        "F. The code will not compile because of line 8.",
      ],
      answer: ["B"],
      explanation:
        "The code compiles and runs without issue, so options D, E, and F are incorrect. Even though two consecutive else statements on lines 7 and 8 look a little odd, they are associated with separate if statements on lines 5 and 6, respectively. The value of humidity on line 4 is equal to -4 + 12, which is 8. The first if statement evaluates to true on line 5, so line 6 is executed and evaluates to false. This causes the else statement on line 7 to run, printing Just Right and making option B the correct answer.",
    },
    {
      question:
        "Which of the following data types are permitted on the right side of a for-each expression? (Choose all that apply.)",
      options: [
        "A. Double[][]",
        "B. Object",
        "C. Map",
        "D. List",
        "E. String",
        "F. char[]",
        "G. Exception",
        "H. Set",
      ],
      answer: ["A", "D", "F", "H"],
      explanation:
        "A for-each loop supports arrays, making options A and F correct. For Double[][], each element of the for-each loop would be a Double[]. A for-each loop also supports classes that implement java.lang.Iterable. Although this includes many of the Collections Framework classes, not all of them implement java.lang.Iterable. For this reason, option C is incorrect, and options D and H are correct. Options B, E, and G are incorrect, as they do not implement java.lang.Iterable. Although a String is a list of ordered characters, the class does not implement the required interface for a for-each loop.",
    },
    {
      question:
        'What is the output of calling printReptile(6)?\n\nvoid printReptile(int category) {\n\tvar type = switch(category) {\n\t\tcase 1,2 -> "Snake";\n\t\tcase 3,4 -> "Lizard";\n\t\tcase 5,6 -> "Turtle";\n\t\tcase 7,8 -> "Alligator";\n\t};\n\tSystem.out.print(type);\n}',
      options: [
        "A. Snake",
        "B. Lizard",
        "C. Turtle",
        "D. Alligator",
        "E. TurtleAlligator",
        "F. None of the above",
      ],
      answer: ["C"],
      explanation:
        'The switch expression matches the input 6 with the case 5,6, which yields "Turtle". Therefore, the method will print Turtle, making option C the correct answer.',
    },
    {
      question:
        'What is the output of the following code snippet?\n\nList<Integer> myFavoriteNumbers = new ArrayList<>();\nmyFavoriteNumbers.add(10);\nmyFavoriteNumbers.add(14);\nfor (var a : myFavoriteNumbers) {\n\tSystem.out.print(a + ", ");\n\tbreak;\n}\nfor (int b : myFavoriteNumbers) {\n\tcontinue;\n\tSystem.out.print(b + ", ");\n}\nfor (Object c : myFavoriteNumbers)\n\tSystem.out.print(c + ", ");',
      options: [
        "A. It compiles and runs without issue but does not produce any output.",
        "B. 10, 14,",
        "C. 10, 10, 14,",
        "D. 10, 10, 14, 10, 14,",
        "E. Exactly one line of code does not compile.",
        "F. Exactly two lines of code do not compile.",
        "G. Three or more lines of code do not compile.",
        "H. The code contains an infinite loop and does not terminate.",
      ],
      answer: ["C"],
      explanation:
        "The code compiles without issue, so options E, F, and G are incorrect. In the first loop, 10 is printed and then the loop breaks. The second loop does not print anything due to the continue statement. The third loop prints both 10 and 14. Therefore, the output is '10, 10, 14,', making option C correct.",
    },
    {
      question:
        "Which statements about decision structures are true? (Choose all that apply.)",
      options: [
        "A. A for-each loop can be executed on any Collections Framework object.",
        "B. The body of a while loop is guaranteed to be executed at least once.",
        "C. The conditional expression of a for loop is evaluated before the first execution of the loop body.",
        "D. A switch expression that takes a String and assigns the result to a variable requires a default branch.",
        "E. The body of a do/while loop is guaranteed to be executed at least once.",
        "F. An if statement can have multiple corresponding else statements.",
      ],
      answer: ["C", "D", "E"],
      explanation:
        "Option A is incorrect because not all Collections Framework classes implement Iterable. Option B is incorrect as a while loop may execute zero times if the condition is initially false. Option C is correct. Option D is correct because a switch expression that returns a value must handle all possible input values. Option E is correct as the body of a do/while loop always executes at least once. Option F is incorrect as each if statement has at most one matching else statement.",
    },
    {
      question:
        "Assuming weather is a well-formed nonempty array, which code snippet, when inserted independently into the blank in the following code, prints all of the elements of weather? (Choose all that apply.)\n\nprivate void print(int[] weather) {\n\tfor(__________________) {\n\t\tSystem.out.println(weather[i]);\n\t}\n}",
      options: [
        "A. int i=weather.length; i>0; i--",
        "B. int i=0; i<=weather.length-1; ++i",
        "C. var w : weather",
        "D. int i=weather.length-1; i>=0; i--",
        "E. int i=0, int j=3; i<weather.length; ++i",
        "F. int i=0; ++i<10 && i<weather.length;",
        "G. None of the above",
      ],
      answer: ["B", "D"],
      explanation:
        "Option A is incorrect because on the first iteration, it attempts to access weather[weather.length] of the nonempty array, which causes an ArrayIndexOutOfBoundsException to be thrown. Option B is correct and will print the elements in order. Option C doesn't compile as i is undefined in weather[i]. Option D is also correct and is a common way to print the elements of an array in reverse order. Option E does not compile and is therefore incorrect. You can declare multiple elements in a for loop, but the data type must be listed only once, such as in for(int i=0, j=3; …). Finally, option F is incorrect because the first element of the array is skipped. Since the conditional expression is checked before the loop is executed the first time, the first value of i used inside the body of the loop will be 1.",
    },
    {
      question:
        'What is the output of calling printType(11)?\n\n31: void printType(Object o) {\n32: \tif(o instanceof Integer bat) {\n33: \t\tSystem.out.print("int");\n34: \t} else if(o instanceof Integer bat && bat < 10) {\n35: \t\tSystem.out.print("small int");\n36: \t} else if(o instanceof Long bat || bat <= 20) {\n37: \t\tSystem.out.print("long");\n38: \t} default {\n39: \t\tSystem.out.print("unknown");\n40: \t}\n41: }',
      options: [
        "A. int",
        "B. small int",
        "C. long",
        "D. unknown",
        "E. Nothing is printed.",
        "F. The code contains one line that does not compile.",
        "G. The code contains two lines that do not compile.",
        "H. None of the above",
      ],
      answer: ["G"],
      explanation:
        "The first two pattern matching statements compile without issue. The variable bat is allowed to be used again, provided it is no longer in scope. Line 36 does not compile, though. Due to flow scoping, if o is not a Long, then bat is not in scope in the expression bat <= 20. Line 38 also does not compile as default cannot be used as part of an if/else statement. For these two reasons, option G is correct.",
    },
    {
      question:
        "Which statements, when inserted independently into the following blank, will cause the code to print 2 at runtime? (Choose all that apply.)\n\nint count = 0;\nBUNNY: for(int row = 1; row <=3; row++)\n\tRABBIT: for(int col = 0; col <3 ; col++) {\n\t\tif((col + row) % 2 == 0)\n\t\t\t___________________;\n\t\tcount++;\n\t}\nSystem.out.println(count);",
      options: [
        "A. break BUNNY",
        "B. break RABBIT",
        "C. continue BUNNY",
        "D. continue RABBIT",
        "E. break",
        "F. continue",
        "G. None of the above, as the code contains a compiler error.",
      ],
      answer: ["A", "C"],
      explanation:
        "The code contains a nested loop and a conditional expression that is executed if the sum of col + row is an even number; otherwise, count is incremented. Note that options E and F are equivalent to options B and D, respectively, since unlabeled statements apply to the most inner loop. Studying the loops, the first time the condition is true is in the second iteration of the inner loop, when row is 1 and col is 1. Option A is correct because this causes the loop to exit immediately with count only being set to 1. Options B, C, and E follow the same pathway. First, count is incremented to 1 on the first inner loop, and then the inner loop is exited. On the next iteration of the outer loop, row is 2 and col is 0, so execution exits the inner loop immediately. On the third iteration of the outer loop, row is 3 and col is 0, so count is incremented to 2. In the next iteration of the inner loop, the sum is even, so we exit, and our program is complete, making options A and C correct.",
    },
    {
      question:
        "Given the following method, how many lines contain compilation errors? (Choose all that apply.)\n\n10: private DayOfWeek getWeekDay(int day, final int thursday) {\n11: \tint otherDay = day;\n12: \tint Sunday = 0;\n13: \tswitch(otherDay) {\n14: \t\tdefault:\n15: \t\tcase 1: continue;\n16: \t\tcase thursday: return DayOfWeek.THURSDAY;\n17: \t\tcase 2,10: break;\n18: \t\tcase Sunday: return DayOfWeek.SUNDAY;\n19: \t\tcase DayOfWeek.MONDAY: return DayOfWeek.MONDAY;\n20: \t}\n21: \treturn DayOfWeek.FRIDAY;\n22: }",
      options: [
        "A. None, the code compiles without issue.",
        "B. 1",
        "C. 2",
        "D. 3",
        "E. 4",
        "F. 5",
        "G. 6",
        "H. The code compiles but may produce an error at runtime.",
      ],
      answer: ["E"],
      explanation:
        "This code contains numerous compilation errors, making options A and H incorrect. Line 15 does not compile, as continue cannot be used inside a switch statement like this. Line 16 is not a compile-time constant since any int value can be passed as a parameter. Marking it final does not change this, so it doesn't compile. Line 18 does not compile because Sunday is not marked as final. Being effectively final is insufficient. Finally, line 19 does not compile because DayOfWeek.MONDAY is not an int value. While switch statements do support enum values, each case statement must have the same data type as the switch variable otherDay, which is int. The rest of the lines do compile. Since exactly four lines do not compile, option E is the correct answer.",
    },
    {
      question:
        "What is the output of calling printLocation(Animal.MAMMAL)?\n\n10: class Zoo {\n11: \tenum Animal {BIRD, FISH, MAMMAL}\n12: \tvoid printLocation(Animal a) {\n13: \t\tlong type = switch(a) {\n14: \t\t\tcase BIRD -> 1;\n15: \t\t\tcase FISH -> 2;\n16: \t\t\tcase MAMMAL -> 3;\n17: \t\t\tdefault -> 4;\n18: \t\t};\n19: \t\tSystem.out.print(type);\n20: \t} }",
      options: [
        "A. 3",
        "B. 4",
        "C. 34",
        "D. The code does not compile because of line 13.",
        "E. The code does not compile because of line 17.",
        "F. None of the above",
      ],
      answer: ["A"],
      explanation:
        "The code compiles and runs without issue, printing 3 at runtime and making option A correct. The default statement on line 17 is optional since all the enum values are accounted for and can be removed without changing the output.",
    },
    {
      question:
        "What is the result of the following code snippet?\n\n3: int sing = 8, squawk = 2, notes = 0;\n4: while(sing> squawk) {\n5: \tsing--;\n6: \tsquawk += 2;\n7: \tnotes += sing + squawk;\n8: }\n9: System.out.println(notes);",
      options: [
        "A. 11",
        "B. 13",
        "C. 23",
        "D. 33",
        "E. 50",
        "F. The code will not compile because of line 7.",
      ],
      answer: ["C"],
      explanation:
        "Prior to the first iteration, sing = 8, squawk = 2, and notes = 0. After the iteration of the first loop, sing is updated to 7, squawk to 4, and notes to the sum of the new values for sing + squawk, 7 + 4 = 11. After the iteration of the second loop, sing is updated to 6, squawk to 6, and notes to the sum of itself plus the new values for sing + squawk, 11 + 6 + 6 = 23. On the third iteration of the loop, sing > squawk evaluates to false, as 6 > 6 is false. The loop ends and the most recent value of notes, 23, is output, so the correct answer is option C.",
    },
    {
      question:
        "What is the output of the following code snippet?\n\n2: boolean keepGoing = true;\n3: int result = 15, meters = 10;\n4: do {\n5: \tmeters--;\n6: \tif(meters==8) keepGoing = false;\n7: \tresult -= 2;\n8: } while keepGoing;\n9: System.out.println(result);",
      options: [
        "A. 7",
        "B. 9",
        "C. 10",
        "D. 11",
        "E. 15",
        "F. The code will not compile because of line 6.",
        "G. The code does not compile for a different reason.",
      ],
      answer: ["G"],
      explanation:
        "This example may look complicated, but the code does not compile. Line 8 is missing the required parentheses around the boolean conditional expression. Since the code does not compile and it is not because of line 6, option G is the correct answer. If line 8 was corrected with parentheses, then the loop would be executed twice, and the output would be 11.",
    },
    {
      question:
        "Which statements about the following code snippet are correct? (Choose all that apply.)\n\nfor(var penguin : new int[2])\n\tSystem.out.println(penguin);\nvar ostrich = new Character[3];\nfor(var emu : ostrich)\n\tSystem.out.println(emu);\nList<Integer> parrots = new ArrayList<Integer>();\nfor(var macaw : parrots)\n\tSystem.out.println(macaw);",
      options: [
        "A. The data type of penguin is Integer.",
        "B. The data type of penguin is int.",
        "C. The data type of emu is undefined.",
        "D. The data type of emu is Character.",
        "E. The data type of macaw is List.",
        "F. The data type of macaw is Integer.",
        "G. None of the above, as the code does not compile.",
      ],
      answer: ["B", "D", "F"],
      explanation:
        "The code does compile, making option G incorrect. In the first for-each loop, the right side of the for-each loop has a type of int[], so each element penguin has a type of int, making option B correct. In the second for-each loop, ostrich has a type of Character[], so emu has a data type of Character, making option D correct. In the last for-each loop, parrots has a data type of List<Integer>. Since the generic type of Integer is used in the List, macaw will have a data type of Integer, making option F correct.",
    },
    {
      question:
        "What is the result of the following code snippet?\n\nfinal char a = 'A', e = 'E';\nchar grade = 'B';\nswitch (grade) {\n\tdefault:\n\tcase a:\n\tcase 'B': 'C': System.out.print(\"great \");\n\tcase 'D': System.out.print(\"good \"); break;\n\tcase e:\n\tcase 'F': System.out.print(\"not good \");\n}",
      options: [
        "A. great",
        "B. great good",
        "C. good",
        "D. not good",
        "E. The code does not compile because the data type of one or more case statements does not match the data type of the switch variable.",
        "F. None of the above",
      ],
      answer: ["F"],
      explanation:
        "The code does not compile, although not for the reason specified in option E. The second case statement contains invalid syntax. Each case statement must have the keyword case—in other words, you cannot chain them with a colon (:). For this reason, option F is the correct answer. This line could have been fixed to say case 'B', 'C' or by adding the case keyword before 'C'; then the rest of the code would have compiled and printed great good at runtime.",
    },
    {
      question:
        "Given the following array, which code snippets print the elements in reverse order from how they are declared? (Choose all that apply.)\n\nchar[] wolf = {'W', 'e', 'b', 'b', 'y'};",
      options: [
        "A. int q = wolf.length;\nfor( ; ; ) {\n\tSystem.out.print(wolf[--q]);\n\tif(q==0) break;\n}",
        "B. for(int m=wolf.length-1; m>=0; --m)\n\tSystem.out.print(wolf[m]);",
        "C. for(int z=0; z<wolf.length; z++)\n\tSystem.out.print(wolf[wolf.length-z]);",
        "D. int x = wolf.length-1;\nfor(int j=0; x>=0 && j==0; x--)\n\tSystem.out.print(wolf[x]);",
        "E. final int r = wolf.length;\nfor(int w = r-1; r>-1; w = r-1)\n\tSystem.out.print(wolf[w]);",
        "F. for(int i=wolf.length; i>0; --i)\n\tSystem.out.print(wolf[i]);",
        "G. None of the above",
      ],
      answer: ["A", "B", "D"],
      explanation:
        "To print items in the wolf array in reverse order, the code needs to start with wolf[wolf.length-1] and end with wolf[0]. Option A accomplishes this and is the first correct answer. Option B is also correct and is one of the most common ways a reverse loop is written. The termination condition is often m>=0 or m>-1, and both are correct. Options C and F each cause an ArrayIndexOutOfBoundsException at runtime since both read from wolf[wolf.length] first, with an index that is passed the length of the 0-based array wolf. The form of option C would be successful if the value was changed to wolf[wolf.length-z-1]. Option D is also correct, as the j is extraneous and can be ignored in this example. Finally, option E is incorrect and produces an infinite loop, as w is repeatedly set to r-1, in this case 4, on every loop iteration. Since the update statement has no effect after the first iteration, the condition is never met, and the loop never terminates.",
    },
    {
      question:
        "What distinct numbers are printed when the following method is executed? (Choose all that apply.)\n\nprivate void countAttendees() {\n\tint participants = 4, animals = 2, performers = -1;\n\twhile((participants = participants+1) < 10) {}\n\tdo {} while (animals++ <= 1);\n\tfor( ; performers<2; performers+=2) {}\n\tSystem.out.println(participants);\n\tSystem.out.println(animals);\n\tSystem.out.println(performers);\n}",
      options: [
        "A. 6",
        "B. 3",
        "C. 4",
        "D. 5",
        "E. 10",
        "F. 9",
        "G. The code does not compile.",
        "H. None of the above",
      ],
      answer: ["B", "E"],
      explanation:
        "The code compiles without issue and prints two distinct numbers at runtime, so options G and H are incorrect. The first loop executes a total of five times, with the loop ending when participants has a value of 10. For this reason, option E is correct. In the second loop, animals starts out not less than or equal to 1, but since it is a do/while loop, it executes at least once. In this manner, animals takes on a value of 3 and the loop terminates, making option B correct. Finally, the last loop executes a total of two times, with performers starting with -1, going to 1 at the end of the first loop, and then ending with a value of 3 after the second loop, which breaks the loop. This makes option B a correct answer twice over.",
    },
    {
      question:
        "Which statements about pattern matching and flow scoping are correct? (Choose all that apply.)",
      options: [
        "A. Pattern matching with an if statement is implemented using the instance operator.",
        "B. Pattern matching with an if statement is implemented using the instanceon operator.",
        "C. Pattern matching with an if statement is implemented using the instanceof operator.",
        "D. The pattern variable cannot be accessed after the if statement in which it is declared.",
        "E. Flow scoping means a pattern variable is only accessible if the compiler can discern its type.",
        "F. Pattern matching can be used to declare a variable with an else statement.",
      ],
      answer: ["C", "E"],
      explanation:
        "Pattern matching with an if statement is implemented using the instanceof operator, making option C correct and options A and B incorrect. Option D is incorrect as it is possible to access a pattern variable outside the if statement in which it is defined. Option E is a correct statement about flow scoping. Option F is incorrect. Pattern matching does not support declaring variables in else statements as else statements do not have a boolean expression.",
    },
    {
      question:
        'What is the output of the following code snippet?\n\n2: double iguana = 0;\n3: do {\n4: \tint snake = 1;\n5: \tSystem.out.print(snake++ + " ");\n6: \tiguana--;\n7: } while (snake <= 5);\n8: System.out.println(iguana);',
      options: [
        "A. 1 2 3 4 -4.0",
        "B. 1 2 3 4 -5.0",
        "C. 1 2 3 4 5 -4.0",
        "D. 0 1 2 3 4 5 -5.0",
        "E. The code does not compile.",
        "F. The code compiles but produces an infinite loop at runtime.",
        "G. None of the above",
      ],
      answer: ["E"],
      explanation:
        "The variable snake is declared within the body of the do/while statement, so it is out of scope on line 7. For this reason, option E is the correct answer. If snake were declared before line 3 with a value of 1, then the output would have been 1 2 3 4 5 -5.0, and option G would have been the correct answer.",
    },
    {
      question:
        "Which statements, when inserted into the following blanks, allow the code to compile and run without entering an infinite loop? (Choose all that apply.)\n\n4: int height = 1;\n5: L1: while(height++ <10) {\n6: \tlong humidity = 12;\n7: \tL2: do {\n8: \t\tif(humidity-- % 12 == 0) ________________;\n9: \t\tint temperature = 30;\n10: \t\tL3: for( ; ; ) {\n11: \t\t\ttemperature++;\n12: \t\t\tif(temperature>50) ________________;\n13: \t\t}\n14: \t} while (humidity > 4);\n15: }",
      options: [
        "A. break L2 on line 8; continue L2 on line 12",
        "B. continue on line 8; continue on line 12",
        "C. break L3 on line 8; break L1 on line 12",
        "D. continue L2 on line 8; continue L3 on line 12",
        "E. continue L2 on line 8; continue L2 on line 12",
        "F. None of the above, as the code contains a compiler error",
      ],
      answer: ["A", "E"],
      explanation:
        "The most important thing to notice when reading this code is that the innermost loop is an infinite loop. Therefore, you are looking for solutions that skip the innermost loop entirely or that exit that loop. Option A is correct, as break L2 on line 8 causes the second inner loop to exit every time it is entered, skipping the innermost loop entirely. For option B, the first continue on line 8 causes the execution to skip the innermost loop on the first iteration of the second loop but not the second iteration of the second loop. The innermost loop is executed, and with continue on line 12, it produces an infinite loop at runtime, making option B incorrect. Option C is incorrect because it contains a compiler error. The label L3 is not visible outside its loop. Option D is incorrect, as it is equivalent to option B since the unlabeled break and continue apply to the nearest loop and therefore produce an infinite loop at runtime. Like option A, the continue L2 on line 8 allows the innermost loop to be executed the second time the second loop is called. The continue L2 on line 12 exits the infinite loop, though, causing control to return to the second loop. Since the first and second loops terminate, the code terminates, and option E is a correct answer.",
    },
    {
      question:
        'A minimum of how many lines need to be corrected before the following method will compile?\n\n21: void findZookeeper(Long id) {\n22: \tSystem.out.print(switch(id) {\n23: \t\tcase 10 -> {"Jane"}\n24: \t\tcase 20 -> {yield "Lisa";};\n25: \t\tcase 30 -> "Kelly";\n26: \t\tcase 30 -> "Sarah";\n27: \t\tdefault -> "Unassigned";\n28: \t});\n29: }',
      options: [
        "A. Zero",
        "B. One",
        "C. Two",
        "D. Three",
        "E. Four",
        "F. Five",
      ],
      answer: ["E"],
      explanation:
        'Line 22 does not compile because Long is not a compatible type for a switch statement or expression. Line 23 does not compile because it is missing a semicolon after "Jane" and a yield statement. Line 24 does not compile because it contains an extra semicolon at the end. Finally, lines 25 and 26 do not compile because they use the same case value. At least one of them would need to be changed for the code to compile. Since four lines need to be corrected, option E is correct.',
    },
    {
      question:
        'What is the output of the following code snippet? (Choose all that apply.)\n\n2: var tailFeathers = 3;\n3: final var one = 1;\n4: switch (tailFeathers) {\n5: \tcase one: System.out.print(3 + " ");\n6: \tdefault: case 3: System.out.print(5 + " ");\n7: }\n8: while (tailFeathers> 1) {\n9: \tSystem.out.print(--tailFeathers + " "); }',
      options: [
        "A. 3",
        "B. 5 1",
        "C. 5 2",
        "D. 3 5 1",
        "E. 5 2 1",
        "F. The code will not compile because of lines 3–5.",
        "G. The code will not compile because of line 6.",
      ],
      answer: ["E"],
      explanation:
        "The code compiles without issue, making options F and G incorrect. Remember, var is supported in both switch and while loops, provided the compiler determines that the type is compatible with these statements. In addition, the variable one is allowed in a case statement because it is a final local variable, making it a compile-time constant. The value of tailFeathers is 3, which matches the second case statement, making 5 the first output. The while loop is executed twice, with the pre-increment operator (--) modifying the value of tailFeathers from 3 to 2 and then to 1 on the second loop. For this reason, the final output is 5 2 1, making option E the correct answer.",
    },
    {
      question:
        'What is the output of the following code snippet?\n\n15: int penguin = 50, turtle = 75;\n16: boolean older = penguin>= turtle;\n17: if (older = true) System.out.println("Success");\n18: else System.out.println("Failure");\n19: else if(penguin != 50) System.out.println("Other");',
      options: [
        "A. Success",
        "B. Failure",
        "C. Other",
        "D. The code will not compile because of line 17.",
        "E. The code compiles but throws an exception at runtime.",
        "F. None of the above",
      ],
      answer: ["F"],
      explanation:
        "Line 19 starts with an else statement, but there is no preceding if statement that it matches. For this reason, line 19 does not compile, making option F the correct answer. If the else keyword was removed from line 19, then the code snippet would print Success.",
    },
    {
      question:
        "Which of the following are possible data types for friends that would allow the code to compile? (Choose all that apply.)\n\nfor(var friend in friends) {\n\tSystem.out.println(friend);\n}",
      options: [
        "A. Set",
        "B. Map",
        "C. String",
        "D. int[]",
        "E. Collection",
        "F. StringBuilder",
        "G. None of the above",
      ],
      answer: ["G"],
      explanation:
        "The statement is not a valid for-each loop (or a traditional for loop) since it uses a nonexistent in keyword. For this reason, the code does not compile, and option G is correct. If the in was changed to a colon (:), then Set, int[], and Collection would be correct.",
    },
    {
      question:
        'What is the output of the following code snippet?\n\n6: String instrument = "violin";\n7: final String CELLO = "cello";\n8: String viola = "viola";\n9: int p = -1;\n10: switch(instrument) {\n11: \tcase "bass" : break;\n12: \tcase CELLO : p++;\n13: \tdefault: p++;\n14: \tcase "VIOLIN": p++;\n15: \tcase "viola" : ++p; break;\n16: }\n17: System.out.print(p);',
      options: [
        "A. -1",
        "B. 0",
        "C. 1",
        "D. 2",
        "E. 3",
        "F. The code does not compile.",
      ],
      answer: ["D"],
      explanation:
        'The code compiles without issue, so option F is incorrect. The viola variable created on line 8 is never used and can be ignored. If it had been used as the case value on line 15, it would have caused a compilation error since it is not marked final. Since "violin" and "VIOLIN" are not an exact match, the default branch of the switch statement is executed at runtime. This execution path increments p a total of three times, bringing the final value of p to 2 and making option D the correct answer.',
    },
    {
      question:
        'What is the output of the following code snippet? (Choose all that apply.)\n\n9: int w = 0, r = 1;\n10: String name = "";\n11: while(w < 2) {\n12: \tname += "A";\n13: \tdo {\n14: \t\tname += "B";\n15: \t\tif(name.length()>0) name += "C";\n16: \t\telse break;\n17: \t} while (r <=1);\n18: \tr++; w++; }\n19: System.out.println(name);',
      options: [
        "A. ABC",
        "B. ABCABC",
        "C. ABCABCABC",
        "D. Line 15 contains a compilation error.",
        "E. Line 18 contains a compilation error.",
        "F. The code compiles but never terminates at runtime.",
        "G. The code compiles but throws a NullPointerException at runtime.",
      ],
      answer: ["F"],
      explanation:
        "The code snippet does not contain any compilation errors, so options D and E are incorrect. There is a problem with this code snippet, though. While it may seem complicated, the key is to notice that the variable r is updated outside of the do/while loop. This is allowed from a compilation standpoint, since it is defined before the loop, but it means the innermost loop never breaks the termination condition r <= 1. At runtime, this will produce an infinite loop the first time the innermost loop is entered, making option F the correct answer.",
    },
    {
      question:
        'What is printed by the following code snippet?\n\n23: byte amphibian = 1;\n24: String name = "Frog";\n25: String color = switch(amphibian) {\n26: \tcase 1 -> { yield "Red"; }\n27: \tcase 2 -> { if(name.equals("Frog")) yield "Green"; }\n28: \tcase 3 -> { yield "Purple"; }\n29: \tdefault -> throw new RuntimeException();\n30: };\n31: System.out.print(color);',
      options: [
        "A. Red",
        "B. Green",
        "C. Purple",
        "D. RedPurple",
        "E. An exception is thrown at runtime.",
        "F. The code does not compile.",
      ],
      answer: ["F"],
      explanation:
        "Line 27 does not compile because the case block does not yield a value if name is not equal to Frog. For this reason, option F is correct. Every path within a case block must yield a value if the switch expression is expected to return a value.",
    },
    {
      question:
        'What is the output of calling getFish("goldie")?\n\n40: void getFish(Object fish) {\n41: \tif (!(fish instanceof String guppy))\n42: \t\tSystem.out.print("Eat!");\n43: \telse if (!(fish instanceof String guppy)) {\n44: \t\tthrow new RuntimeException();\n45: \t}\n46: \tSystem.out.print("Swim!");\n47: }',
      options: [
        "A. Eat!",
        "B. Swim!",
        "C. Eat! followed by an exception.",
        "D. Eat!Swim!",
        "E. An exception is printed.",
        "F. None of the above",
      ],
      answer: ["B"],
      explanation:
        "Based on flow scoping, guppy is in scope after lines 41–42 if the type is not a String. In this case, line 43 declares a variable guppy that is a duplicate of the previously defined local variable defined on line 41. For this reason, the code does not compile, and option F is correct. If a different variable name was used on line 43, then the code would compile and print Swim! at runtime with the specified input.",
    },
    {
      question:
        'What is the result of the following code?\n\n1: public class PrintIntegers {\n2: \tpublic static void main(String[] args) {\n3: \t\tint y = -2;\n4: \t\tdo System.out.print(++y + " ");\n5: \t\twhile(y <= 5);\n6: \t} }',
      options: [
        "A. -2 -1 0 1 2 3 4 5",
        "B. -2 -1 0 1 2 3 4",
        "C. -1 0 1 2 3 4 5 6",
        "D. -1 0 1 2 3 4 5",
        "E. The code will not compile because of line 5.",
        "F. The code contains an infinite loop and does not terminate.",
      ],
      answer: ["D"],
      explanation:
        "Since the pre-increment operator was used, the first value that will be displayed is -1, so options A and B are incorrect. On the second-to-last iteration of the loop, y will be incremented to 5, and the loop will output 5. The loop will continue since 5 <= 5 is true, and on the last iteration, 6 will be output. At the end of this last iteration, the boolean expression 6 <= 5 will evaluate to false, and the loop will terminate. Since 6 was the last value output by the loop, the answer is option D.",
    },
  ],
};
