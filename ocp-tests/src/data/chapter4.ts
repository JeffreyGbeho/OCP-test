export const chapter4 = {
  title: "Chapter 4: Core APIs",
  questions: [
    {
      question:
        'What is output by the following code? (Choose all that apply.)\n\n1: public class Fish {\n2:   public static void main(String[] args) {\n3:     int numFish = 4;\n4:     String fishType = "tuna";\n5:     String anotherFish = numFish + 1;\n6:     System.out.println(anotherFish + " " + fishType);\n7:     System.out.println(numFish + " " + 1);\n8:   }\n}',
      options: [
        "A. 4 1",
        "B. 5",
        "C. 5 tuna",
        "D. 5tuna",
        "E. 51tuna",
        "F. The code does not compile.",
      ],
      answer: ["F"],
      explanation:
        "The code does not compile because on line 5, we are trying to assign an int to a String variable without proper conversion.",
    },
    {
      question:
        "Which of these array declarations are not legal? (Choose all that apply.)",
      options: [
        "A. int[][] scores = new int[5][];",
        "B. Object[][][] cubbies = new Object[3][0][5];",
        "C. String beans[] = new beans[6];",
        "D. java.util.Date[] dates[] = new java.util.Date[2][];",
        "E. int[][] types = new int[];",
        "F. int[][] java = new int[][];",
      ],
      answer: ["C", "E", "F"],
      explanation:
        "Option C is illegal because 'beans' is used as a type. Option E is missing the size for the first dimension. Option F is missing sizes for both dimensions.",
    },
    {
      question:
        'Note that March 13, 2022 is the weekend when we spring forward, and November 6, 2022 is when we fall back for daylight saving time. Which of the following can fill in the blank without the code throwing an exception? (Choose all that apply.)\n\nvar zone = ZoneId.of("US/Eastern");\nvar date = _______________________________;\nvar time = LocalTime.of(2, 15);\nvar z = ZonedDateTime.of(date, time, zone);',
      options: [
        "A. LocalDate.of(2022, 3, 13)",
        "B. LocalDate.of(2022, 3, 40)",
        "C. LocalDate.of(2022, 11, 6)",
        "D. LocalDate.of(2022, 11, 7)",
        "E. LocalDate.of(2023, 2, 29)",
        "F. LocalDate.of(2022, MonthEnum.MARCH, 13);",
      ],
      answer: ["A", "C", "D"],
      explanation:
        "Options A, C, and D are valid dates. B is invalid (no 40th day). E is invalid (not a leap year). F uses incorrect enum name.",
    },
    {
      question:
        'Which of the following are output by this code? (Choose all that apply.)\n\n3: var s = "Hello";\n4: var t = new String(s);\n5: if ("Hello".equals(s)) System.out.println("one");\n6: if (t == s) System.out.println("two");\n7: if (t.intern() == s) System.out.println("three");\n8: if ("Hello" == s) System.out.println("four");\n9: if ("Hello".intern() == t) System.out.println("five");',
      options: [
        "A. one",
        "B. two",
        "C. three",
        "D. four",
        "E. five",
        "F. The code does not compile.",
        "G. None of the above",
      ],
      answer: ["A", "C", "D"],
      explanation:
        "A is true (equals checks content). C is true (intern returns string pool reference). D is true (s is in string pool). B and E are false (different objects).",
    },
    {
      question:
        'What is the result of the following code?\n\n7: var sb = new StringBuilder();\n8: sb.append("aaa").insert(1, "bb").insert(4, "ccc");\n9: System.out.println(sb);',
      options: [
        "A. abbaaccc",
        "B. abbaccca",
        "C. bbaaaccc",
        "D. bbaaccca",
        "E. An empty line",
        "F. The code does not compile.",
      ],
      answer: ["B"],
      explanation:
        "The StringBuilder operations result in 'abbaccca'. First 'aaa', then insert 'bb' at index 1, then insert 'ccc' at index 4.",
    },
    {
      question:
        "How many of these lines contain a compiler error?\n\n23: double one = Math.pow(1, 2);\n24: int two = Math.round(1.0);\n25: float three = Math.random();\n26: var doubles = new double[] {one, two, three};",
      options: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
      answer: ["C"],
      explanation:
        "Two lines have errors. Line 24: Math.round(double) returns long, not int. Line 25: Math.random() returns double, not float.",
    },
    {
      question:
        "Which of these statements is true of the two values? (Choose all that apply.)\n\n2022–08–28T05:00 GMT-04:00\n2022–08–28T09:00 GMT-06:00",
      options: [
        "A. The first date/time is earlier.",
        "B. The second date/time is earlier.",
        "C. Both date/times are the same.",
        "D. The date/times are two hours apart.",
        "E. The date/times are six hours apart.",
        "F. The date/times are 10 hours apart.",
      ],
      answer: ["C"],
      explanation:
        "Both date/times represent the same moment. First is 9:00 UTC, second is also 9:00 UTC (3:00 + 6 hours).",
    },
    {
      question:
        'Which of the following return 5 when run independently? (Choose all that apply.)\n\nvar string = "12345";\nvar builder = new StringBuilder("12345");',
      options: [
        "A. builder.charAt(4)",
        'B. builder.replace(2, 4, "6").charAt(3)',
        'C. builder.replace(2, 5, "6").charAt(2)',
        "D. string.charAt(5)",
        "E. string.length",
        'F. string.replace("123", "1").charAt(2)',
        "G. None of the above",
      ],
      answer: ["A", "E"],
      explanation:
        "A returns '5' (index 4). E returns the length, which is 5. B, C, F return different characters. D throws an exception (index out of bounds).",
    },
    {
      question:
        "Which of the following are true about arrays? (Choose all that apply.)",
      options: [
        "A. The first element is index 0.",
        "B. The first element is index 1.",
        "C. Arrays are fixed size.",
        "D. Arrays are immutable.",
        "E. Calling equals() on two different arrays containing the same primitive values always returns true.",
        "F. Calling equals() on two different arrays containing the same primitive values always returns false.",
        "G. Calling equals() on two different arrays containing the same primitive values can return true or false.",
      ],
      answer: ["A", "C", "F"],
      explanation:
        "A is true (zero-indexed). C is true (fixed size). F is true (equals() on arrays checks reference equality, not content).",
    },
    {
      question:
        "How many of these lines contain a compiler error?\n\n23: int one = Math.min(5, 3);\n24: long two = Math.round(5.5);\n25: double three = Math.floor(6.6);\n26: var doubles = new double[] {one, two, three};",
      options: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
      answer: ["A"],
      explanation:
        "All lines compile correctly. Math.min returns int, Math.round(double) returns long, Math.floor returns double, and the array can hold all these types as doubles.",
    },
    {
      question:
        'What is the output of the following code?\n\nvar date = LocalDate.of(2022, 4, 3);\ndate.plusDays(2);\ndate.plusHours(3);\nSystem.out.println(date.getYear() + " " + date.getMonth() + " " + date.getDayOfMonth());',
      options: [
        "A. 2022 MARCH 4",
        "B. 2022 MARCH 6",
        "C. 2022 APRIL 3",
        "D. 2022 APRIL 5",
        "E. The code does not compile.",
        "F. A runtime exception is thrown.",
      ],
      answer: ["C"],
      explanation:
        "LocalDate is immutable, so plusDays() and plusHours() don't modify the original date. plusHours() doesn't compile for LocalDate, but it's ignored here.",
    },
    {
      question:
        'What is output by the following code? (Choose all that apply.)\n\nvar numbers = "012345678".indent(1);\nnumbers = numbers.stripLeading();\nSystem.out.println(numbers.substring(1, 3));\nSystem.out.println(numbers.substring(7, 7));\nSystem.out.print(numbers.substring(7));',
      options: [
        "A. 12",
        "B. 123",
        "C. 7",
        "D. 78",
        "E. A blank line",
        "F. The code does not compile.",
        "G. An exception is thrown.",
      ],
      answer: ["A", "E", "D"],
      explanation:
        "The first println outputs '12'. The second println outputs an empty string (substring from 7 to 7). The last print outputs '78'.",
    },
    {
      question:
        'What is the result of the following code?\n\npublic class Lion {\n  public void roar(String roar1, StringBuilder roar2) {\n    roar1.concat("!!!");\n    roar2.append("!!!");\n  }\n  public static void main(String[] args) {\n    var roar1 = "roar";\n    var roar2 = new StringBuilder("roar");\n    new Lion().roar(roar1, roar2);\n    System.out.println(roar1 + " " + roar2);\n  }\n}',
      options: [
        "A. roar roar",
        "B. roar roar!!!",
        "C. roar!!! roar",
        "D. roar!!! roar!!!",
        "E. An exception is thrown.",
        "F. The code does not compile.",
      ],
      answer: ["B"],
      explanation:
        "String is immutable, so roar1 doesn't change. StringBuilder is mutable, so roar2 is modified. The output is 'roar roar!!!'.",
    },
    {
      question:
        "Given the following, which can correctly fill in the blank? (Choose all that apply.)\n\nvar date = LocalDate.now();\nvar time = LocalTime.now();\nvar dateTime = LocalDateTime.now();\nvar zoneId = ZoneId.systemDefault();\nvar zonedDateTime = ZonedDateTime.of(dateTime, zoneId);\nInstant instant = ______________________________;",
      options: [
        "A. Instant.now()",
        "B. new Instant()",
        "C. date.toInstant()",
        "D. dateTime.toInstant()",
        "E. time.toInstant()",
        "F. zonedDateTime.toInstant()",
      ],
      answer: ["A", "F"],
      explanation:
        "A is correct (creates current instant). F is correct (ZonedDateTime can be converted to Instant). B is incorrect (no public constructor). C, D, E are incorrect (these types can't be directly converted to Instant).",
    },
    {
      question:
        'What is the output of the following? (Choose all that apply.)\n\nvar arr = new String[] { "PIG", "pig", "123"};\nArrays.sort(arr);\nSystem.out.println(Arrays.toString(arr));\nSystem.out.println(Arrays.binarySearch(arr, "Pippa"));',
      options: [
        "A. [pig, PIG, 123]",
        "B. [PIG, pig, 123]",
        "C. [123, PIG, pig]",
        "D. [123, pig, PIG]",
        "E. -3",
        "F. -2",
        "G. The results of binarySearch() are undefined in this example.",
      ],
      answer: ["C", "F"],
      explanation:
        "C is correct (sorted order). F is correct (insertion point would be at index 1, so -1-1 = -2).",
    },
    {
      question:
        'What is included in the output of the following code? (Choose all that apply.)\n\nvar base = "ewe\nsheep\\t";\nint length = base.length();\nint indent = base.indent(2).length();\nint translate = base.translateEscapes().length();\nvar formatted = "%s %s %s".formatted(length, indent, translate);\nSystem.out.format(formatted);',
      options: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 14", "F. 15", "G. 16"],
      answer: ["B", "E", "C"],
      explanation:
        "length is 11 (\n and \\t count as one each). indent is 14 (11 + 2 spaces + newline). translate is 12 (\n becomes actual newline, \t becomes tab).",
    },
    {
      question:
        'Which of these statements are true? (Choose all that apply.)\n\nvar letters = new StringBuilder("abcdefg");',
      options: [
        "A. letters.substring(1, 2) returns a single-character String.",
        "B. letters.substring(2, 2) returns a single-character String.",
        "C. letters.substring(6, 5) returns a single-character String.",
        "D. letters.substring(6, 6) returns a single-character String.",
        "E. letters.substring(1, 2) throws an exception.",
        "F. letters.substring(2, 2) throws an exception.",
        "G. letters.substring(6, 5) throws an exception.",
        "H. letters.substring(6, 6) throws an exception.",
      ],
      answer: ["A", "D", "G"],
      explanation:
        "A is true ('b'). D is true (empty string). G throws exception (end index less than start index). B and F return empty string. C and E are false.",
    },
    {
      question:
        'What is the result of the following code? (Choose all that apply.)\n\n13: String s1 = """\n14: purr""";\n15: String s2 = "";\n16:\n17: s1.toUpperCase();\n18: s1.trim();\n19: s1.substring(1, 3);\n20: s1 += "two";\n21:\n22: s2 += 2;\n23: s2 += \'c\';\n24: s2 += false;\n25:\n26: if ( s2 == "2cfalse") System.out.println("==");\n27: if ( s2.equals("2cfalse")) System.out.println("equals");\n28: System.out.println(s1.length());',
      options: [
        "A. 2",
        "B. 4",
        "C. 7",
        "D. 10",
        "E. ==",
        "F. equals",
        "G. An exception is thrown.",
        "H. The code does not compile.",
      ],
      answer: ["C", "F"],
      explanation:
        'The variable s1 starts out as a three-character String. Since Strings are immutable and the results of lines 17–19 are ignored, s1 doesn\'t change until line 20. We concatenate three new characters to s1 and now have a String of length 7, making option C correct. Lines 22, 23, and 24 all append to s2, giving a result of "2cfalse". The if statement on line 27 returns true because the values of the two String objects are the same using object equality. The if statement on line 26 returns false because the two String objects are not the same in memory. One comes directly from the string pool, and the other comes from building using String operations.',
    },
    {
      question:
        'Which of the following fill in the blank to print a positive integer? (Choose all that apply.)\n\nString[] s1 = { "Camel", "Peacock", "Llama"};\nString[] s2 = { "Camel", "Llama", "Peacock"};\nString[] s3 = { "Camel"};\nString[] s4 = { "Camel", null};\nSystem.out.println(Arrays.______________________);',
      options: [
        "A. compare(s1, s2)",
        "B. mismatch(s1, s2)",
        "C. compare(s3, s4)",
        "D. mismatch (s3, s4)",
        "E. compare(s4, s4)",
        "F. mismatch (s4, s4)",
      ],
      answer: ["A", "C"],
      explanation:
        "The compare() method returns a positive integer when the arrays are different and the first is larger. This is the case for option A since the element at index 1 comes first alphabetically. It is not the case for option C because the s4 is longer or for option E because the arrays are the same. The mismatch() method returns a positive integer when the arrays are different in a position index 1 or greater. This is the case for options B and D since the difference is at index 1. It is not the case for option F because there is no difference.",
    },
    {
      question:
        'Note that March 13, 2022 is the weekend that clocks spring ahead for daylight saving time. What is the output of the following? (Choose all that apply.)\n\nvar date = LocalDate.of(2022, Month.MARCH, 13);\nvar time = LocalTime.of(1, 30);\nvar zone = ZoneId.of("US/Eastern");\nvar dateTime1 = ZonedDateTime.of(date, time, zone);\nvar dateTime2 = dateTime1.plus(1, ChronoUnit.HOURS);\nlong diff = ChronoUnit.HOURS.between(dateTime1, dateTime2);\nint hour = dateTime2.getHour();\nboolean offset = dateTime1.getOffset() == dateTime2.getOffset();\nSystem.out.println("diff = " + diff);\nSystem.out.println("hour = " + hour);\nSystem.out.println("offset = " + offset);',
      options: [
        "A. diff = 1",
        "B. diff = 2",
        "C. hour = 2",
        "D. hour = 3",
        "E. offset = true",
        "F. The code does not compile.",
        "G. A runtime exception is thrown.",
      ],
      answer: ["A", "D"],
      explanation:
        "The dateTime1 object has a time of 1:30 per initialization. The dateTime2 object is an hour later. However, there is no 2:30 when springing ahead, setting the time to 3:30. Option A is correct because it is an hour later. Option D is also correct because the hour of the new time is 3. Option E is not correct because we have changed the time zone offset due to daylight saving time.",
    },
    {
      question:
        'Which of the following can fill in the blank to print avaJ? (Choose all that apply.)\n\n3: var puzzle = new StringBuilder("Java");\n4: puzzle.________________________;\n5: System.out.println(puzzle);',
      options: [
        "A. reverse()",
        'B. append("vaJ$").substring(0, 4)',
        'C. append("vaJ$").delete(0, 3).deleteCharAt(puzzle.length() - 1)',
        'D. append("vaJ$").delete(0, 3).deleteCharAt(puzzle.length())',
        "E. None of the above",
      ],
      answer: ["A", "C"],
      explanation:
        'The reverse() method is the easiest way of reversing the characters in a StringBuilder; therefore, option A is correct. In option B, substring() returns a String, which is not stored anywhere. Option C uses method chaining. First, it creates the value "JavavaJ$". Then, it removes the first three characters, resulting in "avaJ$". Finally, it removes the last character, resulting in "avaJ". Option D throws an exception because you cannot delete the character after the last index. Remember that deleteCharAt() uses indexes that are zero-based, and length() counts the number of characters rather than the index.',
    },
    {
      question:
        'What is the output of the following code?\n\nvar date = LocalDate.of(2022, Month.APRIL, 30);\ndate.plusDays(2);\ndate.plusYears(3);\nSystem.out.println(date.getYear() + " " + date.getMonth() + " " + date.getDayOfMonth());',
      options: [
        "A. 2022 APRIL 30",
        "B. 2022 MAY 2",
        "C. 2025 APRIL 2",
        "D. 2025 APRIL 30",
        "E. 2025 MAY 2",
        "F. The code does not compile.",
        "G. A runtime exception is thrown.",
      ],
      answer: ["A"],
      explanation:
        "The date starts out as April 30, 2022. Since dates are immutable and the plus methods' return values are ignored, the result is unchanged. Therefore, option A is correct.",
    },
  ],
};
