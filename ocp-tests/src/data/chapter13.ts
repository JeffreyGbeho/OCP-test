export const chapter13 = {
  title: "Chapter 13: Concurrency",
  questions: [
    {
      question:
        "Given the following code snippet, which options correctly create a parallel stream? (Choose all that apply.)\n\nvar c = new ArrayList<Thread>();\nvar s = c.stream();\nvar p = _________________;",
      options: [
        "A. new ParallelStream(s)",
        "B. c.parallel()",
        "C. s.parallelStream()",
        "D. c.parallelStream()",
        "E. new ParallelStream(c)",
        "F. s.parallel()",
      ],
      answer: ["D", "F"],
      explanation:
        "There is no such class within the Java API called ParallelStream, so options A and E are incorrect. The method defined in the Stream class to create a parallel stream from an existing stream is parallel(); therefore, option F is correct, and option C is incorrect. The method defined in the Collection class to create a parallel stream from a collection is parallelStream(); therefore, option D is correct, and option B is incorrect.",
    },
    {
      question:
        "Given that the sum of the numbers from 1 (inclusive) to 10 (exclusive) is 45, what are the possible results of executing the following program? (Choose all that apply.)\n\n1: import java.util.concurrent.locks.*;\n2: import java.util.stream.*;\n3: public class Bank {\n4: \tprivate Lock vault = new ReentrantLock();\n5: \tprivate int total = 0;\n6: \tpublic void deposit(int value) {\n7: \t\ttry {\n8: \t\t\tvault.tryLock();\n9: \t\t\ttotal += value;\n10: \t\t} finally { vault.unlock(); }\n11: \t}\n12: \tpublic static void main(String[] unused) {\n13: \t\tvar bank = new Bank();\n14: \t\tIntStream.range(1, 10).parallel()\n15: \t\t\t.forEach(s -> bank.deposit(s));\n16: \t\tSystem.out.println(bank.total);\n17: \t} }",
      options: [
        "A. 45 is printed.",
        "B. A number less than 45 is printed.",
        "C. A number greater than 45 is printed.",
        "D. An exception is thrown.",
        "E. None of the above, as the code does not compile.",
      ],
      answer: ["A", "D"],
      explanation:
        "The tryLock() method returns immediately with a value of false if the lock cannot be acquired. Unlike lock(), it does not wait for a lock to become available. This code fails to check the return value on line 8, resulting in the protected code being entered regardless of whether the lock is obtained. In some executions (when tryLock() returns true on every call), the code will complete successfully and print 45 at runtime, making option A correct. On other executions (when tryLock() returns false at least once), the unlock() method on line 10 will throw an IllegalMonitorStateException at runtime, making option D correct. Option B would be possible if line 10 did not throw an exception.",
    },
    {
      question:
        "Which of the following statements about the Callable call() and Runnable run() methods are correct? (Choose all that apply.)",
      options: [
        "A. Both methods return void.",
        "B. Both can throw unchecked exceptions.",
        "C. Both can be implemented with lambda expressions.",
        "D. Runnable returns a generic type.",
        "E. Both can throw checked exceptions.",
        "F. Callable returns a generic type.",
      ],
      answer: ["B", "C", "F"],
      explanation:
        "Runnable returns void and Callable returns a generic type, making options A and D incorrect and option F correct. All methods are capable of throwing unchecked exceptions, so option B is correct. Only Callable is capable of throwing checked exceptions, so option E is incorrect. Both Runnable and Callable are functional interfaces that can be implemented with a lambda expression, so option C is also correct.",
    },
    {
      question:
        'Which lines need to be changed to make the code compile? (Choose all that apply.)\n\nExecutorService service = // w1\nExecutors.newSingleThreadScheduledExecutor();\nservice.scheduleWithFixedDelay(() -> {\n\tSystem.out.println("Open Zoo");\n\treturn null; // w2\n}, 0, 1, TimeUnit.MINUTES);\nvar result = service.submit(() -> // w3\n\tSystem.out.println("Wake Staff"));\nSystem.out.println(result.get()); // w4',
      options: [
        "A. It compiles and runs without issue.",
        "B. Line w1",
        "C. Line w2",
        "D. Line w3",
        "E. Line w4",
        "F. It compiles but throws an exception at runtime.",
      ],
      answer: ["B", "C"],
      explanation:
        "The code does not compile, so options A and F are incorrect. The first problem is that although a ScheduledExecutorService is created, it is assigned to an ExecutorService. The type of the variable on line w1 would have to be updated to ScheduledExecutorService for the code to compile, making option B correct. The second problem is that scheduleWithFixedDelay() supports only Runnable, not Callable, and any attempt to return a value is invalid in a Runnable lambda expression; therefore, line w2 will also not compile, and option C is correct. The rest of the lines compile without issue, so options D and E are incorrect.",
    },
    {
      question:
        'What statement about the following code is true?\n\nvar value1 = new AtomicLong(0);\nfinal long[] value2 = {0};\nIntStream.iterate(1, i -> 1).limit(100).parallel()\n\t.forEach(i -> value1.incrementAndGet());\nIntStream.iterate(1, i -> 1).limit(100).parallel()\n\t.forEach(i -> ++value2[0]);\nSystem.out.println(value1+" "+value2[0]);',
      options: [
        "A. It outputs 100 100.",
        "B. It outputs 100 99.",
        "C. The output cannot be determined ahead of time.",
        "D. The code does not compile.",
        "E. It compiles but throws an exception at runtime.",
        "F. It compiles but enters an infinite loop at runtime.",
        "G. None of the above",
      ],
      answer: ["C"],
      explanation:
        "The code compiles and runs without throwing an exception or entering an infinite loop, so options D, E, and F are incorrect. The key here is that the increment operator ++ is not atomic. While the first part of the output will always be 100, the second part is nondeterministic. It may output any value from 1 to 100, because the threads can overwrite each other's work. Therefore, option C is the correct answer, and options A and B are incorrect.",
    },
    {
      question:
        "Which statements about the following code are correct? (Choose all that apply.)\n\nvar data = List.of(2,5,1,9,8);\ndata.stream().parallel()\n\t.mapToInt(s -> s)\n\t.peek(System.out::print)\n\t.forEachOrdered(System.out::print);",
      options: [
        "A. The peek() method will print the entries in the sorted order: 12589.",
        "B. The peek() method will print the entries in the original order: 25198.",
        "C. The peek() method will print the entries in an order that cannot be determined ahead of time.",
        "D. The forEachOrdered() method will print the entries in the sorted order: 12589.",
        "E. The forEachOrdered() method will print the entries in the original order: 25198.",
        "F. The forEachOrdered() method will print the entries in an order that cannot be determined ahead of time.",
        "G. The code does not compile.",
      ],
      answer: ["C", "E"],
      explanation:
        "The code compiles, so option G is incorrect. The peek() method on a parallel stream will process the elements concurrently, so the order cannot be determined ahead of time, and option C is correct. The forEachOrdered() method will process the elements in the order in which they are stored in the stream, making option E correct. None of the methods sort the elements, so options A and D are incorrect.",
    },
    {
      question:
        "Fill in the blanks: __________ occur(s) when two or more threads are blocked forever but both appear active. _______ occur(s) when two or more threads try to complete a related task at the same time, resulting in invalid or unexpected data.",
      options: [
        "A. Livelock, Deadlock",
        "B. Deadlock, Starvation",
        "C. Race conditions, Deadlock",
        "D. Livelock, Race conditions",
        "E. Starvation, Race conditions",
        "F. Deadlock, Livelock",
      ],
      answer: ["D"],
      explanation:
        "Livelock occurs when two or more threads are conceptually blocked forever, although they are each still active and trying to complete their task. A race condition is an undesirable result that occurs when two tasks that should have been completed sequentially are completed at the same time. For these reasons, option D is correct.",
    },
    {
      question:
        "Assuming this class is accessed by only a single thread at a time, what is the result of calling the countIceCreamFlavors() method?\n\nimport java.util.stream.LongStream;\npublic class Flavors {\n\tprivate static int counter;\n\tpublic static void countIceCreamFlavors() {\n\t\tcounter = 0;\n\t\tRunnable task = () -> counter++;\n\t\tLongStream.range(0, 500)\n\t\t\t.forEach(m -> new Thread(task).run());\n\t\tSystem.out.println(counter);\n\t} }",
      options: [
        "A. The method consistently prints a number less than 500.",
        "B. The method consistently prints 500.",
        "C. The method compiles and prints a value, but that value cannot be determined ahead of time.",
        "D. The method does not compile.",
        "E. The method compiles but throws an exception at runtime.",
        "F. None of the above",
      ],
      answer: ["B"],
      explanation:
        "Be wary of run() vs. start() on the exam! The method looks like it executes a task concurrently, but it runs synchronously. In each iteration of the forEach() loop, the process waits for the run() method to complete before moving on. For this reason, the code is thread-safe. Since the program consistently prints 500 at runtime, option B is correct. Note that if start() had been used instead of run() (or the stream was parallel), then the output would be indeterminate, and option C would have been correct.",
    },
    {
      question:
        "Which happens when a new task is submitted to an ExecutorService in which no threads are available?",
      options: [
        "A. The executor throws an exception when the task is submitted.",
        "B. The executor discards the task without completing it.",
        "C. The executor adds the task to an internal queue and completes when there is an available thread.",
        "D. The thread submitting the task waits on the submit call until a thread is available before continuing.",
        "E. The executor stops an existing task and starts the newly submitted one.",
      ],
      answer: ["C"],
      explanation:
        "If a task is submitted to a thread executor, and the thread executor does not have any available threads, the call to the task will return immediately with the task being queued internally by the thread executor. For this reason, option C is the correct answer.",
    },
    {
      question:
        'What is the result of executing the following code snippet?\n\nList<Integer> lions = new ArrayList<>(List.of(1,2,3));\nList<Integer> tigers = new CopyOnWriteArrayList<>(lions);\nSet<Integer> bears = new ConcurrentSkipListSet<>();\nbears.addAll(lions);\nfor(Integer item: tigers) tigers.add(4); // x1\nfor(Integer item: bears) bears.add(5); // x2\nSystem.out.println(lions.size() + " " + tigers.size() + " " + bears.size());',
      options: [
        "A. It outputs 3 6 4.",
        "B. It outputs 6 6 6.",
        "C. It outputs 6 3 4.",
        "D. The code does not compile.",
        "E. It compiles but throws an exception at runtime on line x1.",
        "F. It compiles but throws an exception at runtime on line x2.",
        "G. It compiles but enters an infinite loop at runtime.",
      ],
      answer: ["A"],
      explanation:
        "The code compiles without issue, so option D is incorrect. The CopyOnWriteArrrayList class is designed to preserve the original list on iteration, so the first loop will be executed exactly three times and, in the process, will increase the size of tigers to six elements. The ConcurrentSkipListSet class allows modifications, and since it enforces the uniqueness of its elements, the value 5 is added only once, leading to a total of four elements in bears. Finally, despite using the elements of lions to populate the collections, tigers and bears are not backed by the original list, so the size of lions is 3 throughout this program. For these reasons, the program prints 3 6 4, and option A is correct.",
    },
    {
      question:
        'What statements about the following code are true? (Choose all that apply.)\n\nInteger i1 = List.of(1, 2, 3, 4, 5).stream().findAny().get();\nsynchronized(i1) { // y1\n\tInteger i2 = List.of(6, 7, 8, 9, 10)\n\t\t.parallelStream()\n\t\t.sorted()\n\t\t.findAny().get(); // y2\n\tSystem.out.println(i1 + " " + i2);\n}',
      options: [
        "A. The first value printed is always 1.",
        "B. The second value printed is always 6.",
        "C. The code will not compile because of line y1.",
        "D. The code will not compile because of line y2.",
        "E. The code compiles but throws an exception at runtime.",
        "F. The output cannot be determined ahead of time.",
        "G. It compiles but waits forever at runtime.",
      ],
      answer: ["F"],
      explanation:
        "The code compiles and runs without issue, so options C, D, E, and G are incorrect. There are two important things to notice. First, synchronizing on the first variable doesn't impact the results of the code. Second, sorting on a parallel stream does not mean that findAny() will return the first record. The findAny() method will return the value from the first thread that retrieves a record. Therefore, the output is not guaranteed, and option F is correct. Option A looks correct, but even on serial streams, findAny() is free to select any element.",
    },
    {
      question:
        'Assuming each call to takeNap() takes five seconds to execute without throwing an exception, what is the expected result of executing the following code snippet?\n\nExecutorService service = Executors.newFixedThreadPool(4);\ntry {\n\tservice.execute(() -> takeNap());\n\tservice.execute(() -> takeNap());\n\tservice.execute(() -> takeNap());\n} finally {\n\tservice.shutdown();\n}\nservice.awaitTermination(2, TimeUnit.SECONDS);\nSystem.out.println("DONE!");',
      options: [
        "A. It will immediately print DONE!.",
        "B. It will pause for 2 seconds and then print DONE!.",
        "C. It will pause for 5 seconds and then print DONE!.",
        "D. It will pause for 15 seconds and then print DONE!.",
        "E. It will throw an exception at runtime.",
        "F. None of the above, as the code does not compile.",
      ],
      answer: ["B"],
      explanation:
        "The code snippet submits three tasks to an ExecutorService, shuts it down, and then waits for the results. The awaitTermination() method waits a specified amount of time for all tasks to complete and the service to finish shutting down. Since each five-second task is still executing, the awaitTermination() method will return with a value of false after two seconds but not throw an exception. For these reasons, option B is correct.",
    },
    {
      question:
        'What statements about the following code are true? (Choose all that apply.)\n\nSystem.out.print(List.of("duck","flamingo","pelican")\n\t.parallelStream().parallel() // q1\n\t.reduce(0,\n\t\t(c1, c2) -> c1.length() + c2.length(), // q2\n\t\t(s1, s2) -> s1 + s2)); // q3',
      options: [
        "A. It compiles and runs without issue, outputting the total length of all strings in the stream.",
        "B. The code will not compile because of line q1.",
        "C. The code will not compile because of line q2.",
        "D. The code will not compile because of line q3.",
        "E. It compiles but throws an exception at runtime.",
        "F. None of the above",
      ],
      answer: ["C"],
      explanation:
        "The code does not compile, so options A and E are incorrect. The problem here is that c1 is an Integer and c2 is a String, so the code fails to combine on line q2, since calling length() on an Integer is not allowed, and option C is correct. The rest of the lines compile without issue. Note that calling parallel() on an already parallel stream is allowed, and it may return the same object.",
    },
    {
      question:
        'What statements about the following code snippet are true? (Choose all that apply.)\n\nObject o1 = new Object();\nObject o2 = new Object();\nvar service = Executors.newFixedThreadPool(2);\nvar f1 = service.submit(() -> {\n\tsynchronized (o1) {\n\t\tsynchronized (o2) { System.out.print("Tortoise"); }\n\t}\n});\nvar f2 = service.submit(() -> {\n\tsynchronized (o2) {\n\t\tsynchronized (o1) { System.out.print("Hare"); }\n\t}\n});\nf1.get();\nf2.get();',
      options: [
        "A. The code will always output Tortoise followed by Hare.",
        "B. The code will always output Hare followed by Tortoise.",
        "C. If the code does output anything, the order cannot be determined.",
        "D. The code does not compile.",
        "E. The code compiles but may produce a deadlock at runtime.",
        "F. The code compiles but may produce a livelock at runtime.",
        "G. It compiles but throws an exception at runtime.",
      ],
      answer: ["C", "E"],
      explanation:
        "The code compiles without issue, so option D is incorrect. Since both tasks are submitted to the same thread executor pool, the order cannot be determined, so options A and B are incorrect, and option C is correct. The key here is that the order in which the resources o1 and o2 are synchronized could result in a deadlock. For example, if the first thread gets a lock on o1 and the second thread gets a lock on o2 before either thread can get their second lock, the code will hang at runtime, making option E correct. The code cannot produce a livelock, since both threads are waiting, so option F is incorrect. Finally, if a deadlock does occur, an exception will not be thrown, so option G is incorrect.",
    },
    {
      question:
        'Which statement about the following code snippet is correct?\n\n2: var cats = Stream.of("leopard", "lynx", "ocelot", "puma").parallel();\n3: var bears = Stream.of("panda","grizzly","polar").parallel();\n4: var data = Stream.of(cats,bears).flatMap(s -> s)\n5: \t.collect(Collectors.groupingByConcurrent(\n6: \t\ts -> !s.startsWith("p")));\n7: System.out.println(data.get(false).size() + " " + data.get(true).size());',
      options: [
        "A. It outputs 3 4.",
        "B. It outputs 4 3.",
        "C. The code will not compile because of line 6.",
        "D. The code will not compile because of line 7.",
        "E. The code will not compile because of line 8.",
        "F. It compiles but throws an exception at runtime.",
      ],
      answer: ["A"],
      explanation:
        "The code compiles and runs without issue, so options C, D, E, and F are incorrect. The collect() operation groups the animals into those that do and do not start with the letter p. Note that there are four animals that do not start with the letter p and three animals that do. The logical complement operator (!) before the startsWith() method means that results are reversed, so the output is 3 4, and option A is correct, making option B incorrect.",
    },
    {
      question:
        "Assuming one minute is enough time for all the threads within this program to complete, what are the possible results of executing the following program? (Choose all that apply.)\n\npublic class RocketShip {\n\tprivate volatile int fuel;\n\tprivate void launch(int checks) {\n\t\tvar p = new ArrayList<Thread>();\n\t\tfor (int i = 0; i < checks; i++)\n\t\t\tp.add(new Thread(() -> fuel++));\n\t\tp.forEach(Thread::interrupt);\n\t\tp.forEach(Thread::start);\n\t\tp.forEach(Thread::interrupt);\n\t}\n\tpublic static void main(String[] args) throws Exception {\n\t\tvar ship = new RocketShip();\n\t\tship.launch(100);\n\t\tThread.sleep(60*1000);\n\t\tSystem.out.print(ship.fuel);\n\t} }",
      options: [
        "A. It prints a number less than 100.",
        "B. It prints 100.",
        "C. It prints a number greater than 100.",
        "D. It does not compile.",
        "E. It compiles but throws an InterruptedException at runtime.",
      ],
      answer: ["A", "B"],
      explanation:
        "The code compiles and runs without issue, so options D and E are incorrect. If the calls to fuel++ are ordered sequentially, then the program will print 100 at runtime, making option B correct. On the other hand, the calls may overwrite each other. The volatile attribute only guarantees memory consistency, not thread-safety, making option A correct and option C incorrect. Option E is also incorrect, as no InterruptedException is thrown by this code. Remember, interrupt() only impacts a thread that is in a WAITING or TIMED_WAITING state. Calling interrupt() on a thread in a NEW or RUNNABLE state has no impact unless the code is running and explicitly checking the isInterrupted() method.",
    },
    {
      question:
        "Which statements about methods in ReentrantLock are correct? (Choose all that apply.)",
      options: [
        "A. The lock() method will attempt to acquire a lock without waiting indefinitely for it.",
        "B. The testLock() method will attempt to acquire a lock without waiting indefinitely for it.",
        "C. The attemptLock() method will attempt to acquire a lock without waiting indefinitely for it.",
        "D. By default, a ReentrantLock fairly releases to each thread in the order in which it was requested.",
        "E. Calling the unlock() method once will release a resource so that other threads can obtain the lock.",
        "F. None of the above",
      ],
      answer: ["F"],
      explanation:
        "The lock() method will wait indefinitely for a lock, so option A is incorrect. Options B and C are also incorrect, as the correct method name to attempt to acquire a lock is tryLock(). Option D is incorrect, as fairness is set to false by default and must be enabled by using an overloaded constructor. Finally, option E is incorrect because a thread that holds the lock may have called lock() or tryLock() multiple times. A thread needs to call unlock() once for each call to lock() and successful tryLock(). Option F is the correct answer since none of the other options are valid statements.",
    },
    {
      question:
        "Which of the following are valid Callable expressions? (Choose all that apply.)",
      options: [
        "A. a -> {return 10;}",
        'B. () -> {String s = "";}',
        "C. () -> 5",
        "D. () -> {return null}",
        'E. () -> "The" + "Zoo"',
        "F. (int count) -> count+1",
        'G. () -> {System.out.println("Giraffe"); return 10;}',
      ],
      answer: ["C", "E", "G"],
      explanation:
        "A Callable lambda expression takes no values and returns a generic type; therefore, options C, E, and G are correct. Options A and F are incorrect because they both take an input parameter. Option B is incorrect because it does not return a value. Option D is not a valid lambda expression, because it is missing a semicolon at the end of the return statement, which is required when inside braces {}.",
    },
    {
      question:
        'What is the result of executing the following application? (Choose all that apply.)\n\nimport java.util.concurrent.*;\nimport java.util.stream.*;\npublic class PrintConstants {\n\tpublic static void main(String[] args) {\n\t\tvar s = Executors.newScheduledThreadPool(10);\n\t\tDoubleStream.of(3.14159,2.71828) // b1\n\t\t\t.forEach(c -> s.submit( // b2\n\t\t\t\t() -> System.out.println(10*c))); // b3\n\t\ts.execute(() -> System.out.println("Printed"));\n\t} }',
      options: [
        "A. It compiles and outputs the two numbers followed by Printed.",
        "B. The code will not compile because of line b1.",
        "C. The code will not compile because of line b2.",
        "D. The code will not compile because of line b3.",
        "E. It compiles, but the output cannot be determined ahead of time.",
        "F. It compiles but throws an exception at runtime.",
        "G. It compiles but waits forever at runtime.",
      ],
      answer: ["E", "G"],
      explanation:
        "The application compiles and does not throw an exception. Even though the stream is processed in sequential order, the tasks are submitted to a thread executor, which may complete the tasks in any order. Therefore, the output cannot be determined ahead of time, and option E is correct. Finally, the thread executor is never shut down; therefore, the code will run but never terminate, making option G also correct.",
    },
    {
      question:
        'What is the result of executing the following program? (Choose all that apply.)\n\nimport java.util.*;\nimport java.util.concurrent.*;\nimport java.util.stream.*;\npublic class PrintCounter {\n\tstatic int count = 0;\n\tpublic static void main(String[] args) throws InterruptedException, ExecutionException {\n\t\tvar service = Executors.newSingleThreadExecutor();\n\t\ttry {\n\t\t\tvar r = new ArrayList<Future<?>>();\n\t\t\tIntStream.iterate(0,i -> i+1).limit(5).forEach(\n\t\t\t\ti -> r.add(service.execute(() -> {count++;})) // n1\n\t\t\t);\n\t\t\tfor(Future<?> result : r) {\n\t\t\t\tSystem.out.print(result.get()+" "); // n2\n\t\t\t}\n\t\t} finally { service.shutdown(); }\n\t} }',
      options: [
        "A. It prints 0 1 2 3 4",
        "B. It prints 1 2 3 4 5",
        "C. It prints null null null null null",
        "D. It hangs indefinitely at runtime.",
        "E. The output cannot be determined.",
        "F. The code will not compile because of line n1.",
        "G. The code will not compile because of line n2.",
      ],
      answer: ["F"],
      explanation:
        "The key to solving this question is to remember that the execute() method returns void, not a Future object. Therefore, line n1 does not compile, and option F is the correct answer. If the submit() method had been used instead of execute(), option C would have been the correct answer, as the output of the submit(Runnable) task is a Future<?> object that can only return null on its get() method.",
    },
    {
      question:
        "Given the following code snippet and blank lines on p1 and p2, which values guarantee that 1 is printed at runtime? (Choose all that apply.)\n\nvar data = List.of(List.of(1,2), List.of(3,4), List.of(5,6));\ndata.___________ // p1\n\t.flatMap(s -> s.stream())\n\t.____________ // p2\n\t.ifPresent(System.out::print);",
      options: [
        "A. stream() on line p1, findFirst() on line p2",
        "B. stream() on line p1, findAny() on line p2",
        "C. parallelStream() on line p1, findAny() on line p2",
        "D. parallelStream() on line p1, findFirst() on line p2",
        "E. The code does not compile regardless of what is inserted into the blanks.",
        "F. None of the above",
      ],
      answer: ["A", "D"],
      explanation:
        "The findFirst() method guarantees the first element in the stream will be returned, whether it is serial or parallel, making options A and D correct. While option B may consistently print 1 at runtime, the behavior of findAny() on a serial stream is not guaranteed, so option B is incorrect. Option C is likewise incorrect, with the output being random at runtime.",
    },
    {
      question:
        'Assuming one minute is enough time for the tasks submitted to the service executor to complete, what is the result of executing countSheep()? (Choose all that apply.)\n\nimport java.util.concurrent.*;\nimport java.util.concurrent.atomic.*;\npublic class BedTime {\n\tprivate AtomicInteger s1 = new AtomicInteger(0); // w1\n\tprivate int s2 = 0;\n\tprivate void countSheep() throws InterruptedException {\n\t\tvar service = Executors.newSingleThreadExecutor(); // w2\n\t\ttry {\n\t\t\tfor (int i = 0; i < 100; i++)\n\t\t\t\tservice.execute(() -> {\n\t\t\t\t\ts1.getAndIncrement(); s2++; }); // w3\n\t\t\tThread.sleep(60*1000);\n\t\t\tSystem.out.println(s1 + " " + s2);\n\t\t} finally { service.shutdown(); }\n\t}\n\tpublic static void main(String... nap) throws InterruptedException {\n\t\tnew BedTime().countSheep();\n\t} }',
      options: [
        "A. The method consistently prints 100 99.",
        "B. The method consistently prints 100 100.",
        "C. The output cannot be determined ahead of time.",
        "D. The code will not compile because of line w1.",
        "E. The code will not compile because of line w2.",
        "F. The code will not compile because of line w3.",
        "G. It compiles but throws an exception at runtime.",
      ],
      answer: ["B"],
      explanation:
        "The code compiles and runs without issue. The key aspect to notice in the code is that a single-thread executor is used, meaning that no task will be executed concurrently. Therefore, the results are valid and predictable, with 100 100 being the output, and option B is the correct answer. If a thread executor with more threads was used, then the s2++ operations could overwrite each other, making the second value indeterminate at the end of the program. In this case, option C would be the correct answer.",
    },
    {
      question:
        'What is the result of executing the following application? (Choose all that apply.)\n\nimport java.util.concurrent.*;\nimport java.util.stream.*;\npublic class StockRoomTracker {\n\tpublic static void await(CyclicBarrier cb) { // j1\n\t\ttry { cb.await(); } catch (Exception e) {}\n\t}\n\tpublic static void main(String[] args) {\n\t\tvar cb = new CyclicBarrier(10,\n\t\t\t() -> System.out.println("Stock Room Full!")); // j2\n\t\tIntStream.iterate(1, i -> 1).limit(9).parallel()\n\t\t\t.forEach(i -> await(cb)); // j3\n\t} }',
      options: [
        "A. It outputs Stock Room Full!",
        "B. The code will not compile because of line j1.",
        "C. The code will not compile because of line j2.",
        "D. The code will not compile because of line j3.",
        "E. It compiles but throws an exception at runtime.",
        "F. It compiles but waits forever at runtime.",
      ],
      answer: ["F"],
      explanation:
        "The code compiles without issue, so options B, C, and D are incorrect. The limit on the cyclic barrier is 10, but the stream can generate only up to 9 threads that reach the barrier; therefore, the limit can never be reached, and option F is the correct answer, making options A and E incorrect. Even if the limit(9) statement was changed to limit(10), the program could still hang since the JVM might not allocate 10 threads to the parallel stream.",
    },
    {
      question:
        "What statements about the following class definition are true? (Choose all that apply.)\n\npublic final class TicketManager {\n\tprivate int tickets;\n\tprivate static TicketManager instance;\n\tprivate TicketManager() {}\n\tstatic synchronized TicketManager getInstance() { // k1\n\t\tif (instance==null) instance = new TicketManager(); // k2\n\t\treturn instance;\n\t}\n\tpublic int getTicketCount() { return tickets; }\n\tpublic void addTickets(int value) {tickets += value;} // k3\n\tpublic void sellTickets(int value) {\n\t\tsynchronized (this) { // k4\n\t\t\ttickets -= value;\n\t\t} } }",
      options: [
        "A. It compiles without issue.",
        "B. The code will not compile because of line k2.",
        "C. The code will not compile because of line k3.",
        "D. The locks acquired on k1 and k4 are on the same object.",
        "E. The class correctly protects the tickets data from race conditions.",
        "F. At most one instance of TicketManager will be created in an application that uses this class.",
      ],
      answer: ["A", "F"],
      explanation:
        "The class compiles without issue, so option A is correct. Since getInstance() is a static method and sellTickets() is an instance method, lines k1 and k4 synchronize on different objects, making option D incorrect. The class is not thread-safe because the addTickets() method is not synchronized, and option E is incorrect. One thread could call sellTickets() while another thread calls addTickets(), possibly resulting in bad data. Finally, option F is correct because the getInstance() method is synchronized. Since the constructor is private, this method is the only way to create an instance of TicketManager outside the class. The first thread to enter the method will set the instance variable, and all other threads will use the existing value. This is a singleton pattern.",
    },
    {
      question:
        'Assuming an implementation of the performCount() method is provided prior to runtime, which of the following are possible results of executing the following application? (Choose all that apply.)\n\nimport java.util.*;\nimport java.util.concurrent.*;\npublic class CountZooAnimals {\n\tpublic static void performCount(int animal) {\n\t\t// IMPLEMENTATION OMITTED\n\t}\n\tpublic static void printResults(Future<?> f) {\n\t\ttry {\n\t\t\tSystem.out.println(f.get(1, TimeUnit.DAYS)); // o1\n\t\t} catch (Exception e) {\n\t\t\tSystem.out.println("Exception!");\n\t\t}\n\t}\n\tpublic static void main(String[] args) throws Exception {\n\t\tfinal var r = new ArrayList<Future<?>>();\n\t\tExecutorService s = Executors.newSingleThreadExecutor();\n\t\ttry {\n\t\t\tfor(int i = 0; i < 10; i++) {\n\t\t\t\tfinal int animal = i;\n\t\t\t\tr.add(s.submit(() -> performCount(animal))); // o2\n\t\t\t}\n\t\t\tr.forEach(f -> printResults(f));\n\t\t} finally { s.shutdown(); }\n\t} }',
      options: [
        "A. It outputs a number 10 times.",
        "B. It outputs a Boolean value 10 times.",
        "C. It outputs a null value 10 times.",
        "D. It outputs Exception! 10 times.",
        "E. It hangs indefinitely at runtime.",
        "F. The code will not compile because of line o1.",
        "G. The code will not compile because of line o2.",
      ],
      answer: ["C", "D"],
      explanation:
        "The return type of performCount() is void, so submit() is interpreted as being applied to a Runnable expression. While submit(Runnable) does return a Future<?>, calling get() on it always returns null. For this reason, options A and B are incorrect, and option C is correct. The performCount() method can also throw a runtime exception, which will then be thrown by the get() call as an ExecutionException; therefore, option D is also a correct answer. Finally, it is also possible for our performCount() to hang indefinitely, such as with a deadlock or infinite loop. Luckily, the call to get() includes a timeout value. While each call to Future.get() can wait up to a day for a result, it will eventually finish, so option E is incorrect.",
    },
  ],
};
