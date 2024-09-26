export const chapter8 = {
  title: "Chapter 8: Lambdas and Functional Interfaces",
  questions: [
    {
      question:
        'What is the result of the following class?\n\n1: import java.util.function.*;\n2:\n3: public class Panda {\n4: \tint age;\n5: \tpublic static void main(String[] args) {\n6: \t\tPanda p1 = new Panda();\n7: \t\tp1.age = 1;\n8: \t\tcheck(p1, p -> p.age < 5);\n9: \t}\n10: \tprivate static void check(Panda panda,\n11: \t\tPredicate<Panda> pred) {\n12: \t\tString result =\n13: \t\t\tpred.test(panda) ? "match" : "not match";\n14: \t\tSystem.out.print(result);\n15: \t} }',
      options: [
        "A. match",
        "B. not match",
        "C. Compiler error on line 8",
        "D. Compiler error on lines 10 and 11",
        "E. Compiler error on lines 12 and 13",
        "F. A runtime exception is thrown.",
      ],
      answer: ["A"],
      explanation:
        "This code is correct. Line 8 creates a lambda expression that checks whether the age is less than 5, making option A correct. Since there is only one parameter and it does not specify a type, the parentheses around the parameter are optional. Lines 11 and 13 use the Predicate interface, which declares a test() method.",
    },
    {
      question:
        'What is the result of the following code?\n\n1: interface Climb {\n2: \tboolean isTooHigh(int height, int limit);\n3: }\n4:\n5: public class Climber {\n6: \tpublic static void main(String[] args) {\n7: \t\tcheck((h, m) -> h.append(m).isEmpty(), 5);\n8: \t}\n9: \tprivate static void check(Climb climb, int height) {\n10: \t\tif (climb.isTooHigh(height, 10))\n11: \t\t\tSystem.out.println("too high");\n12: \t\telse\n13: \t\t\tSystem.out.println("ok");\n14: \t}\n15: }',
      options: [
        "A. ok",
        "B. too high",
        "C. Compiler error on line 7",
        "D. Compiler error on line 10",
        "E. Compiler error on a different line",
        "F. A runtime exception is thrown.",
      ],
      answer: ["C"],
      explanation:
        "The interface takes two int parameters. The code on line 7 attempts to use them as if h is a String making option C correct. It is tricky to use types in a lambda when they are implicitly specified. Remember to check the interface for the real type.",
    },
    {
      question:
        "Which statements about functional interfaces are true? (Choose all that apply.)",
      options: [
        "A. A functional interface can contain default and private methods.",
        "B. A functional interface can be defined as a class or an interface.",
        "C. Abstract methods with signatures that are contained in public methods of java.lang.Object do not count toward the abstract method count for a functional interface.",
        "D. A functional interface cannot contain static or private static methods.",
        "E. A functional interface must be marked with the @FunctionalInterface annotation.",
      ],
      answer: ["A", "C"],
      explanation:
        "A functional interface can contain any number of non-abstract methods, including default, private, static, and private static. For this reason, option A is correct, and option D is incorrect. Option B is incorrect, as classes are never considered functional interfaces. A functional interface contains exactly one abstract method, although methods that have matching signatures as public methods in java.lang.Object do not count toward the single method test. For these reasons, option C is correct. Finally, option E is incorrect. While a functional interface can be marked with the @FunctionalInterface annotation, it is not required.",
    },
    {
      question:
        'Which lambda can replace the MySecret class to return the same value? (Choose all that apply.)\n\ninterface Secret {\n\tString magic(double d);\n}\nclass MySecret implements Secret {\n\tpublic String magic(double d) {\n\t\treturn "Poof";\n\t} }',
      options: [
        'A. (e) -> "Poof"',
        'B. (e) -> {"Poof"}',
        'C. (e) -> { String e = ""; "Poof" }',
        'D. (e) -> { String e = ""; return "Poof"; }',
        'E. (e) -> { String e = ""; return "Poof" }',
        'F. (e) -> { String f = ""; return "Poof"; }',
      ],
      answer: ["A", "F"],
      explanation:
        "Option B is incorrect because it does not use the return keyword. Options C, D, and E are incorrect because the variable e is already in use from the lambda and cannot be redefined. Additionally, option C is missing the return keyword, and option E is missing the semicolon. Therefore, options A and F are correct.",
    },
    {
      question:
        "Which of the following functional interfaces contain an abstract method that returns a primitive value? (Choose all that apply.)",
      options: [
        "A. BooleanSupplier",
        "B. CharSupplier",
        "C. DoubleSupplier",
        "D. FloatSupplier",
        "E. IntSupplier",
        "F. StringSupplier",
      ],
      answer: ["A", "C", "E"],
      explanation:
        "Java includes support for three primitive streams, along with numerous functional interfaces to go with them: int, double, and long. For this reason, options C and E are correct. Additionally, there is a BooleanSupplier functional interface, making option A correct. Java does not include primitive streams or related functional interfaces for other numeric data types, making options B and D incorrect. Option F is incorrect because String is not a primitive but an object. Only primitives have custom suppliers.",
    },
    {
      question:
        "Which of the following lambda expressions can be passed to a function of Predicate<String> type? (Choose all that apply.)",
      options: [
        "A. s -> s.isEmpty()",
        "B. s --> s.isEmpty()",
        "C. (String s) -> s.isEmpty()",
        "D. (String s) --> s.isEmpty()",
        "E. (StringBuilder s) -> s.isEmpty()",
        "F. (StringBuilder s) --> s.isEmpty()",
      ],
      answer: ["A", "C"],
      explanation:
        "Predicate<String> takes a parameter list of one parameter using the specified type. Options E and F are incorrect because they specify the wrong type. Options B and D are incorrect because they use the wrong syntax for the arrow operator. This leaves us with options A and C as the answers.",
    },
    {
      question:
        "Which of these statements is true about the following code?\n\npublic void method() {\n\tx((var x) -> {}, (var x, var y) -> false);\n}\npublic void x(Consumer<String> x, BinaryOperator<Boolean> y) {}",
      options: [
        "A. The code does not compile because of one of the variables named x.",
        "B. The code does not compile because of one of the variables named y.",
        "C. The code does not compile for another reason.",
        "D. The code compiles, and the x in each lambda refers to the same type.",
        "E. The code compiles, and the x in each lambda refers to a different type.",
      ],
      answer: ["E"],
      explanation:
        "While there appears to have been a variable name shortage when this code was written, it does compile. Lambda variables and method names are allowed to be the same. The x lambda parameter is scoped to within each lambda, so it is allowed to be reused. The type is inferred by the method it calls. The first lambda maps x to a String and the second to a Boolean. Therefore, option E is correct.",
    },
    {
      question:
        "Which of the following is equivalent to this code? (Choose all that apply.)\n\nUnaryOperator<Integer> u = x -> x * x;",
      options: [
        "A. BiFunction<Integer> f = x -> x*x;",
        "B. BiFunction<Integer, Integer> f = x -> x*x;",
        "C. BinaryOperator<Integer, Integer> f = x -> x*x;",
        "D. Function<Integer> f = x -> x*x;",
        "E. Function<Integer, Integer> f = x -> x*x;",
        "F. None of the above",
      ],
      answer: ["E"],
      explanation:
        "The question starts with a UnaryOperator<Integer>, which takes one parameter and returns a value of the same type. Therefore, option E is correct, as UnaryOperator extends Function. Notice that other options don't even compile because they have the wrong number of generic types for the functional interface provided. You should know that a BiFunction<T,U,R> takes three generic arguments, a BinaryOperator<T> takes one generic argument, and a Function<T,R> takes two generic arguments.",
    },
    {
      question: "Which statements are true? (Choose all that apply.)",
      options: [
        "A. The Consumer interface is good for printing out an existing value.",
        "B. The Supplier interface is good for printing out an existing value.",
        "C. The IntegerSupplier interface returns an int.",
        "D. The Predicate interface returns an int.",
        "E. The Function interface has a method named test().",
        "F. The Predicate interface has a method named test().",
      ],
      answer: ["A", "F"],
      explanation:
        "Option A is correct and option B is incorrect because a Supplier returns a value while a Consumer takes one and acts on it. Option C is tricky. IntSupplier does return an int. However, the option asks about IntegerSupplier, which doesn't exist. Option D is incorrect because a Predicate returns a boolean. It does have a method named test(), making option F correct. Finally, option E is incorrect because Function has an apply() method.",
    },
    {
      question:
        "Which of the following can be inserted without causing a compilation error? (Choose all that apply.)\n\npublic void remove(List<Character> chars) {\n\tchar end = 'z';\n\tPredicate<Character> predicate = c -> {\n\t\tchar start = 'a'; return start <= c && c <= end; };\n\t// INSERT LINE HERE\n}",
      options: [
        "A. char start = 'a';",
        "B. char c = 'x';",
        "C. chars = null;",
        "D. end = '1';",
        "E. None of the above",
      ],
      answer: ["A", "B", "C"],
      explanation:
        "Since the scope of start and c is within the lambda, the variables can be declared or updated after it without issue, making options A, B, and C correct. Option D is incorrect because setting end prevents it from being effectively final.",
    },
    {
      question:
        'How many times is true printed out by this code?\n\nimport java.util.function.Predicate;\npublic class Fantasy {\n\tpublic static void scary(String animal) {\n\t\tvar dino = s -> "dino".equals(animal);\n\t\tvar dragon = s -> "dragon".equals(animal);\n\t\tvar combined = dino.or(dragon);\n\t\tSystem.out.println(combined.test(animal));\n\t}\n\tpublic static void main(String[] args) {\n\t\tscary("dino");\n\t\tscary("dragon");\n\t\tscary("unicorn");\n\t}\n}',
      options: [
        "A. One",
        "B. Two",
        "C. Three",
        "D. The code does not compile.",
        "E. A runtime exception is thrown.",
      ],
      answer: ["D"],
      explanation:
        "The code does not compile because the lambdas are assigned to var. The compiler does not have enough information to determine they are of type Predicate<String>. Therefore, option D is correct.",
    },
    {
      question:
        "What does the following code output?\n\nFunction<Integer, Integer> s = a -> a + 4;\nFunction<Integer, Integer> t = a -> a * 3;\nFunction<Integer, Integer> c = s.compose(t);\nSystem.out.print(c.apply(1));",
      options: [
        "A. 7",
        "B. 15",
        "C. The code does not compile because of the data types in the lambda expressions.",
        "D. The code does not compile because of the compose() call.",
        "E. The code does not compile for another reason.",
      ],
      answer: ["A"],
      explanation:
        "The a.compose(b) method calls the Function parameter b before the reference Function variable a. In this case, that means that we multiply by 3 before adding 4. This gives a result of 7, making option A correct.",
    },
    {
      question:
        "Which is true of the following code?\n\nint length = 3;\nfor (int i = 0; i<3; i++) {\n\tif (i%2 == 0) {\n\t\tSupplier<Integer> supplier = () -> length; // A\n\t\tSystem.out.println(supplier.get()); // B\n\t} else {\n\t\tint j = i;\n\t\tSupplier<Integer> supplier = () -> j; // C\n\t\tSystem.out.println(supplier.get()); // D\n\t}\n}",
      options: [
        "A. The first compiler error is on line A.",
        "B. The first compiler error is on line B.",
        "C. The first compiler error is on line C.",
        "D. The first compiler error is on line D.",
        "E. The code compiles successfully.",
      ],
      answer: ["E"],
      explanation:
        "Lambdas are only allowed to reference final or effectively final variables. You can tell the variable j is effectively final because adding a final keyword before it wouldn't introduce a compiler error. Each time the else statement is executed, the variable is redeclared and goes out of scope. Therefore, it is not reassigned. Similarly, length is effectively final. There are no compiler errors, and option E is correct.",
    },
    {
      question:
        'Which lambda expression, when entered into the blank line in the following code, causes the program to print hahaha? (Choose all that apply.)\n\nimport java.util.function.Predicate;\npublic class Hyena {\n\tprivate int age = 1;\n\tpublic static void main(String[] args) {\n\t\tvar p = new Hyena();\n\t\tdouble height = 10;\n\t\tint age = 1;\n\t\ttestLaugh(p, _________________________);\n\t\tage = 2;\n\t}\n\tstatic void testLaugh(Hyena panda, Predicate<Hyena> joke) {\n\t\tvar r = joke.test(panda) ? "hahaha" : "silence";\n\t\tSystem.out.print(r);\n\t}\n}',
      options: [
        "A. var -> p.age <= 10",
        "B. shenzi -> age==1",
        "C. p -> true",
        "D. age==1",
        "E. shenzi -> age==2",
        "F. h -> h.age < 5",
        "G. None of the above, as the code does not compile",
      ],
      answer: ["A", "F"],
      explanation:
        "Option A is a valid lambda expression. While main() is a static method, it can access age since it is using a reference to an instance of Hyena, which is effectively final in this method. Since var is not a reserved word, it may be used for variable names. Option F is also correct, with the lambda variable being a reference to a Hyena object. The variable is processed using deferred execution in the testLaugh() method. Options B and E are incorrect; since the local variable age is not effectively final, this would lead to a compilation error. Option C would also cause a compilation error, since the expression uses the variable name p, which is already declared within the method. Finally, option D is incorrect, as this is not even a lambda expression.",
    },
    {
      question:
        "Which of the following can be inserted without causing a compilation error? (Choose all that apply.)\n\npublic void remove(List<Character> chars) {\n\tchar end = 'z';\n\t// INSERT LINE HERE\n\tPredicate<Character> predicate = c -> {\n\t\tchar start = 'a'; return start <= c && c <= end; };\n}",
      options: [
        "A. char start = 'a';",
        "B. char c = 'x';",
        "C. chars = null;",
        "D. end = '1';",
        "E. None of the above",
      ],
      answer: ["C"],
      explanation:
        "Lambdas are not allowed to redeclare local variables, making options A and B incorrect. Option D is incorrect because setting end prevents it from being effectively final. Lambdas are only allowed to reference final or effectively final variables. Option C compiles since chars is not used.",
    },
    {
      question:
        'What is the result of running the following class?\n\n1: import java.util.function.*;\n2:\n3: public class Panda {\n4: \tint age;\n5: \tpublic static void main(String[] args) {\n6: \t\tPanda p1 = new Panda();\n7: \t\tp1.age = 1;\n8: \t\tcheck(p1, p -> {p.age < 5});\n9: \t}\n10: \tprivate static void check(Panda panda,\n11: \t\tPredicate<Panda> pred) {\n12: \t\tString result = pred.test(panda)\n13: \t\t\t? "match" : "not match";\n14: \t\tSystem.out.print(result);\n15: \t} }',
      options: [
        "A. match",
        "B. not match",
        "C. Compiler error on line 8",
        "D. Compiler error on line 10",
        "E. Compiler error on line 12",
        "F. A runtime exception is thrown.",
      ],
      answer: ["C"],
      explanation:
        "Line 8 uses braces around the body. This means the return keyword and semicolon are required. Since the code doesn't compile, option C is the answer.",
    },
    {
      question:
        "Which functional interfaces complete the following code? For line 7, assume m and n are instances of functional interfaces that exist and have the same type as y. (Choose three.)\n\n6: _________ x = String::new;\n7: _________ y = m.andThen(n);\n8: _________ z = a -> a + a;",
      options: [
        "A. BinaryConsumer<String, String>",
        "B. BiConsumer<String, String>",
        "C. BinaryFunction<String, String>",
        "D. BiFunction<String, String>",
        "E. Predicate<String>",
        "F. Supplier<String>",
        "G. UnaryOperator<String>",
        "H. UnaryOperator<String, String>",
      ],
      answer: ["F", "B", "G"],
      explanation:
        "We can eliminate four choices right away. Options A and C are there to mislead you; these interfaces don't exist. Option D is incorrect because a BiFunction<T,U,R> takes three generic arguments, not two. Option E is incorrect because none of the examples returns a boolean. The declaration on line 6 doesn't take any parameters, and it returns a String, so a Supplier<String> can fill in the blank, making option F correct. The declaration on line 7 requires you to recognize that Consumer and Function, along with their binary equivalents, have an andThen() method. This makes option B correct. Finally, line 8 takes a single parameter, and it returns the same type, which is a UnaryOperator. Since the types are the same, only one generic parameter is needed, making option G correct.",
    },
    {
      question:
        'Which of the following compiles and prints out the entire set? (Choose all that apply.)\n\nSet<?> set = Set.of("lion", "tiger", "bear");\nvar s = Set.copyOf(set);\nConsumer<Object> consumer = _____________________;\ns.forEach(consumer);',
      options: [
        "A. () -> System.out.println(s)",
        "B. s -> System.out.println(s)",
        "C. (s) -> System.out.println(s)",
        "D. System.out.println(s)",
        "E. System::out::println",
        "F. System.out::println",
      ],
      answer: ["F"],
      explanation:
        "While there is a lot in this question trying to confuse you, note that there are no options about the code not compiling. This allows you to focus on the lambdas and method references. Option A is incorrect because a Consumer requires one parameter. Options B and C are close. The syntax for a lambda is correct. However, s is already defined as a local variable, and therefore the lambda can't redefine it. Options D and E use incorrect syntax for a method reference. Option F is correct.",
    },
    {
      question:
        'Which lambdas can replace the new Sloth() call in the main() method and produce the same output at runtime? (Choose all that apply.)\n\nimport java.util.List;\ninterface Yawn {\n\tString yawn(double d, List<Integer> time);\n}\nclass Sloth implements Yawn {\n\tpublic String yawn(double zzz, List<Integer> time) {\n\t\treturn "Sleep: " + zzz;\n\t} }\npublic class Vet {\n\tpublic static String takeNap(Yawn y) {\n\t\treturn y.yawn(10, null);\n\t}\n\tpublic static void main(String... unused) {\n\t\tSystem.out.print(takeNap(new Sloth()));\n\t} }',
      options: [
        'A. (z,f) -> { String x = ""; return "Sleep: " + x }',
        'B. (t,s) -> { String t = ""; return "Sleep: " + t; }',
        'C. (w,q) -> {"Sleep: " + w}',
        'D. (e,u) -> { String g = ""; "Sleep: " + e }',
        'E. (a,b) -> "Sleep: " + (double)(b==null ? a : a)',
        'F. (r,k) -> { String g = ""; return "Sleep:"; }',
      ],
      answer: ["E"],
      explanation:
        "Option A does not compile because the second statement within the block is missing a semicolon (;) at the end. Option B is an invalid lambda expression because t is defined twice: in the parameter list and within the lambda expression. Options C and D are both missing a return statement and semicolon. Options E and F are both valid lambda expressions, although only option E matches the behavior of the Sloth class. In particular, option F only prints Sleep:, not Sleep: 10.0.",
    },
    {
      question:
        "Which of the following are valid functional interfaces? (Choose all that apply.)\n\npublic interface Transport {\n\tpublic int go();\n\tpublic boolean equals(Object o);\n}\n\npublic abstract class Car {\n\tpublic abstract Object swim(double speed, int duration);\n}\n\npublic interface Locomotive extends Train {\n\tpublic int getSpeed();\n}\n\npublic interface Train extends Transport {}\n\nabstract interface Spaceship extends Transport {\n\tdefault int blastOff();\n}\n\npublic interface Boat {\n\tint hashCode();\n\tint hashCode(String input);\n}",
      options: [
        "A. Boat",
        "B. Car",
        "C. Locomotive",
        "D. Spaceship",
        "E. Transport",
        "F. Train",
      ],
      answer: ["A", "E", "F"],
      explanation:
        "A valid functional interface is one that contains a single abstract method, excluding any public methods that are already defined in the java.lang.Object class. Transport and Boat are valid functional interfaces, as they each contain a single abstract method: go() and hashCode(String), respectively. This gives us options A and E. Since the other methods are part of Object, they do not count as abstract methods. Train is also a functional interface since it extends Transport and does not define any additional abstract methods. This adds option F as the final correct answer. Car is not a functional interface because it is an abstract class. Locomotive is not a functional interface because it includes two abstract methods, one of which is inherited. Finally, Spaceship is not a valid interface, let alone a functional interface, because a default method must provide a body.",
    },
  ],
};
