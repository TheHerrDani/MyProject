package records;

import java.util.ArrayList;
import java.util.List;




public class Student {

    private List<Mark> marks = new ArrayList<>();
    private String name;

    public Student(String name) {
        if(isEmpty(name)){
            throw new IllegalArgumentException("Student name must not be empty!");
        }
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void grading(Mark mark) {
        if(mark == null || mark.getMarkType().getValue() == 0 ){
            throw new NullPointerException("Mark must not be null!");
        }
        marks.add(mark);
    }

    public double calculateAverage() {
        double sum = 0;
        for (Mark mark : marks) {
            sum += mark.getMarkType().getValue();
        }
        if(marks.size() == 0){
            return 0.0;
        }
        return (Math.round((sum/marks.size())*100d))/100d;
    }

    public double calculateSubjectAverage(Subject subject) {
        double sum = 0;
        double piecies = 0;
        for (Mark mark : marks) {
            if (mark.getSubject().getSubjectName() == subject.getSubjectName()) {
                sum += mark.getMarkType().getValue();
                piecies++;
            }
        }
        if(piecies == 0){
            return 0.0;
        }


        return (Math.round((sum/piecies)*100D))/100d;
    }

    @Override
    public String toString() {
        String marksString = "";
        for (Mark mark: marks) {
            marksString = mark.getSubject().toString()+": "+mark.toString();
        }

        return name +" marks: " + marksString;
    }
    private boolean isEmpty(String str){
        return str == null || str == "";
    }


}
