

# importent notice 
this guide needs updated so take the info with a grain of salt 

# Database Practice with SQL Examples
- [Basic SQL Concepts](#basic-sql-concepts)
  - [What’s a database?](#whats-a-database)
  - [What’s DBMS?](#whats-dbms)
- [Data Relationships and Structures](#data-relationships-and-structures)
  - [Complexity increases as you descend through the models.](#complexity-increases-as-you-descend-through-the-mode ls)
  - [What is the logical term for a record?](#what-is-the-logical-term-for-a-record)
  - [What are the three options to model super types and sub types?](#what-are-the-three-options-to-model-super-types-and-sub-types)
- [Data Issues and Normalization](#data-issues-and-normalization)
  - [What is an anomaly?](#what-is-an-anomaly)
  - [What are the three types of anomalies to guard against?](#what-are-the-three-types-of-anomalies-to-guard-against)
  - [What is functional dependency?](#what-is-functional-dependency)
  - [What does A -> B mean?](#what-does-a---b-mean)
- [Normalization Processes](#normalization-processes)
  - [How do you get to first normal form?](#how-do-you-get-to-first-normal-form)
  - [How do you get to second normal form?](#how-do-you-get-to-second-normal-form)
  - [How do you get to third normal form?](#how-do-you-get-to-third-normal-form)
- [Joins and Keys](#joins-and-keys)
  - [What is a left join, draw it, and explain what it does?](#what-is-a-left-join-draw-it-and-explain-what-it-does)
  - [What is an inner join, draw it, and explain what it does?](#what-is-an-inner-join-draw-it-and-explain-what-it-does)
  - [What is referential integrity?](#what-is-referential-integrity)
- [Transactions and ACID Properties](#transactions-and-acid-properties)
  - [What is a transaction?](#what-is-a-transaction)
  - [Why would you use a transaction?](#why-would-you-use-a-transaction)
  - [Give the word and definition for each of the letters of ACID](#give-the-word-and-definition-for-each-of-the-letters-of-acid)
  - [What is a race condition?](#what-is-a-race-condition)
  - [What are the 2 types of stored routines?](#what-are-the-2-types-of-stored-routines)
- [SQL Statements and Privilege Management Questions](#sql-statements-and-privilege-management-questions)
- [Database Revision Exercises](#database-revision-exercises)
  - [Normalization Exercises](#normalization-exercises)
    - [Question 1: Determine the Normal Form](#question-1-determine-the-normal-form)
    - [Question 2: Normalize the STORE_ITEM Relation](#question-2-normalize-the-store_item-relation)
    - [Question 3: Determine the Normal Form of Another Relation](#question-3-determine-the-normal-form-of-another-relation)
    - [Question 4: Normalize the STUFF Relation](#question-4-normalize-the-stuff-relation)
  - [SQL Queries Using Sakila](#sql-queries-using-sakila)
    - [Question 5: Films with THORA TEMPLE](#question-5-films-with-thora-temple)
    - [Question 6: Films Rented by Each Customer](#question-6-films-rented-by-each-customer)
    - [Question 7: Staff Names and Addresses](#question-7-staff-names-and-addresses)
    - [Question 8: Films Rented by Each Customer](#question-8-films-rented-by-each-customer)
  - [Using Weather Data](#using-weather-data)
    - [Question 9: Temperature and Wind Direction](#question-9-temperature-and-wind-direction)
    - [Question 10: Total Rainfall](#question-10-total-rainfall)
  - [Simple SQL Queries](#simple-sql-queries)
    - [1. List All Films](#1-list-all-films)
    - [2. Count the Number of Films](#2-count-the-number-of-films)
    - [3. Find Films by Rating](#3-find-films-by-rating)
    - [4. List Customers in a Specific City](#4-list-customers-in-a-specific-city)
  - [Intermediate SQL Queries](#intermediate-sql-queries)
    - [5. List Films and Their Language](#5-list-films-and-their-language)
    - [6. List Active Customers](#6-list-active-customers)
    - [7. List Films and the Number of Actors](#7-list-films-and-the-number-of-actors)
  - [Advanced SQL Queries](#advanced-sql-queries)
    - [8. Total Sales by Store](#8-total-sales-by-store)
    - [9. Customer Payments Above Average](#9-customer-payments-above-average)
    - [10. Films Not Rented in the Last Year](#10-films-not-rented-in-the-last-year)
- [Things that could be asked](#things-that-could-be-asked)
  - [1. Films with Multiple Languages](#1-films-with-multiple-languages)
  - [2. Top 5 Revenue Generating Films](#2-top-5-revenue-generating-films)
  - [3. Staff Members and Their Customers](#3-staff-members-and-their-customers)
  - [4. Customers with Overdue Rentals](#4-customers-with-overdue-rentals)
  - [5. Average Film Length by Rating](#5-average-film-length-by-rating)
  - [6. Film Availability by Store](#6-film-availability-by-store)
  - [7. Detailed Customer Rentals](#7-detailed-customer-rentals)
- [Triggers](#what-is-a-trigger-in-sql)
  - [What is a Trigger?](#what-is-a-trigger)
  - [How to Spot a Trigger](#how-to-spot-a-trigger)
  - [Example Triggers](#example-triggers)
    - [Example 1: Logging Updates](#example-1-logging-updates)
    - [Example 2: Preventing Deletions](#example-2-preventing-deletions)


## Basic SQL Concepts

1. **What’s a database?**
   - **Explanation:** A database is a structured set of data held in a computer, especially one that is accessible in various ways. Databases are designed to manage, store, and retrieve information efficiently.
   - **Example:** A library catalog containing a record of all books, their authors, editions, and availability status.

2. **What’s DBMS?**
   - **Explanation:** A Database Management System (DBMS) is software designed to store, retrieve, manage, and secure data in databases. It provides users and programmers with a systematic way to create, retrieve, update, and manage data.
   - **Example:** MySQL, Oracle, and Microsoft SQL Server are popular DBMSs that allow the creation of databases, addition of data, and execution of queries to manage data.

## Data Relationships and Structures

3. **Complexity increases as you descend through the models.**
   - **Explanation:** This refers to the complexity of data models in database systems, where higher complexity models like relational models provide more detailed methods for defining and manipulating data.
   - **Example:** Moving from simple key-value stores, which manage data as a single dictionary of keys and values, to relational databases that use tables, keys, and relations, and then to object-oriented databases that add more layers for managing data as objects reflecting real-world entities.

4. **What is the logical term for a record?**
   - **Explanation:** In database terminology, a 'record' is logically referred to as a 'row' in a table. Each row in a relational database table represents a single, implicitly structured data item in a database.
   - **Example:** In a student database, each row or record might contain information pertaining to a single student, such as their student ID, name, and email address.

5. **What are the three options to model super types and sub types?**
   - **Explanation:** In database design, super types and sub types can be modeled using single table inheritance, class table inheritance, or concrete table inheritance.
   - **Example:** For a vehicle database, a 'Vehicle' super type could have 'Car' and 'Truck' as subtypes.
     - **Single Table Inheritance:** One table 'Vehicles' with a 'Type' column distinguishing between 'Car' and 'Truck'.
     - **Class Table Inheritance:** Separate tables for 'Cars' and 'Trucks' that inherit common fields from a 'Vehicles' table.
     - **Concrete Table Inheritance:** Separate, independent tables for 'Cars' and 'Trucks' without a common structure.

## Data Issues and Normalization

6. **What is an anomaly?**
   - **Explanation:** An anomaly in a database context refers to irregularities that arise in database operations which can affect the integrity, consistency, and accuracy of the data.
   - **Example:** Updating the address of a customer in one record but not in another can lead to inconsistencies—this is known as an update anomaly.

7. **What are the three types of anomalies to guard against?**
   - **Explanation:** The three main types of anomalies are insertion, update, and deletion anomalies.
   - **Example:**
     - **Insertion Anomaly:** Unable to add a new faculty member to a database because they have not been assigned to teach any course yet.
     - **Update Anomaly:** Needing to update the address of a department in multiple records because it is stored in many places.
     - **Deletion Anomaly:** Removing a product from the database results in unintentional loss of information about the supplier because there are no other products associated with this supplier.

8. **What is functional dependency?**
   - **Explanation:** Functional dependency is a relationship that exists when one attribute uniquely determines another attribute in a database table.
   - **Example:** In an employee table, 'Employee ID' functionally determines 'Employee Name', meaning if you know the Employee ID, you can find the specific employee's name.

9. **What does A -> B mean?**
   - **Explanation:** This notation means that attribute A functionally determines attribute B in a database, indicating that the value of B is determined by the value of A.
   - **Example:** In a table where each student has a unique ID, Student ID -> Student Name denotes that knowing the Student ID will uniquely determine the Student Name.

## Normalization Processes

10. **How do you get to first normal form?**
    ```sql
    CREATE TABLE Students (
      StudentID int,
      StudentName varchar(255),
      Courses varchar(255)  -- Incorrect: This should be atomic
    );
    -- Normalized:
    CREATE TABLE Courses (
      CourseID int,
      CourseName varchar(255)
    );

    CREATE TABLE StudentCourses (
      StudentID int,
      CourseID int
    );
    ```

11. **How do you get to second normal form?**
    ```sql
    -- Assume a table with partial dependency:
    CREATE TABLE StudentGrades (
      StudentID int,
      CourseID int,
      InstructorName varchar(255),  -- Dependent only on CourseID, not on StudentID
      Grade char(1)
    );
    -- Normalized:
    CREATE TABLE Instructors (
      CourseID int,
      InstructorName varchar(255)
    );

    CREATE TABLE Grades (
      StudentID int,
      CourseID int,
      Grade char(1)
    );
    ```

12. **How do you get to third normal form?**
    ```sql
    -- Assume a table with transitive dependency:
    CREATE TABLE Employees (
      EmployeeID int,
      SupervisorID int,
      SupervisorPhone varchar(255)  -- Dependent on SupervisorID, which is not a primary key
    );
    -- Normalized:
    CREATE TABLE Supervisors (
      SupervisorID int,
      SupervisorPhone varchar(255)
    );

    CREATE TABLE Employees (
      EmployeeID int,
      SupervisorID int
    );
    ```

## Joins and Keys

13. **What is a left join, draw it, and explain what it does?**
    ```sql
    SELECT a.EmployeeName, b.DepartmentName
    FROM Employees a
    LEFT JOIN Departments b ON a.DepartmentID = b.DepartmentID;
    ```
    - **Description:** This query returns all employees and their department names. If an employee does not belong to any department, the department name is returned as NULL.

14. **What is an inner join, draw it, and explain what it does?**
    ```sql
    SELECT a.EmployeeName, b.DepartmentName
    FROM Employees a
    INNER JOIN Departments b ON a.DepartmentID = b.DepartmentID;
    ```
    - **Description:** This query returns only the employees who belong to a department, excluding any employees without a department.

15. **What is referential integrity?**
    ```sql
    ALTER TABLE Employees
    ADD CONSTRAINT FK_Department
    FOREIGN KEY (DepartmentID)
    REFERENCES Departments(DepartmentID);
    ```
    - **Description:** This SQL command enforces referential integrity by ensuring that each employee's `DepartmentID` corresponds to an existing `DepartmentID` in the `Departments` table.

16. **What is a right join, and explain what it does?**
```sql
SELECT a.EmployeeName, b.DepartmentName
FROM Employees a
RIGHT JOIN Departments b ON a.DepartmentID = b.DepartmentID;
```
- **Description:** This SQL query returns all departments along with their associated employees' names. If a department does not have any employees, the employee name is returned as NULL. The right join ensures that all records from the 'right' table (`Departments`) are included in the result set, regardless of whether there are matching entries in the 'left' table (`Employees`). This type of join is useful when you want to ensure that all data from one of the tables (typically lookup or reference data) is shown.

17. **What is a full join, and explain what it does?**
```sql
SELECT a.EmployeeName, b.DepartmentName
FROM Employees a
FULL OUTER JOIN Departments b ON a.DepartmentID = b.DepartmentID;
```
- **Description:** This SQL query returns all records from both `Employees` and `Departments`. If there are employees who do not belong to any department or if there are departments without any employees, those records will appear with NULLs in place of missing data. A full join combines the effects of both left and right joins, showing unmatched rows from both tables alongside matched rows.

### Visual Diagrams for Joins

- **Right Join Diagram:**
  - Imagine two circles; the right circle (representing the `Departments` table) is fully shaded, indicating all its rows are included. The left circle (representing the `Employees` table) overlaps partially, indicating only the matching rows are included.

- **Full Join Diagram:**
  - Two circles with both entirely shaded but darker in the overlapping section. This shading indicates that all rows from both tables are included, with the overlap showing where rows match the join condition.

## Transactions and ACID Properties

18. **What is a transaction?**
    ```sql
    START TRANSACTION;
    INSERT INTO Accounts (AccountID, Balance) VALUES (1, 100);
    UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
    COMMIT;
    ```
    - **Description:** This example shows a simple transaction that inserts a new account record and updates the balance, committing the changes to the database.

19. **Why would you use a transaction?**
    ```sql
    START TRANSACTION;
    INSERT INTO Orders (OrderID, ProductID, Quantity) VALUES (1, 101, 2);
    UPDATE Products SET Stock = Stock - 2 WHERE ProductID = 101;
    COMMIT

;
    ```
    - **Description:** This transaction ensures that the order is recorded and the product stock is reduced atomically, preventing inconsistencies in case of errors.

20. **Give the word and definition for each of the letters of ACID**
    - **A= Atomicity:** Ensures that all parts of a transaction are treated as a single unit, which either all succeed or all fail.
    - **C= Consistency:** Ensures that a transaction brings the database from one valid state to another, maintaining all data rules.
    - **I= Isolation:** Transactions are performed independently without interference from other transactions.
    - **D= Durability:** Once a transaction has been committed, it will remain so, even in the event of power loss, crashes, or errors.

21. **What is a race condition?**
    ```sql
    -- Example illustrating a race condition
    -- Two transactions are reading and updating the same data concurrently
    START TRANSACTION;
    SELECT Balance FROM Accounts WHERE AccountID = 1;
    -- Simultaneously, another transaction does the same
    UPDATE Accounts SET Balance = Balance + 50 WHERE AccountID = 1;
    COMMIT;
    ```
    - **Description:** In this example, if two transactions are executed at the same time without proper isolation, they might lead to inconsistent data because they are not aware of each other's updates.

22. **What are the 2 types of stored routines?**
    - **Answer:** Procedures and Functions
    - **SQL Example:**
      ```sql
      -- Example of a stored procedure
      DELIMITER //
      CREATE PROCEDURE GetEmployeeCount()
      BEGIN
        SELECT COUNT(*) FROM Employees;
      END //
      DELIMITER ;

      -- Example of a function
      DELIMITER //
      CREATE FUNCTION TotalSalary(departmentID INT)
      RETURNS DECIMAL(10,2)
      BEGIN
        DECLARE total DECIMAL(10,2);
        SELECT SUM(Salary) INTO total FROM Employees WHERE DepartmentID = departmentID;
        RETURN total;
      END //
      DELIMITER ;
      ```
    - **Description:** Stored procedures and functions allow for encapsulating SQL code for reuse. Procedures do not return a value directly and are called with a `CALL` statement, whereas functions return a value and can be used within SQL statements.

### SQL Statements and Privilege Management Questions

#### Question 1
**The following SQL statement over tables R(a,b), S(b,c), and T(a,c) requires certain privileges to execute:**  
```sql
UPDATE R
SET a = 10
WHERE b IN (SELECT c FROM S)
AND NOT EXISTS (SELECT a FROM T WHERE T.a = R.a)
```
**Which of the following privileges is not useful for the execution of this SQL statement?**
- INSERT ON R(a)
- SELECT ON T
- SELECT ON R(a)
- SELECT ON R(b)

**Answer:** INSERT ON R(a)  
**Explanation:** The SQL statement involves updating table R based on conditions involving tables S and T. The necessary privileges are SELECT on tables S and T to perform the subquery operations, and UPDATE on table R to change values. INSERT privilege on R is not relevant to an update operation, making it unnecessary for this query.

#### Question 2
**Consider a set of users A, B, C, D, E. Suppose user A creates a table T and thus is the owner of T. Now suppose the following set of statements is executed in order:** 
1. User A: `grant update on T to B,C with grant option`
2. User B: `grant update on T to D with grant option`
3. User C: `grant update on T to D with grant option`
4. User D: `grant update on T to E`
5. User A: `revoke update on T from C cascade`

**After the execution of statement 5, which of the following is true?**
- D no longer has the privilege UPDATE ON T
- D and E do not have the privilege UPDATE ON T, but B does
- Both B and D have the privilege UPDATE ON T, but C doesn't
- D has the privilege UPDATE ON T, but without the grant option

**Answer:** D and E do not have the privilege UPDATE ON T, but B does  
**Explanation:** When user A revokes the UPDATE privilege from C using the cascade option, it also revokes this privilege from all users to whom C had granted this privilege directly or indirectly. Since both C and B granted the privilege to D, D loses the privilege, and consequently, E also loses it as E's privilege depended solely on D.

#### Question 3
**The following SQL statement over tables R(c,d), S(f,g), and T(a,b) requires certain privileges to execute:** 
```sql
UPDATE T
SET a=1, b=2
WHERE a <= ALL (SELECT d FROM R)
OR EXISTS (SELECT f FROM S WHERE f > T.a)
```
**Which of the following privileges is not useful for the execution of this SQL statement?**
- UPDATE ON T
- SELECT ON T
- SELECT ON R
- SELECT ON R(c)

**Answer:** SELECT ON T  
**Explanation:** This query requires UPDATE privileges on table T to modify its records and SELECT privileges on tables R and S to perform the subqueries. SELECT ON T is not used directly in any subquery or condition in the given SQL statement.

#### Question 4
**Consider a set of users U, V, W, X, and Y. Suppose user U creates a table T and thus is the owner of T. Now suppose the following set of statements is executed in order:**
1. User U: `grant select on T to V,W with grant option`
2. User V: `grant select on T to W`
3. User W: `grant select on T to X,Y`
4. User U: `grant select on T to Y`
5. User U: `revoke select on T from V restrict`
6. User U: `revoke select on T from W cascade`

**Which of the following statements is true?**
- X does not have SELECT ON T privilege after statement 5
- X does not have privilege SELECT ON T after statement 6
- V has privilege SELECT ON T after statement 5
- Y does not have privilege SELECT ON T after statement 6

**Answer:** X does not have privilege SELECT ON T after statement 6  
**Explanation:** The `revoke ... cascade` operation from W also removes privileges from any user who received SELECT ON T through W, including X. Even though Y also received SELECT ON T directly from U, X's privilege is solely based on W’s grant.

### Additional Questions for Advanced Understanding

#### Question 5
**Given the SQL statement to update records in a table based on conditions involving two other tables, what type of additional SQL command could potentially interfere with the execution of this update due to locking mechanisms?**
- SELECT with HOLDLOCK
- INSERT ON involved tables
- DELETE using

 JOIN
- TRUNCATE TABLE command

**Answer:** SELECT with HOLDLOCK  
**Explanation:** The SELECT with HOLDLOCK command can interfere with update operations because it places a lock on the selected data, preventing other transactions from modifying the data until the transaction holding the lock is completed. This can lead to deadlocks or delays in processing the update if the update transaction itself requires access to the locked data.

#### Question 6
**When managing privileges in a multi-user environment, what potential security issue arises from the unrestricted use of the `WITH GRANT OPTION`?**
- Users may unintentionally grant more privileges than they possess.
- Privilege chains can create circular dependencies.
- Privileges might be escalated beyond intended levels, allowing users to access or modify data inappropriately.
- All users in the system may end up with administrative privileges.

**Answer:** Privileges might be escalated beyond intended levels, allowing users to access or modify data inappropriately  
**Explanation:** The `WITH GRANT OPTION` allows users to grant privileges they have to other users. If not controlled, this can lead to privilege escalation, where users end up with more privileges than intended by the database administrator, potentially compromising the security of the database.

#### Question 7
**What happens if a SQL transaction is executed without proper isolation levels set, particularly when multiple users are updating the same piece of data?**
- Possible occurrence of dirty reads
- Non-repeatable reads may happen
- Phantom reads could occur
- All of the above

**Answer:** All of the above  
**Explanation:** Improper isolation levels can lead to various types of read anomalies:
- **Dirty reads:** Reading uncommitted changes from another transaction.
- **Non-repeatable reads:** Getting different values in the same transaction when reading a row multiple times.
- **Phantom reads:** Observing new rows in the same transaction when performing the same query multiple times.


# Database Revision Exercises

## Normalization Exercises

### Question 1: Determine the Normal Form
**Given Relation:**
- **STORE_ITEM (SKU, PromotionID, Vendor, Style, Price)**
- Functional Dependencies:
  - **SKU, PromotionID → Vendor, Style, Price**
  - **SKU → Vendor, Style**

**Answer:**
The relation is in the First Normal Form (1NF) because there are no repeating groups or arrays. However, it is not in the Second Normal Form (2NF) because there are partial dependencies (SKU → Vendor, Style).

### Question 2: Normalize the STORE_ITEM Relation
**Normalization Process:**
1. **To achieve 2NF:**
   - Separate the relation into two:
     - **Table1 (SKU, Vendor, Style)**
       - **Functional Dependency:** SKU → Vendor, Style
     - **Table2 (SKU, PromotionID, Price)**
       - **Functional Dependency:** SKU, PromotionID → Price

2. **To achieve 3NF:**
   - Check for transitive dependencies. If SKU is the only determinant for Vendor and Style, and assuming no other dependencies violate 3NF, the tables are already in 3NF.

### Question 3: Determine the Normal Form of Another Relation
**Given Relation:**
- **STUFF (H, I, J, K, L, M, N, O)**
- Functional Dependencies:
  - **H, I → J, K, L**
  - **J → M**
  - **K → N**
  - **L → O**

**Answer:**
This relation is in 1NF but not in 2NF or 3NF due to partial and transitive dependencies.
  - unless transitively derived attributes then it is 2NF

### Question 4: Normalize the STUFF Relation
**Normalization Process:**
1. **To achieve 2NF:**
   - Break down into multiple tables to remove partial dependencies:
     - **Table1 (H, I, J, K, L)**
     - **Table2 (J, M)**
     - **Table3 (K, N)**
     - **Table4 (L, O)**

2. **To achieve 3NF:**
   - Ensure no transitive dependencies within these tables. Given the initial setup, breaking into these tables addresses transitive issues.

## SQL Queries Using Sakila

### Question 5: Films with THORA TEMPLE
```sql
SELECT title FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'THORA' AND actor.last_name = 'TEMPLE';
```

### Question 6: Films Rented by Each Customer
```sql
SELECT customer.last_name, customer.first_name, COUNT(rental.rental_id) AS total_rentals
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
GROUP BY customer.customer_id
ORDER BY total_rentals DESC, customer.last_name, customer.first_name;
```

### Question 7: Staff Names and Addresses
```sql
SELECT staff.first_name, staff.last_name, address.address, city.city, country.country
FROM staff
JOIN address ON staff.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id;
```

### Question 8: Films Rented by Each Customer
```sql
SELECT customer.last_name, customer.first_name, film.title
FROM rental
JOIN customer ON rental.customer_id = customer.customer_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
ORDER BY customer.last_name, customer.first_name;
```

## Using Weather Data

### Question 9: Temperature and Wind Direction
```sql
SELECT from_unixtime(unix_timestamp(time)) AS Time, Temp, `Wind Direction`
FROM weather
ORDER BY time DESC
LIMIT 10;
```

### Question 10: Total Rainfall
```sql
SELECT SUM(rainmono * (SELECT value FROM constants WHERE constant = 'rain_conversion')) AS Total_Rainfall
FROM weather;
```


### Simple SQL Queries

#### 1. List All Films
```sql
SELECT title FROM film;
```

#### 2. Count the Number of Films
```sql
SELECT COUNT(*) AS total_films FROM film;
```

#### 3. Find Films by Rating
```sql
SELECT title, rating FROM film WHERE rating = 'PG';
```

#### 4. List Customers in a Specific City
```sql
SELECT c.first_name, c.last_name 
FROM customer c 
JOIN address a ON c.address_id = a.address_id 
JOIN city ci ON a.city_id = ci.city_id 
WHERE ci.city = 'London';
```

### Intermediate SQL Queries

#### 5. List Films and Their Language
```sql
SELECT f.title, l.name AS language 
FROM film f 
JOIN language l ON f.language_id = l.language_id;
```

#### 6. List Active Customers
```sql
SELECT first_name, last_name, email 
FROM customer 
WHERE active = 1;
```

#### 7. List Films and the Number of Actors
```sql
SELECT f.title, COUNT(fa.actor_id) AS number_of_actors 
FROM film f 
JOIN film_actor fa ON f.film_id = fa.film_id 
GROUP BY f.film_id;
```

### Advanced SQL Queries

#### 8. Total Sales by Store
```sql
SELECT s.store_id, SUM(p.amount) AS total_sales 
FROM store s 
JOIN staff st ON s.store_id = st.store_id 
JOIN payment p ON st.staff_id = p.staff_id 
GROUP BY s.store_id;
```

#### 9. Customer Payments Above Average
```sql
SELECT c.customer_id, c.first_name, c.last_name, SUM(p.amount) AS total_paid
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
GROUP BY c.customer_id
HAVING SUM(p.amount) > (
    SELECT AVG(total) 
    FROM (SELECT SUM(amount) AS total FROM payment GROUP BY customer_id) AS subquery
);
```

#### 10. Films Not Rented in the Last Year
```sql
SELECT f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id AND r.rental_date > CURRENT_DATE - INTERVAL '1' YEAR
WHERE r.rental_id IS NULL;
```
### Things that could be asked

### 1. Films with Multiple Languages
**Question:** List films available in more than one language.
```sql
SELECT f.title, COUNT(DISTINCT fl.language_id) AS num_languages
FROM film f
JOIN film_language fl ON f.film_id = fl.film_id
GROUP BY f.film_id
HAVING num_languages > 1;
```

### 2. Top 5 Revenue Generating Films
**Question:** Identify the top 5 films that have generated the most revenue from rentals.
```sql
SELECT f.title, SUM(p.amount) AS total_revenue
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
GROUP BY f.film_id
ORDER BY total_revenue DESC
LIMIT 5;
```

### 3. Staff Members and Their Customers
**Question:** List all staff members along with the number of unique customers they have served.
```sql
SELECT s.first_name, s.last_name, COUNT(DISTINCT c.customer_id) AS num_customers
FROM staff s
JOIN rental r ON s.staff_id = r.staff_id
JOIN customer c ON r.customer_id = c.customer_id
GROUP BY s.staff_id;
```

### 4. Customers with Overdue Rentals
**Question:** Find all customers who have overdue rentals.
```sql
SELECT c.first_name, c.last_name, r.rental_date, r.return_date
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
WHERE r.return_date IS NULL AND r.rental_date < CURRENT_DATE - INTERVAL r.rental_duration DAY;
```

### 5. Average Film Length by Rating
**Question:** Calculate the average length of films by each film rating category.
```sql
SELECT rating, AVG(length) AS average_length
FROM film
GROUP BY rating;
```

### 6. Film Availability by Store
**Question:** Show the number of copies of each film available at each store.
```sql
SELECT f.title, s.store_id, COUNT(i.inventory_id) AS num_copies
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN store s ON i.store_id = s.store_id
GROUP BY f.film_id, s.store_id;
```

### 7. Detailed Customer Rentals
**Question:** List all films a specific customer named "John Doe" has rented, including the rental date and return status.
```sql
SELECT f.title, r.rental_date, r.return_date
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'John' AND c.last_name = 'Doe'
ORDER BY r.rental_date DESC;
```
### What is a Trigger in SQL?

A trigger in SQL is a special type of stored procedure that automatically executes or fires when certain events occur in a database table. Triggers can be used to enforce business rules, validate data integrity, and keep audit trails.

#### Characteristics of Triggers:
- **Event-driven:** Triggers are activated by events such as `INSERT`, `UPDATE`, or `DELETE` operations on a table.
- **Automated:** Once defined, triggers execute automatically in response to the specified events.
- **Can be executed Before or After the event:** Triggers can be set to execute before or after the triggering event occurs.

### How to Spot a Trigger in SQL:

When reviewing SQL code, you can identify a trigger by looking for specific keywords and structure. Triggers typically include:
- The keyword `CREATE TRIGGER`.
- An event that activates the trigger, such as `INSERT`, `UPDATE`, or `DELETE`.
- A timing specification, such as `BEFORE` or `AFTER`.
- A body that contains the SQL statements to be executed.

### Example Triggers:

#### Example 1: Logging Updates

**Scenario:** Log changes made to employee salaries in an `employees_log` table.

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    position VARCHAR(50),
    salary DECIMAL(10, 2)
);

CREATE TABLE employees_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    change_time DATETIME,
    old_salary DECIMAL(10, 2),
    new_salary DECIMAL(10, 2)
);

DELIMITER //

CREATE TRIGGER after_employee_update
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary <> OLD.salary THEN
        INSERT INTO employees_log (employee_id, change_time, old_salary, new_salary)
        VALUES (OLD.employee_id, NOW(), OLD.salary, NEW.salary);
    END IF;
END //

DELIMITER ;
```

**Explanation:**
- **Event:** The trigger fires `AFTER UPDATE` on the `employees` table.
- **Condition:** It checks if the `salary` value has changed.
- **Action:** If the salary has changed, it inserts a record into the `employees_log` table with the old and new salary values.

#### Example 2: Preventing Deletions

**Scenario:** Prevent deletion of records from a critical table.

```sql
CREATE TABLE critical_data (
    data_id INT PRIMARY KEY,
    data_value VARCHAR(255)
);

DELIMITER //

CREATE TRIGGER prevent_deletion
BEFORE DELETE ON critical_data
FOR EACH ROW
BEGIN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Deletion is not allowed from the critical_data table';
END //

DELIMITER ;
```

**Explanation:**
- **Event:** The trigger fires `BEFORE DELETE` on the `critical_data` table.
- **Action:** It raises an error using the `SIGNAL` statement, preventing the deletion from occurring.

### Spotting a Trigger in an Exam Scenario

When given an SQL script in an exam, look for:
- The `CREATE TRIGGER` statement.
- The timing keywords `BEFORE` or `AFTER`.
- The events `INSERT`, `UPDATE`, or `DELETE`.
- The trigger's body enclosed in `BEGIN` and `END`.

### Practice Question for Exam

**Question:** Given the following tables and data, create a trigger that ensures any update to the `inventory` table records the change in an `inventory_log` table.

**Table Definitions:**

```sql
CREATE TABLE inventory (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(50),
    quantity INT
);

CREATE TABLE inventory_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT,
    change_time DATETIME,
    old_quantity INT,
    new_quantity INT
);
```

**Answer:**

```sql
DELIMITER //

CREATE TRIGGER after_inventory_update
AFTER UPDATE ON inventory
FOR EACH ROW
BEGIN
    IF NEW.quantity <> OLD.quantity THEN
        INSERT INTO inventory_log (item_id, change_time, old_quantity, new_quantity)
        VALUES (OLD.item_id, NOW(), OLD.quantity, NEW.quantity);
    END IF;
END //

DELIMITER ;
```

This trigger will automatically log changes in the quantity of items in the `inventory` table, recording both the old and new quantities along with the timestamp of the change.
