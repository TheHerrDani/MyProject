package activity;

/**
 * Created by Training on 2017. 07. 16..
 */
public class ActivityWithTrack implements Activity {

    private ActivityType activityType;
    private Track track;

    public ActivityWithTrack( Track track,ActivityType activityType) {
        this.activityType = activityType;
        this.track = track;
    }

    @Override
    public double getDistance() {
      return track.getDistance();
    }

    @Override
    public ActivityType getType() {
        return  activityType;
    }


}
