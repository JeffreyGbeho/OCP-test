import { Quiz } from "../models/quiz";

export const chapter1: Quiz = {
  title: "Chapter 1: Building Blocks",
  questions: [
    {
      question:
        "Which of the following are legal entry point methods that can be run from the command line? (Choose all that apply.)",
      options: [
        "A. private static void main(String[] args)",
        "B. public static final main(String[] args)",
        "C. public void main(String[] args)",
        "D. public static final void main(String[] args)",
        "E. public static void main(String[] args)",
        "F. public static main(String[] args)",
      ],
      answer: ["D", "E"],
      explanation:
        "Option E is the canonical main() method signature. Option D is an alternate form with the redundant final. Option A is incorrect because the main() method must be public. Options B and F are incorrect because the main() method must have a void return type. Option C is incorrect because the main() method must be static.",
    },
    {
      question:
        "Which answer options represent the order in which the following statements can be assembled into a program that will compile successfully? (Choose all that apply.)\n\nX: class Rabbit {}\nY: import java.util.*;\nZ: package animals;",
      options: [
        "A. X, Y, Z",
        "B. Y, Z, X",
        "C. Z, Y, X",
        "D. Y, X",
        "E. Z, X",
        "F. X, Z",
        "G. None of the above",
      ],
      answer: ["C", "D", "E"],
      explanation:
        "The package statement comes first if present. Then come the import statements if present. Then comes the class declaration. Options C, D, and E follow this order and are correct. Options A, B, and F are incorrect because they have the statements in the wrong order. Option D is correct because both package and import statements are optional.",
    },
    {
      question:
        "Which of the following are true? (Choose all that apply.)\n\npublic class Bunny {\n\tpublic static void main(String[] x) {\n\t\tBunny bun = new Bunny();\n\t} }",
      options: [
        "A. Bunny is a class.",
        "B. bun is a class.",
        "C. main is a class.",
        "D. Bunny is a reference to an object.",
        "E. bun is a reference to an object.",
        "F. main is a reference to an object.",
        "G. The main() method doesn't run because the parameter name is incorrect.",
      ],
      answer: ["A", "E"],
      explanation:
        "Bunny is a class, which can be seen from the declaration: public class Bunny. The variable bun is a reference to an object. The method main() is the standard entry point to a program. Option G is incorrect because the parameter type matters, not the parameter name.",
    },
    {
      question:
        "Which of the following are valid Java identifiers? (Choose all that apply.)",
      options: [
        "A. _",
        "B. _helloWorld$",
        "C. true",
        "D. java.lang",
        "E. Public",
        "F. 1980_s",
        "G. _Q2_",
      ],
      answer: ["B", "E", "G"],
      explanation:
        "Option A is invalid because a single underscore is not allowed. Option C is not a valid identifier because true is a Java reserved word. Option D is not valid because a period (.) is not allowed in identifiers. Option F is not valid because the first character is not a letter, dollar sign ($), or underscore (_). Options B, E, and G are valid because they contain only valid characters.",
    },
    {
      question:
        'Which statements about the following program are correct? (Choose all that apply.)\n\n2: public class Bear {\n3: \tprivate Bear pandaBear;\n4: \tprivate void roar(Bear b) {\n5: \t\tSystem.out.println("Roar!");\n6: \t\tpandaBear = b;\n7: \t}\n8: \tpublic static void main(String[] args) {\n9: \t\tBear brownBear = new Bear();\n10: \t\tBear polarBear = new Bear();\n11: \t\tbrownBear.roar(polarBear);\n12: \t\tpolarBear = null;\n13: \t\tbrownBear = null;\n14: \t\tSystem.gc(); } }',
      options: [
        "A. The object created on line 9 is eligible for garbage collection after line 13.",
        "B. The object created on line 9 is eligible for garbage collection after line 14.",
        "C. The object created on line 10 is eligible for garbage collection after line 12.",
        "D. The object created on line 10 is eligible for garbage collection after line 13.",
        "E. Garbage collection is guaranteed to run.",
        "F. Garbage collection might or might not run.",
        "G. The code does not compile.",
      ],
      answer: ["D", "F"],
      explanation:
        "The object created on line 9 is accessible until line 13 via the brownBear reference variable. The object created on line 10 is accessible via both the polarBear reference and the brownBear.pandaBear reference. After line 12, the object is still accessible via brownBear.pandaBear. After line 13, though, it is no longer accessible since brownBear is no longer accessible. Garbage collection is never guaranteed to run, making option F correct and option E incorrect.",
    },
    {
      question:
        'Assuming the following class compiles, how many variables defined in the class or method are in scope on the line marked on line 14?\n\n1: public class Camel {\n2: \t{ int hairs = 3_000_0; }\n3: \tlong water, air=2;\n4: \tboolean twoHumps = true;\n5: \tpublic void spit(float distance) {\n6: \t\tvar path = "";\n7: \t\t{ double teeth = 32 + distance++; }\n8: \t\twhile(water> 0) {\n9: \t\t\tint age = twoHumps ? 1 : 2;\n10: \t\t\tshort i=-1;\n11: \t\t\tfor(i=0; i<10; i++) {\n12: \t\t\t\tvar Private = 2;\n13: \t\t\t}\n14: \t\t\t// SCOPE\n15: \t\t}\n16: \t}\n17: }',
      options: [
        "A. 2",
        "B. 3",
        "C. 4",
        "D. 5",
        "E. 6",
        "F. 7",
        "G. None of the above",
      ],
      answer: ["F"],
      explanation:
        "There are 7 variables in scope on line 14: water and air (instance variables), twoHumps (instance variable), distance (method parameter), path (local variable), age (local variable), and i (local variable). The variables hairs, teeth, and Private are out of scope at this point.",
    },
    {
      question:
        'Which are true about this code? (Choose all that apply.)\n\npublic class KitchenSink {\n\tprivate int numForks;\n\tpublic static void main(String[] args) {\n\t\tint numKnives;\n\t\tSystem.out.print("""\n\t\t"# forks = " + numForks +\n\t\t" # knives = " + numKnives +\n\t\t# cups = 0""");\n\t}\n}',
      options: [
        "A. The output includes: # forks = 0.",
        "B. The output includes: # knives = 0.",
        "C. The output includes: # cups = 0.",
        "D. The output includes a blank line.",
        "E. The output includes one or more lines that begin with whitespace.",
        "F. The code does not compile.",
      ],
      answer: ["C", "E", "F"],
      explanation:
        "The code does not compile because numForks is an instance variable being accessed from a static context, and numKnives is a local variable that is not initialized. The output would include '# cups = 0' and the lines would begin with whitespace due to the text block formatting. However, the code doesn't compile, so option F is correct.",
    },
    {
      question:
        "Which of the following code snippets about var compile without issue when used in a method? (Choose all that apply.)",
      options: [
        "A. var spring = null;",
        'B. var fall = "leaves";',
        "C. var evening = 2; evening = null;",
        "D. var night = Integer.valueOf(3);",
        "E. var day = 1/0;",
        "F. var winter = 12, cold;",
        "G. var fall = 2, autumn = 2;",
        'H. var morning = ""; morning = null;',
      ],
      answer: ["B", "D", "E", "H"],
      explanation:
        "Option A is incorrect because var cannot be initialized with null. Option B is correct. Option C is incorrect because you can't change the type of a var. Option D is correct. Option E is correct; it will compile but throw an exception at runtime. Option F is incorrect because you can't declare multiple variables with var. Option G is incorrect for the same reason as F. Option H is correct because you can reassign a var to null if it's a reference type.",
    },
    {
      question: "Which of the following are correct? (Choose all that apply.)",
      options: [
        "A. An instance variable of type float defaults to 0.",
        "B. An instance variable of type char defaults to null.",
        "C. A local variable of type double defaults to 0.0.",
        "D. A local variable of type int defaults to null.",
        "E. A class variable of type String defaults to null.",
        'F. A class variable of type String defaults to the empty string "".',
        "G. None of the above.",
      ],
      answer: ["A", "E"],
      explanation:
        "Instance and class variables get default values. A float defaults to 0.0f, which is equivalent to 0. A char defaults to '\u0000', not null. Local variables must be initialized before use. A String, being an object, defaults to null for both instance and class variables.",
    },
    {
      question:
        "Which of the following expressions, when inserted independently into the blank line, allow the code to compile? (Choose all that apply.)\n\npublic void printMagicData() {\n\tvar magic = _______________;\n\tSystem.out.println(magic);\n}",
      options: [
        "A. 3_1",
        "B. 1_329_.0",
        "C. 3_13.0_",
        "D. 5_291._2",
        "E. 2_234.0_0",
        "F. 9___6",
        "G. _1_3_5_0",
      ],
      answer: ["A", "F"],
      explanation:
        "Underscores are allowed in numeric literals, but not at the beginning or end of a number, or next to a decimal point. Option A and F are valid integer literals. Options B, C, D, and E are invalid because of underscore placement. Option G is invalid because it starts with an underscore.",
    },
    {
      question:
        "Given the following two class files, what is the maximum number of imports that can be removed and have the code still compile?\n\n// Water.java\npackage aquarium;\npublic class Water { }\n\n// Tank.java\npackage aquarium;\nimport java.lang.*;\nimport java.lang.System;\nimport aquarium.Water;\nimport aquarium.*;\npublic class Tank {\n\tpublic void print(Water water) {\n\t\tSystem.out.println(water); } }",
      options: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4", "F. Does not compile"],
      answer: ["E"],
      explanation:
        "The first two imports can be removed because java.lang is automatically imported. The following two imports can be removed because Tank and Water are in the same package, making the correct option E. If Tank and Water were in different packages, exactly one of these two imports could be removed. In that case, the answer would be option D.",
    },
    {
      question:
        "Which statements about the following class are correct? (Choose all that apply.)\n\n1: public class ClownFish {\n2: \tint gills = 0, double weight=2;\n3: \t{ int fins = gills; }\n4: \tvoid print(int length = 3) {\n5: \t\tSystem.out.println(gills);\n6: \t\tSystem.out.println(weight);\n7: \t\tSystem.out.println(fins);\n8: \t\tSystem.out.println(length);\n9: \t} }",
      options: [
        "A. Line 2 generates a compiler error.",
        "B. Line 3 generates a compiler error.",
        "C. Line 4 generates a compiler error.",
        "D. Line 7 generates a compiler error.",
        "E. The code prints 0.",
        "F. The code prints 2.0.",
        "G. The code prints 2.",
        "H. The code prints 3.",
      ],
      answer: ["A", "C", "D"],
      explanation:
        "Line 2 does not compile as only one type should be specified. Line 3 compiles without issue as it declares a local variable inside an instance initializer that is never used. Line 4 does not compile because Java does not support setting default method parameter values. Line 7 does not compile because fins is in scope and accessible only inside the instance initializer on line 3.",
    },
    {
      question:
        "Given the following classes, which of the following snippets can independently be inserted in place of INSERT IMPORTS HERE and have the code compile? (Choose all that apply.)\n\npackage aquarium;\npublic class Water {\n\tboolean salty = false;\n}\n\npackage aquarium.jellies;\npublic class Water {\n\tboolean salty = true;\n}\n\npackage employee;\nINSERT IMPORTS HERE\npublic class WaterFiller {\n\tWater water;\n}",
      options: [
        "A. import aquarium.*;",
        "B. import aquarium.Water;\nimport aquarium.jellies.*;",
        "C. import aquarium.*;\nimport aquarium.jellies.Water;",
        "D. import aquarium.*;\nimport aquarium.jellies.*;",
        "E. import aquarium.Water;\nimport aquarium.jellies.Water;",
        "F. None of these imports can make the code compile.",
      ],
      answer: ["A"],
      explanation:
        "Option A is correct because it imports all the classes in the aquarium package including aquarium.Water. Options B and C are correct because they import Water by class name. Since importing by class name takes precedence over wildcards, these compile. Option D is incorrect because Java doesn't know which of the two wildcard Water classes to use. Option E is incorrect because you cannot specify the same class name in two imports.",
    },
    {
      question:
        'Which of the following statements about the code snippet are true? (Choose all that apply.)\n\n3: short numPets = 5L;\n4: int numGrains = 2.0;\n5: String name = "Scruffy";\n6: int d = numPets.length();\n7: int e = numGrains.length;\n8: int f = name.length();',
      options: [
        "A. Line 3 generates a compiler error.",
        "B. Line 4 generates a compiler error.",
        "C. Line 5 generates a compiler error.",
        "D. Line 6 generates a compiler error.",
        "E. Line 7 generates a compiler error.",
        "F. Line 8 generates a compiler error.",
      ],
      answer: ["A", "B", "D", "E"],
      explanation:
        "Line 3 does not compile as the L suffix makes the literal value a long, which cannot be stored inside a short directly. Line 4 does not compile because int is an integral type, but 2.0 is a double literal value. Line 5 compiles without issue. Lines 6 and 7 do not compile because numPets and numGrains are both primitives, and you can call methods only on reference types, not primitive values. Line 8 compiles because there is a length() method defined on String.",
    },
    {
      question:
        "Which of the following statements about garbage collection are correct? (Choose all that apply.)",
      options: [
        "A. Calling System.gc() is guaranteed to free up memory by destroying objects eligible for garbage collection.",
        "B. Garbage collection runs on a set schedule.",
        "C. Garbage collection allows the JVM to reclaim memory for other objects.",
        "D. Garbage collection runs when your program has used up half the available memory.",
        "E. An object may be eligible for garbage collection but never removed from the heap.",
        "F. An object is eligible for garbage collection once no references to it are accessible in the program.",
        "G. Marking a variable final means its associated object will never be garbage collected.",
      ],
      answer: ["C", "E", "F"],
      explanation:
        "In Java, there are no guarantees about when garbage collection will run. The JVM is free to ignore calls to System.gc(). For this reason, options A, B, and D are incorrect. Option C is correct as the purpose of garbage collection is to reclaim used memory. Option E is also correct that an object may never be garbage collected, such as if the program ends before garbage collection runs. Option F is correct and is the primary means by which garbage collection algorithms determine whether an object is eligible for garbage collection. Finally, option G is incorrect as marking a variable final means it is constant within its own scope.",
    },
    {
      question:
        'Which are true about this code? (Choose all that apply.)\n\nvar blocky = """\n\tsquirrel \\s\n\tpigeon \\\n\ttermite""";\nSystem.out.print(blocky);',
      options: [
        "A. It outputs two lines.",
        "B. It outputs three lines.",
        "C. It outputs four lines.",
        "D. There is one line with trailing whitespace.",
        "E. There are two lines with trailing whitespace.",
        "F. If we indented each line five characters, it would change the output.",
      ],
      answer: ["A", "D"],
      explanation:
        "This code outputs two lines. The first line is 'squirrel ' with a trailing space due to the \\s. The second line is 'pigeon termite' because the \\ at the end of the second line in the text block tells Java not to add a new line before termite. There is one line with trailing whitespace (the first line). Indenting the lines would not change the output because incidental indentation is ignored in text blocks.",
    },
    {
      question:
        'What lines are printed by the following program? (Choose all that apply.)\n\n1: public class WaterBottle {\n2: \tprivate String brand;\n3: \tprivate boolean empty;\n4: \tpublic static float code;\n5: \tpublic static void main(String[] args) {\n6: \t\tWaterBottle wb = new WaterBottle();\n7: \t\tSystem.out.println("Empty = " + wb.empty);\n8: \t\tSystem.out.println("Brand = " + wb.brand);\n9: \t\tSystem.out.println("Code = " + code);\n10: \t} }',
      options: [
        "A. Line 8 generates a compiler error.",
        "B. Line 9 generates a compiler error.",
        "C. Empty =",
        "D. Empty = false",
        "E. Brand =",
        "F. Brand = null",
        "G. Code = 0.0",
        "H. Code = 0f",
      ],
      answer: ["D", "F", "G"],
      explanation:
        "The code compiles and runs without issue. Boolean fields initialize to false, object references initialize to null, and float fields initialize to 0.0f. When printed, float values are displayed without the 'f' suffix. Therefore, the output includes 'Empty = false', 'Brand = null', and 'Code = 0.0'.",
    },
    {
      question:
        "Which of the following statements about var are true? (Choose all that apply.)",
      options: [
        "A. A var can be used as a constructor parameter.",
        "B. The type of a var is known at compile time.",
        "C. A var cannot be used as an instance variable.",
        "D. A var can be used in a multiple variable assignment statement.",
        "E. The value of a var cannot change at runtime.",
        "F. The type of a var cannot change at runtime.",
        "G. The word var is a reserved word in Java.",
      ],
      answer: ["B", "C", "F"],
      explanation:
        "var cannot be used for constructor parameters, method parameters, or instance variables, so options A and C are correct. The type of a var is determined at compile-time and cannot change at runtime, making options B and F correct. var can change value but not type at runtime. var is not allowed in multiple variable declarations, so D is incorrect. var is not a reserved word, but a reserved type name, so G is incorrect.",
    },
    {
      question:
        'Which are true about the following code? (Choose all that apply.)\n\nvar num1 = Long.parseLong("100");\nvar num2 = Long.valueOf("100");\nSystem.out.println(Long.max(num1, num2));',
      options: [
        "A. The output is 100.",
        "B. The output is 200.",
        "C. The code does not compile.",
        "D. num1 is a primitive.",
        "E. num2 is a primitive.",
      ],
      answer: ["A", "D"],
      explanation:
        "The code compiles and runs correctly. Long.parseLong() returns a primitive long, while Long.valueOf() returns a Long object. The Long.max() method can accept both primitive longs and Long objects. The output is 100 because both num1 and num2 have the same value. num1 is a primitive long, but num2 is a Long object.",
    },
    {
      question:
        'Which statements about the following class are correct? (Choose all that apply.)\n\n1: public class PoliceBox {\n2: \tString color;\n3: \tlong age;\n4: \tpublic void PoliceBox() {\n5: \t\tcolor = "blue";\n6: \t\tage = 1200;\n7: \t}\n8: \tpublic static void main(String []time) {\n9: \t\tvar p = new PoliceBox();\n10: \t\tvar q = new PoliceBox();\n11: \t\tp.color = "green";\n12: \t\tp.age = 1400;\n13: \t\tp = q;\n14: \t\tSystem.out.println("Q1="+q.color);\n15: \t\tSystem.out.println("Q2="+q.age);\n16: \t\tSystem.out.println("P1="+p.color);\n17: \t\tSystem.out.println("P2="+p.age);\n18: \t} }',
      options: [
        "A. It prints Q1=blue.",
        "B. It prints Q2=1200.",
        "C. It prints P1=null.",
        "D. It prints P2=1400.",
        "E. Line 4 does not compile.",
        "F. Line 12 does not compile.",
        "G. Line 13 does not compile.",
        "H. None of the above.",
      ],
      answer: ["C"],
      explanation:
        "The key thing to notice is that line 4 does not define a constructor, but instead a method named PoliceBox(), since it has a return type of void. This method is never executed during the program run, and color and age are assigned the default values null and 0L, respectively. Lines 11 and 12 change the values for an object associated with p, but then, on line 13, the p variable is changed to point to the object associated with q, which still has the default values. For this reason, the program prints Q1=null, Q2=0, P1=null, and P2=0.",
    },
    {
      question:
        'What is the output of executing the following class?\n\n1: public class Salmon {\n2: \tint count;\n3: \t{ System.out.print(count+"-"); }\n4: \t{ count++; }\n5: \tpublic Salmon() {\n6: \t\tcount = 4;\n7: \t\tSystem.out.print(2+"-");\n8: \t}\n9: \tpublic static void main(String[] args) {\n10: \t\tSystem.out.print(7+"-");\n11: \t\tvar s = new Salmon();\n12: \t\tSystem.out.print(s.count+"-"); } }',
      options: [
        "A. 7-0-2-1-",
        "B. 7-0-1-",
        "C. 0-7-2-1-",
        "D. 7-0-2-4-",
        "E. 0-7-1-",
        "F. The class does not compile because of line 3.",
        "G. The class does not compile because of line 4.",
        "H. None of the above.",
      ],
      answer: ["D"],
      explanation:
        "We start with the main() method, which prints 7- on line 10. Next, a new Salmon instance is created on line 11. This calls the two instance initializers on lines 3 and 4 to be executed in order. The default value of an instance variable of type int is 0, so 0- is printed next and count is assigned a value of 1. Next, the constructor is called. This assigns a value of 4 to count and prints 2-. Finally, line 12 prints 4-, since that is the value of count. Putting it all together, we have 7-0-2-4-, making option D the correct answer.",
    },
    {
      question:
        "Given the following class, which of the following lines of code can independently replace INSERT CODE HERE to make the code compile? (Choose all that apply.)\n\npublic class Price {\n\tpublic void admission() {\n\t\tINSERT CODE HERE\n\t\tSystem.out.print(amount);\n\t} }",
      options: [
        "A. int Amount = 0b11;",
        "B. int amount = 9L;",
        "C. int amount = 0xE;",
        "D. int amount = 1_2.0;",
        "E. double amount = 1_0_.0;",
        "F. int amount = 0b101;",
        "G. double amount = 9_2.1_2;",
        "H. double amount = 1_2_.0_0;",
      ],
      answer: ["C", "F", "G"],
      explanation:
        "Option A doesn't compile because Amount is not the same as amount due to case sensitivity. Option B doesn't compile because 9L is a long literal, not an int. Option C compiles as 0xE is a valid hexadecimal literal for int. Option D doesn't compile because 1_2.0 is a double literal, not an int. Option E doesn't compile because underscores can't be next to the decimal point. Option F compiles as 0b101 is a valid binary literal for int. Option G compiles as it's a valid double literal. Option H doesn't compile because underscores can't be next to the decimal point.",
    },
    {
      question:
        "Which statements about the following class are true? (Choose all that apply.)\n\n1: public class River {\n2: \tint Depth = 1;\n3: \tfloat temp = 50.0;\n4: \tpublic void flow() {\n5: \t\tfor (int i = 0; i < 1; i++) {\n6: \t\t\tint depth = 2;\n7: \t\t\tdepth++;\n8: \t\t\ttemp--;\n9: \t\t}\n10: \t\tSystem.out.println(depth);\n11: \t\tSystem.out.println(temp); }\n12: \tpublic static void main(String... s) {\n13: \t\tnew River().flow();\n14: \t} }",
      options: [
        "A. Line 3 generates a compiler error.",
        "B. Line 6 generates a compiler error.",
        "C. Line 7 generates a compiler error.",
        "D. Line 10 generates a compiler error.",
        "E. The program prints 3 on line 10.",
        "F. The program prints 4 on line 10.",
        "G. The program prints 50.0 on line 11.",
        "H. The program prints 49.0 on line 11.",
      ],
      answer: ["A", "D", "H"],
      explanation:
        "Line 3 generates a compiler error because float literals require an 'f' suffix (it should be 50.0f). Line 10 generates a compiler error because depth is a local variable defined within the for loop and is not accessible outside of it. The program would print 49.0 on line 11 if it compiled, as temp is decremented once in the loop. Lines 6 and 7 are correct as they define and increment a local variable. The program doesn't print anything on line 10 due to the compiler error.",
    },
  ],
};
