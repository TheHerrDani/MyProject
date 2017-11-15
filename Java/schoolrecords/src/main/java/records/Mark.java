package records;

import java.util.Date;

public class Mark {

    private MarkType markType;
    private Subject subject;
    private Tutor tutor;
    private Date date;


    public MarkType getMarkType() {
        return markType;
    }

    public Subject getSubject() {
        return subject;
    }

    public Tutor getTutor() {
        return tutor;
    }

    public Mark(MarkType markType, Subject subject, Tutor tutor) {
        if(tutor == null || subject == null){
            throw new NullPointerException("Both subject and tutor must be provided!");
        }
        this.markType = markType;
        this.subject = subject;
        this.tutor = tutor;
        this.date = new Date();
    }

    public Mark(String markType, Subject subject, Tutor tutor){
        if(tutor == null || subject == null){
            throw new NullPointerException("Both subject and tutor must be provided!");
        }
        this.markType = MarkType.valueOf(markType);
        this.subject = subject;
        this.tutor = tutor;
        this.date = new Date();
    }

    @Override
    public String toString() {
        return markType.getDescreption()+"("+markType.getValue()+")";
    }

}
