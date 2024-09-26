export const chapter6 = {
  title: "Chapter 6: Class Design",
  questions: [
    {
      question:
        "Which code can be inserted to have the code print 2?\n\npublic class BirdSeed {\n\tprivate int numberBags;\n\tboolean call;\n\tpublic BirdSeed() {\n\t\t// LINE 1\n\t\tcall = false;\n\t\t// LINE 2\n\t}\n\tpublic BirdSeed(int numberBags) {\n\t\tthis.numberBags = numberBags;\n\t}\n\tpublic static void main(String[] args) {\n\t\tvar seed = new BirdSeed();\n\t\tSystem.out.print(seed.numberBags);\n\t}\n}",
      options: [
        "A. Replace line 1 with BirdSeed(2);.",
        "B. Replace line 2 with BirdSeed(2);.",
        "C. Replace line 1 with new BirdSeed(2);.",
        "D. Replace line 2 with new BirdSeed(2);.",
        "E. Replace line 1 with this(2);.",
        "F. Replace line 2 with this(2);.",
        "G. The code prints 2 without any changes.",
      ],
      answer: ["E"],
      explanation:
        "Options A and B will not compile because constructors cannot be called without new. Options C and D will compile but will create a new object rather than setting the fields in this one. The result is the program will print 0, not 2, at runtime. Calling an overloaded constructor, using this(), or a parent constructor, using super(), is only allowed on the first line of the constructor, making option E correct and option F incorrect. Finally, option G is incorrect because the program prints 0 without any changes, not 2.",
    },
    {
      question:
        "Which modifier pairs can be used together in a method declaration? (Choose all that apply.)",
      options: [
        "A. static and final",
        "B. private and static",
        "C. static and abstract",
        "D. private and abstract",
        "E. abstract and final",
        "F. private and final",
      ],
      answer: ["A", "B", "F"],
      explanation:
        "The final modifier can be used with private and static, making options A and F correct. Marking a private method final is redundant but allowed. A private method may also be marked static, making option B correct. Options C, D, and E are incorrect because methods marked static, private, or final cannot be overridden; therefore, they cannot be marked abstract.",
    },
    {
      question:
        "Which of the following statements about methods are true? (Choose all that apply.)",
      options: [
        "A. Overloaded methods must have the same signature.",
        "B. Overridden methods must have the same signature.",
        "C. Hidden methods must have the same signature.",
        "D. Overloaded methods must have the same return type.",
        "E. Overridden methods must have the same return type.",
        "F. Hidden methods must have the same return type.",
      ],
      answer: ["B", "C"],
      explanation:
        "Overloaded methods have the same method name but a different signature (the method parameters differ), making option A incorrect. Overridden instance methods and hidden static methods must have the same signature (the name and method parameters must match), making options B and C correct. Overloaded methods can have different return types, while overridden and hidden methods can have covariant return types. None of these methods are required to use the same return type, making options D, E, and F incorrect.",
    },
    {
      question:
        'What is the output of the following program?\n\n1: class Mammal {\n2: \tprivate void sneeze() {}\n3: \tpublic Mammal(int age) {\n4: \t\tSystem.out.print("Mammal");\n5: \t}\n}\n6: public class Platypus extends Mammal {\n7: \tint sneeze() { return 1; }\n8: \tpublic Platypus() {\n9: \t\tSystem.out.print("Platypus");\n10: \t}\n11: \tpublic static void main(String[] args) {\n12: \t\tnew Mammal(5);\n13: \t}\n}',
      options: [
        "A. Platypus",
        "B. Mammal",
        "C. PlatypusMammal",
        "D. MammalPlatypus",
        "E. The code will compile if line 7 is changed.",
        "F. The code will compile if line 9 is changed.",
      ],
      answer: ["F"],
      explanation:
        "The code will not compile as is, because the parent class Mammal does not define a no-argument constructor. For this reason, the first line of a Platypus constructor should be an explicit call to super(int), making option F the correct answer. Option E is incorrect, as line 7 compiles without issue. The sneeze() method in the Mammal class is marked private, meaning it is not inherited and therefore is not overridden in the Platypus class. For this reason, the sneeze() method in the Platypus class is free to define the same method with any return type.",
    },
    {
      question:
        "Which of the following complete the constructor so that this code prints out 50? (Choose all that apply.)\n\nclass Speedster {\n\tint numSpots;\n}\npublic class Cheetah extends Speedster {\n\tint numSpots;\n\tpublic Cheetah(int numSpots) {\n\t\t// INSERT CODE HERE\n\t}\n\tpublic static void main(String[] args) {\n\t\tSpeedster s = new Cheetah(50);\n\t\tSystem.out.print(s.numSpots);\n\t}\n}",
      options: [
        "A. numSpots = numSpots;",
        "B. numSpots = this.numSpots;",
        "C. this.numSpots = numSpots;",
        "D. numSpots = super.numSpots;",
        "E. super.numSpots = numSpots;",
        "F. The code does not compile regardless of the code inserted into the constructor.",
        "G. None of the above",
      ],
      answer: ["E"],
      explanation:
        "The code compiles, making option F incorrect. An instance variable with the same name as an inherited instance variable is hidden, not overridden. This means that both variables exist, and the one that is used depends on the location and reference type. Because the main() method uses a reference type of Speedster to access the numSpots variable, the variable in the Speedster class, not the Cheetah class, must be set to 50. Option A is incorrect, as it reassigns the method parameter to itself. Option B is incorrect, as it assigns the method parameter the value of the instance variable in Cheetah, which is 0. Option C is incorrect, as it assigns the value to the instance variable in Cheetah, not Speedster. Option D is incorrect, as it assigns the method parameter the value of the instance variable in Speedster, which is 0. Options A, B, C, and D all print 0 at runtime. Option E is the only correct answer, as it assigns the instance variable numSpots in the Speedster class a value of 50. The numSpots variable in the Speedster class is then correctly referenced in the main() method, printing 50 at runtime.",
    },
    {
      question:
        "Which of the following declare immutable classes? (Choose all that apply.)\n\npublic final class Moose {\n\tprivate final int antlers;\n}\npublic class Caribou {\n\tprivate int antlers = 10;\n}\npublic class Reindeer {\n\tprivate final int antlers = 5;\n}\npublic final class Elk {}\npublic final class Deer {\n\tprivate final Object o = new Object();\n}",
      options: [
        "A. Moose",
        "B. Caribou",
        "C. Reindeer",
        "D. Elk",
        "E. Deer",
        "F. None of the above",
      ],
      answer: ["D", "E"],
      explanation:
        "The Moose class doesn't compile, as the final variable antlers is not initialized when it is declared, in an instance initializer, or in a constructor. Caribou and Reindeer are not immutable because they are not marked final, which means a subclass could extend them and add mutable fields. Elk and Deer are both immutable classes since they are marked final and only include private final members, making options D and E correct. As shown with Elk, a class doesn't need to declare any fields to be considered immutable.",
    },
    {
      question:
        'What is the output of the following code?\n\n1: class Arthropod {\n2: \tprotected void printName(long input) {\n3: \t\tSystem.out.print("Arthropod");\n4: \t}\n5: \tvoid printName(int input) {\n6: \t\tSystem.out.print("Spooky");\n7: \t}\n}\n8: public class Spider extends Arthropod {\n9: \tprotected void printName(int input) {\n10: \t\tSystem.out.print("Spider");\n11: \t}\n12: \tpublic static void main(String[] args) {\n13: \t\tArthropod a = new Spider();\n14: \t\ta.printName((short)4);\n15: \t\ta.printName(4);\n16: \t\ta.printName(5L);\n17: \t}\n}',
      options: [
        "A. SpiderSpiderArthropod",
        "B. SpiderSpiderSpider",
        "C. SpiderSpookyArthropod",
        "D. SpookySpiderArthropod",
        "E. The code will not compile because of line 5.",
        "F. The code will not compile because of line 9.",
        "G. None of the above",
      ],
      answer: ["A"],
      explanation:
        "The code compiles and runs without issue, so options E and F are incorrect. Based on order of initialization, the static components are initialized first, starting with the Arthropod class, since it is the parent of the Spider class, which initializes the StringBuilder to u. The static initializer in Spider then updates sb to contain uq, which is printed twice by lines 13 and 14 along with spaces separating the values. Next, an instance of Arthropod is initialized on line 15. There are two instance initializers in Arthropod, and they run in order, appending cr to the StringBuilder, resulting in a value of uqcr. An instance of Spider is then initialized on line 16. The instance initializers in the superclass Arthropod run first, appending cr again and updating the value of sb to uqcrcr. Finally, the instance initializer in Spider runs and appends m. The program completes with the final value printed being uq uq uqcrcrm, making option A the correct answer.",
    },
    {
      question:
        'What is the result of the following code?\n\n1: abstract class Bird {\n2: \tprivate final void fly() { System.out.println("Bird"); }\n3: \tprotected Bird() { System.out.print("Wow-"); }\n4: }\n5: public class Pelican extends Bird {\n6: \tpublic Pelican() { System.out.print("Oh-"); }\n7: \tprotected void fly() { System.out.println("Pelican"); }\n8: \tpublic static void main(String[] args) {\n9: \t\tvar chirp = new Pelican();\n10: \t\tchirp.fly();\n11: \t}\n}',
      options: [
        "A. Oh-Bird",
        "B. Oh-Pelican",
        "C. Wow-Oh-Bird",
        "D. Wow-Oh-Pelican",
        "E. The code contains a compilation error.",
        "F. None of the above",
      ],
      answer: ["D"],
      explanation:
        "The code compiles without issue. The question is making sure you know that superclass constructors are called in the same manner in abstract classes as they are in non-abstract classes. Line 9 calls the constructor on line 6. The compiler automatically inserts super() as the first line of the constructor defined on line 6. The program then calls the constructor on line 3 and prints Wow-. Control then returns to line 6, and Oh- is printed. Finally, the method call on line 10 uses the version of fly() in the Pelican class, since it is marked private and the reference type of var is resolved as Pelican. The final output is Wow-Oh-Pelican, making option D the correct answer. Remember that private methods cannot be overridden. If the reference type of chirp was Bird, then the code would not compile as it would not be accessible outside the class.",
    },
    {
      question:
        "Which of the following statements about overridden methods are true? (Choose all that apply.)",
      options: [
        "A. An overridden method must contain method parameters that are the same or covariant with the method parameters in the inherited method.",
        "B. An overridden method may declare a new exception, provided it is not checked.",
        "C. An overridden method must be more accessible than the method in the parent class.",
        "D. An overridden method may declare a broader checked exception than the method in the parent class.",
        "E. If an inherited method returns void, then the overridden version of the method must return void.",
        "F. None of the above",
      ],
      answer: ["B", "E"],
      explanation:
        "The signature must match exactly, making option A incorrect. There is no such thing as a covariant signature. An overridden method must not declare any new checked exceptions or a checked exception that is broader than the inherited method. For this reason, option B is correct, and option D is incorrect. Option C is incorrect because an overridden method may have the same access modifier as the version in the parent class. Finally, overridden methods must have covariant return types, and only void is covariant with void, making option E correct.",
    },
    {
      question:
        "Which of the following pairs, when inserted into the blanks, allow the code to compile? (Choose all that apply.)\n\n1: public class Howler {\n2: \tpublic Howler(long shadow) {\n3: \t\t____________;\n4: \t}\n5: \tprivate Howler(int moon) {\n6: \t\tsuper();\n7: \t}\n8: }\n9: class Wolf extends Howler {\n10: \tprotected Wolf(String stars) {\n11: \t\tsuper(2L);\n12: \t}\n13: \tpublic Wolf() {\n14: \t\t____________;\n15: \t}\n16: }",
      options: [
        'A. this(3) at line 3,this("") at line 14',
        "B. this() at line 3,super(1) at line 14",
        "C. this((short)1) at line 3,this(null) at line 14",
        "D. super() at line 3,super() at line 14",
        "E. this(2L) at line 3,super((short)2) at line 14",
        "F. this(5) at line 3,super(null) at line 14",
        "G. Remove lines 3 and 14.",
      ],
      answer: ["A", "C"],
      explanation:
        'Option A is correct because this(3) calls the constructor declared on line 5, while this("") calls the constructor declared on line 10. Option B does not compile, as inserting this() at line 3 results in a compiler error, since there is no matching constructor. Option C is correct, as short can be implicitly cast to int, resulting in this((short)1) calling the constructor declared on line 5. In addition, this(null) calls the String constructor declared on line 10. Option D does not compile because inserting super() on line 14 results in an invalid constructor call. The Howler class does not contain a no-argument constructor. Option E is also incorrect. Inserting this(2L) at line 3 results in a recursive constructor definition. The compiler detects this and reports an error. Option F is incorrect, as using super(null) on line 14 does not match any parent constructors. If an explicit cast was used, such as super((Integer)null), then the code would have compiled but would throw an exception at runtime during unboxing. Finally, option G is incorrect because the superclass Howler does not contain a no-argument constructor. Therefore, the constructor declared on line 13 will not compile without an explicit call to an overloaded or parent constructor.',
    },
    {
      question:
        'What is the result of the following?\n\n1: public class PolarBear {\n2: \tStringBuilder value = new StringBuilder("t");\n3: \t{ value.append("a"); }\n4: \t{ value.append("c"); }\n5: \tprivate PolarBear() {\n6: \t\tvalue.append("b");\n7: \t}\n8: \tpublic PolarBear(String s) {\n9: \t\tthis();\n10: \t\tvalue.append(s);\n11: \t}\n12: \tpublic PolarBear(CharSequence p) {\n13: \t\tvalue.append(p);\n14: \t}\n15: \tpublic static void main(String[] args) {\n16: \t\tObject bear = new PolarBear();\n17: \t\tbear = new PolarBear("f");\n18: \t\tSystem.out.println(((PolarBear)bear).value);\n19: \t}\n}',
      options: [
        "A. tacb",
        "B. tacf",
        "C. tacbf",
        "D. tcafb",
        "E. taftacb",
        "F. The code does not compile.",
        "G. An exception is thrown.",
      ],
      answer: ["C"],
      explanation:
        "The code compiles and runs without issue, making options F and G incorrect. Line 16 initializes a PolarBear instance and assigns it to the bear reference. The variable declaration and instance initializers are run first, setting value to tac. The constructor declared on line 5 is called, resulting in value being set to tacb. Remember, a static main() method can access private constructors declared in the same class. Line 17 creates another PolarBear instance, replacing the bear reference declared on line 16. First, value is initialized to tac as before. Line 17 calls the constructor declared on line 8, since String is the narrowest match of a String literal. This constructor then calls the overloaded constructor declared on line 5, resulting in value being updated to tacb. Control returns to the previous constructor, with line 10 updating value to tacbf, and making option C the correct answer. Note that if the constructor declared on line 8 did not exist, then the constructor on line 12 would match. Finally, the bear reference is properly cast to PolarBear on line 18, making the value parameter accessible.",
    },
    {
      question:
        'How many lines of the following program contain a compilation error?\n\n1: public class Rodent {\n2: \tpublic Rodent(Integer x) {}\n3: \tprotected static Integer chew() throws Exception {\n4: \t\tSystem.out.println("Rodent is chewing");\n5: \t\treturn 1;\n6: \t}\n7: }\n8: class Beaver extends Rodent {\n9: \tpublic Number chew() throws RuntimeException {\n10: \t\tSystem.out.println("Beaver is chewing on wood");\n11: \t\treturn 2;\n12: \t}\n}',
      options: ["A. None", "B. 1", "C. 2", "D. 3", "E. 4", "F. 5"],
      answer: ["C"],
      explanation:
        "The code doesn't compile, so option A is incorrect. The first compilation error is on line 8. Since Rodent declares at least one constructor and it is not a no-argument constructor, Beaver must declare a constructor with an explicit call to a super() constructor. Line 9 contains two compilation errors. First, the return types are not covariant since Number is a supertype, not a subtype, of Integer. Second, the inherited method is static, but the overridden method is not, making this an invalid override. The code contains three compilation errors, although they are limited to two lines, making option C the correct answer.",
    },
    {
      question:
        "Which of these classes compile and will include a default constructor created by the compiler? (Choose all that apply.)",
      options: [
        "A. public class Bird {}",
        "B. public class Bird {\n\tpublic bird() {}\n}",
        "C. public class Bird {\n\tpublic bird(String name) {}\n}",
        "D. public class Bird {\n\tpublic Bird() {}\n}",
        "E. public class Bird {\n\tBird(String name) {}\n}",
        "F. public class Bird {\n\tprivate Bird(int age) {}\n}",
        "G. public class Bird {\n\tpublic Bird bird() { return null; }\n}",
      ],
      answer: ["A", "G"],
      explanation:
        "The compiler will insert a default no-argument constructor if the class compiles and does not define any constructors. Options A and G fulfill this requirement, making them the correct answers. The bird() declaration in option G is a method declaration, not a constructor. Options B and C do not compile. Since the constructor name does not match the class name, the compiler treats these as methods with missing return types. Options D, E, and F all compile, but since they declare at least one constructor, the compiler does not supply one.",
    },
    {
      question:
        "Which of the following statements about inheritance are correct? (Choose all that apply.)",
      options: [
        "A. A class can directly extend any number of classes.",
        "B. A class can implement any number of interfaces.",
        "C. All variables inherit java.lang.Object.",
        "D. If class A is extended by B, then B is a superclass of A.",
        "E. If class C implements interface D, then C is a subtype of D.",
        "F. Multiple inheritance is the property of a class to have multiple direct superclasses.",
      ],
      answer: ["B", "E", "F"],
      explanation:
        "A class can only directly extend a single class, making option A incorrect. A class can implement any number of interfaces, though, making option B correct. Option C is incorrect because primitive variables types do not inherit java.lang.Object. If class A is extended by B, then B is a subclass, not a superclass, making option D incorrect. A class that implements an interface is a subtype of that interface, making option E correct. Finally, option F is correct as it is an accurate description of multiple inheritance, which is not permitted in Java.",
    },
    {
      question:
        "Which statements about the following program are correct? (Choose all that apply.)\n\n1: abstract class Nocturnal {\n2: \tboolean isBlind();\n3: }\n4: public class Owl extends Nocturnal {\n5: \tpublic boolean isBlind() { return false; }\n6: \tpublic static void main(String[] args) {\n7: \t\tvar nocturnal = (Nocturnal)new Owl();\n8: \t\tSystem.out.println(nocturnal.isBlind());\n9: \t}\n}",
      options: [
        "A. It compiles and prints true.",
        "B. It compiles and prints false.",
        "C. The code will not compile because of line 2.",
        "D. The code will not compile because of line 5.",
        "E. The code will not compile because of line 7.",
        "F. The code will not compile because of line 8.",
        "G. None of the above",
      ],
      answer: ["C"],
      explanation:
        "The code does not compile because the isBlind() method in Nocturnal is not marked abstract and does not contain a method body. The rest of the lines compile without issue, making option C the only correct answer. If the abstract modifier was added to line 2, then the code would compile and print false at runtime, making option B the correct answer.",
    },
    {
      question:
        'What is the result of the following?\n\n1: class Arachnid {\n2: \tstatic StringBuilder sb = new StringBuilder();\n3: \t{ sb.append("c"); }\n4: \tstatic\n5: \t{ sb.append("u"); }\n6: \t{ sb.append("r"); }\n7: }\n8: public class Scorpion extends Arachnid {\n9: \tstatic\n10: \t{ sb.append("q"); }\n11: \t{ sb.append("m"); }\n12: \tpublic static void main(String[] args) {\n13: \t\tSystem.out.print(Scorpion.sb + " ");\n14: \t\tSystem.out.print(Scorpion.sb + " ");\n15: \t\tnew Arachnid();\n16: \t\tnew Scorpion();\n17: \t\tSystem.out.print(Scorpion.sb);\n18: \t}\n}',
      options: [
        "A. qu qu qumrcrc",
        "B. u u ucrcrm",
        "C. uq uq uqmcrcr",
        "D. uq uq uqcrcrm",
        "E. qu qu qumcrcr",
        "F. qu qu qucrcrm",
        "G. The code does not compile.",
      ],
      answer: ["D"],
      explanation:
        "The code compiles and runs without issue, making options E and F incorrect. First, the class is initialized, starting with the superclass Arachnid and then the subclass Scorpion. This involves invoking the static variable declarations and static initializers. The program first prints 1, followed by 8. Then we follow the constructor pathway from the object created on line 14 upward, initializing each class instance using a top-down approach. Within each class, the instance initializers are run, followed by the referenced constructors. The Arachnid instance is initialized, printing 24, followed by the Scorpion instance, printing 93. The final output is 182493, making option D the correct answer.",
    },
    {
      question: "Which of the following are true? (Choose all that apply.)",
      options: [
        "A. this() can be called from anywhere in a constructor.",
        "B. this() can be called from anywhere in an instance method.",
        "C. this.variableName can be called from any instance method in the class.",
        "D. this.variableName can be called from any static method in the class.",
        "E. You can call the default constructor written by the compiler using this().",
        "F. You can access a private constructor with the main() method in the same class.",
      ],
      answer: ["C", "F"],
      explanation:
        "Calling an overloaded constructor with this() may be used only as the first line of a constructor, making options A and B incorrect. Accessing this.variableName can be performed from any instance method, constructor, or instance initializer, but not from a static method or static initializer. For this reason, option C is correct, and option D is incorrect. Option E is tricky. The default constructor is written by the compiler only if no user-defined constructors were provided. And this() can only be called from a constructor in the same class. Since there can be no user-defined constructors in the class if a default constructor was created, it is impossible for option E to be true. Since the main() method is in the same class, it can call private methods in the class, making option F correct.",
    },
    {
      question:
        "Which statements about the following classes are correct? (Choose all that apply.)\n\n1: public class Mammal {\n2: \tprivate void eat() {}\n3: \tprotected static void drink() {}\n4: \tpublic Integer dance(String p) { return null; }\n5: }\n6: class Primate extends Mammal {\n7: \tpublic void eat(String p) {}\n8: }\n9: class Monkey extends Primate {\n10: \tpublic static void drink() throws RuntimeException {}\n11: \tpublic Number dance(CharSequence p) { return null; }\n12: \tpublic int eat(String p) {}\n13: }",
      options: [
        "A. The eat() method in Mammal is correctly overridden on line 7.",
        "B. The eat() method in Mammal is correctly overloaded on line 7.",
        "C. The drink() method in Mammal is correctly overridden on line 10.",
        "D. The drink() method in Mammal is correctly hidden on line 10.",
        "E. The dance() method in Mammal is correctly overridden on line 11.",
        "F. The dance() method in Mammal is correctly overloaded on line 11.",
        "G. The eat() method in Primate is correctly hidden on line 12.",
        "H. The eat() method in Primate is correctly overloaded on line 12.",
      ],
      answer: ["B", "D", "F", "H"],
      explanation:
        "The eat() method is private in the Mammal class. Since it is not inherited in the Primate class, it is neither overridden nor overloaded, making options A and B incorrect. The drink() method in Mammal is correctly hidden in the Monkey class, as the signature is the same and both are static, making option D correct and option C incorrect. The version in the Monkey class throws a new exception, but it is unchecked; therefore, it is allowed. The dance() method in Mammal is correctly overloaded in the Monkey class because the signatures are not the same, making option E incorrect and option F correct. For methods to be overridden, the signatures must match exactly. Finally, line 12 is an invalid override and does not compile, as int is not covariant with void, making options G and H both incorrect.",
    },
    {
      question:
        'What is the output of the following code?\n\n1: class Reptile {\n2: \t{System.out.print("A");}\n3: \tpublic Reptile(int hatch) {}\n4: \tvoid layEggs() {\n5: \t\tSystem.out.print("Reptile");\n6: \t}\n}\n7: public class Lizard extends Reptile {\n8: \tstatic {System.out.print("B");}\n9: \tpublic Lizard(int hatch) {}\n10: \tpublic final void layEggs() {\n11: \t\tSystem.out.print("Lizard");\n12: \t}\n13: \tpublic static void main(String[] args) {\n14: \t\tvar reptile = new Lizard(1);\n15: \t\treptile.layEggs();\n16: \t}\n}',
      options: [
        "A. AALizard",
        "B. BALizard",
        "C. BLizardA",
        "D. ALizard",
        "E. The code will not compile because of line 3.",
        "F. None of the above",
      ],
      answer: ["F"],
      explanation:
        "The code will not compile as is, because the parent class Reptile does not define a no-argument constructor. For this reason, the first line of a Lizard constructor should be an explicit call to super(int), making option F the correct answer. If the code was corrected to compile, it would output BALizard.",
    },
    {
      question:
        "Which statement about the following program is correct?\n\n1: class Bird {\n2: \tint feathers = 0;\n3: \tBird(int x) { this.feathers = x; }\n4: \tBird fly() {\n5: \t\treturn new Bird(1);\n6: \t}\n}\n7: class Parrot extends Bird {\n8: \tprotected Parrot(int y) { super(y); }\n9: \tprotected Parrot fly() {\n10: \t\treturn new Parrot(2);\n11: \t}\n}\n12: public class Macaw extends Parrot {\n13: \tpublic Macaw(int z) { super(z); }\n14: \tpublic Macaw fly() {\n15: \t\treturn new Macaw(3);\n16: \t}\n17: \tpublic static void main(String... sing) {\n18: \t\tBird p = new Macaw(4);\n19: \t\tSystem.out.print(((Parrot)p.fly()).feathers);\n20: \t}\n}",
      options: [
        "A. One line contains a compiler error.",
        "B. Two lines contain compiler errors.",
        "C. Three lines contain compiler errors.",
        "D. The code compiles but throws a ClassCastException at runtime.",
        "E. The program compiles and prints 3.",
        "F. The program compiles and prints 0.",
      ],
      answer: ["E"],
      explanation:
        "The code compiles and runs without issue, making options A, B, C, and D incorrect. The Macaw class overrides the fly() method and returns a new Macaw object with 3 feathers. When p.fly() is called on line 19, it uses the overridden method in Macaw due to polymorphism. The result is then cast to Parrot, which is allowed since Macaw extends Parrot. Finally, the feathers variable is accessed, which prints 3. Therefore, option E is the correct answer.",
    },
    {
      question:
        "Which of the following are properties of immutable classes? (Choose all that apply.)",
      options: [
        "A. The class can contain setter methods, provided they are marked final.",
        "B. The class must not be able to be extended outside the class declaration.",
        "C. The class may not contain any instance variables.",
        "D. The class must be marked static.",
        "E. The class may not contain any static variables.",
        "F. The class may only contain private constructors.",
        "G. The data for mutable instance variables may be read, provided they cannot be modified by the caller.",
      ],
      answer: ["B", "G"],
      explanation:
        "An immutable class should not have setter methods, making option A incorrect. The class must be final or have only private constructors to prevent extension, making option B correct. Immutable classes can have instance variables, so option C is incorrect. Classes cannot be marked static, so option D is incorrect. Immutable classes can have static variables, so option E is incorrect. Immutable classes can have public constructors, so option F is incorrect. Option G is correct, as immutable classes can contain mutable objects as long as they cannot be modified by the caller.",
    },
    {
      question:
        'What does the following program print?\n\n1: class Person {\n2: \tstatic String name;\n3: \tvoid setName(String q) { name = q; }\n}\n4: public class Child extends Person {\n5: \tstatic String name;\n6: \tvoid setName(String w) { name = w; }\n7: \tpublic static void main(String[] p) {\n8: \t\tfinal Child m = new Child();\n9: \t\tfinal Person t = m;\n10: \t\tm.name = "Elysia";\n11: \t\tt.name = "Sophia";\n12: \t\tm.setName("Webby");\n13: \t\tt.setName("Olivia");\n14: \t\tSystem.out.println(m.name + " " + t.name);\n15: \t}\n}',
      options: [
        "A. Elysia Sophia",
        "B. Webby Olivia",
        "C. Olivia Olivia",
        "D. Olivia Sophia",
        "E. The code does not compile.",
        "F. None of the above",
      ],
      answer: ["D"],
      explanation:
        "The Child class overrides the setName() method and hides the static name variable defined in the inherited Person class. Since variables are only hidden, not overridden, there are two distinct name variables accessible, depending on the location and reference type. Line 8 creates a Child instance, which is implicitly cast to a Person reference type on line 9. Line 10 uses the Child reference type, updating Child.name to Elysia. Line 11 uses the Person reference type, updating Person.name to Sophia. Lines 12 and 13 both call the overridden setName() instance method declared on line 6. This sets Child.name to Webby on line 12 and then to Olivia on line 13. The final values of Child.name and Person.name are Olivia and Sophia, respectively, making option D the correct answer.",
    },
    {
      question:
        'What is the output of the following program?\n\n1: class Canine {\n2: \tpublic Canine(boolean t) { logger.append("a"); }\n3: \tpublic Canine() { logger.append("q"); }\n4: \n5: \tprivate StringBuilder logger = new StringBuilder();\n6: \tprotected void print(String v) { logger.append(v); }\n7: \tprotected String view() { return logger.toString(); }\n8: }\n9: \n10: class Fox extends Canine {\n11: \tpublic Fox(long x) { print("p"); }\n12: \tpublic Fox(String name) {\n13: \t\tthis(2);\n14: \t\tprint("z");\n15: \t}\n16: }\n17: \n18: public class Fennec extends Fox {\n19: \tpublic Fennec(int e) {\n20: \t\tsuper("tails");\n21: \t\tprint("j");\n22: \t}\n23: \tpublic Fennec(short f) {\n24: \t\tsuper("eevee");\n25: \t\tprint("m");\n26: \t}\n27: \n28: \tpublic static void main(String... unused) {\n29: \t\tSystem.out.println(new Fennec(1).view());\n30: \t}\n}',
      options: [
        "A. qpz",
        "B. qpzj",
        "C. jzpa",
        "D. apj",
        "E. apjm",
        "F. The code does not compile.",
        "G. None of the above",
      ],
      answer: ["D"],
      explanation:
        "The program compiles and runs without issue. Let's follow the constructor chain: \n1. The main method creates a new Fennec(1), which calls the constructor on line 19. \n2. This constructor calls super(\"tails\"), which goes to the Fox constructor on line 12. \n3. The Fox constructor calls this(2), which goes to the Fox constructor on line 11. \n4. The Fox constructor on line 11 implicitly calls super(), which goes to the no-argument Canine constructor on line 3. \n5. The Canine constructor appends 'a' to the logger. \n6. Control returns to the Fox constructor on line 11, which appends 'p'. \n7. Control returns to the Fox constructor on line 12, which appends 'z'. \n8. Finally, control returns to the Fennec constructor on line 19, which appends 'j'. \n\nTherefore, the final output is 'apj', making option D the correct answer.",
    },
    {
      question:
        'What is printed by the following program?\n\n1: class Antelope {\n2: \tpublic Antelope(int p) {\n3: \t\tSystem.out.print("4");\n4: \t}\n5: \t{ System.out.print("2"); }\n6: \tstatic { System.out.print("1"); }\n7: }\n8: public class Gazelle extends Antelope {\n9: \tpublic Gazelle(int p) {\n10: \t\tsuper(6);\n11: \t\tSystem.out.print("3");\n12: \t}\n13: \tpublic static void main(String hopping[]) {\n14: \t\tnew Gazelle(0);\n15: \t}\n16: \tstatic { System.out.print("8"); }\n17: \t{ System.out.print("9"); }\n18: }',
      options: [
        "A. 182640",
        "B. 182943",
        "C. 182493",
        "D. 421389",
        "E. The code does not compile.",
        "F. The output cannot be determined until runtime.",
      ],
      answer: ["C"],
      explanation:
        "The program compiles and runs without issue. The order of execution is as follows: \n1. Static initializers of Antelope (superclass): prints '1' \n2. Static initializers of Gazelle (subclass): prints '8' \n3. Instance initializer of Antelope: prints '2' \n4. Antelope constructor: prints '4' \n5. Instance initializer of Gazelle: prints '9'\n6. Gazelle constructor: prints '3' \n\nTherefore, the final output is '182493', making option C the correct answer.",
    },
    {
      question:
        "Which of the following are true about a concrete class? (Choose all that apply.)",
      options: [
        "A. A concrete class can be declared as abstract.",
        "B. A concrete class must implement all inherited abstract methods.",
        "C. A concrete class can be marked as final.",
        "D. A concrete class must be immutable.",
        "E. A concrete method that implements an abstract method must match the method declaration of the abstract method exactly.",
      ],
      answer: ["B", "C"],
      explanation:
        "Option A is incorrect because a concrete class, by definition, cannot be declared abstract. Option B is correct; a concrete class must implement all inherited abstract methods. Option C is correct; a concrete class can be marked as final. Option D is incorrect; concrete classes are not required to be immutable. Option E is incorrect; while the method signature must match, the concrete method can have a covariant return type and can be more accessible than the abstract method.",
    },
    {
      question:
        'What is the output of the following code?\n\n4: public abstract class Whale {\n5: \tpublic abstract void dive();\n6: \tpublic static void main(String[] args) {\n7: \t\tWhale whale = new Orca();\n8: \t\twhale.dive(3);\n9: \t}\n10: }\n11: class Orca extends Whale {\n12: \tstatic public int MAX = 3;\n13: \tpublic void dive() {\n14: \t\tSystem.out.println("Orca diving");\n15: \t}\n16: \tpublic void dive(int... depth) {\n17: \t\tSystem.out.println("Orca diving deeper "+MAX);\n18: \t}\n}',
      options: [
        "A. Orca diving",
        "B. Orca diving deeper 3",
        "C. The code will not compile because of line 4.",
        "D. The code will not compile because of line 8.",
        "E. The code will not compile because of line 11.",
        "F. The code will not compile because of line 12.",
        "G. The code will not compile because of line 17.",
        "H. None of the above",
      ],
      answer: ["B"],
      explanation:
        'The code compiles and runs without issue. Let\'s analyze it:\n1. The Whale class is correctly declared as abstract with an abstract method dive().\n2. The Orca class extends Whale and provides an implementation for the abstract dive() method.\n3. The Orca class also overloads the dive() method with a varargs parameter.\n4. In the main method, an Orca object is created and assigned to a Whale reference.\n5. When whale.dive(3) is called, it matches the overloaded dive(int... depth) method in Orca.\n6. This method prints "Orca diving deeper " followed by the value of MAX, which is 3.\n\nTherefore, the output is "Orca diving deeper 3", making option B the correct answer.',
    },
  ],
};
