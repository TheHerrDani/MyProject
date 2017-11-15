package records;


import java.util.ArrayList;
import java.util.List;

public class Tutor {

    private String name;
    private List<Subject> taughtSubjects = new ArrayList<>();

    public String getName() {
        return name;
    }

    public Tutor(String name, List<Subject> taughtSubjects) {
        this.name = name;
        this.taughtSubjects = taughtSubjects;
    }

   public boolean tutorTeachingSubject(Subject subject){
       for (Subject su: taughtSubjects) {
           if(su.getSubjectName() == subject.getSubjectName()){
               return true;
           }

       }
       return false;
   }
}
