package org.example;

import static org.junit.Assert.*;

import org.junit.Test;
public class AssertionsTest {
    @Test
    public void testAssertions() {
        Student student = new Student();
        assertTrue(student.isPassed(60));
        assertFalse(student.isPassed(30));
        assertEquals(5, 2 + 3);
        assertNull(null);
        assertNotNull(student);
    }
}
