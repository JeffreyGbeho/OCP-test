export const chapter15 = {
  title: "Chapter 15: JDBC",
  questions: [
    {
      question:
        "Which interfaces or classes are in a database-specific JAR file? (Choose all that apply.)",
      options: [
        "A. Driver",
        "B. Driver's implementation",
        "C. Manager",
        "D. DriverManager's implementation",
        "E. PreparedStatement",
        "F. PreparedStatement implementation",
      ],
      answer: ["B", "F"],
      explanation:
        "The Driver and PreparedStatement interfaces are part of the JDK, making options A and E incorrect. Option C is incorrect because we made it up. The concrete DriverManager class is also part of the JDK, making option D incorrect. Options B and F are correct since the implementation of these interfaces is part of the database-specific driver JAR file.",
    },
    {
      question: "Which of the following is a valid JDBC URL?",
      options: [
        "A. jdbc:sybase:localhost:1234/db",
        "B. jdbc::sybase::localhost::/db",
        "C. jdbc::sybase:localhost::1234/db",
        "D. sybase:localhost:1234/db",
        "E. sybase::localhost::/db",
        "F. sybase::localhost::1234/db",
      ],
      answer: ["A"],
      explanation:
        "A JDBC URL has three main parts separated by single colons, making options B, C, E, and F incorrect. The first part is always jdbc, making option D incorrect. Therefore, the correct answer is option A. Notice that you can get this right even if you've never heard of the Sybase database before.",
    },
    {
      question:
        'Which of the options can fill in the blank to make the code compile and run without error? (Choose all that apply.)\n\nvar sql = """\nUPDATE habitat SET environment = null\nWHERE environment = ? """;\ntry (var ps = conn.prepareStatement(sql)) {\n______________\nps.executeUpdate();\n}',
      options: [
        'A. ps.setString(0, "snow");',
        'B. ps.setString(1, "snow");',
        'C. ps.setString("environment", "snow");',
        'D. ps.setString(1, "snow"); ps.setString(1, "snow");',
        'E. ps.setString(1, "snow"); ps.setString(2, "snow");',
        'F. ps.setString("environment", "snow"); ps.setString("environment", "snow");',
      ],
      answer: ["B", "D"],
      explanation:
        "When setting parameters on a PreparedStatement, there are only options that take an index, making options C and F incorrect. The indexing starts with 1, making option A incorrect. This query has only one parameter, so option E is also incorrect. Option B is correct because it simply sets the parameter. Option D is also correct because it sets the parameter and then immediately overwrites it with the same value.",
    },
    {
      question:
        'Suppose that you have a table named animal with two rows. What is the result of the following code?\n\n6: var conn = new Connection(url, userName, password);\n7: var ps = conn.prepareStatement(\n8: "SELECT count(*) FROM animal");\n9: var rs = ps.executeQuery();\n10: if (rs.next()) System.out.println(rs.getInt(1));',
      options: [
        "A. 0",
        "B. 2",
        "C. There is a compiler error on line 6.",
        "D. There is a compiler error on line 10.",
        "E. There is a compiler error on another line.",
        "F. A runtime exception is thrown.",
      ],
      answer: ["C"],
      explanation:
        "A Connection is created using a static method on DriverManager. It does not use a constructor. Therefore, option C is correct. If the Connection was created properly, the answer would be option B.",
    },
    {
      question:
        "Which option can fill in the blanks to make the code compile?\n\nboolean bool = ps._________________();\nint num = ps._________________();\nResultSet rs = ps._________________();",
      options: [
        "A. execute, executeQuery, executeUpdate",
        "B. execute, executeUpdate, executeQuery",
        "C. executeQuery, execute, executeUpdate",
        "D. executeQuery, executeUpdate, execute",
        "E. executeUpdate, execute, executeQuery",
        "F. executeUpdate, executeQuery, execute",
      ],
      answer: ["B"],
      explanation:
        "The first line has a return type of boolean, making it an execute() call. The second line returns the number of modified rows, making it an executeUpdate() call. The third line returns the results of a query, making it an executeQuery() call. Therefore, option B is the answer.",
    },
    {
      question:
        'Suppose there are two rows in the table before this code is run, and executeUpdate() runs without error. How many rows are in the table after the code completes?\n\nconn.setAutoCommit(true);\nString sql = "INSERT INTO games VALUES(3, Jenga);";\ntry (PreparedStatement ps = conn.prepareStatement(sql,\nResultSet.TYPE_FORWARD_ONLY, ResultSet.CONCUR_READ_ONLY))\n{\nps.executeUpdate();\n}\nconn.rollback();',
      options: [
        "A. Two",
        "B. Three",
        "C. The code does not compile.",
        "D. The code throws an exception.",
      ],
      answer: ["B"],
      explanation:
        "The first line enables autocommit mode. This is the default and means to commit immediately after each update. When the rollback() runs, there are no uncommitted statements, so there is nothing to roll back. This gives us the initial two rows in addition to the inserted one making option B correct. If setAutoCommit(false) were called, option A would be the answer. The ResultSet types are just there to mislead you. Any types are valid for executeUpdate() since no ResultSet is involved.",
    },
    {
      question:
        'Suppose that the table names has five rows and the following SQL statement updates all of them. What is the result of this code?\n\npublic static void main(String[] args) throws SQLException {\n\tvar sql = "UPDATE names SET name = \'Animal\'";\n\ttry (var conn = DriverManager.getConnection("jdbc:hsqldb:file:zoo");\n\t\tvar ps = conn.prepareStatement(sql)) {\n\t\tvar result = ps.executeUpdate();\n\t\tSystem.out.println(result);\n\t}\n}',
      options: [
        "A. 0",
        "B. 1",
        "C. 5",
        "D. The code does not compile.",
        "E. A SQLException is thrown.",
        "F. A different exception is thrown.",
      ],
      answer: ["C"],
      explanation:
        "This code works as expected. It updates each of the five rows in the table and returns the number of rows updated. Therefore, option C is correct.",
    },
    {
      question:
        'Suppose learn() is a stored procedure that takes one IN parameter. What is wrong with the following code? (Choose all that apply.)\n\n18: var sql = "call learn()";\n19: try (var cs = conn.prepareCall(sql)) {\n20: \tcs.setString(1, "java");\n21: \ttry (var rs = cs.executeQuery()) {\n22: \t\twhile (rs.next())\n23: \t\t\tSystem.out.println(rs.getString(3));\n24: \t}\n25: }',
      options: [
        "A. Line 18 is missing braces.",
        "B. Line 18 is missing a ?.",
        "C. Line 19 is not allowed to use var.",
        "D. Line 20 does not compile.",
        "E. Line 22 does not compile.",
        "F. Something else is wrong with the code.",
        "G. None of the above. This code is correct.",
      ],
      answer: ["A", "B"],
      explanation:
        "Option A is one of the answers because you are supposed to use braces ({}) for all SQL in a CallableStatement. Option B is the other answer because each parameter should be passed with a question mark (?). The rest of the code is correct. Note that your database might not behave the way that's described here, but you still need to know this syntax for the exam.",
    },
    {
      question:
        'Suppose that the table enrichment has three rows with the animals bat, rat, and snake. How many lines does this code print?\n\nvar sql = "SELECT toy FROM enrichment WHERE animal = ?";\ntry (var ps = conn.prepareStatement(sql)) {\n\ttry (var rs = ps.executeQuery()) {\n\t\twhile (rs.next())\n\t\t\tSystem.out.println(rs.getString(1));\n\t}\n}',
      options: [
        "A. 0",
        "B. 1",
        "C. 3",
        "D. The code does not compile.",
        "E. A SQLException is thrown.",
        "F. A different exception is thrown.",
      ],
      answer: ["E"],
      explanation:
        "This code declares a bind variable with ? but never assigns a value to it. The compiler does not enforce bind variables have values, so the code compiles, but produces a SQLException at runtime, making option E correct.",
    },
    {
      question:
        'Suppose that the table food has five rows, and this SQL statement updates all of them. What is the result of this code?\n\npublic static void main(String[] args) {\n\tvar sql = "UPDATE food SET amount = amount + 1";\n\ttry (var conn = DriverManager.getConnection("jdbc:hsqldb:file:zoo");\n\t\tvar ps = conn.prepareStatement(sql)) {\n\t\tvar result = ps.executeUpdate();\n\t\tSystem.out.println(result);\n\t}\n}',
      options: [
        "A. 0",
        "B. 1",
        "C. 5",
        "D. The code does not compile.",
        "E. A SQLException is thrown.",
        "F. A different exception is thrown.",
      ],
      answer: ["D"],
      explanation:
        "JDBC code throws a SQLException, which is a checked exception. The code does not handle or declare this exception, and therefore it doesn't compile. Since the code doesn't compile, option D is correct. If the exception were handled or declared, the answer would be option C.",
    },
    {
      question:
        "Suppose we have a JDBC program that calls a stored procedure, which returns a set of results. Which is the correct order in which to close database resources for this call?",
      options: [
        "A. Connection, ResultSet, CallableStatement",
        "B. Connection, CallableStatement, ResultSet",
        "C. ResultSet, Connection, CallableStatement",
        "D. ResultSet, CallableStatement, Connection",
        "E. CallableStatement, Connection, ResultSet",
        "F. CallableStatement, ResultSet, Connection",
      ],
      answer: ["D"],
      explanation:
        "JDBC resources should be closed in the reverse order from that in which they were opened. The order for opening is Connection, CallableStatement, and ResultSet. The order for closing is ResultSet, CallableStatement, and Connection, which is option D.",
    },
    {
      question:
        'Suppose that the table counts has five rows with the numbers 1 to 5. How many lines does this code print?\n\nvar sql = "SELECT num FROM counts WHERE num > ?";\ntry (var ps = conn.prepareStatement(sql,\n\tResultSet.TYPE_SCROLL_SENSITIVE,\n\tResultSet.CONCUR_UPDATABLE)) {\n\tps.setInt(1, 3);\n\ttry (var rs = ps.executeQuery()) {\n\t\twhile (rs.next())\n\t\t\tSystem.out.println(rs.getObject(1));\n\t}\n\tps.setInt(1, 100);\n\ttry (var rs = ps.executeQuery()) {\n\t\twhile (rs.next())\n\t\t\tSystem.out.println(rs.getObject(1));\n\t}\n}',
      options: [
        "A. 0",
        "B. 1",
        "C. 2",
        "D. 4",
        "E. The code does not compile.",
        "F. The code throws an exception.",
      ],
      answer: ["C"],
      explanation:
        "This code calls the PreparedStatement twice. The first time, it gets the numbers greater than 3. Since there are two such numbers, it prints two lines. The second time, it gets the numbers greater than 100. There are no such numbers, so the ResultSet is empty. Two lines are printed in total, making option C correct. The ResultSet options are just there to trick you since only the default settings are used by the rest of the code.",
    },
    {
      question:
        "Which of the following can fill in the blank correctly? (Choose all that apply.)\n\nvar rs = ps.executeQuery();\nif (rs.next())\n_________________________________;",
      options: [
        "A. String s = rs.getString(0)",
        "B. String s = rs.getString(1)",
        "C. String s = rs.getObject(0)",
        "D. String s = rs.getObject(1)",
        "E. Object s = rs.getObject(0)",
        "F. Object s = rs.getObject(1)",
      ],
      answer: ["B", "F"],
      explanation:
        "In a ResultSet, columns are indexed starting with 1, not 0. Therefore, options A, C, and E are incorrect. There are methods to get the column as a String or Object. However, option D is incorrect because an Object cannot be assigned to a String without a cast.",
    },
    {
      question:
        'Suppose learn() is a stored procedure that takes one IN parameter and one OUT parameter. What is wrong with the following code? (Choose all that apply.)\n\n18: var sql = "{?= call learn(?)}";\n19: try (var cs = conn.prepareCall(sql)) {\n20: \tcs.setInt(1, 8);\n21: \tcs.execute();\n22: \tSystem.out.println(cs.getInt(1));\n23: }',
      options: [
        "A. Line 18 does not call the stored procedure properly.",
        "B. The parameter value is not set for input.",
        "C. The parameter is not registered for output.",
        "D. The code does not compile.",
        "E. Something else is wrong with the code.",
        "F. None of the above. This code is correct.",
      ],
      answer: ["C"],
      explanation:
        "Since an OUT parameter is used, the code should call registerOutParameter(). Since this is missing, option C is correct.",
    },
    {
      question:
        "Which can fill in the blank and have the code run without error? (Choose all that apply.)\n\n17: conn.setAutoCommit(false);\n18:\n19: var larry = conn.setSavepoint();\n20: var curly = conn.setSavepoint();\n21: var moe = conn.setSavepoint();\n22: var shemp = conn.setSavepoint();\n23:\n24: _______________________________;\n25:\n26: conn.rollback(curly);",
      options: [
        "A. conn.rollback(larry)",
        "B. conn.rollback(curly)",
        "C. conn.rollback(moe)",
        "D. conn.rollback(shemp)",
        "E. conn.rollback()",
        "F. The code does not compile.",
      ],
      answer: ["C", "D"],
      explanation:
        "Rolling back to a point invalidates any savepoints created after it. Options A and E are incorrect because they roll back to lines 19 and 17, respectively. Option B is incorrect because you cannot roll back to the same savepoint twice. Options C and D are the answers because those savepoints were created after curly.",
    },
    {
      question:
        'Which of the following can fill in the blank? (Choose all that apply.)\n\nvar sql = "______________________";\ntry (var ps = conn.prepareStatement(sql)) {\n\tps.setObject(3, "red");\n\tps.setInt(2, 8);\n\tps.setString(1, "ball");\n\tps.executeUpdate();\n}',
      options: [
        "A. { call insert_toys(?, ?) }",
        "B. { call insert_toys(?, ?, ?) }",
        "C. { call insert_toys(?, ?, ?, ?) }",
        "D. INSERT INTO toys VALUES (?, ?)",
        "E. INSERT INTO toys VALUES (?, ?, ?)",
        "F. INSERT INTO toys VALUES (?, ?, ?, ?)",
      ],
      answer: ["E"],
      explanation:
        "First, notice that this code uses a PreparedStatement. Options A, B, and C are incorrect because they are for a CallableStatement. Next, remember that the number of parameters must be an exact match, making option E correct. Remember that you will not be tested on SQL syntax. When you see a question that appears to be about SQL, think about what it might be trying to test you on.",
    },
    {
      question:
        'Suppose that the table counts has five rows with the numbers 1 to 5. How many lines does this code print?\n\nvar sql = "SELECT num FROM counts WHERE num > ?";\ntry (var ps = conn.prepareStatement(sql)) {\n\tps.setInt(1, 3);\n\ttry (var rs = ps.executeQuery()) {\n\t\twhile (rs.next())\n\t\t\tSystem.out.println(rs.getObject(1));\n\t}\n\ttry (var rs = ps.executeQuery()) {\n\t\twhile (rs.next())\n\t\t\tSystem.out.println(rs.getObject(1));\n\t}\n}',
      options: [
        "A. 0",
        "B. 1",
        "C. 2",
        "D. 4",
        "E. The code does not compile.",
        "F. The code throws an exception.",
      ],
      answer: ["D"],
      explanation:
        "This code calls the PreparedStatement twice. The first time, it gets the numbers greater than 3. Since there are two such numbers, it prints two lines. Since the parameter is not set between the first and second calls, the second attempt also prints two rows. Four lines are printed in total, making option D correct.",
    },
    {
      question:
        'There are currently 100 rows in the table species before inserting a new row. What is the output of the following code?\n\nString insert = "INSERT INTO species VALUES (3, \'Ant\', .05)";\nString select = "SELECT count(*) FROM species";\ntry (var ps = conn.prepareStatement(insert)) {\n\tps.executeUpdate();\n}\ntry (var ps = conn.prepareStatement(select)) {\n\tvar rs = ps.executeQuery();\n\tSystem.out.println(rs.getInt(1));\n}',
      options: [
        "A. 100",
        "B. 101",
        "C. The code does not compile.",
        "D. A SQLException is thrown.",
        "E. A different exception is thrown.",
      ],
      answer: ["D"],
      explanation:
        "Before accessing data from a ResultSet, the cursor needs to be positioned. The call to rs.next() is missing from this code causing a SQLException and option D to be correct.",
    },
    {
      question:
        'Which of the options can fill in the blank to make the code compile and run without error? (Choose all that apply.)\n\nvar sql = "UPDATE habitat WHERE environment = ?";\ntry (var ps = conn.prepareCall(sql)) {\n\t___________\n\tps.executeUpdate();\n}',
      options: [
        'A. ps.setString(0, "snow");',
        'B. ps.setString(1, "snow");',
        'C. ps.setString("environment", "snow");',
        "D. The code does not compile.",
        "E. The code throws an exception at runtime.",
      ],
      answer: ["E"],
      explanation:
        "This code should call prepareStatement() instead of prepareCall() since it is not executing a stored procedure. Since we are using var, it does compile. Java will happily create a CallableStatement for you. Since this compile safety is lost, the code will not cause issues until runtime. At that point, Java will complain that you are trying to execute SQL as if it were a stored procedure, making option E correct.",
    },
    {
      question:
        'Which is the first line containing a compiler error?\n\n25: String url = "jdbc:hsqldb:file:zoo";\n26: try (var conn = DriverManager.getConnection(url);\n27: var ps = conn.prepareStatement();\n28: var rs = ps.executeQuery("SELECT * FROM swings")) {\n29: \twhile (rs.next()) {\n30: \t\tSystem.out.println(rs.getInteger(1));\n31: \t}\n32: }',
      options: [
        "A. Line 26",
        "B. Line 27",
        "C. Line 28",
        "D. Line 29",
        "E. Line 30",
        "F. None of the above",
      ],
      answer: ["B"],
      explanation:
        "The prepareStatement() method requires SQL to be passed in. Since this parameter is omitted, line 27 does not compile, and option B is correct.",
    },
    {
      question:
        "Suppose conn is a valid connection object and the exhibits table is empty. Which are true? (Choose two.)\n\ntry (conn) {\n\tconn.setAutoCommit(false);\n\tString sql = \"INSERT INTO exhibits VALUES(3, 'Test', 2)\";\n\ttry (PreparedStatement ps = conn.prepareStatement(sql)) {\n\t\tps.executeUpdate();\n\t}\n\tconn.setAutoCommit(true); // line W\n}",
      options: [
        "A. As written, the table will remain empty after this code.",
        "B. As written, the table will contain one row after this code.",
        "C. As written, the code will throw an exception.",
        "D. When line W is commented out, the table will remain empty after this code.",
        "E. When line W is commented out, the table will contain one row after this code.",
        "F. When line W is commented out, the code will throw an exception.",
      ],
      answer: ["B", "D"],
      explanation:
        "The code starts with autocommit off. As written, we turn autocommit mode back on and immediately commit the transaction. This is option B. When line W is commented out, the update gets lost, making option D the other answer.",
    },
  ],
};
