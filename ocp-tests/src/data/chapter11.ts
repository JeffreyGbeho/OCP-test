export const chapter11 = {
  title: "Chapter 11: Exceptions and Localization",
  questions: [
    {
      question:
        "Which of the following can be inserted on line 8 to make this code compile? (Choose all that apply.)\n\n7: public void whatHappensNext() throws IOException {\n8: // INSERT CODE HERE\n9: }",
      options: [
        'A. System.out.println("it\'s ok");',
        "B. throw new Exception();",
        "C. throw new IllegalArgumentException();",
        "D. throw new java.io.IOException();",
        "E. throw new RuntimeException();",
        "F. None of the above",
      ],
      answer: ["A", "C", "D", "E"],
      explanation:
        "A method that declares an exception isn't required to throw one, making option A correct. Unchecked exceptions can be thrown in any method, making options C and E correct. Option D matches the exception type declared, so it's also correct. Option B is incorrect because a broader exception is not allowed.",
    },
    {
      question:
        "Which statement about the following class is correct?\n\n1: class Problem extends Exception {\n2: \tpublic Problem() {}\n3: }\n4: class YesProblem extends Problem {}\n5: public class MyDatabase {\n6: \tpublic static void connectToDatabase() throw Problem {\n7: \t\tthrows new YesProblem();\n8: \t}\n9: \tpublic static void main(String[] c) throw Exception {\n10: \t\tconnectToDatabase();\n11: \t}\n12: }",
      options: [
        "A. The code compiles and prints a stack trace for YesProblem at runtime.",
        "B. The code compiles and prints a stack trace for Problem at runtime.",
        "C. The code does not compile because Problem defines a constructor.",
        "D. The code does not compile because YesProblem does not define a constructor.",
        "E. The code does not compile but would if Problem and YesProblem were switched on lines 6 and 7.",
        "F. None of the above",
      ],
      answer: ["F"],
      explanation:
        "The code does not compile because the throw and throws keywords are incorrectly used on lines 6, 7, and 9. If the keywords were fixed, the rest of the code would compile and print a stack trace with YesProblem at runtime. For this reason, option F is correct.",
    },
    {
      question:
        "Which of the following are common types to localize? (Choose all that apply.)",
      options: [
        "A. Dates",
        "B. Lambda expressions",
        "C. Class names",
        "D. Currency",
        "E. Numbers",
        "F. Variable names",
      ],
      answer: ["A", "D", "E"],
      explanation:
        "Localization refers to user-facing elements. Dates, currency, and numbers are commonly used in different formats for different countries, making options A, D, and E correct. Class and variable names, along with lambda expressions, are internal to the application, so there is no need to translate them for users.",
    },
    {
      question:
        'What is the output of the following snippet, assuming a and b are both 0?\n\n3: try {\n4: \tSystem.out.print(a / b);\n5: } catch (RuntimeException e) {\n6: \tSystem.out.print(-1);\n7: } catch (ArithmeticException e) {\n8: \tSystem.out.print(0);\n9: } finally {\n10: \tSystem.out.print("done");\n11: }',
      options: [
        "A. -1",
        "B. 0",
        "C. done-1",
        "D. done0",
        "E. The code does not compile.",
        "F. An uncaught exception is thrown.",
        "G. None of the above",
      ],
      answer: ["E"],
      explanation:
        "The order of catch blocks is important because they're checked in the order they appear after the try block. Because ArithmeticException is a child class of RuntimeException, the catch block on line 7 is unreachable (if an ArithmeticException is thrown in the try block, it will be caught on line 5). Line 7 generates a compiler error because it is unreachable code, making option E correct.",
    },
    {
      question:
        "Assuming the current locale uses dollars ($) and the following method is called with a double value of 100_102.2, which of the following values are printed? (Choose all that apply.)\n\npublic void print(double t) {\n\tSystem.out.print(NumberFormat.getCompactNumberInstance().format(t));\n\tSystem.out.print(NumberFormat.getCompactNumberInstance(Locale.getDefault(), Style.SHORT).format(t));\n\tSystem.out.print(NumberFormat.getCurrencyInstance().format(t));\n}",
      options: [
        "A. 100",
        "B. $100,000.00",
        "C. 100K",
        "D. 100 thousand",
        "E. 100M",
        "F. $100,102.20",
        "G. None of the above",
      ],
      answer: ["C", "F"],
      explanation:
        "The code compiles and runs without issue. When a CompactNumberFormat instance is requested without a style, it uses the SHORT style by default. This results in both of the first two statements printing 100K, making option C correct. If the LONG style were used, then 100 thousand would be printed. Option F is also correct, as the full value is printed with a currency formatter.",
    },
    {
      question:
        'What is the output of the following code?\n\nLocalDate date = LocalDate.parse("2022-04-30", DateTimeFormatter.ISO_LOCAL_DATE_TIME);\nSystem.out.println(date.getYear() + " " + date.getMonth() + " " + date.getDayOfMonth());',
      options: [
        "A. 2022 APRIL 2",
        "B. 2022 APRIL 30",
        "C. 2022 MAY 2",
        "D. The code does not compile.",
        "E. A runtime exception is thrown.",
      ],
      answer: ["E"],
      explanation:
        "A LocalDate does not have a time element. Therefore, a date/time formatter is not appropriate. The code compiles but throws an exception at runtime, making option E correct. If ISO_LOCAL_DATE were used, the code would print 2022 APRIL 30.",
    },
    {
      question:
        'What does the following method print?\n\n11: public void tryAgain(String s) {\n12: \ttry (FileReader r = null, p = new FileReader("")) {\n13: \t\tSystem.out.print("X");\n14: \t\tthrow new IllegalArgumentException();\n15: \t} catch (Exception s) {\n16: \t\tSystem.out.print("A");\n17: \t\tthrow new FileNotFoundException();\n18: \t} finally {\n19: \t\tSystem.out.print("O");\n20: \t}\n21: }',
      options: [
        "A. XAO",
        "B. XOA",
        "C. One line of this method contains a compiler error.",
        "D. Two lines of this method contain compiler errors.",
        "E. Three or more lines of this method contain compiler errors.",
        "F. The code compiles, but a NullPointerException is thrown at runtime.",
        "G. None of the above",
      ],
      answer: ["E"],
      explanation:
        "The first compiler error is on line 12 because each resource in a try-with-resources statement must have its own data type and be separated by a semicolon (;). Line 15 does not compile because the variable s is already declared in the method. Line 17 also does not compile. The FileNotFoundException, which inherits from IOException and Exception, is a checked exception, so it must be handled in a try/catch block or declared by the method. Because these three lines of code do not compile, option E is the correct answer.",
    },
    {
      question:
        'Assume that all of the files mentioned in the answer choices exist and define the same keys. Which one will be used to find the key in line 8?\n\n6: Locale.setDefault(new Locale("en", "US"));\n7: var b = ResourceBundle.getBundle("Dolphins");\n8: System.out.println(b.getString("name"));',
      options: [
        "A. Dolphins.properties",
        "B. Dolphins_US.properties",
        "C. Dolphins_en.properties",
        "D. Whales.properties",
        "E. Whales_en_US.properties",
        "F. The code does not compile.",
      ],
      answer: ["C"],
      explanation:
        "Java will first look for the most specific matches it can find, starting with Dolphins_en_US.properties. Since that is not an answer choice, it drops the country and looks for Dolphins_en.properties, making option C correct. Option B is incorrect because a country without a language is not a valid locale.",
    },
    {
      question:
        'For what value of pattern will the following print <005.21> <008.49> <1,234.0>?\n\nString pattern = "_________________";\nvar message = DoubleStream.of(5.21, 8.49, 1234)\n\t.mapToObj(v -> new DecimalFormat(pattern).format(v))\n\t.collect(Collectors.joining("> <"));\nSystem.out.println("<"+message+">");',
      options: [
        "A. ##.#",
        "B. 0,000.0#",
        "C. #,###.0",
        "D. #,###,000.0#",
        "E. The code does not compile regardless of what is placed in the blank.",
        "F. None of the above",
      ],
      answer: ["D"],
      explanation:
        "When working with a custom number formatter, the 0 symbol displays the digit as 0, even if it's not present, while the # symbol omits the digit from the start or end of the String if it is not present. Based on the requested output, a String that displays at least three digits before the decimal (including a comma) and at least one after the decimal is required. It should display a second digit after the decimal if one is available. For this reason, option D is the correct answer.",
    },
    {
      question: "Which scenario is the best use of an exception?",
      options: [
        "A. An element is not found when searching a list.",
        "B. An unexpected parameter is passed into a method.",
        "C. The computer caught fire.",
        "D. You want to loop through a list.",
        "E. You don't know how to code a method.",
      ],
      answer: ["B"],
      explanation:
        "An IllegalArgumentException is used when an unexpected parameter is passed into a method, making option B correct. Option A is incorrect because returning null or -1 is a common return value for searching for data. Option D is incorrect because a for loop is typically used for this scenario. Option E is incorrect because you should find out how to code the method and not leave it for the unsuspecting programmer who calls your method. Option C is incorrect because you should run!",
    },
    {
      question:
        "Which of the following exceptions must be handled or declared in the method in which they are thrown? (Choose all that apply.)\n\nclass Apple extends RuntimeException {}\nclass Orange extends Exception {}\nclass Banana extends Error {}\nclass Pear extends Apple {}\nclass Tomato extends Orange {}\nclass Peach extends Throwable {}",
      options: [
        "A. Apple",
        "B. Orange",
        "C. Banana",
        "D. Pear",
        "E. Tomato",
        "F. Peach",
      ],
      answer: ["B", "E", "F"],
      explanation:
        "An exception that must be handled or declared is a checked exception. A checked exception inherits Exception but not RuntimeException. The entire hierarchy counts, so options B and E are both correct. Option F is also correct, as a class that inherits Throwable but not RuntimeException or Error is also checked.",
    },
    {
      question:
        'Which of the following changes, when made independently, would make this code compile? (Choose all that apply.)\n\n1: import java.io.*;\n2: public class StuckTurkeyCage implements AutoCloseable {\n3: \tpublic void close() throws IOException {\n4: \t\tthrow new FileNotFoundException("Cage not closed");\n5: \t}\n6: \tpublic static void main(String[] args) {\n7: \t\ttry (StuckTurkeyCage t = new StuckTurkeyCage()) {\n8: \t\t\tSystem.out.println("put turkeys in");\n9: \t\t}\n10: \t} }',
      options: [
        "A. Remove throws IOException from the declaration on line 3.",
        "B. Add throws Exception to the declaration on line 6.",
        "C. Change line 9 to } catch (Exception e) {}.",
        "D. Change line 9 to } finally {}.",
        "E. The code compiles as is.",
        "F. None of the above",
      ],
      answer: ["B", "C"],
      explanation:
        "The code does not compile as is because the exception declared by the close() method must be handled or declared. Option A is incorrect because removing the exception from the declaration causes a compilation error on line 4, as FileNotFoundException is a checked exception that must be handled or declared. Option B is correct because the unhandled exception within the main() method becomes declared. Option C is also correct because the exception becomes handled. Option D is incorrect because the exception remains unhandled.",
    },
    {
      question:
        "Which of the following are true statements about exception handling in Java? (Choose all that apply.)",
      options: [
        "A. A traditional try statement without a catch block requires a finally block.",
        "B. A traditional try statement without a finally block requires a catch block.",
        "C. A traditional try statement with only one statement can omit the {}.",
        "D. A try-with-resources statement without a catch block requires a finally block.",
        "E. A try-with-resources statement without a finally block requires a catch block.",
        "F. A try-with-resources statement with only one statement can omit the {}.",
      ],
      answer: ["A", "B"],
      explanation:
        "A try-with-resources statement does not require a catch or finally block. A traditional try statement requires at least one of the two. Neither statement can be written without a body encased in braces, {}. For these reasons, options A and B are correct.",
    },
    {
      question:
        'Assuming -g:vars is used when the code is compiled to include debug information, what is the output of the following code snippet?\n\nvar huey = (String)null;\nInteger dewey = null;\nObject louie = null;\nif(louie == huey.substring(dewey.intValue())) {\n\tSystem.out.println("Quack!");\n}',
      options: [
        "A. A NullPointerException that does not include any variable names in the stack trace",
        "B. A NullPointerException naming huey in the stack trace",
        "C. A NullPointerException naming dewey in the stack trace",
        "D. A NullPointerException naming louie in the stack trace",
        "E. A NullPointerException naming huey and louie in the stack trace",
        "F. A NullPointerException naming huey and dewey in the stack trace",
        "G. None of the above",
      ],
      answer: ["C"],
      explanation:
        "Starting with Java 15, NullPointerException stack traces include the name of the variable that is null by default, making option A incorrect. The first NullPointerException encountered at runtime is when dewey.intValue() is called, making option C correct. Options E and F are incorrect as only one NullPointerException exception can be thrown at a time.",
    },
    {
      question:
        'Which of the following, when inserted independently in the blank, use locale parameters that are properly formatted? (Choose all that apply.)\n\nimport java.util.Locale;\npublic class ReadMap implements AutoCloseable {\n\tprivate Locale locale;\n\tprivate boolean closed = false;\n\t@Override public void close() {\n\t\tSystem.out.println("Folding map");\n\t\tlocale = null;\n\t\tclosed = true;\n\t}\n\tpublic void open() {\n\t\tthis.locale = _________________;\n\t}\n\tpublic void use() {\n\t\t// Implementation omitted\n\t}\n}',
      options: [
        'A. new Locale("xM")',
        'B. new Locale("MQ", "ks")',
        'C. new Locale("qw")',
        'D. new Locale("wp", "VW")',
        'E. Locale.create("zp")',
        'F. new Locale.Builder().setLanguage("yw").setRegion("PM")',
        "G. The code does not compile regardless of what is placed in the blank.",
      ],
      answer: ["C", "D"],
      explanation:
        "The code compiles with the appropriate input, so option G is incorrect. A locale consists of a required lowercase language code and optional uppercase country code. In the Locale() constructor, the language code is provided first. For these reasons, options C and D are correct. Option E is incorrect because a Locale is created using a constructor or Locale.Builder class. Option F is really close but is missing build() at the end. Without that, option F does not compile.",
    },
    {
      question:
        'Which of the following can be inserted into the blank to allow the code to compile and run without throwing an exception? (Choose all that apply.)\n\nvar f = DateTimeFormatter.ofPattern("hh o\'clock");\nSystem.out.println(f.format(_________________.now()));',
      options: [
        "A. ZonedDateTime",
        "B. LocalDate",
        "C. LocalDateTime",
        "D. LocalTime",
        "E. The code does not compile regardless of what is placed in the blank.",
        "F. None of the above",
      ],
      answer: ["F"],
      explanation:
        "The code compiles, but the first line produces a runtime exception regardless of what is inserted into the blank, making option F correct. When creating a custom formatter, any nonsymbol code must be properly escaped using pairs of single quotes ('). In this case, it fails because o is not a symbol. Even if you didn't know o wasn't a symbol, the code contains an unmatched single quote. If the properly escaped value of \"hh' o''clock'\" were used, then the correct answers would be ZonedDateTime, LocalDateTime, and LocalTime. Option B would not be correct because LocalDate values do not have an hour part.",
    },
    {
      question:
        "Which of the following statements about resource bundles are correct? (Choose all that apply.)",
      options: [
        "A. All keys must be in the same resource bundle to be used.",
        "B. A resource bundle is loaded by calling the new ResourceBundle() constructor.",
        "C. Resource bundle values are always read using the Properties class.",
        "D. Changing the default locale lasts for only a single run of the program.",
        "E. If a resource bundle for a specific locale is requested, then the resource bundle for the default locale will not be used.",
        "F. It is possible to use a resource bundle for a locale without specifying a default locale.",
      ],
      answer: ["D", "F"],
      explanation:
        "Option A is incorrect because Java will look at parent bundles if a key is not found in a specified resource bundle. Option B is incorrect because resource bundles are loaded from static factory methods. Option C is incorrect, as resource bundle values are read from the ResourceBundle object directly. Option D is correct because the locale is changed only in memory. Option E is incorrect, as the resource bundle for the default locale may be used if there is no resource bundle for the specified locale (or its locale without a country code). Finally, option F is correct. The JVM will set a default locale automatically.",
    },
    {
      question:
        'What is the output of the following code?\n\nimport java.io.*;\npublic class FamilyCar {\n\tstatic class Door implements AutoCloseable {\n\t\tpublic void close() {\n\t\t\tSystem.out.print("D");\n\t\t} }\n\tstatic class Window implements Closeable {\n\t\tpublic void close() {\n\t\t\tSystem.out.print("W");\n\t\t\tthrow new RuntimeException();\n\t\t} }\n\tpublic static void main(String[] args) {\n\t\tvar d = new Door();\n\t\ttry (d; var w = new Window()) {\n\t\t\tSystem.out.print("T");\n\t\t} catch (Exception e) {\n\t\t\tSystem.out.print("E");\n\t\t} finally {\n\t\t\tSystem.out.print("F");\n\t\t} } }',
      options: [
        "A. TWF",
        "B. TWDF",
        "C. TWDEF",
        "D. TWF followed by an exception",
        "E. TWDF followed by an exception",
        "F. TWEF followed by an exception",
        "G. The code does not compile.",
      ],
      answer: ["C"],
      explanation:
        "After both resources are declared and created in the try-with-resources statement, T is printed as part of the body. Then the try-with-resources completes and closes the resources in the reverse of the order in which they were declared. After W is printed, an exception is thrown. However, the remaining resource still needs to be closed, so D is printed. Once all the resources are closed, the exception is thrown and swallowed in the catch block, causing E to be printed. Last, the finally block is run, printing F. Therefore, the answer is TWDEF and option C is correct.",
    },
    {
      question:
        'Suppose that we have the following three properties files and code. Which bundles are used on lines 8 and 9, respectively?\n\nDolphins.properties\nname=The Dolphin\nage=0\n\nDolphins_en.properties\nname=Dolly\nage=4\n\nDolphins_fr.properties\nname=Dolly\n\n5: var fr = new Locale("fr");\n6: Locale.setDefault(new Locale("en", "US"));\n7: var b = ResourceBundle.getBundle("Dolphins", fr);\n8: b.getString("name");\n9: b.getString("age");',
      options: [
        "A. Dolphins.properties and Dolphins.properties",
        "B. Dolphins.properties and Dolphins_en.properties",
        "C. Dolphins_en.properties and Dolphins_en.properties",
        "D. Dolphins_fr.properties and Dolphins.properties",
        "E. Dolphins_fr.properties and Dolphins_en.properties",
        "F. The code does not compile.",
        "G. None of the above",
      ],
      answer: ["D"],
      explanation:
        "Java will use Dolphins_fr.properties as the matching resource bundle on line 7 because it is an exact match on the language of the requested locale. Line 8 finds a matching key in this file. Line 9 does not find a match in that file; therefore, it has to look higher up in the hierarchy. Once a bundle is chosen, only resources in that hierarchy are allowed. It cannot use the default locale anymore, but it can use the default resource bundle specified by Dolphins.properties. For these reasons, option D is correct.",
    },
    {
      question:
        'What is printed by the following program?\n\n1: public class DriveBus {\n2: \tpublic void go() {\n3: \t\tSystem.out.print("A");\n4: \t\ttry {\n5: \t\t\tstop();\n6: \t\t} catch (ArithmeticException e) {\n7: \t\t\tSystem.out.print("B");\n8: \t\t} finally {\n9: \t\t\tSystem.out.print("C");\n10: \t\t}\n11: \t\tSystem.out.print("D");\n12: \t}\n13: \tpublic void stop() {\n14: \t\tSystem.out.print("E");\n15: \t\tObject x = null;\n16: \t\tx.toString();\n17: \t\tSystem.out.print("F");\n18: \t}\n19: \tpublic static void main(String n[]) {\n20: \t\tnew DriveBus().go();\n21: \t} }',
      options: [
        "A. AE",
        "B. AEBCD",
        "C. AEC",
        "D. AECD",
        "E. AE followed by a stack trace",
        "F. AEBCD followed by a stack trace",
        "G. AEC followed by a stack trace",
        "H. A stack trace with no other output",
      ],
      answer: ["G"],
      explanation:
        "The main() method invokes go(), and A is printed on line 3. The stop() method is invoked, and E is printed on line 14. Line 16 throws a NullPointerException, so stop() immediately ends, and line 17 doesn't execute. The exception isn't caught in go(), so the go() method ends as well, but not before its finally block executes and C is printed on line 9. Because main() doesn't catch the exception, the stack trace displays, and no further output occurs. For these reasons, AEC is printed followed by a stack trace for a NullPointerException, making option G correct.",
    },
    {
      question:
        "Which changes, when made independently, allow the following program to compile? (Choose all that apply.)\n\n1: public class AhChoo {\n2: \tstatic class SneezeException extends Exception {}\n3: \tstatic class SniffleException extends SneezeException {}\n4: \tpublic static void main(String[] args) {\n5: \t\ttry {\n6: \t\t\tthrow new SneezeException();\n7: \t\t} catch (SneezeException | SniffleException e) {\n8: \t\t} finally {}\n9: \t} }",
      options: [
        "A. Add throws SneezeException to the declaration on line 4.",
        "B. Add throws Throwable to the declaration on line 4.",
        "C. Change line 7 to } catch (SneezeException e) {.",
        "D. Change line 7 to } catch (SniffleException e) {.",
        "E. Remove line 7.",
        "F. The code compiles correctly as is.",
        "G. None of the above",
      ],
      answer: ["C"],
      explanation:
        "The code does not compile because the multi-catch block on line 7 cannot catch both a superclass and a related subclass. Options A and B do not address this problem, so they are incorrect. Since the try body throws SneezeException, it can be caught in a catch block, making option C correct. Option D allows the catch block to compile but causes a compiler error on line 6. Both of the custom exceptions are checked and must be handled or declared in the main() method. A SneezeException is not a SniffleException, so the exception is not handled. Likewise, option E leads to an unhandled exception compiler error on line 6.",
    },
    {
      question:
        'What is the output of the following code?\n\ntry {\n\tLocalDateTime book = LocalDateTime.of(2022, 4, 5, 12, 30, 20);\n\tSystem.out.print(book.format(DateTimeFormatter.ofPattern("m")));\n\tSystem.out.print(book.format(DateTimeFormatter.ofPattern("z")));\n\tSystem.out.print(DateTimeFormatter.ofPattern("y").format(book));\n} catch (Throwable e) {}',
      options: [
        "A. 4",
        "B. 30",
        "C. 402",
        "D. 3002",
        "E. 3002022",
        "F. 402022",
        "G. None of the above",
      ],
      answer: ["B"],
      explanation:
        "For this question, the date used is April 5, 2022 at 12:30:20pm. The code compiles, and either form of the formatter is correct: dateTime.format(formatter) or formatter.format(dateTime). The custom format m returns the minute, so 30 is output first. The next line throws an exception as z relates to time zone, and date/time does not have a zone component. This exception is then swallowed by the try/catch block. Since this is the only value printed, option B is correct. If the code had not thrown an exception, the last line would have printed 2022.",
    },
    {
      question:
        "Fill in the blank: A class that implements _________________ may be in a try-with-resources statement. (Choose all that apply.)",
      options: [
        "A. AutoCloseable",
        "B. Resource",
        "C. Exception",
        "D. AutomaticResource",
        "E. Closeable",
        "F. RuntimeException",
        "G. Serializable",
      ],
      answer: ["A", "E"],
      explanation:
        "Resources must inherit AutoCloseable to be used in a try-with-resources block. Since Closeable, which is used for I/O classes, extends AutoCloseable, both may be used, making options A and E correct.",
    },
    {
      question:
        'What is the output of the following program?\n\npublic class SnowStorm {\n\tstatic class WalkToSchool implements AutoCloseable {\n\t\tpublic void close() {\n\t\t\tthrow new RuntimeException("flurry");\n\t\t} }\n\tpublic static void main(String[] args) {\n\t\tWalkToSchool walk1 = new WalkToSchool();\n\t\ttry (walk1; WalkToSchool walk2 = new WalkToSchool()) {\n\t\t\tthrow new RuntimeException("blizzard");\n\t\t} catch(Exception e) {\n\t\t\tSystem.out.println(e.getMessage()\n\t\t\t\t+ " " + e.getSuppressed().length);\n\t\t}\n\t\twalk1 = null;\n\t} }',
      options: [
        "A. blizzard 0",
        "B. blizzard 1",
        "C. blizzard 2",
        "D. flurry 0",
        "E. flurry 1",
        "F. flurry 2",
        "G. None of the above",
      ],
      answer: ["G"],
      explanation:
        "The code does not compile because the resource walk1 is not final or effectively final and cannot be used in the declaration of a try-with-resources statement. For this reason, option G is correct. If the line that set walk1 to null were removed, then the code would compile and print blizzard 2 at runtime, with the exception inside the try block being the primary exception since it is thrown first. Then two suppressed exceptions would be added to it when trying to close the AutoCloseable resources.",
    },
    {
      question:
        'Assuming U.S. currency is in dollars ($) and German currency is in euros (€), what is the output of the following program?\n\nimport java.text.NumberFormat;\nimport java.util.Locale;\nimport java.util.Locale.Category;\npublic record Wallet(double money) {\n\tprivate String openWallet() {\n\t\tLocale.setDefault(Category.DISPLAY,\n\t\t\tnew Locale.Builder().setRegion("us").build());\n\t\tLocale.setDefault(Category.FORMAT,\n\t\t\tnew Locale.Builder().setLanguage("en").build());\n\t\treturn\n\t\t\tNumberFormat.getCurrencyInstance(Locale.GERMANY)\n\t\t\t.format(money);\n\t}\n\tpublic void printBalance() {\n\t\tSystem.out.println(openWallet());\n\t}\n\tpublic static void main(String... unused) {\n\t\tnew Wallet(2.4).printBalance();\n\t} }',
      options: [
        "A. 2,40 €",
        "B. $2.40",
        "C. 2.4",
        "D. The code does not compile.",
        "E. None of the above",
      ],
      answer: ["A"],
      explanation:
        "The code compiles and prints the value for Germany, 2,40 €, making option A the correct answer. Note that the default locale category is ignored since an explicit currency locale is selected.",
    },
    {
      question:
        "Which lines can fill in the blank to make the following code compile? (Choose all that apply.)\n\nvoid rollOut() throws ClassCastException {}\npublic void transform(String c) {\n\ttry {\n\t\trollOut();\n\t} catch (IllegalArgumentException | __________________) {\n\t}\n}",
      options: [
        "A. IOException a",
        "B. Error b",
        "C. NullPointerException c",
        "D. RuntimeException d",
        "E. NumberFormatException e",
        "F. ClassCastException f",
        "G. None of the above. The code contains a compiler error regardless of what is inserted into the blank.",
      ],
      answer: ["B", "F"],
      explanation:
        "The try block is not capable of throwing an IOException, making the catch block unreachable code and option A incorrect. Options B and F are correct, as both are unchecked exceptions that do not extend or inherit from IllegalArgumentException. Remember, it is not a good idea to catch Error in practice, although because it is possible, it may come up on the exam. Option C is incorrect because the variable c is declared already in the method declaration. Option D is incorrect because the IllegalArgumentException inherits from RuntimeException, making the first declaration unnecessary. Similarly, option E is incorrect because NumberFormatException inherits from IllegalArgumentException, making the second declaration unnecessary. Since options B and F are correct, option G is incorrect.",
    },
  ],
};
