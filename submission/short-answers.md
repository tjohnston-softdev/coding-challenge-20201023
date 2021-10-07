# Short-Answer Questions

---

### What is a constraint in SQL?

A SQL constraint is a rule enforced inside a table to ensure that the data stored inside is accurate and reliable. If these constraints are broken when adding or modifying data, the constraint will flag an error and the data will be left intact. Constraints can either apply to individual columns, or the table as a whole.

For example, the 'NOT NULL' constraint means that a column is required. 'UNIQUE' means that each value in the column must be unique, and 'DEFAULT' specifies the value to be used if the cell is empty.

---

### What is the difference between a Clustered and Non-Clustered Index?

The difference as to if an index is clustered or not relates to how it is stored within the database files on disk. In a clustered index, the rows are stored together and sorted based on the key values in a given order. For example, a table of students can be sorted by their ID number (primary key)

In a non-clustered index, the storage structure is separate from the data rows. Each entry on the index has a pointer to where the row is actually stored on disk. This would be slower than using a clustered index because the table rows and the underlying data need to be retrieved separately.

---

### What does the following SQL query do?

```sql
SELECT RIGHT(Studentname, 5) as Studentname from student
```

This SQL query displays the first five characters of the name of each student.
For example, the name "Carline" would be output as "Carli"

---

### What is the difference between `git merge` and `git rebase`?

Both commands are used to take any changes made to the code on a given branch and apply them to the current branch, most likely 'master'. The main difference is that 'merge' is used to merge all of the changes together into a single commit, and 'rebase' applies the changes as normal but does so as individual commits rather than as a single merged commit.

---

[Return to Index](../readme.md)
