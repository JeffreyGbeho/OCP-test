import { Quiz } from "../models/quiz";

export const assessment: Quiz = {
  title: "Java Certification Assessment Test",
  questions: [
    {
      question:
        'What is the result of executing the following code snippet?\n\n41: final int score1 = 8, score2 = 3;\n42: char myScore = 7;\n43: var goal = switch (myScore) {\n44: \tdefault -> {if(10>score1) yield "unknown";}\n45: \tcase score1 -> "great";\n46: \tcase 2, 4, 6 -> "good";\n47: \tcase score2, 0 -> {"bad";}\n48: };\n49: System.out.println(goal);',
      options: [
        "A. unknown",
        "B. great",
        "C. good",
        "D. bad",
        "E. unknowngreatgoodbad",
        "F. Exactly one line needs to be changed for the code to compile.",
        "G. Exactly two lines need to be changed for the code to compile.",
        "H. None of the above",
      ],
      answer: ["G"],
      explanation:
        "The question does not compile because line 44 and line 47 do not always return a value in the case block, which is required when a switch expression is used in an assignment operation. Line 44 is missing a yield statement when the if statement evaluates to false, while line 47 is missing a yield statement entirely. Since two lines don't compile, option G is the answer.",
    },
    {
      question:
        'What is the output of the following code snippet?\n\nint moon = 9, star = 2 + 2 * 3;\nfloat sun = star>10 ? 1 : 3;\ndouble jupiter = (sun + moon) - 1.0f;\nint mars = --moon <= 8 ? 2 : 3;\nSystem.out.println(sun+", "+jupiter+", "+mars);',
      options: [
        "A. 1, 11, 2",
        "B. 3.0, 11.0, 2",
        "C. 1.0, 11.0, 3",
        "D. 3.0, 13.0, 3",
        "E. 3.0f, 12, 2",
        "F. The code does not compile because one of the assignments requires an explicit numeric cast.",
      ],
      answer: ["B"],
      explanation:
        "Initially, moon is assigned a value of 9, while star is assigned a value of 8. The multiplication operator (*) has a higher order of precedence than the addition operator (+), so it gets evaluated first. Since star is not greater than 10, sun is assigned a value of 3, which is promoted to 3.0f as part of the assignment. The value of jupiter is (3.0f + 9) - 1.0, which is 11.0f. This value is implicitly promoted to double when it is assigned. In the last assignment, moon is decremented from 9 to 8, with the value of the expression returned as 8. Since 8 less than or equal to 8 is true, mars is set to a value of 2. The final output is 3.0, 11.0, 2, making option B the correct answer.",
    },
    {
      question:
        "Which changes, when made independently, guarantee the following code snippet prints 100 at runtime? (Choose all that apply.)\n\nList<Integer> data = new ArrayList<>();\nIntStream.range(0,100).parallel().forEach(s -> data.add(s));\nSystem.out.println(data.size());",
      options: [
        "A. Change data to an instance variable and mark it volatile.",
        "B. Remove parallel() in the stream operation.",
        "C. Change forEach() to forEachOrdered() in the stream operation.",
        "D. Change parallel() to serial() in the stream operation.",
        "E. Wrap the lambda body with a synchronized block.",
        "F. The code snippet will always print 100 as is.",
      ],
      answer: ["B", "C", "E"],
      explanation:
        "The code may print 100 without any changes, but since the data class is not thread-safe, this behavior is not guaranteed. For this reason, option F is incorrect. Option A is also incorrect, as volatile does not guarantee thread-safety. Options B and C are correct, as they both cause the stream to apply the add() operation in a synchronized manner. Option D is incorrect, as serial() is not a stream method. Option E is correct. Synchronization will cause each thread to wait so that the List is modified one element at a time.",
    },
    {
      question:
        'What is the output of this code?\n\n20: Predicate<String> empty = String::isEmpty;\n21: Predicate<String> notEmpty = empty.negate();\n22:\n23: var result = Stream.generate(() -> "")\n24: \t.filter(notEmpty)\n25: \t.collect(Collectors.groupingBy(k -> k))\n26: \t.entrySet()\n27: \t.stream()\n28: \t.map(Entry::getValue)\n29: \t.flatMap(Collection::stream)\n30: \t.collect(Collectors.partitioningBy(notEmpty));\n31: System.out.println(result);',
      options: [
        "A. It outputs {}.",
        "B. It outputs {false=[], true=[]}.",
        "C. The code does not compile.",
        "D. The code does not terminate.",
      ],
      answer: ["D"],
      explanation:
        "First, this mess of code does compile. However, the source is an infinite stream. The filter operation will check each element in turn to see whether any are not empty. While nothing passes the filter, the code does not terminate. Therefore, option D is correct.",
    },
    {
      question:
        "What is the result of the following program?\n\n1: public class MathFunctions {\n2: \tpublic static void addToInt(int x, int amountToAdd) {\n3: \t\tx = x + amountToAdd;\n4: \t}\n5: \tpublic static void main(String[] args) {\n6: \t\tvar a = 15;\n7: \t\tvar b = 10;\n8: \t\tMathFunctions.addToInt(a, b);\n9: \t\tSystem.out.println(a); } }",
      options: [
        "A. 10",
        "B. 15",
        "C. 25",
        "D. Compiler error on line 3",
        "E. Compiler error on line 8",
        "F. None of the above",
      ],
      answer: ["B"],
      explanation:
        "The code compiles successfully, so options D and E are incorrect. The value of a cannot be changed by the addToInt() method, no matter what the method does, because only a copy of the variable is passed into the parameter x. Therefore, a does not change, and the output on line 9 is 15 which is option B.",
    },
    {
      question:
        'Suppose that we have the following property files and code. What values are printed on lines 8 and 9, respectively?\n\nPenguin.properties\nname=Billy\nage=1\nPenguin_de.properties\nname=Chilly\nage=4\nPenguin_en.properties\nname=Willy\n5: Locale fr = new Locale("fr");\n6: Locale.setDefault(new Locale("en", "US"));\n7: var b = ResourceBundle.getBundle("Penguin", fr);\n8: System.out.println(b.getString("name"));\n9: System.out.println(b.getString("age"));',
      options: [
        "A. Billy and 1",
        "B. Billy and null",
        "C. Willy and 1",
        "D. Willy and null",
        "E. Chilly and null",
        "F. The code does not compile.",
      ],
      answer: ["C"],
      explanation:
        "Java will use Penguin_en.properties as the matching resource bundle on line 7. Since there is no match for French, the default locale is used. Line 8 finds a matching key in the Penguin_en.properties file. Line 9 does not find a match in the Penguin_en.properties file; therefore, it has to look higher up in the hierarchy to Penguin.properties. This makes option C the answer.",
    },
    {
      question:
        'What is guaranteed to be printed by the following code? (Choose all that apply.)\n\nint[] array = {6,9,8};\nSystem.out.println("B" + Arrays.binarySearch(array,9));\nSystem.out.println("C" + Arrays.compare(array,\n\tnew int[] {6, 9, 8}));\nSystem.out.println("M" + Arrays.mismatch(array,\n\tnew int[] {6, 9, 8}));',
      options: [
        "A. B1",
        "B. B2",
        "C. C-1",
        "D. C0",
        "E. M-1",
        "F. M0",
        "G. The code does not compile.",
      ],
      answer: ["D", "E"],
      explanation:
        "The array is allowed to use an anonymous initializer because it is in the same line as the declaration. The results of the binary search are undefined since the array is not sorted. Since the question asks about guaranteed output, options A and B are incorrect. Option D is correct because the compare() method returns 0 when the arrays are the same length and have the same elements. Option E is correct because the mismatch() method returns a -1 when the arrays are equivalent.",
    },
    {
      question:
        "Which functional interfaces complete the following code, presuming variable r exists? (Choose all that apply.)\n\n6: ______ x = r.negate();\n7: ______ y = () -> System.out.println();\n8: ______ z = (a, b) -> a - b;",
      options: [
        "A. BinaryPredicate<Integer, Integer>",
        "B. Comparable<Integer>",
        "C. Comparator<Integer>",
        "D. Consumer<Integer>",
        "E. Predicate<Integer>",
        "F. Runnable",
        "G. Runnable<Integer>",
      ],
      answer: ["C", "E", "F"],
      explanation:
        "First, note that option A is incorrect because the interface should be BiPredicate and not BinaryPredicate. Line 6 requires you to know that negate() is a convenience method on Predicate. This makes option E correct. Line 7 takes zero parameters and doesn't return anything, making it a Runnable. Remember that Runnable doesn't use generics. This makes option F correct. Finally, line 8 takes two parameters and returns an int. Option C is correct. Comparable is there to mislead you since it takes only one parameter in its single abstract method.",
    },
    {
      question:
        "Suppose you have a module named com.vet. Where could you place the following module-info.java file to create a valid module?\n\npublic module com.vet {\n\texports com.vet;\n}",
      options: [
        "A. At the same level as the com folder",
        "B. At the same level as the vet folder",
        "C. Inside the vet folder",
        "D. None of the above",
      ],
      answer: ["D"],
      explanation:
        "If this were a valid module-info.java file, it would need to be placed at the root directory of the module, which is option A. However, a module is not allowed to use the public access modifier. Option D is correct because the provided file does not compile regardless of placement in the project.",
    },
    {
      question:
        'What is the output of the following program? (Choose all that apply.)\n\n1: interface HasTail { private int getTailLength(); }\n2: abstract class Puma implements HasTail {\n3: \tString getTailLength() { return "4"; }\n4: }\n5: public class Cougar implements HasTail {\n6: \tpublic static void main(String[] args) {\n7: \t\tvar puma = new Puma() {};\n8: \t\tSystem.out.println(puma.getTailLength());\n9: \t}\n10: \tpublic int getTailLength(int length) { return 2; }\n11: }',
      options: [
        "A. 2",
        "B. 4",
        "C. The code will not compile because of line 1.",
        "D. The code will not compile because of line 3.",
        "E. The code will not compile because of line 5.",
        "F. The code will not compile because of line 7.",
        "G. The code will not compile because of line 10.",
        "H. The output cannot be determined from the code provided.",
      ],
      answer: ["C"],
      explanation:
        "The getTailLength() method in the interface is private; therefore, it must include a body. For this reason, line 1 is the only line that does not compile and option C is correct. Line 3 uses a different return type for the method, but since it is private in the interface, it is not considered an override. Note that line 7 defines an anonymous class using the abstract Puma parent class.",
    },
    {
      question:
        "Which lines in Tadpole.java give a compiler error? (Choose all that apply.)\n\n// Frog.java\n1: package animal;\n2: public class Frog {\n3: \tprotected void ribbit() { }\n4: \tvoid jump() { }\n5: }\n// Tadpole.java\n1: package other;\n2: import animal.*;\n3: public class Tadpole extends Frog {\n4: \tpublic static void main(String[] args) {\n5: \t\tTadpole t = new Tadpole();\n6: \t\tt.ribbit();\n7: \t\tt.jump();\n8: \t\tFrog f = new Tadpole();\n9: \t\tf.ribbit();\n10: \t\tf.jump();\n11: \t} }",
      options: [
        "A. Line 5",
        "B. Line 6",
        "C. Line 7",
        "D. Line 8",
        "E. Line 9",
        "F. Line 10",
        "G. All of the lines compile.",
      ],
      answer: ["C", "E", "F"],
      explanation:
        "The jump() method has package access, which means it can be accessed only from the same package. Tadpole is not in the same package as Frog, causing lines 7 and 10 to trigger compiler errors and giving us options C and F. The ribbit() method has protected access, which means it can only be accessed from a subclass reference or in the same package. Line 6 is fine because Tadpole is a subclass. Line 9 does not compile and our final answer is option E because the variable reference is to a Frog, which doesn't grant access to the protected method.",
    },
    {
      question:
        "Which of the following statements can fill in the blank to make the code compile successfully? (Choose all that apply.)\n\nSet<? extends RuntimeException> mySet = new _________ ();",
      options: [
        "A. HashSet<? extends RuntimeException>",
        "B. HashSet<Exception>",
        "C. TreeSet<RuntimeException>",
        "D. TreeSet<NullPointerException>",
        "E. None of the above",
      ],
      answer: ["C", "D"],
      explanation:
        "The mySet declaration defines an upper bound of type RuntimeException. This means that classes may specify RuntimeException or any subclass of RuntimeException as the type parameter. Option B is incorrect because Exception is a superclass, not a subclass, of RuntimeException. Option A is incorrect because the wildcard cannot occur on the right side of the assignment. Options C and D compile and are the answers.",
    },
    {
      question:
        'Assume that birds.dat exists, is accessible, and contains data for a Bird object. What is the result of executing the following code? (Choose all that apply.)\n\n1: import java.io.*;\n2: public class Bird {\n3: \tprivate String name;\n4: \tprivate transient Integer age;\n5:\n6: \t// Getters/setters omitted\n7:\n8: \tpublic static void main(String[] args) {\n9: \t\ttry(var is = new ObjectInputStream(\n10: \t\t\tnew BufferedInputStream(\n11: \t\t\t\tnew FileInputStream("birds.dat")))) {\n12: \t\t\tBird b = is.readObject();\n13: \t\t\tSystem.out.println(b.age);\n14: \t\t} } }',
      options: [
        "A. It compiles and prints 0 at runtime.",
        "B. It compiles and prints null at runtime.",
        "C. It compiles and prints a number at runtime.",
        "D. The code will not compile because of lines 9–11.",
        "E. The code will not compile because of line 12.",
        "F. It compiles but throws an exception at runtime.",
      ],
      answer: ["D", "E"],
      explanation:
        "Line 10 includes an unhandled checked IOException, while line 11 includes an unhandled checked FileNotFoundException, making option D correct. Line 12 does not compile because is.readObject() must be cast to a Bird object to be assigned to b. It also does not compile because it includes two unhandled checked exceptions, IOException and ClassNotFoundException, making option E correct. If a cast operation were added on line 12 and the main() method were updated on line 8 to declare the various checked exceptions, the code would compile but throw an exception at runtime since Bird does not implement Serializable. Finally, if the class did implement Serializable, the program would print null at runtime, as that is the default value for the transient field age.",
    },
    {
      question:
        "Which of the following are valid instance members of a class? (Choose all that apply.)",
      options: [
        "A. var var = 3;",
        "B. Var case = new Var();",
        "C. void var() {}",
        "D. int Var() { var _ = 7; return _;}",
        'E. String new = "var";',
        "F. var var() { return null; }",
      ],
      answer: ["C"],
      explanation:
        "Option A is incorrect because var is only allowed as a type for local variables, not instance members. Options B and E are incorrect because new and case are reserved words and cannot be used as identifiers. Option C is correct, as var can be used as a method name. Option D is incorrect because a single underscore (_) cannot be used as an identifier. Finally, option F is incorrect because var cannot be specified as the return type of a method.",
    },
    {
      question:
        'Which is true if the table is empty before this code is run? (Choose all that apply.)\n\nvar sql = "INSERT INTO people VALUES(?, ?, ?)";\nconn.setAutoCommit(false);\ntry (var ps = conn.prepareStatement(sql,\n\tResultSet.TYPE_SCROLL_SENSITIVE,\n\tResultSet.CONCUR_UPDATABLE)) {\n\tps.setInt(1, 1);\n\tps.setString(2, "Joslyn");\n\tps.setString(3, "NY");\n\tps.executeUpdate();\n\tSavepoint sp = conn.setSavepoint();\n\tps.setInt(1, 2);\n\tps.setString(2, "Kara");\n\tps.executeUpdate();\n\tconn._________________;\n}',
      options: [
        "A. If the blank line contains rollback(), there are no rows in the table.",
        "B. If the blank line contains rollback(), there is one row in the table.",
        "C. If the blank line contains rollback(sp), there are no rows in the table.",
        "D. If the blank line contains rollback(sp), there is one row in the table.",
        "E. The code does not compile.",
        "F. The code throws an exception because the second update does not set all the parameters.",
      ],
      answer: ["A", "D"],
      explanation:
        "This code is correct, eliminating options E and F. JDBC will use the existing parameter set if you don't replace it. This means Kara's row will be set to use NY as the third parameter. Rolling back to a savepoint throws out any changes made since. This leaves Joslyn and eliminates Kara, making option D correct. Rolling back without a savepoint brings us back to the beginning of the transaction, which is option A.",
    },
    {
      question:
        "Which is true if the contents of path1 start with the text Howdy? (Choose two.)",
      options: [
        "A. If path2 doesn't exist, the code prints -1.",
        "B. If path2 doesn't exist, the code prints 0.",
        "C. If path2 doesn't exist, the code throws an exception.",
        "D. If the contents of path2 start with Hello, the code prints -1.",
        "E. If the contents of path2 start with Hello, the code prints 0.",
        "F. If the contents of path2 start with Hello, the code prints 1.",
      ],
      answer: ["C", "F"],
      explanation:
        "Option C is correct as mismatch() throws an exception if the files do not exist unless they both refer to the same file. Additionally, option F is correct because the first index that differs is returned, which is the second character. Since Java uses zero-based indexes, this is 1.",
    },
    {
      question:
        "Which of the following types can be inserted into the blank to allow the program to compile successfully? (Choose all that apply.)\n\n1: import java.util.*;\n2: final class Amphibian {}\n3: abstract class Tadpole extends Amphibian {}\n4: public class FindAllTadpoles {\n5: \tpublic static void main(String... args) {\n6: \t\tvar tadpoles = new ArrayList<Tadpole>();\n7: \t\tfor (var amphibian : tadpoles) {\n8: \t\t\t___________ tadpole = amphibian;\n9: \t\t} } }",
      options: [
        "A. List<Tadpole>",
        "B. Boolean",
        "C. Amphibian",
        "D. Tadpole",
        "E. Object",
        "F. None of the above",
      ],
      answer: ["F"],
      explanation:
        "The Amphibian class is marked final, which means line 3 triggers a compiler error and option F is correct.",
    },
    {
      question:
        "What is the result of compiling and executing the following program?\n\n1: public class FeedingSchedule {\n2: \tpublic static void main(String[] args) {\n3: \t\tvar x = 5;\n4: \t\tvar j = 0;\n5: \t\tOUTER: for (var i = 0; i < 3;)\n6: \t\tINNER: do {\n7: \t\t\ti++;\n8: \t\t\tx++;\n9: \t\t\tif (x> 10) break INNER;\n10: \t\t\tx += 4;\n11: \t\t\tj++;\n12: \t\t} while (j <= 2);\n13: \t\tSystem.out.println(x);\n14: \t} }",
      options: [
        "A. 10",
        "B. 11",
        "C. 12",
        "D. 17",
        "E. The code will not compile because of line 5.",
        "F. The code will not compile because of line 6.",
      ],
      answer: ["C"],
      explanation:
        "The code compiles and runs without issue; therefore, options E and F are incorrect. This type of problem is best examined one loop iteration at a time: On the first iteration of the outer loop, i is 0, so the loop continues. On the first iteration of the inner loop, i is updated to 1 and x to 6. The if statement branch is not executed, and x is increased to 10 and j to 1. On the second iteration of the inner loop (since j = 1 and 1 <= 2), i is updated to 2 and x to 11. At this point, the if branch will evaluate to true for the remainder of the program run, which causes the flow to break out of the inner loop each time it is reached. On the second iteration of the outer loop (since i = 2), i is updated to 3 and x to 12. As before, the inner loop is broken since x is still greater than 10. On the third iteration of the outer loop, the outer loop is broken, as i is already not less than 3. The most recent value of x, 12, is output, so the answer is option C.",
    },
    {
      question:
        'When printed, which String gives the same value as this text block?\n\nvar pooh = """\n"Oh, bother." -Pooh\n""".indent(1);\nSystem.out.print(pooh);',
      options: [
        'A. "\\n\\"Oh, bother.\\" -Pooh\\n"',
        'B. "\\n \\"Oh, bother.\\" -Pooh\\n"',
        'C. " \\"Oh, bother.\\" -Pooh\\n"',
        'D. "\\n\\"Oh, bother.\\" -Pooh"',
        'E. "\\n \\"Oh, bother.\\" -Pooh"',
        'F. " \\"Oh, bother.\\" -Pooh"',
        "G. None of the above",
      ],
      answer: ["C"],
      explanation:
        'First, note that the text block has the closing """ on a separate line, which means there is a new line at the end and rules out options D, E, and F. Additionally, text blocks don\'t start with a new line, ruling out options A and B. Therefore, option C is correct.',
    },
    {
      question:
        "A(n) _________________ module always contains a module-info.java file, while a(n) _________________ module always exports all its packages to other modules.",
      options: [
        "A. automatic, named",
        "B. automatic, unnamed",
        "C. named, automatic",
        "D. named, unnamed",
        "E. unnamed, automatic",
        "F. unnamed, named",
        "G. None of the above",
      ],
      answer: ["C"],
      explanation:
        "Only named modules are required to have a module-info.java file, ruling out options A, B, E, and F. Unnamed modules are not readable by any other types of modules, ruling out option D. Automatic modules always export all packages to other modules, making the answer option C.",
    },
    {
      question:
        "What is the result of the following code?\n\n22: var treeMap = new TreeMap<Character, Integer>();\n23: treeMap.put('k', 1);\n24: treeMap.put('k', 2);\n25: treeMap.put('m', 3);\n26: treeMap.put('M', 4);\n27: treeMap.replaceAll((k, v) -> v + v);\n28: treeMap.keySet()\n29: \t.forEach(k -> System.out.print(treeMap.get(k)));",
      options: [
        "A. 268",
        "B. 468",
        "C. 2468",
        "D. 826",
        "E. 846",
        "F. 8246",
        "G. None of the above",
      ],
      answer: ["E"],
      explanation:
        "When the same key is put into a Map, it overrides the original value. This means that line 23 could be omitted and the code would be the same, and there are only three key/value pairs in the map. TreeMap sorts its keys, making the order M followed by k followed by m. Remember that natural sort ordering has uppercase before lowercase. The replaceAll() method runs against each element in the map, doubling the value. Finally, we iterate through each key, printing 846 and making option E correct.",
    },
    {
      question:
        "Which of the following lines can fill in the blank to print true? (Choose all that apply.)\n\n10: public static void main(String[] args) {\n11: \tSystem.out.println(test(____________________________));\n12: }\n13: private static boolean test(Function<Integer, Boolean> b) {\n14: \treturn b.apply(5);\n15: }",
      options: [
        "A. i::equals(5)",
        "B. i -> {i == 5;}",
        "C. (i) -> i == 5",
        "D. (int i) -> i == 5",
        "E. (int i) -> {return i == 5;}",
        "F. (i) -> {return i == 5;}",
      ],
      answer: ["C", "F"],
      explanation:
        "Option A looks like a method reference. However, it doesn't call a valid method, nor can method references take parameters. The Predicate interface takes a single parameter and returns a boolean. Lambda expressions with one parameter are allowed to omit the parentheses around the parameter list, making option C correct. The return statement is optional when a single statement is in the body, making option F correct. Option B is incorrect because a return statement must be used if braces are included around the body. Options D and E are incorrect because the type is Integer in the predicate and int in the lambda. Autoboxing works for collections, not inferring predicates. If these two were changed to Integer, they would be correct.",
    },
    {
      question:
        'How many times is the word true printed?\n\nvar s1 = "Java";\nvar s2 = "Java";\nvar s3 = s1.indent(1).strip();\nvar s4 = s3.intern();\nvar sb1 = new StringBuilder();\nsb1.append("Ja").append("va");\nSystem.out.println(s1 == s2);\nSystem.out.println(s1.equals(s2));\nSystem.out.println(s1 == s3);\nSystem.out.println(s1 == s4);\nSystem.out.println(sb1.toString() == s1);\nSystem.out.println(sb1.toString().equals(s1));',
      options: [
        "A. Once",
        "B. Twice",
        "C. Three times",
        "D. Four times",
        "E. Five times",
        "F. The code does not compile.",
      ],
      answer: ["D"],
      explanation:
        "String literals are used from the string pool. This means that s1 and s2 refer to the same object and are equal. Therefore, the first two print statements print true. While the indent() and strip() methods create new String objects and the third statement prints false, the intern() method reverts the String to the one from the string pool. Therefore, the fourth print statement prints true. The fifth print statement prints false because toString() uses a method to compute the value, and it is not from the string pool. The final print statement again prints true because equals() looks at the values of String objects. Since four are true, option D is the answer.",
    },
    {
      question:
        'What is the output of the following program?\n\n1: class Deer {\n2: \tpublic Deer() {System.out.print("Deer");}\n3: \tpublic Deer(int age) {System.out.print("DeerAge");}\n4: \tprotected boolean hasHorns() { return false; }\n5: }\n6: public class Reindeer extends Deer {\n7: \tpublic Reindeer(int age) {System.out.print("Reindeer");}\n8: \tpublic boolean hasHorns() { return true; }\n9: \tpublic static void main(String[] args) {\n10: \t\tDeer deer = new Reindeer(5);\n11: \t\tSystem.out.println("," + deer.hasHorns());\n12: \t} }',
      options: [
        "A. ReindeerDeer,false",
        "B. DeerAgeReindeer,true",
        "C. DeerReindeer,true",
        "D. DeerReindeer,false",
        "E. ReindeerDeer,true",
        "F. DeerAgeReindeer,false",
        "G. The code will not compile because of line 4.",
        "H. The code will not compile because of line 12.",
      ],
      answer: ["C"],
      explanation:
        "The Reindeer object is instantiated using the constructor that takes an int value. Since there is no explicit call to the parent constructor, the compiler inserts super() as the first line of the constructor on line 7. The parent constructor is called, and Deer is printed on line 2. The flow returns to the constructor on line 7, with Reindeer being printed. Next, the hasHorns() method is called. The reference type is Deer, and the underlying object type is Reindeer. Since Reindeer correctly overrides the hasHorns() method, the version in Reindeer is called, with line 11 printing ,true. Therefore, option C is correct.",
    },
    {
      question:
        "Which of the following are true? (Choose all that apply.)\n\nprivate static void magic(Stream<Integer> s) {\n\tOptional o = s\n\t\t.filter(x -> x < 5)\n\t\t.limit(3)\n\t\t.max((x, y) -> x-y);\n\tSystem.out.println(o.get());\n}",
      options: [
        "A. magic(Stream.empty()); runs infinitely.",
        "B. magic(Stream.empty()); throws an exception.",
        "C. magic(Stream.iterate(1, x -> x++)); runs infinitely.",
        "D. magic(Stream.iterate(1, x -> x++)); throws an exception.",
        "E. magic(Stream.of(5, 10)); runs infinitely.",
        "F. magic(Stream.of(5, 10)); throws an exception.",
        "G. The method does not compile.",
      ],
      answer: ["B", "F"],
      explanation:
        "Calling get() on an empty Optional causes an exception to be thrown, making option B correct. Option F is also correct because filter() makes the Optional empty before it calls get(). Option C is incorrect because the infinite stream is made finite by the intermediate limit() operation. Options A and E are incorrect because the source streams are not infinite. Therefore, the call to max() sees only three elements and terminates.",
    },
    {
      question:
        'Assuming the following declarations are top-level types declared in the same file, which successfully compile? (Choose all that apply.)\n\nrecord Music() {\n\tfinal int score = 10;\n}\nrecord Song(String lyrics) {\n\tSong {\n\t\tthis.lyrics = lyrics + "Hello World";\n\t}\n}\nsealed class Dance {}\nrecord March() {\n\t@Override String toString() { return null; }\n}\nclass Ballet extends Dance {}',
      options: [
        "A. Music",
        "B. Song",
        "C. Dance",
        "D. March",
        "E. Ballet",
        "F. None of them compile.",
      ],
      answer: ["C"],
      explanation:
        "Music does not compile because records cannot include instance variables not listed in the declaration of the record, as it could break immutability. Song does not compile because a compact constructor cannot set an instance variable. The record would compile if this were removed from the compact constructor, as compact constructors can modify input parameters. March does not compile because it is an invalid override; it reduces the visibility of the toString() method from public to package access. Ballet does not compile because the subclass of a sealed class must be marked final, sealed, or non-sealed. Since the only one that compiles is Dance, option C is the answer.",
    },
    {
      question:
        "Which of the following expressions compile without error? (Choose all that apply.)",
      options: [
        "A. int monday = 3 + 2.0;",
        "B. double tuesday = 5_6L;",
        "C. boolean wednesday = 1 > 2 ? !true;",
        "D. short thursday = (short)Integer.MAX_VALUE;",
        "E. long friday = 8.0L;",
        "F. var saturday = 2_.0;",
        "G. None of the above",
      ],
      answer: ["B", "D"],
      explanation:
        "Option A does not compile, as the expression 3 + 2.0 is evaluated as a double, and a double requires an explicit cast to be assigned to an int. Option B compiles without issue, as a long value can be implicitly cast to a double. Option C does not compile because the ternary operator (? :) is missing a colon (:), followed by a second expression. Option D is correct. Even though the int value is larger than a short, it is explicitly cast to a short, which means the value will wrap around to fit in a short. Option E is incorrect, as you cannot use a decimal (.) with the long (L) postfix. Finally, option F is incorrect, as an underscore cannot be used next to a decimal point.",
    },
    {
      question:
        'What is the result of compiling and executing the following application?\n\nfinal var cb = new CyclicBarrier(3,\n\t() -> System.out.println("Clean!")); // u1\nExecutorService service =\n\tExecutors.newSingleThreadExecutor();\ntry {\n\tIntStream.generate(() -> 1)\n\t\t.limit(12)\n\t\t.parallel()\n\t\t.forEach(i -> service.submit(() -> cb.await())); // u2\n} finally { service.shutdown(); }',
      options: [
        "A. It outputs Clean! at least once.",
        "B. It outputs Clean! exactly four times.",
        "C. The code will not compile because of line u1.",
        "D. The code will not compile because of line u2.",
        "E. It compiles but throws an exception at runtime.",
        "F. It compiles but waits forever at runtime.",
      ],
      answer: ["F"],
      explanation:
        "The code compiles without issue. The key to understanding this code is to notice that our thread executor contains only one thread, but our CyclicBarrier limit is 3. Even though 12 tasks are all successfully submitted to the service, the first task will block forever on the call to await(). Since the barrier is never reached, nothing is printed, and the program hangs, making option F correct.",
    },
    {
      question:
        'Which statement about the following method is true?\n\n5: public static void main(String... unused) {\n6: \tSystem.out.print("a");\n7: \ttry (StringBuilder reader = new StringBuilder()) {\n8: \t\tSystem.out.print("b");\n9: \t\tthrow new IllegalArgumentException();\n10: \t} catch (Exception e || RuntimeException e) {\n11: \t\tSystem.out.print("c");\n12: \t\tthrow new FileNotFoundException();\n13: \t} finally {\n14: \t\tSystem.out.print("d");\n15: \t} }',
      options: [
        "A. It compiles and prints abc.",
        "B. It compiles and prints abd.",
        "C. It compiles and prints abcd.",
        "D. One line contains a compiler error.",
        "E. Two lines contain a compiler error.",
        "F. Three lines contain a compiler error.",
        "G. It compiles but prints an exception at runtime.",
      ],
      answer: ["F"],
      explanation:
        "Line 5 does not compile as the FileNotFoundException thrown on line 12 is not handled or declared by the method. Line 7 does not compile because StringBuilder does not implement AutoCloseable and is therefore not compatible with a try-with-resource statement. Finally, line 10 does not compile as RuntimeException is a subclass of Exception in the multi-catch block, making it redundant. Since this method contains three compiler errors, option F is the correct answer.",
    },
  ],
};
