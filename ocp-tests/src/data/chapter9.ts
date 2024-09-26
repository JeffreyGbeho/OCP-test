export const chapter9 = {
  title: "Chapter 9: Collections and Generics",
  questions: [
    {
      question:
        "Suppose you need to display a collection of products for sale, which may contain duplicates. Additionally, you have a collection of sales that you need to track, sorted by the natural order of the sale ID, and you need to retrieve the text of each. Which two of the following from the java.util package best suit your needs for this scenario? (Choose two.)",
      options: [
        "A. ArrayList",
        "B. HashMap",
        "C. HashSet",
        "D. LinkedList",
        "E. TreeMap",
        "F. TreeSet",
      ],
      answer: ["A", "E"],
      explanation:
        "For the first scenario, the answer needs to implement List because the scenario allows duplicates, narrowing it down to options A and D. Option A is a better answer than option D because LinkedList is both a List and a Queue, and you just need a regular List. For the second scenario, the answer needs to implement Map because you are dealing with key/value pairs per the unique id field. This narrows it down to options B and E. Since the question talks about ordering, you need the TreeMap. Therefore, the answer is options A and E.",
    },
    {
      question:
        'Which of the following are true? (Choose all that apply.)\n\n12: List<?> q = List.of("mouse", "parrot");\n13: var v = List.of("mouse", "parrot");\n14:\n15: q.removeIf(String::isEmpty);\n16: q.removeIf(s -> s.length() == 4);\n17: v.removeIf(String::isEmpty);\n18: v.removeIf(s -> s.length() == 4);',
      options: [
        "A. This code compiles and runs without error.",
        "B. Exactly one of these lines contains a compiler error.",
        "C. Exactly two of these lines contain a compiler error.",
        "D. Exactly three of these lines contain a compiler error.",
        "E. Exactly four of these lines contain a compiler error.",
        "F. If any lines with compiler errors are removed, this code runs without throwing an exception.",
        "G. If any lines with compiler errors are removed, this code throws an exception.",
      ],
      answer: ["C", "G"],
      explanation:
        "Line 12 creates a List<?>, which means it is treated as if all the elements are of type Object rather than String. Lines 15 and 16 do not compile since they call the String methods isEmpty() and length(), which are not defined on Object. Line 13 creates a List<String> because var uses the type that it deduces from the context. Lines 17 and 18 do compile. However, List.of() creates an immutable list, so both of those lines would throw an UnsupportedOperationException if run. Therefore, options C and G are correct.",
    },
    {
      question:
        'What is the result of the following statements?\n\n3: var greetings = new ArrayDeque<String>();\n4: greetings.offerLast("hello");\n5: greetings.offerLast("hi");\n6: greetings.offerFirst("ola");\n7: greetings.pop();\n8: greetings.peek();\n9: while (greetings.peek() != null)\n10: System.out.print(greetings.pop());',
      options: [
        "A. hello",
        "B. hellohi",
        "C. hellohiola",
        "D. hiola",
        "E. The code does not compile.",
        "F. An exception is thrown.",
      ],
      answer: ["B"],
      explanation:
        'This is a double-ended queue. On lines 4 and 5, we add to the back, giving us [hello, hi]. On line 6, we add to the front and have [ola, hello, hi]. On line 7, we remove the first element, which is "ola". On line 8, we look at the new first element ("hello") but don\'t remove it. On lines 9 and 10, we remove each element in turn until no elements are left, printing hello and hi together which makes option B the answer.',
    },
    {
      question: "Which of these statements compile? (Choose all that apply.)",
      options: [
        "A. HashSet<Number> hs = new HashSet<Integer>();",
        "B. HashSet<? super ClassCastException> set = new HashSet<Exception>();",
        "C. List<> list = new ArrayList<String>();",
        "D. List<Object> values = new HashSet<Object>();",
        "E. List<Object> objects = new ArrayList<? extends Object>();",
        "F. Map<String, ? extends Number> hm = new HashMap<String, Integer>();",
      ],
      answer: ["B", "F"],
      explanation:
        "Option A does not compile because the generic types are not compatible. We could say HashSet<? extends Number> hs2 = new HashSet<Integer>();. Option B uses a lower bound, so it allows superclass generic types. Option C does not compile because the diamond operator is allowed only on the right side. Option D does not compile because a Set is not a List. Option E does not compile because upper bounds are not allowed when instantiating the type. Finally, option F does compile because the upper bound is on the correct side of the =.",
    },
    {
      question:
        'What is the result of the following code?\n\n1: public record Hello<T>(T t) {\n2: \tpublic Hello(T t) { this.t = t; }\n3: \tprivate <T> void println(T message) {\n4: \t\tSystem.out.print(t + "-" + message);\n5: \t}\n6: \tpublic static void main(String[] args) {\n7: \t\tnew Hello<String>("hi").println(1);\n8: \t\tnew Hello("hola").println(true);\n9: \t} }',
      options: [
        "A. hi followed by a runtime exception",
        "B. hi-1hola-true",
        "C. The first compiler error is on line 1.",
        "D. The first compiler error is on line 3.",
        "E. The first compiler error is on line 8.",
        "F. The first compiler error is on another line.",
      ],
      answer: ["B"],
      explanation:
        "The record compiles and runs without issue. Line 8 gives a compiler warning for not using generics but not a compiler error. Line 7 creates the Hello class with the generic type String. It also passes an int to the println() method, which gets autoboxed into an Integer. While the println() method takes a generic parameter of type T, it is not the same <T> defined for the class on line 1. Instead, it is a different T defined as part of the method declaration on line 3. Therefore, the String argument on line 7 applies only to the class. The method can take any object as a parameter, including autoboxed primitives. Line 8 creates the Hello class with the generic type Object since no type is specified for that instance. It passes a boolean to println(), which gets autoboxed into a Boolean. The result is that hi-1hola-true is printed, making option B correct.",
    },
    {
      question:
        'Which of the following can fill in the blank to print [7, 5, 3]? (Choose all that apply.)\n\n8: public record Platypus(String name, int beakLength) {\n9: \t@Override public String toString() {return "" + beakLength;}\n10:\n11: \tpublic static void main(String[] args) {\n12: \t\tPlatypus p1 = new Platypus("Paula", 3);\n13: \t\tPlatypus p2 = new Platypus("Peter", 5);\n14: \t\tPlatypus p3 = new Platypus("Peter", 7);\n15:\n16: \t\tList<Platypus> list = Arrays.asList(p1, p2, p3);\n17:\n18: \t\tCollections.sort(list, Comparator.comparing______);\n19:\n20: \t\tSystem.out.println(list);\n21: \t}\n22: }',
      options: [
        "A. (Platypus::beakLength)",
        "B. (Platypus::beakLength).reversed()",
        "C. (Platypus::name).thenComparing(Platypus::beakLength)",
        "D. (Platypus::name).thenComparing(Comparator.comparing(Platypus::beakLength).reversed())",
        "E. (Platypus::name).thenComparingNumber(Platypus::beakLength).reversed()",
        "F. (Platypus::name).thenComparingInt(Platypus::beakLength).reversed()",
        "G. None of the above",
      ],
      answer: ["B", "F"],
      explanation:
        "We're looking for a Comparator definition that sorts in descending order by beakLength. Option A is incorrect because it sorts in ascending order by beakLength. Similarly, option C is incorrect because it sorts by beakLength in ascending order within those matches that have the same name. Option E is incorrect because there is no thenComparingNumber() method. Option B is a correct answer, as it sorts by beakLength in descending order. Options D and F are trickier. First, notice that we can call either thenComparing() or thenComparingInt() because the former will simply autobox the int into an Integer. Then observe what reversed() applies to. Option D is incorrect because it sorts by name in ascending order and only reverses the beak length of those with the same name. Option F creates a comparator that sorts by name in ascending order and then by beak size in ascending order. Finally, it reverses the result. This is just what we want, so option F is correct.",
    },
    {
      question:
        "Which of the following method signatures are valid overrides of the hairy() method in the Alpaca class? (Choose all that apply.)\n\nimport java.util.*;\npublic class Alpaca {\n\tpublic List<String> hairy(List<String> list) { return null; }\n}",
      options: [
        "A. public List<String> hairy(List<CharSequence> list) { return null; }",
        "B. public List<String> hairy(ArrayList<String> list) { return null; }",
        "C. public List<String> hairy(List<Integer> list) { return null; }",
        "D. public List<CharSequence> hairy(List<String> list) { return null; }",
        "E. public Object hairy(List<String> list) { return null; }",
        "F. public ArrayList<String> hairy(List<String> list) { return null; }",
      ],
      answer: ["B", "F"],
      explanation:
        "A valid override of a method with generic arguments must have a return type that is covariant, with matching generic type parameters. Options D and E are incorrect because the return type is too broad. Additionally, the generic arguments must have the same signature with the same generic types. This eliminates options A and C. The remaining options are correct, making the answer options B and F.",
    },
    {
      question:
        'What is the result of the following program?\n\n3: public class MyComparator implements Comparator<String> {\n4: \tpublic int compare(String a, String b) {\n5: \t\treturn b.toLowerCase().compareTo(a.toLowerCase());\n6: \t}\n7: \tpublic static void main(String[] args) {\n8: \t\tString[] values = { "123", "Abb", "aab" };\n9: \t\tArrays.sort(values, new MyComparator());\n10: \t\tfor (var s: values)\n11: \t\t\tSystem.out.print(s + " ");\n12: \t}\n13: }',
      options: [
        "A. Abb aab 123",
        "B. aab Abb 123",
        "C. 123 Abb aab",
        "D. 123 aab Abb",
        "E. The code does not compile.",
        "F. A runtime exception is thrown.",
      ],
      answer: ["A"],
      explanation:
        "The array is sorted using MyComparator, which sorts the elements in reverse alphabetical order in a case-insensitive fashion. Normally, numbers sort before letters. This code reverses that by calling the compareTo() method on b instead of a. Therefore, option A is correct.",
    },
    {
      question:
        "Which of these statements can fill in the blank so that the Helper class compiles successfully? (Choose all that apply.)\n\n2: public class Helper {\n3: \tpublic static <U extends Exception>\n4: \tvoid printException(U u) {\n5:\n6: \t\tSystem.out.println(u.getMessage());\n7: \t}\n8: \tpublic static void main(String[] args) {\n9: \t\tHelper._____________________________________;\n10: \t} }",
      options: [
        'A. printException(new FileNotFoundException("A"))',
        'B. printException(new Exception("B"))',
        'C. <Throwable>printException(new Exception("C"))',
        'D. <NullPointerException>printException(new NullPointerException("D"))',
        'E. printException(new Throwable("E"))',
      ],
      answer: ["A", "B", "D"],
      explanation:
        "The generic type must be Exception or a subclass of Exception since this is an upper bound, making options A and B correct. Options C and E are wrong because Throwable is a superclass of Exception. Additionally, option D is correct despite the odd syntax by explicitly listing the type. You should still be able to recognize it as acceptable.",
    },
    {
      question:
        "Which of the following will compile when filling in the blank? (Choose all that apply.)\n\nvar list = List.of(1, 2, 3);\nvar set = Set.of(1, 2, 3);\nvar map = Map.of(1, 2, 3, 4);\n_______.forEach(System.out::println);",
      options: [
        "A. list",
        "B. set",
        "C. map",
        "D. map.keys()",
        "E. map.keySet()",
        "F. map.values()",
        "G. map.valueSet()",
      ],
      answer: ["A", "B", "E", "F"],
      explanation:
        "The forEach() method works with a List or a Set. Therefore, options A and B are correct. Additionally, options E and F return a Set and can be used as well. Options D and G refer to methods that do not exist. Option C is tricky because a Map does have a forEach() method. However, it uses two lambda parameters rather than one. Since there is no matching System.out.println method, it does not compile.",
    },
    {
      question:
        "Which of these statements can fill in the blank so that the Wildcard class compiles successfully? (Choose all that apply.)\n\n3: public class Wildcard {\n4: \tpublic void showSize(List<?> list) {\n5: \t\tSystem.out.println(list.size());\n6: \t}\n7: \tpublic static void main(String[] args) {\n8: \t\tWildcard card = new Wildcard();\n9: \t\t_____________________________________;\n10: \t\tcard.showSize(list);\n11: \t} }",
      options: [
        "A. List<?> list = new HashSet <String>()",
        "B. ArrayList<? super Date> list = new ArrayList<Date>()",
        "C. List<?> list = new ArrayList<?>() ",
        "D. List<Exception> list = new LinkedList<java.io.IOException>()",
        "E. ArrayList <? extends Number> list = new ArrayList <Integer>()",
        "F. None of the above",
      ],
      answer: ["B", "E"],
      explanation:
        "The showSize() method can take any type of List since it uses an unbounded wildcard. Option A is incorrect because it is a Set and not a List. Option C is incorrect because the wildcard is not allowed to be on the right side of an assignment. Option D is incorrect because the generic types are not compatible. Option B is correct because a lower-bounded wildcard allows that same type to be the generic. Option E is correct because Integer is a subclass of Number.",
    },
    {
      question:
        'What is the result of the following program?\n\n3: public record Sorted(int num, String text)\n4: implements Comparable<Sorted>, Comparator<Sorted> {\n5:\n6: \tpublic String toString() { return "" + num; }\n7: \tpublic int compareTo(Sorted s) {\n8: \t\treturn text.compareTo(s.text);\n9: \t}\n10: \tpublic int compare(Sorted s1, Sorted s2) {\n11: \t\treturn s1.num - s2.num;\n12: \t}\n13: \tpublic static void main(String[] args) {\n14: \t\tvar s1 = new Sorted(88, "a");\n15: \t\tvar s2 = new Sorted(55, "b");\n16: \t\tvar t1 = new TreeSet<Sorted>();\n17: \t\tt1.add(s1); t1.add(s2);\n18: \t\tvar t2 = new TreeSet<Sorted>(s1);\n19: \t\tt2.add(s1); t2.add(s2);\n20: \t\tSystem.out.println(t1 + " " + t2);\n21: \t} }',
      options: [
        "A. [55, 88] [55, 88]",
        "B. [55, 88] [88, 55]",
        "C. [88, 55] [55, 88]",
        "D. [88, 55] [88, 55]",
        "E. The code does not compile.",
        "F. A runtime exception is thrown.",
      ],
      answer: ["C"],
      explanation:
        "This question is difficult because it defines both Comparable and Comparator on the same object. The t1 object doesn't specify a Comparator, so it uses the Comparable object's compareTo() method. This sorts by the text instance variable. The t2 object does specify a Comparator when calling the constructor, so it uses the compare() method, which sorts by the int. This gives us option C as the answer.",
    },
    {
      question:
        "What is the result of the following code? (Choose all that apply.)\n\nComparator<Integer> c1 = (o1, o2) -> o2 - o1;\nComparator<Integer> c2 = Comparator.naturalOrder();\nComparator<Integer> c3 = Comparator.reverseOrder();\nvar list = Arrays.asList(5, 4, 7, 2);\nCollections.sort(list,_________);\nCollections.reverse(list);\nCollections.reverse(list);\nSystem.out.println(Collections.binarySearch(list, 2));",
      options: [
        "A. One or more of the comparators can fill in the blank so that the code prints 0.",
        "B. One or more of the comparators can fill in the blank so that the code prints 1.",
        "C. One or more of the comparators can fill in the blank so that the code prints 2.",
        "D. The result is undefined regardless of which comparator is used.",
        "E. A runtime exception is thrown regardless of which comparator is used.",
        "F. The code does not compile.",
      ],
      answer: ["A"],
      explanation:
        "When using binarySearch(), the List must be sorted in the same order that the Comparator uses. Since the binarySearch() method does not specify a Comparator explicitly, the default sort order is used. Only c2 uses that sort order and correctly identifies that the value 2 is at index 0. Therefore, option A is correct. The other two comparators sort in descending order. Therefore, the precondition for binarySearch() is not met, and the result is undefined for those two. The two calls to reverse() are just there to distract you; they cancel each other out.",
    },
    {
      question:
        "Which of the following lines can be inserted to make the code compile? (Choose all that apply.)\n\nclass W {}\nclass X extends W {}\nclass Y extends X {}\nclass Z<Y> {\n\t// INSERT CODE HERE\n}",
      options: [
        "A. W w1 = new W();",
        "B. W w2 = new X();",
        "C. W w3 = new Y();",
        "D. Y y1 = new W();",
        "E. Y y2 = new X();",
        "F. Y y1 = new Y();",
      ],
      answer: ["A", "B"],
      explanation:
        "Y is both a class and a type parameter. This means that within the class Z, when we refer to Y, it uses the type parameter. All of the choices that mention class Y are incorrect because it no longer means the class Y. Only options A and B are correct.",
    },
    {
      question:
        "Which options are true of the following code? (Choose all that apply.)\n\n3:______________ q = new LinkedList<>();\n4: q.add(10);\n5: q.add(12);\n6: q.remove(1);\n7: System.out.print(q);",
      options: [
        "A. If we fill in the blank with List<Integer>, the output is [10].",
        "B. If we fill in the blank with Queue<Integer>, the output is [10].",
        "C. If we fill in the blank with var, the output is [10].",
        "D. One or more of the scenarios does not compile.",
        "E. One or more of the scenarios throws a runtime exception.",
      ],
      answer: ["A", "C"],
      explanation:
        "A LinkedList implements both List and Queue. The List interface has a method to remove by index. Since this method exists, Java does not autobox to call the other method, making the output [10] and option A correct. Similarly, option C is correct because the method to remove an element by index is available on a LinkedList<Object> (which is what var represents here). By contrast, Queue has only the remove by object method, so Java does autobox there. Since the number 1 is not in the list, Java does not remove anything for the Queue, and the output is [10, 12].",
    },
    {
      question:
        'What is the result of the following code?\n\n4: Map m = new HashMap();\n5: m.put(123, "456");\n6: m.put("abc", "def");\n7: System.out.println(m.contains("123"));',
      options: [
        "A. false",
        "B. true",
        "C. Compiler error on line 4",
        "D. Compiler error on line 5",
        "E. Compiler error on line 7",
        "F. A runtime exception is thrown.",
      ],
      answer: ["E"],
      explanation:
        "This question looks like it is about generics, but it's not. It is trying to see whether you noticed that Map does not have a contains() method. It has containsKey() and containsValue() instead, making option E the answer. If containsKey() were called, the answer would be false because 123 is an Integer key in the Map, rather than a String.",
    },
    {
      question:
        "What is the result of the following code? (Choose all that apply.)\n\n48: var map = Map.of(1,2, 3, 6);\n49: var list = List.copyOf(map.entrySet());\n50:\n51: List<Integer> one = List.of(8, 16, 2);\n52: var copy = List.copyOf(one);\n53: var copyOfCopy = List.copyOf(copy);\n54: var thirdCopy = new ArrayList<>(copyOfCopy);\n55:\n56: list.replaceAll(x -> x * 2);\n57: one.replaceAll(x -> x * 2);\n58: thirdCopy.replaceAll(x -> x * 2);\n59:\n60: System.out.println(thirdCopy);",
      options: [
        "A. One line fails to compile.",
        "B. Two lines fail to compile.",
        "C. Three lines fail to compile.",
        "D. The code compiles but throws an exception at runtime.",
        "E. If any lines with compiler errors are removed, the code throws an exception at runtime.",
        "F. If any lines with compiler errors are removed, the code prints [16, 32, 4].",
        "G. The code compiles and prints [16, 32, 4] without any changes.",
      ],
      answer: ["A", "E"],
      explanation:
        "The key to this question is keeping track of the types. Line 48 is a Map<Integer, Integer>. Line 49 builds a List out of a Set of Entry objects, giving us List<Entry<Integer, Integer>>. This causes a compiler error on line 56 since we can't multiply an Entry object by two. Lines 51–54 are all of type List<Integer>. The first three are immutable, and the one on line 54 is mutable. This means line 57 throws an UnsupportedOperationException since we attempt to modify the list. Line 58 would work if we could get to it. Since there is one compiler error and one runtime error, options A and E are correct.",
    },
    {
      question:
        "What code change is needed to make the method compile, assuming there is no class named T?\n\npublic static T identity(T t) {\n\treturn t;\n}",
      options: [
        "A. Add <T> after the public keyword.",
        "B. Add <T> after the static keyword.",
        "C. Add <T> after T.",
        "D. Add <?> after the public keyword.",
        "E. Add <?> after the static keyword.",
        "F. No change is required. The code already compiles.",
      ],
      answer: ["B"],
      explanation:
        "When using generic types in a method, the generic specification goes before the return type and option B is correct.",
    },
    {
      question:
        "What is the result of the following?\n\nvar map = new HashMap<Integer, Integer>();\nmap.put(1, 10);\nmap.put(2, 20);\nmap.put(3, null);\nmap.merge(1, 3, (a,b) -> a + b);\nmap.merge(3, 3, (a,b) -> a + b);\nSystem.out.println(map);",
      options: [
        "A. {1=10, 2=20}",
        "B. {1=10, 2=20, 3=null}",
        "C. {1=10, 2=20, 3=3}",
        "D. {1=13, 2=20}",
        "E. {1=13, 2=20, 3=null}",
        "F. {1=13, 2=20, 3=3}",
        "G. The code does not compile.",
        "H. An exception is thrown.",
      ],
      answer: ["F"],
      explanation:
        "The first call to merge() calls the mapping function and adds the numbers to get 13. It then updates the map. The second call to merge() sees that the map currently has a null value for that key. It does not call the mapping function but instead replaces it with the new value of 3. Therefore, option F is correct.",
    },
    {
      question:
        "Which of the following statements are true? (Choose all that apply.)",
      options: [
        "A. Comparable is in the java.util package.",
        "B. Comparator is in the java.util package.",
        "C. compare() is in the Comparable interface.",
        "D. compare() is in the Comparator interface.",
        "E. compare() takes one method parameter.",
        "F. compare() takes two method parameters.",
      ],
      answer: ["B", "D", "F"],
      explanation:
        "The java.lang.Comparable interface is implemented on the object to compare. It specifies the compareTo() method, which takes one parameter. The java.util.Comparator interface specifies the compare() method, which takes two parameters. This gives us options B, D, and F as the answers.",
    },
  ],
};
