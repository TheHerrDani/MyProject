package activity;
public class Report {

    private final ActivityType acitivityType;
    private final double distance;

    public ActivityType getActivityType() {
        return acitivityType;
    }

    public double getDistance() {
        return distance;
    }

    public Report(ActivityType activityType, double distance) {
        this.acitivityType = activityType;
        this.distance = distance;
    }
}
