package activity;

/**
 * Created by Training on 2017. 07. 16..
 */
public class ActivityWithoutTrack implements Activity{


    private ActivityType activityType;

    public ActivityWithoutTrack(ActivityType activityType) {
        this.activityType = activityType;
    }

    @Override
    public double getDistance() {
        return 0;
    }

    @Override
    public ActivityType getType() {
        return activityType;
    }
}
