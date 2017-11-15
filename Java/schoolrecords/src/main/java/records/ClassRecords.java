package records;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ClassRecords {

    private String className;
    private Random rnd;
    private List<Student> students = new ArrayList<>();

    public ClassRecords(String className, Random rnd) {
        this.className = className;
        this.rnd = rnd;
    }


    public String getClassName() {
        return className;
    }


    public boolean addStudent(Student student) {
        if (student == null) {
            throw new NullPointerException("Student must not be empty!");
        }
        for (Student st : students) {
            if (st.getName().equals(student.getName())) {
                return false;
            }
        }
        students.add(student);
        return true;

    }

    public boolean removeStudent(Student student) {
        if (student == null) {
            throw new NullPointerException("Student must not be empty!");
        }
        boolean contains = false;
        for (Student st : students) {
            if (st.getName().equals(student.getName())) {
                contains = true;
            }
        }
        if(contains){
            students.remove(student);
            return true;
        }
        return false;

    }

    public double calculateClassAverage() {
      if(students == null|| students.size()==0){
          throw new ArithmeticException("No student in the class");
      }
        double sum =0.0;
        for (Student st : students) {
           sum += st.calculateAverage();
        }
        if(sum == 0){
            throw new ArithmeticException("No marks present");
        }
        return (Math.round((sum/students.size())*100D))/100d;
    }

    public double calculateClassAverageBySubject(Subject subject) {
        if(students == null|| students.size()==0){
            throw new ArithmeticException("No student in the class");
        }
        double sum =0.0;
        double studentHasThisSubject =0.0;
        for (Student st : students) {
            if(st.calculateSubjectAverage(subject)!=0){
                sum += st.calculateSubjectAverage(subject);
                studentHasThisSubject++;
            }
        }
        if(sum == 0){
            throw new ArithmeticException("No marks present");
        }
        return (Math.round((sum/studentHasThisSubject)*100D))/100d;
    }

    public Student findStudentByName(String name) {
        if(name == null || name == ""){
            throw new IllegalArgumentException("Student name must not be empty!");
        }
        if(students == null||students.size()==0){
            throw new IllegalStateException("No students to search!");
        }

        boolean contains = false;
        Student searchedStudent = null;
        for (Student st : students) {
            if (st.getName().equals(name)) {
                contains = true;
                searchedStudent = st;
            }
        }
        if(contains){
            return searchedStudent;
        }else{
            throw new IllegalArgumentException("Student by this name cannot be found!");
        }
    }

    public Student repetition() {
        if(students == null||students.size()==0){
            throw new IllegalStateException("No students to select for repetition!");
        }

        return students.get(rnd.nextInt(students.size()));

    }

    public List<StudyResultByName> listStudyResults() {
        if(students == null||students.size()==0){
            throw new IllegalStateException("No students to list results!");
        }
        List<StudyResultByName> studyResultByNames = new ArrayList<>();
        for (Student st:students) {
          studyResultByNames.add(new StudyResultByName(st.getName(),st.calculateAverage()));
        }
     return  studyResultByNames;
    }

    public String listStudentNames() {
        String studentsName = "";
        int i=1;
        for (Student st:students) {
            if(students.size()>i){
                studentsName+= st.getName()+", ";
                i++;
            }else{
                studentsName+= st.getName();
            }

        }
        return studentsName;
    }

}
