package records;

/**
 * Created by Training on 2017. 06. 30..
 */
public enum MarkType {

    A(5, "excellent"), B(4, "very good"), C(3, "improvement needed"), D(2, "close fail"), F(1, "fail");

    private int value;
    private String descreption;

    MarkType(int value, String descreption) {
        this.value = value;
        this.descreption = descreption;
    }

    public int getValue() {
        return value;
    }

    public String getDescreption() {
        return descreption;
    }


}
