package records;

/**
 * Created by Training on 2017. 06. 30..
 */
public class Subject {

    private String subjectName;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Subject subject = (Subject) o;

        return subjectName != null ? subjectName.equals(subject.subjectName) : subject.subjectName == null;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public Subject(String subjectName) {
        this.subjectName = subjectName;
    }

    @Override
    public String toString() {
        return subjectName;
    }
}
