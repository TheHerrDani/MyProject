package records;

/**
 * Created by Training on 2017. 06. 30..
 */
public class StudyResultByName {

    private String studentName;
    private double studyAverage;

    public StudyResultByName(String studentName, double studyAverage) {
        this.studentName = studentName;
        this.studyAverage = studyAverage;
    }

    public String getStudentName() {
        return studentName;
    }

    public double getStudyAverage() {
        return studyAverage;
    }
}
