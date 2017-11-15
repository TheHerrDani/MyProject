package activity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class Activities {

    private List<Activity> activities = new ArrayList<>();

    public Activities(List<Activity> activities) {
        this.activities = activities;
    }

    public void addActivity(Activity activity) {
        activities.add(activity);
    }

    public List<Report> distancesByTypes() {
        List<Report> reports = new ArrayList<>();
        List<ActivityType> sumKeys = Arrays.asList(ActivityType.values());
        double[] sumvalusLength = new double[ActivityType.values().length];
        for (Activity act : activities) {
            sumvalusLength[(sumKeys.indexOf(act.getType()))]+=act.getDistance();
        }
        for (ActivityType sk:sumKeys) {
            reports.add(new Report(sk,sumvalusLength[(sumKeys.indexOf(sk))]));
        }
        return reports;
    }

    public int numberOfTrackActivities() {
        int result = 0;
        for (Activity act : activities) {
            if (act instanceof ActivityWithTrack) {
                result++;
            }
        }
        return result;
    }

    public int numberOfWithoutTrackActivities() {
        int result = 0;
        for (Activity act : activities) {
            if (act instanceof ActivityWithoutTrack) {
                result++;
            }
        }
        return result;
    }

    public List<Activity> getActivities() {
        return activities;
    }
}
