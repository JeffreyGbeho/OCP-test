export const chapter5 = {
  title: "Chapter 5: Methods",
  questions: [
    {
      question:
        "Which statements about the final modifier are correct? (Choose all that apply.)",
      options: [
        "A. Instance and static variables can be marked final.",
        "B. A variable is effectively final only if it is marked final.",
        "C. An object that is marked final cannot be modified.",
        "D. Local variables cannot be declared with type var and the final modifier.",
        "E. A primitive that is marked final cannot be modified.",
      ],
      answer: ["A", "E"],
      explanation:
        "Instance and static variables can be marked final, making option A correct. Effectively final means a local variable is not marked final but whose value does not change after it is set, making option B incorrect. Option C is incorrect, as final refers only to the reference to an object, not its contents. Option D is incorrect, as var and final can be used together. Finally, option E is correct: once a primitive is marked final, it cannot be modified.",
    },
    {
      question:
        "Which of the following can fill in the blank in this code to make it compile? (Choose all that apply.)\n\npublic class Ant {\n\t_______ void method() {}\n}",
      options: [
        "A. default",
        "B. final",
        "C. private",
        "D. Public",
        "E. String",
        "F. zzz:",
      ],
      answer: ["B", "C"],
      explanation:
        "The keyword void is a return type. Only the access modifier or optional specifiers are allowed before the return type. Option C is correct, creating a method with private access. Option B is also correct, creating a method with package access and the optional specifier final. Since package access does not use a modifier, we get to jump right to final. Option A is incorrect because package access omits the access modifier rather than specifying default. Option D is incorrect because Java is case sensitive. It would have been correct if public were the choice. Option E is incorrect because the method already has a void return type. Option F is incorrect because labels are not allowed for methods.",
    },
    {
      question:
        "Which of the following methods compile? (Choose all that apply.)",
      options: [
        "A. final static void rain() {}",
        "B. public final int void snow() {}",
        "C. private void int hail() {}",
        "D. static final void sleet() {}",
        "E. void final ice() {}",
        "F. void public slush() {}",
      ],
      answer: ["A", "D"],
      explanation:
        "Options A and D are correct because the optional specifiers are allowed in any order. Options B and C are incorrect because they each have two return types. Options E and F are incorrect because the return type is before the optional specifier and access modifier, respectively.",
    },
    {
      question:
        "Which of the following can fill in the blank and allow the code to compile? (Choose all that apply.)\n\nfinal _______ song = 6;",
      options: [
        "A. int",
        "B. Integer",
        "C. long",
        "D. Long",
        "E. double",
        "F. Double",
      ],
      answer: ["A", "B", "C", "E"],
      explanation:
        "The value 6 can be implicitly promoted to any of the primitive types, making options A, C, and E correct. It can also be autoboxed to Integer, making option B correct. It cannot be both promoted and autoboxed, making options D and F incorrect.",
    },
    {
      question:
        "Which of the following methods compile? (Choose all that apply.)",
      options: [
        "A. public void january() { return; }",
        "B. public int february() { return null;}",
        "C. public void march() {}",
        "D. public int april() { return 9;}",
        "E. public int may() { return 9.0;}",
        "F. public int june() { return;}",
      ],
      answer: ["A", "C", "D"],
      explanation:
        "Options A and C are correct because a void method is optionally allowed to have a return statement as long as it doesn't try to return a value. Option B does not compile because null requires a reference object as the return type. Since int is primitive, it is not a reference object. Option D is correct because it returns an int value. Option E does not compile because it tries to return a double when the return type is int. Since a double cannot be assigned to an int, it cannot be returned as one either. Option F does not compile because no value is actually returned.",
    },
    {
      question:
        "Which of the following methods compile? (Choose all that apply.)",
      options: [
        "A. public void violin(int... nums) {}",
        "B. public void viola(String values, int... nums) {}",
        "C. public void cello(int... nums, String values) {}",
        "D. public void bass(String... values, int... nums) {}",
        "E. public void flute(String[] values, ...int nums) {}",
        "F. public void oboe(String[] values, int[] nums) {}",
      ],
      answer: ["A", "B", "F"],
      explanation:
        "Options A and B are correct because the single varargs parameter is the last parameter declared. Option F is correct because it doesn't use any varargs parameters. Option C is incorrect because the varargs parameter is not last. Option D is incorrect because two varargs parameters are not allowed in the same method. Option E is incorrect because the ... for a varargs must be after the type, not before it.",
    },
    {
      question:
        "Given the following method, which of the method calls return 2? (Choose all that apply.)\n\npublic int juggle(boolean b, boolean... b2) {\n\treturn b2.length;\n}",
      options: [
        "A. juggle();",
        "B. juggle(true);",
        "C. juggle(true, true);",
        "D. juggle(true, true, true);",
        "E. juggle(true, {true, true});",
        "F. juggle(true, new boolean[2]);",
      ],
      answer: ["D", "F"],
      explanation:
        "Option D passes the initial parameter plus two more to turn into a varargs array of size 2. Option F passes the initial parameter plus an array of size 2. Option A does not compile because it does not pass the initial parameter. Option E does not compile because it does not declare an array properly. It should be new boolean[] {true, true}. Option B creates a varargs array of size 0, and option C creates a varargs array of size 1.",
    },
    {
      question: "Which of the following statements is correct?",
      options: [
        "A. Package access is more lenient than protected access.",
        "B. A public class that has private fields and package methods is not visible to classes outside the package.",
        "C. You can use access modifiers so only some of the classes in a package see a particular package class.",
        "D. You can use access modifiers to allow access to all methods and not any instance variables.",
        "E. You can use access modifiers to restrict access to all classes that begin with the word Test.",
      ],
      answer: ["D"],
      explanation:
        "Option D is correct. A common practice is to set all fields to be private and all methods to be public. Option A is incorrect because protected access allows everything that package access allows and additionally allows subclasses access. Option B is incorrect because the class is public. This means that other classes can see the class. However, they cannot call any of the methods or read any of the fields. It is essentially a useless class. Option C is incorrect because package access applies to the whole package. Option E is incorrect because Java has no such wildcard access capability.",
    },
    {
      question:
        'Given the following class definitions, which lines in the main() method generate a compiler error? (Choose all that apply.)\n\n// Classroom.java\npackage my.school;\npublic class Classroom {\n\tprivate int roomNumber;\n\tprotected static String teacherName;\n\tstatic int globalKey = 54321;\n\tpublic static int floor = 3;\n\tClassroom(int r, String t) {\n\t\troomNumber = r;\n\t\tteacherName = t; } }\n\n// School.java\n1: package my.city;\n2: import my.school.*;\n3: public class School {\n4: \tpublic static void main(String[] args) {\n5: \t\tSystem.out.println(Classroom.globalKey);\n6: \t\tClassroom room = new Classroom(101, "Mrs. Anderson");\n7: \t\tSystem.out.println(room.roomNumber);\n8: \t\tSystem.out.println(Classroom.floor);\n9: \t\tSystem.out.println(Classroom.teacherName); } }',
      options: [
        "A. None: the code compiles fine.",
        "B. Line 5",
        "C. Line 6",
        "D. Line 7",
        "E. Line 8",
        "F. Line 9",
      ],
      answer: ["B", "C", "D", "F"],
      explanation:
        "The two classes are in different packages, which means private access and package access will not compile. This causes compiler errors on lines 5, 6, and 7, making options B, C, and D correct answers. Additionally, protected access will not compile since School does not inherit from Classroom. This causes the compiler error on line 9, making option F a correct answer as well.",
    },
    {
      question:
        'What is the output of executing the Chimp program?\n\n// Rope.java\n1: package rope;\n2: public class Rope {\n3: \tpublic static int LENGTH = 5;\n4: \tstatic {\n5: \t\tLENGTH = 10;\n6: \t}\n7: \tpublic static void swing() {\n8: \t\tSystem.out.print("swing ");\n9: \t} }\n\n// Chimp.java\n1: import rope.*;\n2: import static rope.Rope.*;\n3: public class Chimp {\n4: \tpublic static void main(String[] args) {\n5: \t\tRope.swing();\n6: \t\tnew Rope().swing();\n7: \t\tSystem.out.println(LENGTH);\n8: \t} }',
      options: [
        "A. swing swing 5",
        "B. swing swing 10",
        "C. Compiler error on line 2 of Chimp",
        "D. Compiler error on line 5 of Chimp",
        "E. Compiler error on line 6 of Chimp",
        "F. Compiler error on line 7 of Chimp",
      ],
      answer: ["B"],
      explanation:
        "Rope runs line 3, setting LENGTH to 5, and then immediately after that runs the static initializer, which sets it to 10. Line 5 in the Chimp class calls the static method normally and prints swing and a space. Line 6 also calls the static method. Java allows calling a static method through an instance variable, although it is not recommended. Line 7 uses the static import on line 2 to reference LENGTH. For these reasons, option B is correct.",
    },
    {
      question:
        'Which statements are true of the following code? (Choose all that apply.)\n\n1: public class Rope {\n2: \tpublic static void swing() {\n3: \t\tSystem.out.print("swing");\n4: \t}\n5: \tpublic void climb() {\n6: \t\tSystem.out.println("climb");\n7: \t}\n8: \tpublic static void play() {\n9: \t\tswing();\n10: \t\tclimb();\n11: \t}\n12: \tpublic static void main(String[] args) {\n13: \t\tRope rope = new Rope();\n14: \t\trope.play();\n15: \t\tRope rope2 = null;\n16: \t\tSystem.out.print("-");\n17: \t\trope2.play();\n18: \t} }',
      options: [
        "A. The code compiles as is.",
        "B. There is exactly one compiler error in the code.",
        "C. There are exactly two compiler errors in the code.",
        "D. If the line(s) with compiler errors are removed, the output is swing-climb.",
        "E. If the line(s) with compiler errors are removed, the output is swing-swing.",
        "F. If the line(s) with compile errors are removed, the code throws a NullPointerException.",
      ],
      answer: ["B", "E"],
      explanation:
        "Line 10 does not compile because static methods are not allowed to call instance methods. Even though we are calling play() as if it were an instance method and an instance exists, Java knows play() is really a static method and treats it as such. Since this is the only line that does not compile, option B is correct. If line 10 is removed, the code prints swing-swing, making option E correct. It does not throw a NullPointerException on line 17 because play() is a static method. Java looks at the type of the reference for rope2 and translates the call to Rope.play().",
    },
    {
      question:
        'How many variables in the following method are effectively final?\n\n10: public void feed() {\n11: \tint monkey = 0;\n12: \tif(monkey > 0) {\n13: \t\tvar giraffe = monkey++;\n14: \t\tString name;\n15: \t\tname = "geoffrey";\n16: \t}\n17: \tString name = "milly";\n18: \tvar food = 10;\n19: \twhile(monkey <= 10) {\n20: \t\tfood = 0;\n21: \t}\n22: \tname = null;\n23: }',
      options: [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 4",
        "E. 5",
        "F. None of the above. The code does not compile.",
      ],
      answer: ["B"],
      explanation:
        "The test for effectively final is if the final modifier can be added to the local variable and the code still compiles. The monkey variable declared on line 11 is not effectively final because it is modified on line 13. The giraffe and name variables declared on lines 13 and 14, respectively, are effectively final and not modified after they are set. The name variable declared on line 17 is not effectively final since it is modified on line 22. Finally, the food variable on line 18 is not effectively final since it is modified on line 20. Since there are two effectively final variables, option B is correct.",
    },
    {
      question:
        "What is the output of the following code?\n\n// RopeSwing.java\nimport rope.*;\nimport static rope.Rope.*;\npublic class RopeSwing {\n\tprivate static Rope rope1 = new Rope();\n\tprivate static Rope rope2 = new Rope();\n\t{\n\t\tSystem.out.println(rope1.length);\n\t}\n\tpublic static void main(String[] args) {\n\t\trope1.length = 2;\n\t\trope2.length = 8;\n\t\tSystem.out.println(rope1.length);\n\t}\n}\n\n// Rope.java\npackage rope;\npublic class Rope {\n\tpublic static int length = 0;\n}",
      options: [
        "A. 02",
        "B. 08",
        "C. 2",
        "D. 8",
        "E. The code does not compile.",
        "F. An exception is thrown.",
      ],
      answer: ["C"],
      explanation:
        "There are two details to notice in this code. First, note that RopeSwing has an instance initializer and not a static initializer. Since RopeSwing is never constructed, the instance initializer does not run. The other detail is that length is static. Changes from any object update this common static variable. The code prints 2, making option C correct.",
    },
    {
      question:
        'How many lines in the following code have compiler errors?\n\n1: public class RopeSwing {\n2: \tprivate static final String leftRope;\n3: \tprivate static final String rightRope;\n4: \tprivate static final String bench;\n5: \tprivate static final String name = "name";\n6: \tstatic {\n7: \t\tleftRope = "left";\n8: \t\trightRope = "right";\n9: \t}\n10: \tstatic {\n11: \t\tname = "name";\n12: \t\trightRope = "right";\n13: \t}\n14: \tpublic static void main(String[] args) {\n15: \t\tbench = "bench";\n16: \t}\n17: }',
      options: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4", "F. 5"],
      answer: ["E"],
      explanation:
        "If a variable is static final, it must be set exactly once, and it must be in the declaration line or in a static initialization block. Line 4 doesn't compile because bench is not set in either of these locations. Line 15 doesn't compile because final variables are not allowed to be set after that point. Line 11 doesn't compile because name is set twice: once in the declaration and again in the static block. Line 12 doesn't compile because rightRope is set twice as well. Both are in static initialization blocks. Since four lines do not compile, option E is correct.",
    },
    {
      question:
        "Which of the following can replace line 2 to make this code compile? (Choose all that apply.)\n\n1: import java.util.*;\n2: // INSERT CODE HERE\n3: public class Imports {\n4: \tpublic void method(ArrayList<String> list) {\n5: \t\tsort(list);\n6: \t}\n7: }",
      options: [
        "A. import static java.util.Collections;",
        "B. import static java.util.Collections.*;",
        "C. import static java.util.Collections.sort(ArrayList<String>);",
        "D. static import java.util.Collections;",
        "E. static import java.util.Collections.*;",
        "F. static import java.util.Collections.sort(ArrayList<String>);",
      ],
      answer: ["B"],
      explanation:
        "The two valid ways to do this are import static java.util.Collections.*; and import static java.util.Collections.sort;. Option A is incorrect because you can do a static import only on static members. Classes such as Collections require a regular import. Option C is nonsense as method parameters have no business in an import. Options D, E, and F try to trick you into reversing the syntax of import static.",
    },
    {
      question:
        'What is the result of the following statements?\n\n1: public class Test {\n2: \tpublic void print(byte x) {\n3: \t\tSystem.out.print("byte-");\n4: \t}\n5: \tpublic void print(int x) {\n6: \t\tSystem.out.print("int-");\n7: \t}\n8: \tpublic void print(float x) {\n9: \t\tSystem.out.print("float-");\n10: \t}\n11: \tpublic void print(Object x) {\n12: \t\tSystem.out.print("Object-");\n13: \t}\n14: \tpublic static void main(String[] args) {\n15: \t\tTest t = new Test();\n16: \t\tshort s = 123;\n17: \t\tt.print(s);\n18: \t\tt.print(true);\n19: \t\tt.print(6.789);\n20: \t}\n21: }',
      options: [
        "A. byte-float-Object-",
        "B. int-float-Object-",
        "C. byte-Object-float-",
        "D. int-Object-float-",
        "E. int-Object-Object-",
        "F. byte-Object-Object-",
      ],
      answer: ["E"],
      explanation:
        "The argument on line 17 is a short. It can be promoted to an int, so print() on line 5 is invoked. The argument on line 18 is a boolean. It can be autoboxed to a Boolean, so print() on line 11 is invoked. The argument on line 19 is a double. It can be autoboxed to a Double, so print() on line 11 is invoked. Therefore, the output is int-Object-Object-, and the correct answer is option E.",
    },
    {
      question:
        "What is the result of the following program?\n\n1: public class Squares {\n2: \tpublic static long square(int x) {\n3: \t\tvar y = x * (long) x;\n4: \t\tx = -1;\n5: \t\treturn y;\n6: \t}\n7: \tpublic static void main(String[] args) {\n8: \t\tvar value = 9;\n9: \t\tvar result = square(value);\n10: \t\tSystem.out.println(value);\n11: \t} }",
      options: [
        "A. -1",
        "B. 9",
        "C. 81",
        "D. Compiler error on line 9",
        "E. Compiler error on a different line",
      ],
      answer: ["B"],
      explanation:
        "Since Java is pass-by-value and the variable on line 8 never gets reassigned, it stays as 9. In the method square, x starts as 9. The y value becomes 81, and then x gets set to –1. Line 9 does set result to 81. However, we are printing out value, and that is still 9, making option B correct.",
    },
    {
      question:
        'Which of the following are output by the following code? (Choose all that apply.)\n\npublic class StringBuilders {\n\tpublic static StringBuilder work(StringBuilder a, StringBuilder b) {\n\t\ta = new StringBuilder("a");\n\t\tb.append("b");\n\t\treturn a;\n\t}\n\tpublic static void main(String[] args) {\n\t\tvar s1 = new StringBuilder("s1");\n\t\tvar s2 = new StringBuilder("s2");\n\t\tvar s3 = work(s1, s2);\n\t\tSystem.out.println("s1 = " + s1);\n\t\tSystem.out.println("s2 = " + s2);\n\t\tSystem.out.println("s3 = " + s3);\n\t}\n}',
      options: [
        "A. s1 = a",
        "B. s1 = s1",
        "C. s2 = s2",
        "D. s2 = s2b",
        "E. s3 = a",
        "F. The code does not compile.",
      ],
      answer: ["B", "D", "E"],
      explanation:
        "Since Java is pass-by-value, assigning a new object to a does not change the caller. Calling append() does affect the caller because both the method parameter and the caller have a reference to the same object. Finally, returning a value does pass the reference to the caller for assignment to s3. For these reasons, options B, D, and E are correct.",
    },
    {
      question:
        'Which of the following will compile when independently inserted in the following code? (Choose all that apply.)\n\n1: public class Order3 {\n2: \tfinal String value1 = "red";\n3: \tstatic String value2 = "blue";\n4: \tString value3 = "yellow";\n5: \t{\n6: \t\t// CODE SNIPPET 1\n7: \t}\n8: \tstatic {\n9: \t\t// CODE SNIPPET 2\n10: \t} }',
      options: [
        'A. Insert at line 6: value1 = "green";',
        'B. Insert at line 6: value2 = "purple";',
        'C. Insert at line 6: value3 = "orange";',
        'D. Insert at line 9: value1 = "magenta";',
        'E. Insert at line 9: value2 = "cyan";',
        'F. Insert at line 9: value3 = "turquoise";',
      ],
      answer: ["B", "C", "E"],
      explanation:
        "The variable value1 is a final instance variable. It can be set only once: in the variable declaration, an instance initializer, or a constructor. Option A does not compile because the final variable was already set in the declaration. The variable value2 is a static variable. Both instance and static initializers are able to access static variables, making options B and E correct. The variable value3 is an instance variable. Options D and F do not compile because a static initializer does not have access to instance variables.",
    },
    {
      question:
        'Which of the following are true about the following code? (Choose all that apply.)\n\npublic class Run {\n\tstatic void execute() {\n\t\tSystem.out.print("1-");\n\t}\n\tstatic void execute(int num) {\n\t\tSystem.out.print("2-");\n\t}\n\tstatic void execute(Integer num) {\n\t\tSystem.out.print("3-");\n\t}\n\tstatic void execute(Object num) {\n\t\tSystem.out.print("4-");\n\t}\n\tstatic void execute(int... nums) {\n\t\tSystem.out.print("5-");\n\t}\n\tpublic static void main(String[] args) {\n\t\tRun.execute(100);\n\t\tRun.execute(100L);\n\t}\n}',
      options: [
        "A. The code prints out 2-4-.",
        "B. The code prints out 3-4-.",
        "C. The code prints out 4-2-.",
        "D. The code prints out 4-4-.",
        "E. The code prints 3-4- if you remove the method static void execute(int num).",
        "F. The code prints 4-4- if you remove the method static void execute(int num).",
      ],
      answer: ["A", "E", "F"],
      explanation:
        "Option A is correct. The 100 parameter is an int and so calls the matching int method, making option A correct. When this method is removed, Java looks for the next most specific constructor. Java prefers autoboxing to varargs, so it chooses the Integer constructor. The 100L parameter is a long. Since it can't be converted into a smaller type, it is autoboxed into a Long, and then the method for Object is called, making option E correct.",
    },
    {
      question:
        "Which method signatures are valid overloads of the following method signature? (Choose all that apply.)\n\npublic void moo(int m, int... n)",
      options: [
        "A. public void moo(int a, int... b)",
        "B. public int moo(char ch)",
        "C. public void moooo(int... z)",
        "D. private void moo(int... x)",
        "E. public void moooo(int y)",
        "F. public void moo(int... c, int d)",
        "G. public void moo(int... i, int j...)",
      ],
      answer: ["B", "C", "E"],
      explanation:
        "Option A is incorrect because it has the same parameter list of types and therefore the same signature as the original method. Options B and E are valid method overloads because the types of parameters in the list change. When overloading methods, the return type and access modifiers do not need to be the same. Options C and E are incorrect because the method name is different. Options F and G do not compile. There can be at most one varargs parameter, and it must be the last element in the parameter list.",
    },
  ],
};
