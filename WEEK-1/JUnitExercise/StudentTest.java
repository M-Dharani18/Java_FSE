package org.example;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;
public class StudentTest {
    private Student student;
    @Before
    public void setUp() {
        student = new Student();
        System.out.println("Setup Executed");
    }
    @After
    public void tearDown() {
        System.out.println("Teardown Executed");
    }
    @Test
    public void testStudentPassStatus() {
        int marks = 75;
        boolean result = student.isPassed(marks);
        assertTrue(result);}
}
