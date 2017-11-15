package activity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Training on 2017. 07. 14..
 */
public class Track {
    private List<TrackPoint> trackPoints = new ArrayList<>();

    public void addTrackPoint(TrackPoint trackPoint) {
        trackPoints.add(trackPoint);
    }

    public Coordinate findMaximumCoordinate() {
        double maxLong = Double.MIN_VALUE;
        double maxLat = Double.MIN_VALUE;

        for (TrackPoint trPoints : trackPoints) {
            if (trPoints.getCoordinate().getLatitude() > maxLat) {
                maxLat = trPoints.getCoordinate().getLatitude();
            }
            if (trPoints.getCoordinate().getLongitude() > maxLong) {
                maxLong = trPoints.getCoordinate().getLongitude();
            }
        }

        return new Coordinate(maxLat, maxLong);
    }

    public Coordinate findMinimumCoordinate() {
        double minLong = Double.MAX_VALUE;
        double minLat = Double.MAX_VALUE;

        for (TrackPoint trPoints : trackPoints) {
            if (trPoints.getCoordinate().getLatitude() < minLat) {
                minLat = trPoints.getCoordinate().getLatitude();
            }
            if (trPoints.getCoordinate().getLongitude() < minLong) {
                minLong = trPoints.getCoordinate().getLongitude();
            }
        }

        return new Coordinate(minLat, minLong);
    }

    public double getDistance() {
        double sum = 0;
        for (int i = 0; i < trackPoints.size(); i++) {
            if (i >= 1) {
                sum += trackPoints.get(i).getDistanceFrom(trackPoints.get(i - 1));
            }
        }
        return sum;
    }

    public double getFullElevation() {
        int sum = 0;
        for (int i = 0; i < trackPoints.size(); i++) {
            if (i > 0 && trackPoints.get(i).getElevation() > trackPoints.get(i - 1).getElevation()) {
                sum += trackPoints.get(i).getElevation() - trackPoints.get(i - 1).getElevation();
            }
        }
        return sum;
    }

    public double getFullDecrease() {
        int sum = 0;
        for (int i = 0; i < trackPoints.size(); i++) {
            if (i > 0 && trackPoints.get(i).getElevation() < trackPoints.get(i - 1).getElevation()) {
                sum += trackPoints.get(i - 1).getElevation() - trackPoints.get(i).getElevation();
            }
        }
        return sum;
    }


    public double getRectangleArea() {

        double minX = trackPoints.get(0).getCoordinate().getLatitude();
        double minY = trackPoints.get(0).getCoordinate().getLongitude();
        double maxX = trackPoints.get(0).getCoordinate().getLatitude();
        double maxY = trackPoints.get(0).getCoordinate().getLongitude();

        for (int i = 0; i < trackPoints.size(); i++) {


            if (trackPoints.get(i).getCoordinate().getLatitude() < minX) {
                minX = trackPoints.get(i).getCoordinate().getLatitude();
            }
            if (trackPoints.get(i).getCoordinate().getLongitude() < minY) {
                minY = trackPoints.get(i).getCoordinate().getLongitude();
            }
            if (trackPoints.get(i).getCoordinate().getLatitude() > maxX) {
                maxX = trackPoints.get(i).getCoordinate().getLatitude();
            }
            if (trackPoints.get(i).getCoordinate().getLongitude() > maxY) {
                maxY = trackPoints.get(i).getCoordinate().getLongitude();
            }

        }
        return (maxX - minX) * (maxY - minY);


    }

    public List<TrackPoint> getTrackPoints() {
        return trackPoints;
    }
}
