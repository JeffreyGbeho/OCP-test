export const chapter12 = {
  title: "Chapter 12: Modules",
  questions: [
    {
      question:
        "Which statement is true of the following module?\n\n|---zoo\n|-- staff\n|-- Vet.java",
      options: [
        "A. The directory structure shown is a valid module.",
        "B. The directory structure would be a valid module if module.java were added directly underneath zoo/staff.",
        "C. The directory structure would be a valid module if module.java were added directly underneath zoo.",
        "D. The directory structure would be a valid module if module-info.java were added directly underneath zoo/staff.",
        "E. The directory structure would be a valid module if module-info.java were added directly underneath zoo.",
        "F. None of these changes would make this directory structure a valid module.",
      ],
      answer: ["E"],
      explanation:
        "Modules are required to have a module-info.java file at the root directory of the module. Option E matches this requirement.",
    },
    {
      question:
        "Suppose module puppy depends on module dog and module dog depends on module animal. Fill in the blank so that code in module dog can access the animal.behavior package in module animal.\n\nmodule animal {\n________ animal.behavior;\n}",
      options: [
        "A. export",
        "B. exports",
        "C. require",
        "D. requires",
        "E. require transitive",
        "F. requires transitive",
        "G. None of the above",
      ],
      answer: ["B"],
      explanation:
        "Options A, C, and E are incorrect because they refer to directives that don't exist. The exports directive is used when allowing a package to be called by code outside of the module, making option B the correct answer. Notice that options D and F are incorrect because of requires.",
    },
    {
      question:
        "Fill in the blanks so this command to run the program is correct:\njava _______ zoo.animal.talks/zoo/animal/talks/Peacocks _______ modules",
      options: [
        "A. -d and -m",
        "B. -d and –p",
        "C. -m and -d",
        "D. -m and -p",
        "E. -p and -d",
        "F. -p and -m",
        "G. None of the above",
      ],
      answer: ["G"],
      explanation:
        "The -m or --module option is used to specify the module and class name. The -p or --module-path option is used to specify the location of the modules. Option D would be correct if the rest of the command were correct. However, running a program requires specifying the package name with periods (.) instead of slashes. Since the command is incorrect, option G is correct.",
    },
    {
      question: "Which of the following pairs make up a service?",
      options: [
        "A. Consumer and service locator",
        "B. Consumer and service provider interface",
        "C. Service locator and service provider",
        "D. Service locator and service provider interface",
        "E. Service provider and service provider interface",
      ],
      answer: ["D"],
      explanation:
        "A service consists of the service provider interface and logic to look up implementations using a service locator. This makes option D correct. Make sure you know that the service provider itself is the implementation, which is not considered part of the service.",
    },
    {
      question:
        "A(n) _______________ module is on the classpath while a(n) ____________ module is on the module path. (Choose all that apply.)",
      options: [
        "A. automatic, named",
        "B. automatic, unnamed",
        "C. named, automatic",
        "D. named, unnamed",
        "E. unnamed, automatic",
        "F. unnamed, named",
        "G. None of the above",
      ],
      answer: ["E", "F"],
      explanation:
        "Automatic modules are on the module path but do not have a module-info.java file. Named modules are on the module path and do have a module-info. Unnamed modules are on the classpath. Therefore, options E and F are correct.",
    },
    {
      question:
        "Which of the following statements are true in a module-info.java file? (Choose all that apply.)",
      options: [
        "A. The opens directive allows the use of reflection.",
        "B. The opens directive declares that an API is called.",
        "C. The use directive allows the use of reflection.",
        "D. The use directive declares that an API is called.",
        "E. The uses directive allows the use of reflection.",
        "F. The uses directive declares that an API is called.",
      ],
      answer: ["A", "F"],
      explanation:
        "Options C and D are incorrect because there is no use directive. Options A and F are correct because opens is for reflection and uses declares that an API consumes a service.",
    },
    {
      question:
        "An automatic module name is generated if one is not supplied. Which of the following JAR filenames and generated automatic module name pairs are correct? (Choose all that apply.)",
      options: [
        "A. emily-1.0.0.jar and emily",
        "B. emily-1.0.0-SNAPSHOT.jar and emily",
        "C. emily_the_cat-1.0.0.jar and emily_the_cat",
        "D. emily_the_cat-1.0.0.jar and emily-the-cat",
        "E. emily.$.jar and emily",
        "F. emily.$.jar and emily.",
        "G. emily.$.jar and emily..",
      ],
      answer: ["A", "B", "E"],
      explanation:
        "Any version information at the end of the JAR filename is removed, making options A and B correct. Underscores (_) are turned into dots (.), making options C and D incorrect. Other special characters like a dollar sign ($) are also turned into dots. However, adjacent dots are merged, and leading/trailing dots are removed. Therefore, option E is correct.",
    },
    {
      question:
        "Which of the following statements are true? (Choose all that apply.)",
      options: [
        "A. Modules with cyclic dependencies will not compile.",
        "B. Packages with a cyclic dependency will not compile.",
        "C. A cyclic dependency always involves exactly two modules.",
        "D. A cyclic dependency always involves at least two requires statements.",
        "E. An unnamed module can be involved in a cyclic dependency with an automatic module.",
      ],
      answer: ["A", "D"],
      explanation:
        "A cyclic dependency is when a module graph forms a circle. Option A is correct because the Java Platform Module System does not allow cyclic dependencies between modules. No such restriction exists for packages, making option B incorrect. A cyclic dependency can involve two or more modules that require each other, making option D correct, while option C is incorrect. Finally, option E is incorrect because unnamed modules cannot be referenced from an automatic module.",
    },
    {
      question:
        'Suppose you are creating a service provider that contains the following class. Which line of code needs to be in your module-info.java?\n\npackage dragon;\nimport magic.*;\npublic class Dragon implements Magic {\n\tpublic String getPower() {\n\t\treturn "breathe fire";\n\t}\n}',
      options: [
        "A. provides dragon.Dragon by magic.Magic;",
        "B. provides dragon.Dragon using magic.Magic;",
        "C. provides dragon.Dragon with magic.Magic;",
        "D. provides magic.Magic by dragon.Dragon;",
        "E. provides magic.Magic using dragon.Dragon;",
        "F. provides magic.Magic with dragon.Dragon;",
      ],
      answer: ["F"],
      explanation:
        "The provides directive takes the interface name first and the implementing class name second and also uses with. Only option F meets these two criteria, making it the correct answer.",
    },
    {
      question:
        "What is true of a module containing a file named module-info.java with the following contents? (Choose all that apply.)\n\nmodule com.food.supplier {}",
      options: [
        "A. All packages inside the module are automatically exported.",
        "B. No packages inside the module are automatically exported.",
        "C. A main method inside the module can be run.",
        "D. A main method inside the module cannot be run since the class is not exposed.",
        "E. The module-info.java file contains a compiler error.",
        "F. The module-info.java filename is incorrect.",
      ],
      answer: ["B", "C"],
      explanation:
        "Packages inside a module are not exported by default, making option B correct and option A incorrect. Exporting is necessary for other code to use the packages; it is not necessary to call the main() method at the command line, making option C correct and option D incorrect. The module-info.java file has the correct name and compiles, making options E and F incorrect.",
    },
    {
      question:
        "Suppose module puppy depends on module dog and module dog depends on module animal. Which lines allow module puppy to access the animal.behavior package in module animal? (Choose all that apply.)\n\nmodule animal {\n\texports animal.behavior;\n}\nmodule dog {\n\t_______ animal; // line S\n}\nmodule puppy {\n\t_______ dog; // line T\n}",
      options: [
        "A. require on line S",
        "B. require on line T",
        "C. requires on line S",
        "D. requires on line T",
        "E. require transitive on line S",
        "F. require transitive on line T",
        "G. requires transitive on line S",
        "H. requires transitive on line T",
      ],
      answer: ["D", "G", "H"],
      explanation:
        "Options A, B, E, and F are incorrect because they refer to directives that don't exist. The requires transitive directive is used when specifying a module to be used by the requesting module and any other modules that use the requesting module. Therefore, dog needs to specify the transitive relationship, and option G is correct. The module puppy just needs requires dog, and it gets the transitive dependencies, making option D correct. However, requires transitive does everything requires does and more, which makes option H the final answer.",
    },
    {
      question:
        "Which of the following modules are provided by the JDK? (Choose all that apply.)",
      options: [
        "A. java.base",
        "B. java.desktop",
        "C. java.logging",
        "D. java.util",
        "E. jdk.base",
        "F. jdk.compiler",
        "G. jdk.xerces",
      ],
      answer: ["A", "B", "C", "F"],
      explanation:
        "Option D is incorrect because it is a package name rather than a module name. Option E is incorrect because java.base is the module name, not jdk.base. Option G is wrong because we made it up. Options A, B, C, and F are correct.",
    },
    {
      question:
        "Which of the following compiles and is equivalent to this loop?\n\nList<Unicorn> all = new ArrayList<>();\nfor (Unicorn current : ServiceLoader.load(Unicorn.class))\n\tall.add(current);",
      options: [
        "A. List<Unicorn> all = ServiceLoader.load(Unicorn.class)\n   .getStream()\n   .collect(Collectors.toList());",
        "B. List<Unicorn> all = ServiceLoader.load(Unicorn.class)\n   .stream()\n   .collect(Collectors.toList());",
        "C. List<Unicorn> all = ServiceLoader.load(Unicorn.class)\n   .getStream()\n   .map(Provider::get)\n   .collect(Collectors.toList());",
        "D. List<Unicorn> all = ServiceLoader.load(Unicorn.class)\n   .stream()\n   .map(Provider::get)\n   .collect(Collectors.toList());",
        "E. None of the above",
      ],
      answer: ["D"],
      explanation:
        "There is no getStream() method on a ServiceLoader, making options A and C incorrect. Option B does not compile because the stream() method returns a list of Provider interfaces and needs to be converted to the Unicorn interface we are interested in. Therefore, option D is correct.",
    },
    {
      question:
        "Which of the following are legal commands to run a modular program where n is the module name and c is the fully qualified class name? (Choose all that apply.)",
      options: [
        "A. java --module-path x -m n.c",
        "B. java --module-path x -p n.c",
        "C. java --module-path x-x -m n/c",
        "D. java --module-path x -p n/c",
        "E. java --module-path x-x -m n-c",
        "F. java --module-path x -p n-c",
        "G. None of the above",
      ],
      answer: ["C"],
      explanation:
        "The -p option is a shorter form of --module-path. Since the same option cannot be specified twice, options B, D, and F are incorrect. The --module-path option is an alternate form of -p. The module name and class name are separated with a slash, making option C the answer. Note that x-x is legal because the module path is a folder name, so dashes are allowed.",
    },
    {
      question:
        "For a top-down migration, all modules other than named modules are _____________ modules and are on the ____________.",
      options: [
        "A. automatic, classpath",
        "B. automatic, module path",
        "C. unnamed, classpath",
        "D. unnamed, module path",
        "E. None of the above",
      ],
      answer: ["B"],
      explanation:
        "A top-down migration strategy first places all JARs on the module path. Then it migrates the top-level module to be a named module, leaving the other modules as automatic modules. Option B is correct as it matches both of those characteristics.",
    },
    {
      question:
        "Suppose you have separate modules for a service provider interface, service provider, service locator, and consumer. If you add a second service provider module, how many of these modules do you need to recompile?",
      options: ["A. Zero", "B. One", "C. Two", "D. Three", "E. Four"],
      answer: ["A"],
      explanation:
        "Since this is a new module, you need to compile it. However, none of the existing modules needs to be recompiled, making option A correct. The service locator will see the new service provider simply by having that new service provider on the module path.",
    },
    {
      question:
        "Suppose we have a JAR file named cat-1.2.3-RC1.jar, and Automatic-Module-Name in the MANIFEST.MF is set to dog. What should an unnamed module referencing this automatic module include in module-info.java?",
      options: [
        "A. requires cat;",
        "B. requires cat.RC;",
        "C. requires cat-RC;",
        "D. requires dog;",
        "E. None of the above",
      ],
      answer: ["E"],
      explanation:
        "Trick question! An unnamed module doesn't use a module-info.java file. Therefore, option E is correct. An unnamed module can access an automatic module. The unnamed module would simply treat the automatic module as a regular JAR without involving the module.info file.",
    },
    {
      question:
        "Which commands are used to create a smaller Java image and work with native code, respectively?",
      options: [
        "A. jimage and jlink",
        "B. jimage and jmod",
        "C. jlink and jimage",
        "D. jlink and jmod",
        "E. jmod and jimage",
        "F. jmod and jmod",
      ],
      answer: ["D"],
      explanation:
        "The jlink command creates a directory with a smaller Java runtime containing just what is needed. The JMOD format is for native code. Therefore, option D is correct.",
    },
    {
      question:
        "Which are true statements about the following module? (Choose all that apply.)\n\nclass dragon {\n\texports com.dragon.fire;\n\texports com.dragon.scales to castle;\n}",
      options: [
        "A. All modules can reference the com.dragon.fire package.",
        "B. All modules can reference the com.dragon.scales package.",
        "C. Only the castle module can reference the com.dragon.fire package.",
        "D. Only the castle module can reference the com.dragon.scales package.",
        "E. None of the above",
      ],
      answer: ["E"],
      explanation:
        "There is a trick here. A module definition uses the keyword module rather than class. Since the code does not compile, option E is correct. If the code did compile, options A and D would be correct.",
    },
    {
      question: "Which would you expect to see when describing any module?",
      options: [
        "A. requires java.base mandated",
        "B. requires java.core mandated",
        "C. requires java.lang mandated",
        "D. requires mandated java.base",
        "E. requires mandated java.core",
        "F. requires mandated java.lang",
        "G. None of the above",
      ],
      answer: ["A"],
      explanation:
        "When running java with the -d option, all the required modules are listed. Additionally, the java.base module is listed since it is included automatically. The line ends with mandated, making option A correct. The java.lang is a trick since it is a package that is imported by default in a class rather than a module.",
    },
    {
      question:
        "Suppose you have separate modules for a service provider interface, service provider, service locator, and consumer. Which module(s) need to specify a requires directive on the service provider?",
      options: [
        "A. Service locator",
        "B. Service provider interface",
        "C. Consumer",
        "D. Consumer and service locator",
        "E. Consumer and service provider",
        "F. Service locator and service provider interface",
        "G. Consumer, service locator, and service provider interface",
        "H. None of the above",
      ],
      answer: ["H"],
      explanation:
        "This question is tricky. The service locator must have a uses directive, but that is on the service provider interface. No modules need to specify requires on the service provider since that is the implementation. Since none are correct, option H is the answer.",
    },
    {
      question: "Which are true statements? (Choose all that apply.)",
      options: [
        "A. An automatic module exports all packages to named modules.",
        "B. An automatic module exports only the specified packages to named modules.",
        "C. An automatic module exports no packages to named modules.",
        "D. An unnamed module exports only the named packages to named modules.",
        "E. An unnamed module exports all packages to named modules.",
        "F. An unnamed module exports no packages to named modules.",
      ],
      answer: ["A", "F"],
      explanation:
        "An automatic module exports all packages, making option A correct. An unnamed module is not available to any modules on the module path. Therefore, it doesn't export any packages, and option F is correct.",
    },
    {
      question:
        "Which is the first line to contain a compiler error?\n\n1: module snake {\n2: \texports com.snake.tail;\n3: \texports com.snake.fangs to bird;\n4: \trequires skin;\n5: \trequires transitive skin;\n6: }",
      options: [
        "A. Line 1",
        "B. Line 2",
        "C. Line 3",
        "D. Line 4",
        "E. Line 5",
        "F. The code does not contain any compiler errors.",
      ],
      answer: ["E"],
      explanation:
        "The module name is valid, as are the exports statements. Lines 4 and 5 are tricky because each is valid independently. However, the same module name is not allowed to be used in two requires statements. The second one fails to compile on line 5, making option E the answer.",
    },
    {
      question:
        "Which are true statements about a package in a JAR on the classpath containing a module-info.java file? (Choose all that apply.)",
      options: [
        "A. It is possible to make the package available to all other modules on the classpath.",
        "B. It is possible to make the package available to all other modules on the module path.",
        "C. It is possible to make the package available to exactly one other specific module on the classpath.",
        "D. It is possible to make the package available to exactly one other specific module on the module path.",
        "E. It is possible to make sure the package is not available to any other modules on the classpath.",
      ],
      answer: ["A"],
      explanation:
        "Since the JAR is on the classpath, it is treated as a regular unnamed module even though it has a module-info.java file inside. Remember from learning about top-down migration that modules on the module path are not allowed to refer to the classpath, making options B and D incorrect. The classpath does not have a facility to restrict packages, making option A correct and options C and E incorrect.",
    },
    {
      question:
        "Suppose you have separate modules for a service provider interface, service provider, service locator, and consumer. Which statements are true about the directives you need to specify? (Choose all that apply.)",
      options: [
        "A. The consumer must use the requires directive.",
        "B. The consumer must use the uses directive.",
        "C. The service locator must use the requires directive.",
        "D. The service locator must use the uses directive.",
        "E. None of the above",
      ],
      answer: ["A", "C", "D"],
      explanation:
        "Options A and C are correct because both the consumer and the service locator depend on the service provider interface. Additionally, option D is correct because the service locator must specify that it uses the service provider interface to look it up.",
    },
  ],
};
