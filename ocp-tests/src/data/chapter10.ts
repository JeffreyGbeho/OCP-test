export const chapter10 = {
  title: "Chapter 10: Streams",
  questions: [
    {
      question:
        'What could be the output of the following?\n\nvar stream = Stream.iterate("", (s) -> s + "1");\nSystem.out.println(stream.limit(2).map(x -> x + "2"));',
      options: [
        "A. 12112",
        "B. 212",
        "C. 212112",
        "D. java.util.stream.ReferencePipeline$3@4517d9a3",
        "E. The code does not compile.",
        "F. An exception is thrown.",
        "G. The code hangs.",
      ],
      answer: ["D"],
      explanation:
        'No terminal operation is called, so the stream never executes. The first line creates an infinite stream reference. If the stream were executed on the second line, it would get the first two elements from that infinite stream, "" and "1", and add an extra character, resulting in "2" and "12", respectively. Since the stream is not executed, the reference is printed instead, giving us option D.',
    },
    {
      question:
        'What could be the output of the following?\n\nPredicate<String> predicate = s -> s.startsWith("g");\nvar stream1 = Stream.generate(() -> "growl!");\nvar stream2 = Stream.generate(() -> "growl!");\nvar b1 = stream1.anyMatch(predicate);\nvar b2 = stream2.allMatch(predicate);\nSystem.out.println(b1 + " " + b2);',
      options: [
        "A. true false",
        "B. true true",
        "C. java.util.stream.ReferencePipeline$3@4517d9a3",
        "D. The code does not compile.",
        "E. An exception is thrown.",
        "F. The code hangs.",
      ],
      answer: ["F"],
      explanation:
        "Both streams created in this code snippet are infinite streams. The variable b1 is set to true since anyMatch() terminates. Even though the stream is infinite, Java finds a match on the first element and stops looking. However, when allMatch() runs, it needs to keep going until the end of the stream since it keeps finding matches. Since all elements continue to match, the program hangs, making option F the answer.",
    },
    {
      question:
        'What could be the output of the following?\n\nPredicate<String> predicate = s -> s.length() > 3;\nvar stream = Stream.iterate("-", s -> ! s.isEmpty(), (s) -> s + s);\nvar b1 = stream.noneMatch(predicate);\nvar b2 = stream.anyMatch(predicate);\nSystem.out.println(b1 + " " + b2);',
      options: [
        "A. false false",
        "B. false true",
        "C. java.util.stream.ReferencePipeline$3@4517d9a3",
        "D. The code does not compile.",
        "E. An exception is thrown.",
        "F. The code hangs.",
      ],
      answer: ["E"],
      explanation:
        'An infinite stream is generated where each element is twice as long as the previous one. While this code uses the three-parameter iterate() method, the condition is never false. The variable b1 is set to false because Java finds an element that matches when it gets to the element of length 4. However, the next line tries to operate on the same stream. Since streams can be used only once, this throws an exception that the "stream has already been operated upon or closed" and making option E the answer. If two different streams were used, the result would be option B.',
    },
    {
      question:
        "Which are true statements about terminal operations in a stream that runs successfully? (Choose all that apply.)",
      options: [
        "A. At most one terminal operation can exist in a stream pipeline.",
        "B. Terminal operations are a required part of the stream pipeline in order to get a result.",
        "C. Terminal operations have Stream as the return type.",
        "D. The peek() method is an example of a terminal operation.",
        "E. The referenced Stream may be used after calling a terminal operation.",
      ],
      answer: ["A", "B"],
      explanation:
        "Terminal operations are the final step in a stream pipeline. Exactly one is required, because it triggers the execution of the entire stream pipeline. Therefore, options A and B are correct. Option C is true of intermediate operations rather than terminal operations. Option D is incorrect because peek() is an intermediate operation. Finally, option E is incorrect because once a stream pipeline is run, the Stream is marked invalid.",
    },
    {
      question:
        "Which of the following sets result to 8.0? (Choose all that apply.)",
      options: [
        "A. double result = LongStream.of(6L, 8L, 10L)\n   .mapToInt(x -> (int) x)\n   .collect(Collectors.groupingBy(x -> x))\n   .keySet()\n   .stream()\n   .collect(Collectors.averagingInt(x -> x));",
        "B. double result = LongStream.of(6L, 8L, 10L)\n   .mapToInt(x -> x)\n   .boxed()\n   .collect(Collectors.groupingBy(x -> x))\n   .keySet()\n   .stream()\n   .collect(Collectors.averagingInt(x -> x));",
        "C. double result = LongStream.of(6L, 8L, 10L)\n   .mapToInt(x -> (int) x)\n   .boxed()\n   .collect(Collectors.groupingBy(x -> x))\n   .keySet()\n   .stream()\n   .collect(Collectors.averagingInt(x -> x));",
        "D. double result = LongStream.of(6L, 8L, 10L)\n   .mapToInt(x -> (int) x)\n   .collect(Collectors.groupingBy(x -> x, Collectors.toSet()))\n   .keySet()\n   .stream()\n   .collect(Collectors.averagingInt(x -> x));",
        "E. double result = LongStream.of(6L, 8L, 10L)\n   .mapToInt(x -> x)\n   .boxed()\n   .collect(Collectors.groupingBy(x -> x, Collectors.toSet()))\n   .keySet()\n   .stream()\n   .collect(Collectors.averagingInt(x -> x));",
        "F. double result = LongStream.of(6L, 8L, 10L)\n   .mapToInt(x -> (int) x)\n   .boxed()\n   .collect(Collectors.groupingBy(x -> x, Collectors.toSet()))\n   .keySet()\n   .stream()\n   .collect(Collectors.averagingInt(x -> x));",
      ],
      answer: ["C", "F"],
      explanation:
        "Yes, we know this question is a lot of reading. Remember to look for the differences between options rather than studying each line. These options all have much in common. All of them start out with a LongStream and attempt to convert it to an IntStream. However, options B and E are incorrect because they do not cast the long to an int, resulting in a compiler error on the mapToInt() calls. Next, we hit the second difference. Options A and D are incorrect because they are missing boxed() before the collect() call. Since groupingBy() is creating a Collection, we need a nonprimitive Stream. The final difference is that option F specifies the type of Collection. This is allowed, though, meaning both options C and F are correct.",
    },
    {
      question:
        'Which of the following can fill in the blank so that the code prints out false? (Choose all that apply.)\n\nvar s = Stream.generate(() -> "meow");\nvar match = s.______(String::isEmpty);\nSystem.out.println(match);',
      options: [
        "A. allMatch",
        "B. anyMatch",
        "C. findAny",
        "D. findFirst",
        "E. noneMatch",
        "F. None of the above",
      ],
      answer: ["A"],
      explanation:
        "Options C and D do not compile because these methods do not take a Predicate parameter and do not return a boolean. When working with streams, it is important to remember the behavior of the underlying functional interfaces. Options B and E are incorrect. While the code compiles, it runs infinitely. The stream has no way to know that a match won't show up later. Option A is correct because it is safe to return false as soon as one element passes through the stream that doesn't match.",
    },
    {
      question:
        "We have a method that returns a sorted list without changing the original. Which of the following can replace the method implementation to do the same with streams?\n\nprivate static List<String> sort(List<String> list) {\n\tvar copy = new ArrayList<String>(list);\n\tCollections.sort(copy, (a, b) -> b.compareTo(a));\n\treturn copy;\n}",
      options: [
        "A. return list.stream()\n   .compare((a, b) -> b.compareTo(a))\n   .collect(Collectors.toList());",
        "B. return list.stream()\n   .compare((a, b) -> b.compareTo(a))\n   .sort();",
        "C. return list.stream()\n   .compareTo((a, b) -> b.compareTo(a))\n   .collect(Collectors.toList());",
        "D. return list.stream()\n   .compareTo((a, b) -> b.compareTo(a))\n   .sort();",
        "E. return list.stream()\n   .sorted((a, b) -> b.compareTo(a))\n   .collect();",
        "F. return list.stream()\n   .sorted((a, b) -> b.compareTo(a))\n   .collect(Collectors.toList());",
      ],
      answer: ["F"],
      explanation:
        "There is no Stream<T> method called compare() or compareTo(), so options A through D can be eliminated. The sorted() method is correct to use in a stream pipeline to return a sorted Stream. The collect() method can be used to turn the stream into a List. The collect() method requires a collector be selected, making option E incorrect and option F correct.",
    },
    {
      question:
        "Which of the following are true given this declaration? (Choose all that apply.)\n\nvar is = IntStream.empty();",
      options: [
        "A. is.average() returns the type int.",
        "B. is.average() returns the type OptionalInt.",
        "C. is.findAny() returns the type int.",
        "D. is.findAny() returns the type OptionalInt.",
        "E. is.sum() returns the type int.",
        "F. is.sum() returns the type OptionalInt.",
      ],
      answer: ["D", "E"],
      explanation:
        "The average() method returns an OptionalDouble since averages of any type can result in a fraction. Therefore, options A and B are both incorrect. The findAny() method returns an OptionalInt because there might not be any elements to find. Therefore, option D is correct. The sum() method returns an int rather than an OptionalInt because the sum of an empty list is zero. Therefore, option E is correct.",
    },
    {
      question:
        "Which of the following can we add after line 6 for the code to run without error and not produce any output? (Choose all that apply.)\n\n4: var stream = LongStream.of(1, 2, 3);\n5: var opt = stream.map(n -> n * 10)\n6: .filter(n -> n < 5).findFirst();",
      options: [
        "A. if (opt.isPresent()) System.out.println(opt.get());",
        "B. if (opt.isPresent()) System.out.println(opt.getAsLong());",
        "C. opt.ifPresent(System.out.println);",
        "D. opt.ifPresent(System.out::println);",
        "E. None of these; the code does not compile.",
        "F. None of these; line 6 throws an exception at runtime.",
      ],
      answer: ["B", "D"],
      explanation:
        "Lines 4–6 compile and run without issue, making option F incorrect. Line 4 creates a stream of elements [1, 2, 3]. Line 5 maps the stream to a new stream with values [10, 20, 30]. Line 6 filters out all items not less than 5, which in this case results in an empty stream. For this reason, findFirst() returns an empty Optional. Option A does not compile. It would work for a Stream<T> object, but we have a LongStream and therefore need to call getAsLong(). Option C also does not compile, as it is missing the :: that would make it a method reference. Options B and D both compile and run without error, although neither produces any output at runtime since the stream is empty.",
    },
    {
      question:
        'Given the four statements (L, M, N, O), select and order the ones that would complete the expression and cause the code to output 10 lines. (Choose all that apply.)\n\nStream.generate(() -> "1")\nL: .filter(x -> x.length() > 1)\nM: .forEach(System.out::println)\nN: .limit(10)\nO: .peek(System.out::println)\n;',
      options: [
        "A. L, N",
        "B. L, N, O",
        "C. L, N, M",
        "D. L, N, M, O",
        "E. L, O, M",
        "F. N, M",
        "G. N, O",
      ],
      answer: ["F"],
      explanation:
        "Only one of the method calls, forEach(), is a terminal operation, so any answer in which M is not the last line will not execute the pipeline. This eliminates all but options C, E, and F. Option C is incorrect because filter() is called before limit(). Since none of the elements of the stream meets the requirement for the Predicate<String>, the filter() operation will run infinitely, never passing any elements to limit(). Option E is incorrect because there is no limit() operation, which means that the code would run infinitely. Only option F is correct. It first limits the infinite stream to a finite stream of ten elements and then prints the result.",
    },
    {
      question:
        "What changes need to be made together for this code to print the string 12345? (Choose all that apply.)\n\nStream.iterate(1, x -> x++)\n.limit(5).map(x -> x)\n.collect(Collectors.joining());",
      options: [
        'A. Change Collectors.joining() to Collectors.joining(",").',
        'B. Change map(x -> x) to map(x -> "" + x).',
        "C. Change x -> x++ to x -> ++x.",
        "D. Add .forEach(System.out::print) after the call to collect().",
        "E. Wrap the entire line in a System.out.print statement.",
        "F. None of the above. The code already prints 12345.",
      ],
      answer: ["B", "C", "E"],
      explanation:
        "As written, the code doesn't compile because the Collectors.joining() expects to get a Stream<String>. Option B fixes this, at which point nothing is output because the collector creates a String without outputting the result. Option E fixes this and causes the output to be 11111. Since the post-increment operator is used, the stream contains an infinite number of the character 1. Option C fixes this and causes the stream to contain increasing numbers.",
    },
    {
      question:
        'Which is true of the following code?\n\nSet<String> birds = Set.of("oriole", "flamingo");\nStream.concat(birds.stream(), birds.stream(), birds.stream())\n\t.sorted() // line X\n\t.distinct()\n\t.findAny()\n\t.ifPresent(System.out::println);',
      options: [
        "A. It is guaranteed to print flamingo as is and when line X is removed.",
        "B. It is guaranteed to print oriole as is and when line X is removed.",
        "C. It is guaranteed to print flamingo as is, but not when line X is removed.",
        "D. It is guaranteed to print oriole as is, but not when line X is removed.",
        "E. The output may vary as is.",
        "F. The code does not compile.",
        "G. It throws an exception because the same list is used as the source for multiple streams.",
      ],
      answer: ["F"],
      explanation:
        "The code does not compile because Stream.concat() takes two parameters, not the three provided. This makes the answer option F.",
    },
    {
      question:
        "Which of the following is true?\n\nList<Integer> x1 = List.of(1, 2, 3);\nList<Integer> x2 = List.of(4, 5, 6);\nList<Integer> x3 = List.of();\nStream.of(x1, x2, x3).map(x -> x + 1)\n\t.flatMap(x -> x.stream())\n\t.forEach(System.out::print);",
      options: [
        "A. The code compiles and prints 123456.",
        "B. The code compiles and prints 234567.",
        "C. The code compiles but does not print anything.",
        "D. The code compiles but prints stream references.",
        "E. The code runs infinitely.",
        "F. The code does not compile.",
        "G. The code throws an exception.",
      ],
      answer: ["F"],
      explanation:
        "If the map() and flatMap() calls were reversed, option B would be correct. In this case, the Stream created from the source is of type Stream<List>. Trying to use the addition operator (+) on a List is not supported in Java. Therefore, the code does not compile, and option F is correct.",
    },
    {
      question:
        "Which of the following are true? (Choose all that apply.)\n\n4: Stream<Integer> s = Stream.of(1);\n5: IntStream is = s.boxed();\n6: DoubleStream ds = s.mapToDouble(x -> x);\n7: Stream<Integer> s2 = ds.mapToInt(x -> x);\n8: s2.forEach(System.out::print);",
      options: [
        "A. Line 4 causes a compiler error.",
        "B. Line 5 causes a compiler error.",
        "C. Line 6 causes a compiler error.",
        "D. Line 7 causes a compiler error.",
        "E. Line 8 causes a compiler error.",
        "F. The code compiles but throws an exception at runtime.",
        "G. The code compiles and prints 1.",
      ],
      answer: ["B", "D"],
      explanation:
        "Line 4 creates a Stream and uses autoboxing to put the Integer wrapper of 1 inside. Line 5 does not compile because boxed() is available only on primitive streams like IntStream, not Stream<Integer>. This makes option B one answer. Line 6 converts to a double primitive, which works since Integer can be unboxed to a value that can be implicitly cast to a double. Line 7 does not compile for two reasons making option D the second answer. First, converting from a double to an int would require an explicit cast. Also, mapToInt() returns an IntStream, so the data type of s2 is incorrect. The rest of the lines compile without issue.",
    },
    {
      question:
        "Given the generic type String, the partitioningBy() collector creates a Map<Boolean, List<String>> when passed to collect() by default. When a downstream collector is passed to partitioningBy(), which return types can be created? (Choose all that apply.)",
      options: [
        "A. Map<boolean, List<String>>",
        "B. Map<Boolean, List<String>>",
        "C. Map<Boolean, Map<String>>",
        "D. Map<Boolean, Set<String>>",
        "E. Map<Long, TreeSet<String>>",
        "F. None of the above",
      ],
      answer: ["B", "D"],
      explanation:
        "Options A and C do not compile because they are invalid generic declarations. Primitives are not allowed as generics, and Map must have two generic type parameters. Option E is incorrect because partitioning only gives a Boolean key. Options B and D are correct because they return a Map with a Boolean key and a value type that can be customized to any Collection.",
    },
    {
      question:
        'Which of the following statements are true about this code? (Choose all that apply.)\n\n20: Predicate<String> empty = String::isEmpty;\n21: Predicate<String> notEmpty = empty.negate();\n22:\n23: var result = Stream.generate(() -> "")\n24: \t.limit(10)\n25: \t.filter(notEmpty)\n26: \t.collect(Collectors.groupingBy(k -> k))\n27: \t.entrySet()\n28: \t.stream()\n29: \t.map(Entry::getValue)\n30: \t.flatMap(Collection::stream)\n31: \t.collect(Collectors.partitioningBy(notEmpty));\n32: System.out.println(result);',
      options: [
        "A. It outputs {}.",
        "B. It outputs {false=[], true=[]}.",
        "C. If we changed line 31 from partitioningBy(notEmpty) to groupingBy(n -> n), it would output {}.",
        "D. If we changed line 31 from partitioningBy(notEmpty) to groupingBy(n -> n), it would output {false=[], true=[]}.",
        "E. The code does not compile.",
        "F. The code compiles but does not terminate at runtime.",
      ],
      answer: ["B", "C"],
      explanation:
        "First, this mess of code does compile. While it starts with an infinite stream on line 23, it becomes finite on line 24 thanks to limit(), making option F incorrect. The pipeline preserves only nonempty elements on line 25. Since there aren't any of those, the pipeline is empty. Line 26 converts this to an empty map. Lines 27 and 28 create a Set with no elements and then another empty stream. Lines 29 and 30 convert the generic type of the Stream to List<String> and then String. Finally, line 31 gives us another Map<Boolean, List<String>>. The partitioningBy() operation always returns a map with two Boolean keys, even if there are no corresponding values. Therefore, option B is correct if the code is kept as is. By contrast, groupingBy() returns only keys that are actually needed, making option C correct if the code is modified on line 31.",
    },
    {
      question:
        "What is the result of the following?\n\nvar s = DoubleStream.of(1.2, 2.4);\ns.peek(System.out::println).filter(x -> x > 2).count();",
      options: [
        "A. 1",
        "B. 2",
        "C. 2.4",
        "D. 1.2 and 2.4",
        "E. There is no output.",
        "F. The code does not compile.",
        "G. An exception is thrown.",
      ],
      answer: ["D"],
      explanation:
        "The terminal operation is count(). Since there is a terminal operation, the intermediate operations run. The peek() operation comes before the filter(), so both numbers are printed, making option D the answer. After the filter(), the count() happens to be 1 since one of the numbers is filtered out. However, the result of the stream pipeline isn't stored in a variable or printed, and it is ignored.",
    },
    {
      question:
        'What is the output of the following?\n\n11: public class Paging {\n12: \trecord Sesame(String name, boolean human) {\n13: \t\t@Override public String toString() {\n14: \t\t\treturn name();\n15: \t\t}\n16: \t}\n17: \trecord Page(List<Sesame> list, long count) {}\n18:\n19: \tpublic static void main(String[] args) {\n20: \t\tvar monsters = Stream.of(new Sesame("Elmo", false));\n21: \t\tvar people = Stream.of(new Sesame("Abby", true));\n22: \t\tprintPage(monsters, people);\n23: \t}\n24:\n25: \tprivate static void printPage(Stream<Sesame> monsters,\n26: \t\tStream<Sesame> people) {\n27: \t\tPage page = Stream.concat(monsters, people)\n28: \t\t\t.collect(Collectors.teeing(\n29: \t\t\t\tCollectors.filtering(s -> s.name().startsWith("E"),\n30: \t\t\t\t\tCollectors.toList()),\n31: \t\t\t\tCollectors.counting(),\n32: \t\t\t\t(l, c) -> new Page(l, c)));\n33: \t\tSystem.out.println(page);\n34: \t} }',
      options: [
        "A. Page[list=[Abby], count=1]",
        "B. Page[list=[Abby], count=2]",
        "C. Page[list=[Elmo], count=1]",
        "D. Page[list=[Elmo], count=2]",
        "E. The code does not compile due to Stream.concat().",
        "F. The code does not compile due to Collectors.teeing().",
        "G. The code does not compile for another reason.",
      ],
      answer: ["D"],
      explanation:
        "This compiles, ruling out options E, F, and G. Since line 29 filters by names starting with E, that rules out options A and B. Finally, line 31 counts the entire list, which is of size 2, giving us option D as the answer.",
    },
    {
      question:
        "What is the simplest way of rewriting this code?\n\nList<Integer> x = IntStream.range(1, 6)\n\t.mapToObj(i -> i)\n\t.collect(Collectors.toList());\nx.forEach(System.out::println);",
      options: [
        "A. IntStream.range(1, 6);",
        "B. IntStream.range(1, 6)\n   .forEach(System.out::println);",
        "C. IntStream.range(1, 6)\n   .mapToObj(i -> i)\n   .forEach(System.out::println);",
        "D. None of the above is equivalent.",
        "E. The provided code does not compile.",
      ],
      answer: ["B"],
      explanation:
        "Both lists and streams have forEach() methods. There is no reason to collect into a list just to loop through it. Option A is incorrect because it does not contain a terminal operation or print anything. Options B and C both work. However, the question asks about the simplest way, which is option B.",
    },
    {
      question:
        "Which of the following throw an exception when an Optional is empty? (Choose all that apply.)",
      options: [
        'A. opt.orElse("");',
        'B. opt.orElseGet(() -> "");',
        "C. opt.orElseThrow();",
        "D. opt.orElseThrow(() -> throw new Exception());",
        "E. opt.orElseThrow(RuntimeException::new);",
        "F. opt.get();",
        'G. opt.get("");',
      ],
      answer: ["C", "E", "F"],
      explanation:
        "Options A and B compile and return an empty string without throwing an exception, using a String and Supplier parameter, respectively. Option G does not compile as the get() method does not take a parameter. Options C and F throw a NoSuchElementException. Option E throws a RuntimeException. Option D looks correct but will compile only if the throw is removed. Remember, the orElseThrow() should get a lambda expression or method reference that returns an exception, not one that throws an exception.",
    },
    {
      question:
        'What is the output of the following?\n\nvar spliterator = Stream.generate(() -> "x")\n\t.spliterator();\nspliterator.tryAdvance(System.out::print);\nvar split = spliterator.trySplit();\nsplit.tryAdvance(System.out::print);',
      options: [
        "A. x",
        "B. xx",
        "C. A long list of x's",
        "D. There is no output.",
        "E. The code does not compile.",
        "F. The code compiles but does not terminate at runtime.",
      ],
      answer: ["B"],
      explanation:
        "We start with an infinite stream where each element is x. The spliterator() method is a terminal operation since it returns a Spliterator rather than a Stream. The tryAdvance() method gets the first element and prints a single x. The trySplit() method takes a large number of elements from the stream. Since this is an infinite stream, it doesn't attempt to take half. Then tryAdvance() is called on the new split variable, and another x is printed. Since there are two values printed, option B is correct.",
    },
  ],
};
