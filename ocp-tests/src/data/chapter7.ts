export const chapter7 = {
  title: "Chapter 7: Beyond Classes",
  questions: [
    {
      question:
        "Which of the following are valid record declarations? (Choose all that apply.)\n\npublic record Iguana(int age) {\n\tprivate static final int age = 10;\n}\npublic final record Gecko() {}\npublic abstract record Chameleon() {\n\tprivate static String name;\n}\npublic record BeardedDragon(boolean fun) {\n\t@Override public boolean fun() { return false; }\n}\npublic record Newt(long size) {\n\t@Override public boolean equals(Object obj) { return false; }\n\tpublic void setSize(long size) {\n\t\tthis.size = size;\n\t}\n}",
      options: [
        "A. Iguana",
        "B. Gecko",
        "C. Chameleon",
        "D. BeardedDragon",
        "E. Newt",
        "F. None of the above",
      ],
      answer: ["B", "D"],
      explanation:
        "Iguana does not compile, as it declares a static field with the same name as an instance field. Records are implicitly final and cannot be marked abstract, which is why Gecko compiles and Chameleon does not, making option B correct. Notice in Gecko that records are not required to declare any fields. BeardedDragon also compiles, as records may override any accessor methods, making option D correct. Newt does not compile because records are immutable, so any mutator methods that modify fields are not permitted. Overriding the equals() method is allowed, though.",
    },
    {
      question:
        "Which of the following statements can be inserted in the blank line so that the code will compile successfully? (Choose all that apply.)\n\ninterface CanHop {}\npublic class Frog implements CanHop {\n\tpublic static void main(String[] args) {\n\t\t___________ frog = new TurtleFrog();\n\t}\n}\nclass BrazilianHornedFrog extends Frog {}\nclass TurtleFrog extends Frog {}",
      options: [
        "A. Frog",
        "B. TurtleFrog",
        "C. BrazilianHornedFrog",
        "D. CanHop",
        "E. var",
        "F. Long",
        "G. None of the above; the code contains a compilation error.",
      ],
      answer: ["A", "B", "D", "E"],
      explanation:
        "The code compiles without issue, so option G is incorrect. The blank can be filled with any class or interface that is a supertype of TurtleFrog. Option A is the direct superclass of TurtleFrog, and option B is the same class, so both are correct. BrazilianHornedFrog is not a superclass of TurtleFrog, so option C is incorrect. TurtleFrog inherits the CanHop interface, so option D is correct. Option E is also correct, as var is permitted when the type is known. Finally, Long is an unrelated class that is not a superclass of TurtleFrog and is therefore incorrect.",
    },
    {
      question:
        'What is the result of the following program?\n\npublic class Favorites {\n\tenum Flavors {\n\t\tVANILLA, CHOCOLATE, STRAWBERRY\n\t\tstatic final Flavors DEFAULT = STRAWBERRY;\n\t}\n\tpublic static void main(String[] args) {\n\t\tfor(final var e : Flavors.values())\n\t\t\tSystem.out.print(e.ordinal()+" ");\n\t}\n}',
      options: [
        "A. 0 1 2",
        "B. 1 2 3",
        "C. Exactly one line of code does not compile.",
        "D. More than one line of code does not compile.",
        "E. The code compiles but produces an exception at runtime.",
        "F. None of the above",
      ],
      answer: ["C"],
      explanation:
        "When an enum contains only a list of values, the semicolon (;) after the list is optional. When an enum contains any other members, such as a constructor or variable, the semicolon is required. Since the enum list does not end with a semicolon, the code does not compile, making option C the correct answer. If the missing semicolon were added, the program would print 0 1 2 at runtime.",
    },
    {
      question:
        'What is the output of the following program?\n\npublic sealed class ArmoredAnimal permits Armadillo {\n\tpublic ArmoredAnimal(int size) {}\n\t@Override public String toString() { return "Strong"; }\n\tpublic static void main(String[] a) {\n\t\tvar c = new Armadillo(10, null);\n\t\tSystem.out.println(c);\n\t}\n}\nclass Armadillo extends ArmoredAnimal {\n\t@Override public String toString() { return "Cute"; }\n\tpublic Armadillo(int size, String name) {\n\t\tsuper(size);\n\t}\n}',
      options: [
        "A. Strong",
        "B. Cute",
        "C. The program does not compile.",
        "D. The code compiles but produces an exception at runtime.",
        "E. None of the above",
      ],
      answer: ["C"],
      explanation:
        "A class extending a sealed class must be marked final, sealed, or non-sealed. Since Armadillo is missing a modifier, the code does not compile, and option C is correct.",
    },
    {
      question:
        "Which statements about the following program are correct? (Choose all that apply.)\n\n1: interface HasExoskeleton {\n2: \tdouble size = 2.0f;\n3: \tabstract int getNumberOfSections();\n4: }\n5: abstract class Insect implements HasExoskeleton {\n6: \tabstract int getNumberOfLegs();\n7: }\n8: public class Beetle extends Insect {\n9: \tint getNumberOfLegs() { return 6; }\n10: \tint getNumberOfSections(int count) { return 1; }\n11: }",
      options: [
        "A. It compiles without issue.",
        "B. The code will produce a ClassCastException if called at runtime.",
        "C. The code will not compile because of line 2.",
        "D. The code will not compile because of line 5.",
        "E. The code will not compile because of line 8.",
        "F. The code will not compile because of line 10.",
      ],
      answer: ["E"],
      explanation:
        "First, the declarations of HasExoskeleton and Insect are correct and do not contain any errors, making options C and D incorrect. The concrete class Beetle extends Insect and inherits two abstract methods, getNumberOfSections() and getNumberOfLegs(). The Beetle class includes an overloaded version of getNumberOfSections() that takes an int value. The method declaration is valid, making option F incorrect, although it does not satisfy the abstract method requirement inherited from HasExoskeleton. For this reason, only one of the two abstract methods is properly overridden. The Beetle class therefore does not compile, and option E is correct.",
    },
    {
      question:
        "Which statements about the following program are correct? (Choose all that apply.)\n\n1: public abstract interface Herbivore {\n2: \tint amount = 10;\n3: \tpublic void eatGrass();\n4: \tpublic abstract int chew() { return 13; }\n5: }\n6:\n7: abstract class IsAPlant extends Herbivore {\n8: \tObject eatGrass(int season) { return null; }\n9: }",
      options: [
        "A. It compiles and runs without issue.",
        "B. The code will not compile because of line 1.",
        "C. The code will not compile because of line 2.",
        "D. The code will not compile because of line 4.",
        "E. The code will not compile because of line 7.",
        "F. The code will not compile because line 8 contains an invalid method override.",
      ],
      answer: ["D", "E"],
      explanation:
        "Line 4 does not compile because an abstract method cannot include a body. Line 7 also does not compile because the wrong keyword is used. A class implements an interface; it does not extend it. For these reasons, options D and E are correct.",
    },
    {
      question:
        'What is the output of the following program?\n\n1: interface Aquatic {\n2: \tint getNumOfGills(int p);\n3: }\n4: public class ClownFish implements Aquatic {\n5: \tString getNumOfGills() { return "14"; }\n6: \tint getNumOfGills(int input) { return 15; }\n7: \tpublic static void main(String[] args) {\n8: \t\tSystem.out.println(new ClownFish().getNumOfGills(-1));\n9: \t}\n}',
      options: [
        "A. 14",
        "B. 15",
        "C. The code will not compile because of line 4.",
        "D. The code will not compile because of line 5.",
        "E. The code will not compile because of line 6.",
        "F. None of the above",
      ],
      answer: ["E"],
      explanation:
        "The inherited interface method getNumOfGills(int) is implicitly public; therefore, it must be declared public in any concrete class that implements the interface. Since the method uses the package (default) modifier in the ClownFish class, line 6 does not compile, making option E the correct answer. If the method declaration were corrected to include public on line 6, then the program would compile and print 15 at runtime, and option B would be the correct answer.",
    },
    {
      question:
        "When inserted in order, which modifiers can fill in the blank to create a properly encapsulated class? (Choose all that apply.)\n\npublic class Rabbits {\n\t_______ int numRabbits = 0;\n\t_______ void multiply() {\n\t\tnumRabbits *= 6;\n\t}\n\t_______ int getNumberOfRabbits() {\n\t\treturn numRabbits;\n\t}\n}",
      options: [
        "A. private, public, and public",
        "B. private, protected, and private",
        "C. private, private, and protected",
        "D. public, public, and public",
        "E. The class cannot be properly encapsulated since multiply() does not begin with set.",
        "F. None of the above",
      ],
      answer: ["A", "B", "C"],
      explanation:
        "Instance variables must include the private access modifier, making option D incorrect. While it is common for methods to be public, this is not required. Options A, B, and C fulfill this requirement.",
    },
    {
      question:
        "Which of the following statements can be inserted in the blank so that the code will compile successfully? (Choose all that apply.)\n\nabstract class Snake {}\nclass Cobra extends Snake {}\nclass GardenSnake extends Cobra {}\npublic class SnakeHandler {\n\tprivate Snake snakey;\n\tpublic void setSnake(Snake mySnake) { this.snakey = mySnake; }\n\tpublic static void main(String[] args) {\n\t\tnew SnakeHandler().setSnake(_________________);\n\t}\n}",
      options: [
        "A. new Cobra()",
        "B. new Snake()",
        "C. new Object()",
        'D. new String("Snake")',
        "E. new GardenSnake()",
        "F. null",
        "G. None of the above. The class does not compile, regardless of the value inserted in the blank.",
      ],
      answer: ["A", "E", "F"],
      explanation:
        "The setSnake() method requires an instance of Snake. Cobra is a direct subclass, while GardenSnake is an indirect subclass. For these reasons, options A and E are correct. Option B is incorrect because Snake is abstract and requires a concrete subclass for instantiation. Option C is incorrect because Object is a supertype of Snake, not a subtype. Option D is incorrect as String is an unrelated class and does not inherit Snake. Finally, a null value can always be passed as an object value, regardless of type, so option F is also correct.",
    },
    {
      question:
        "What types can be inserted in the blanks on the lines marked X and Z that allow the code to compile? (Choose all that apply.)\n\ninterface Walk { private static List move() { return null; } }\ninterface Run extends Walk { public ArrayList move(); }\nclass Leopard implements Walk {\n\tpublic ________ move() { // X\n\t\treturn null;\n\t}\n}\nclass Panther implements Run {\n\tpublic ________ move() { // Z\n\t\treturn null;\n\t}\n}",
      options: [
        "A. Integer on the line marked X",
        "B. ArrayList on the line marked X",
        "C. List on the line marked X",
        "D. List on the line marked Z",
        "E. ArrayList on the line marked Z",
        "F. None of the above, since the Run interface does not compile",
        "G. The code does not compile for a different reason.",
      ],
      answer: ["A", "B", "C", "E"],
      explanation:
        "Walk declares a private method that is not inherited in any of its subtypes. For this reason, any valid class is supported on line X, making options A, B, and C correct. Line Z is more restrictive, with only ArrayList or subtypes of ArrayList supported, making option E correct.",
    },
    {
      question:
        "What is the result of the following code? (Choose all that apply.)\n\n1: public class Movie {\n2: \tprivate int butter = 5;\n3: \tprivate Movie() {}\n4: \tprotected class Popcorn {\n5: \t\tprivate Popcorn() {}\n6: \t\tpublic static int butter = 10;\n7: \t\tpublic void startMovie() {\n8: \t\t\tSystem.out.println(butter);\n9: \t\t}\n10: \t}\n11: \tpublic static void main(String[] args) {\n12: \t\tvar movie = new Movie();\n13: \t\tMovie.Popcorn in = new Movie().new Popcorn();\n14: \t\tin.startMovie();\n15: \t}\n}",
      options: [
        "A. The output is 5.",
        "B. The output is 10.",
        "C. Line 6 generates a compiler error.",
        "D. Line 12 generates a compiler error.",
        "E. Line 13 generates a compiler error.",
        "F. The code compiles but produces an exception at runtime.",
      ],
      answer: ["B"],
      explanation:
        "Starting with Java 16, inner classes can contain static variables, so the code compiles. Remember that private constructors can be used by any methods within the outer class. The butter reference on line 8 refers to the inner class variable defined on line 6, with the output being 10 at runtime, and making option B correct.",
    },
    {
      question:
        "Which of the following are true about encapsulation? (Choose all that apply.)",
      options: [
        "A. It allows getters.",
        "B. It allows setters.",
        "C. It requires specific naming conventions.",
        "D. It requires public instance variables.",
        "E. It requires private instance variables.",
      ],
      answer: ["A", "B", "E"],
      explanation:
        "Encapsulation allows using methods to get and set instance variables so other classes are not directly using them, making options A and B correct. Instance variables must be private for this to work, making option E correct and option D incorrect. While there are common naming conventions, they are not required, making option C incorrect.",
    },
    {
      question:
        'What is the result of the following program?\n\npublic class Weather {\n\tenum Seasons {\n\t\tWINTER, SPRING, SUMMER, FALL\n\t}\n\tpublic static void main(String[] args) {\n\t\tSeasons v = null;\n\t\tswitch (v) {\n\t\t\tcase Seasons.SPRING -> System.out.print("s");\n\t\t\tcase Seasons.WINTER -> System.out.print("w");\n\t\t\tcase Seasons.SUMMER -> System.out.print("m");\n\t\t\tdefault -> System.out.println("missing data");\n\t\t}\n\t}\n}',
      options: [
        "A. s",
        "B. w",
        "C. m",
        "D. missing data",
        "E. Exactly one line of code does not compile.",
        "F. More than one line of code does not compile.",
        "G. The code compiles but produces an exception at runtime.",
      ],
      answer: ["F"],
      explanation:
        "When using an enum in a switch expression, the case statement must be made up of the enum values only. If the enum name is used in the case statement value, then the code does not compile. In this question, SPRING is acceptable, but Seasons.SPRING is not. For this reason, the three case statements do not compile, making option F the correct answer. If these three lines were corrected, then the code would compile and produce a NullPointerException at runtime.",
    },
    {
      question:
        "Which statements about sealed classes are correct? (Choose all that apply.)",
      options: [
        "A. A sealed interface restricts which subinterfaces may extend it.",
        "B. A sealed class cannot be indirectly extended by a class that is not listed in its permits clause.",
        "C. A sealed class can be extended by an abstract class.",
        "D. A sealed class can be extended by a subclass that uses the non-sealed modifier.",
        "E. A sealed interface restricts which subclasses may implement it.",
        "F. A sealed class cannot contain any nested subclasses.",
        "G. None of the above",
      ],
      answer: ["A", "C", "D", "E"],
      explanation:
        "A sealed interface restricts which interfaces may extend it, or which classes may implement it, making options A and E correct. Option B is incorrect. For example, a non-sealed subclass allows classes not listed in the permits clause to indirectly extend the sealed class. Option C is correct. While a sealed class is commonly extended by a subclass marked final, it can also be extended by a sealed or non-sealed subclass marked abstract. Option D is correct. Option F is incorrect, as sealed classes can contain nested subclasses.",
    },
    {
      question:
        'Which lines, when entered independently into the blank, allow the code to print Not scared at runtime? (Choose all that apply.)\n\npublic class Ghost {\n\tpublic static void boo() {\n\t\tSystem.out.println("Not scared");\n\t}\n\tprotected final class Spirit {\n\t\tpublic void boo() {\n\t\t\tSystem.out.println("Booo!!!");\n\t\t}\n\t}\n\tpublic static void main(String... haunt) {\n\t\tvar g = new Ghost().new Spirit() {};\n\t\t_________________________;\n\t}\n}',
      options: [
        "A. g.boo()",
        "B. g.super.boo()",
        "C. new Ghost().boo()",
        "D. g.Ghost.boo()",
        "E. new Spirit().boo()",
        "F. Ghost.boo()",
        "G. None of the above",
      ],
      answer: ["C", "F"],
      explanation:
        "Trick question—the code does not compile! For this reason, option G is correct. The Spirit class is marked final, so it cannot be extended. The main() method uses an anonymous class that inherits from Spirit, which is not allowed. If Spirit were not marked final, then options C and F would be correct. Option A would print Booo!!!, while options B, D, and E would not compile for various reasons.",
    },
    {
      question:
        "The following code appears in a file named Ostrich.java. What is the result of compiling the source file?\n\n1: public class Ostrich {\n2: \tprivate int count;\n3: \tstatic class OstrichWrangler {\n4: \t\tpublic int stampede() {\n5: \t\t\treturn count;\n6: \t\t}\n\t}\n}",
      options: [
        "A. The code compiles successfully, and one bytecode file is generated: Ostrich.class.",
        "B. The code compiles successfully, and two bytecode files are generated: Ostrich.class and OstrichWrangler.class.",
        "C. The code compiles successfully, and two bytecode files are generated: Ostrich.class and Ostrich$OstrichWrangler.class.",
        "D. A compiler error occurs on line 3.",
        "E. A compiler error occurs on line 5.",
      ],
      answer: ["E"],
      explanation:
        "The OstrichWrangler class is a static nested class; therefore, it cannot access the instance member count. For this reason, line 5 does not compile, and option E is correct.",
    },
    {
      question:
        "Which lines of the following interface declarations do not compile? (Choose all that apply.)\n\n1: public interface Omnivore {\n2: \tint amount = 10;\n3: \tstatic boolean gather = true;\n4: \tstatic void eatGrass() {}\n5: \tint findMore() { return 2; }\n6: \tdefault float rest() { return 2; }\n7: \tprotected int chew() { return 13; }\n8: \tprivate static void eatLeaves() {}\n9: }",
      options: [
        "A. All of the lines compile without issue.",
        "B. Line 2",
        "C. Line 3",
        "D. Line 4",
        "E. Line 5",
        "F. Line 6",
        "G. Line 7",
        "H. Line 8",
      ],
      answer: ["E", "G"],
      explanation:
        "Lines 2 and 3 compile with interface variables implicitly public, static, and final. Line 4 also compiles, as static methods are implicitly public. Line 5 does not compile, making option E correct. Non-static interface methods with a body must be explicitly marked private or default. Line 6 compiles, with the public modifier being added by the compiler. Line 7 does not compile, as interfaces do not have protected members, making option G correct. Finally, line 8 compiles without issue.",
    },
    {
      question:
        'What is printed by the following program?\n\npublic class Deer {\n\tenum Food {APPLES, BERRIES, GRASS}\n\tprotected class Diet {\n\t\tprivate Food getFavorite() {\n\t\t\treturn Food.BERRIES;\n\t\t}\n\t}\n\tpublic static void main(String[] seasons) {\n\t\tSystem.out.print(switch(new Diet().getFavorite()) {\n\t\t\tcase APPLES -> "a";\n\t\t\tcase BERRIES -> "b";\n\t\t\tdefault -> "c";\n\t\t});\n\t}\n}',
      options: [
        "A. a",
        "B. b",
        "C. c",
        "D. The code declaration of the Diet class does not compile.",
        "E. The main() method does not compile.",
        "F. The code compiles but produces an exception at runtime.",
        "G. None of the above",
      ],
      answer: ["E"],
      explanation:
        "Diet is an inner class, which requires an instance of Deer to instantiate. Since the main() method is static, there is no such instance. Therefore, the main() method does not compile, and option E is correct. If a reference to Deer were used, such as calling new Deer().new Diet(), then the code would compile and print b at runtime.",
    },
    {
      question:
        "Which of the following are printed by the Bear program? (Choose all that apply.)\n\npublic class Bear {\n\tenum FOOD {\n\t\tBERRIES, INSECTS {\n\t\t\tpublic boolean isHealthy() { return true; }},\n\t\tFISH, ROOTS, COOKIES, HONEY;\n\t\tpublic abstract boolean isHealthy();\n\t}\n\tpublic static void main(String[] args) {\n\t\tSystem.out.print(FOOD.INSECTS);\n\t\tSystem.out.print(FOOD.INSECTS.ordinal());\n\t\tSystem.out.print(FOOD.INSECTS.isHealthy());\n\t\tSystem.out.print(FOOD.COOKIES.isHealthy());\n\t}\n}",
      options: [
        "A. insects",
        "B. INSECTS",
        "C. 0",
        "D. 1",
        "E. false",
        "F. true",
        "G. The code does not compile.",
      ],
      answer: ["G"],
      explanation:
        "The isHealthy() method is marked abstract in the enum; therefore, it must be implemented in each enum value declaration. Since only INSECTS implements it, the code does not compile, making option G correct.",
    },
    {
      question:
        "Which statements about polymorphism and method inheritance are correct? (Choose all that apply.)",
      options: [
        "A. Given an arbitrary instance of a class, it cannot be determined until runtime which overridden method will be executed in a parent class.",
        "B. It cannot be determined until runtime which hidden method will be executed in a parent class.",
        "C. Marking a method static prevents it from being overridden or hidden.",
        "D. Marking a method final prevents it from being overridden or hidden.",
        "E. The reference type of the variable determines which overridden method will be called at runtime.",
        "F. The reference type of the variable determines which hidden method will be called at runtime.",
      ],
      answer: ["A", "D", "F"],
      explanation:
        "Polymorphism is the property of an object to take on many forms. Part of polymorphism is that methods are replaced through overriding wherever they are called, regardless of whether they're in a parent or child class. For this reason, option A is correct, and option E is incorrect. With hidden static methods, Java relies on the location and reference type to determine which method is called, making option B incorrect and option F correct. Finally, making a method final, not static, prevents it from being overridden, making option D correct and option C incorrect.",
    },
    {
      question:
        "Given the following record declaration, which lines of code can fill in the blank and allow the code to compile? (Choose all that apply.)\n\npublic record RabbitFood(int size, String brand, LocalDate expires) {\n\tpublic static int MAX_STORAGE = 100;\n\tpublic RabbitFood() {\n\t\t_________________________;\n\t}\n}",
      options: [
        "A. size = MAX_STORAGE",
        "B. this.size = 10",
        "C. if(expires.isAfter(LocalDate.now())) throw new RuntimeException()",
        'D. if(brand==null) super.brand = "Unknown"',
        "E. throw new RuntimeException()",
        "F. None of the above",
      ],
      answer: ["F"],
      explanation:
        'The record defines an overloaded constructor using parentheses, not a compact one. For this reason, the first line must be a call to another constructor, such as this(500, "Acme", LocalDate.now()). For this reason, the code does not compile and option F is correct. If the parentheses were removed from the constructor to declare a compact constructor, then options A, C, and E would be correct.',
    },
    {
      question:
        "Which of the following can be inserted in the rest() method? (Choose all that apply.)\n\npublic class Lion {\n\tclass Cub {}\n\tstatic class Den {}\n\tstatic void rest() {\n\t\t_______________________;\n\t}\n}",
      options: [
        "A. Cub a = Lion.new Cub()",
        "B. Lion.Cub b = new Lion().Cub()",
        "C. Lion.Cub c = new Lion().new Cub()",
        "D. var d = new Den()",
        "E. var e = Lion.new Cub()",
        "F. Lion.Den f = Lion.new Den()",
        "G. Lion.Den g = new Lion.Den()",
        "H. var h = new Cub()",
      ],
      answer: ["C", "D", "G"],
      explanation:
        "Option C correctly creates an instance of an inner class Cub using an instance of the outer class Lion. Options A, B, E, and H use incorrect syntax for creating an instance of the Cub class. Options D and G correctly create an instance of the static nested Den class, which does not require an instance of Lion, while option F uses invalid syntax.",
    },
    {
      question:
        'Given the following program, what can be inserted into the blank line that would allow it to print Swim! at runtime?\n\ninterface Swim {\n\tdefault void perform() { System.out.print("Swim!"); }\n}\ninterface Dance {\n\tdefault void perform() { System.out.print("Dance!"); }\n}\npublic class Penguin implements Swim, Dance {\n\tpublic void perform() { System.out.print("Smile!"); }\n\tprivate void doShow() {\n\t\t_________________________;\n\t}\n\tpublic static void main(String[] eggs) {\n\t\tnew Penguin().doShow();\n\t}\n}',
      options: [
        "A. super.perform()",
        "B. Swim.perform()",
        "C. super.Swim.perform()",
        "D. Swim.super.perform()",
        "E. The code does not compile regardless of what is inserted into the blank.",
        "F. The code compiles, but due to polymorphism, it is not possible to produce the requested output without creating a new object.",
      ],
      answer: ["D"],
      explanation:
        "First, if a class or interface inherits two interfaces containing default methods with the same signature, it must override the method with its own implementation. The Penguin class does this correctly, so option E is incorrect. The way to access an inherited default method is by using the syntax Swim.super.perform(), making option D correct. We agree that the syntax is bizarre, but you need to learn it. Options A, B, and C are incorrect and result in compiler errors.",
    },
    {
      question:
        "Which lines of the following interface do not compile? (Choose all that apply.)\n\n1: public interface BigCat {\n2: \tabstract String getName();\n3: \tstatic int hunt() { getName(); return 5; }\n4: \tdefault void climb() { rest(); }\n5: \tprivate void roar() { getName(); climb(); hunt(); }\n6: \tprivate static boolean sneak() { roar(); return true; }\n7: \tprivate int rest() { return 2; };\n8: }",
      options: [
        "A. Line 2",
        "B. Line 3",
        "C. Line 4",
        "D. Line 5",
        "E. Line 6",
        "F. Line 7",
        "G. None of the above",
      ],
      answer: ["B", "E"],
      explanation:
        "Line 3 does not compile because the static method hunt() cannot access an abstract instance method getName(), making option B correct. Line 6 does not compile because the private static method sneak() cannot access the private instance method roar(), making option E correct. The rest of the lines compile without issue.",
    },
    {
      question:
        'What does the following program print?\n\n1: public class Zebra {\n2: \tprivate int x = 24;\n3: \tpublic int hunt() {\n4: \t\tString message = "x is ";\n5: \t\tabstract class Stripes {\n6: \t\t\tprivate int x = 0;\n7: \t\t\tpublic void print() {\n8: \t\t\t\tSystem.out.print(message + Zebra.this.x);\n9: \t\t\t}\n10: \t\t}\n11: \t\tvar s = new Stripes() {};\n12: \t\ts.print();\n13: \t\treturn x;\n14: \t}\n15: \tpublic static void main(String[] args) {\n16: \t\tnew Zebra().hunt();\n17: \t}\n}',
      options: [
        "A. x is 0",
        "B. x is 24",
        "C. Line 6 generates a compiler error.",
        "D. Line 8 generates a compiler error.",
        "E. Line 11 generates a compiler error.",
        "F. None of the above",
      ],
      answer: ["B"],
      explanation:
        "Zebra.this.x is the correct way to refer to x in the Zebra class. Line 5 defines an abstract local class within a method, while line 11 defines a concrete anonymous class that extends the Stripes class. The code compiles without issue and prints x is 24 at runtime, making option B the correct answer.",
    },
    {
      question:
        "Which statements about the following enum are true? (Choose all that apply.)\n\n1: public enum Animals {\n2: \tMAMMAL(true), INVERTEBRATE(Boolean.FALSE), BIRD(false),\n3: \tREPTILE(false), AMPHIBIAN(false), FISH(false) {\n4: \t\tpublic int swim() { return 4; }\n5: \t}\n6: \tfinal boolean hasHair;\n7: \tpublic Animals(boolean hasHair) {\n8: \t\tthis.hasHair = hasHair;\n9: \t}\n10: \tpublic boolean hasHair() { return hasHair; }\n11: \tpublic int swim() { return 0; }\n12: }",
      options: [
        "A. Compiler error on line 2",
        "B. Compiler error on line 3",
        "C. Compiler error on line 7",
        "D. Compiler error on line 8",
        "E. Compiler error on line 10",
        "F. Compiler error on another line",
        "G. The code compiles successfully.",
      ],
      answer: ["F"],
      explanation:
        "Enums are required to have a semicolon (;) after the list of values if there is anything else in the enum. Don't worry; you won't be expected to track down missing semicolons on the whole exam—only on enum questions. For this reason, line 5 should have a semicolon after it since it is the end of the list of enums, making option F correct. Enum constructors are implicitly private, making option C correct as well. The rest of the enum compiles without issue.",
    },
    {
      question:
        "Assuming a record is defined with at least one field, which components does the compiler always insert, each of which may be overridden or redeclared? (Choose all that apply.)",
      options: [
        "A. A no-argument constructor",
        "B. An accessor method for each field",
        "C. The toString() method",
        "D. The equals() method",
        "E. A mutator method for each field",
        "F. A sort method for each field",
        "G. The hashCode() method",
      ],
      answer: ["B", "C", "D", "G"],
      explanation:
        "The compiler inserts an accessor for each field, a constructor containing all of the fields in the order they are declared, and useful implementations of equals(), hashCode(), and toString(), making options B, C, D, and G correct. Option A is incorrect, as the compiler would only insert a no-argument constructor if the record had no fields. Option E is incorrect, as records are immutable. Option F is also incorrect and not a property of records.",
    },
    {
      question:
        "Which of the following classes and interfaces do not compile? (Choose all that apply.)\n\npublic abstract class Camel { void travel(); }\npublic interface EatsGrass { private abstract int chew(); }\npublic abstract class Elephant {\n\tabstract private class SleepsAlot {\n\t\tabstract int sleep();\n\t}\n}\npublic class Eagle { abstract soar(); }\npublic interface Spider { default void crawl() {} }",
      options: [
        "A. Camel",
        "B. EatsGrass",
        "C. Elephant",
        "D. Eagle",
        "E. Spider",
        "F. None of the classes or interfaces compile.",
      ],
      answer: ["A", "B", "D"],
      explanation:
        "Camel does not compile because the travel() method does not declare a body, nor is it marked abstract, making option A correct. EatsGrass also does not compile because an interface method cannot be marked both private and abstract, making option B correct. Finally, Eagle does not compile because it declares an abstract method soar() in a concrete class, making option D correct. The other classes compile without issue.",
    },
    {
      question:
        "How many lines of the following program contain a compilation error?\n\n1: class Primate {\n2: \tprotected int age = 2;\n3: \t{ age = 1; }\n4: \tpublic Primate() {\n5: \t\tthis().age = 3;\n6: \t}\n7: }\n8: public class Orangutan {\n9: \tprotected int age = 4;\n10: \t{ age = 5; }\n11: \tpublic Orangutan() {\n12: \t\tthis().age = 6;\n13: \t}\n14: \tpublic static void main(String[] bananas) {\n15: \t\tfinal Primate x = (Primate)new Orangutan();\n16: \t\tSystem.out.println(x.age);\n17: \t}\n18: }",
      options: [
        "A. None, and the program prints 1 at runtime.",
        "B. None, and the program prints 3 at runtime.",
        "C. None, but it causes a ClassCastException at runtime.",
        "D. 1",
        "E. 2",
        "F. 3",
        "G. 4",
      ],
      answer: ["F"],
      explanation:
        "The code does not compile, so options A through C are incorrect. Both lines 5 and 12 do not compile, as this() is used instead of this. Remember, this() refers to calling a constructor, whereas this is a reference to the current instance. Next, the compiler does not allow casting to an unrelated class type. Since Orangutan is not a subclass of Primate, the cast on line 15 is invalid, and the code does not compile. Due to these three lines containing compilation errors, option F is the correct answer.",
    },
    {
      question:
        "Assuming the following classes are declared as top-level types in the same file, which classes contain compiler errors? (Choose all that apply.)\n\nsealed class Bird {\n\tpublic final class Flamingo extends Bird {}\n}\nsealed class Monkey {}\nclass EmperorTamarin extends Monkey {}\nnon-sealed class Mandrill extends Monkey {}\nsealed class Friendly extends Mandrill permits Silly {}\nfinal class Silly {}",
      options: [
        "A. Bird",
        "B. Monkey",
        "C. EmperorTamarin",
        "D. Mandrill",
        "E. Friendly",
        "F. Silly",
        "G. All of the classes compile without issue.",
      ],
      answer: ["C", "E"],
      explanation:
        "Bird and its nested Flamingo subclass compile without issue. The permits clause is optional if the subclass is nested or declared in the same file. For this reason, Monkey and its subclass Mandrill also compile without issue. EmperorTamarin does not compile, as it is missing a non-sealed, sealed, or final modifier, making option C correct. Friendly also does not compile, since it lists a subclass Silly that does not extend it, making option E correct. While the permits clause is optional, the extends clause is not. Silly compiles just fine. Even though it does not extend Friendly, the compiler error is in the sealed class.",
    },
  ],
};
