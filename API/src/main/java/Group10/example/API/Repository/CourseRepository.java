package Group10.example.API.Repository;

import Group10.example.API.Model.Course;
import Group10.example.API.Model.LectureRoom;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Collection;
import java.util.Optional;

public interface CourseRepository extends MongoRepository<Course,String> {
    Collection<Course> findBySemester(int semester);

    Optional<Course> findByCourseNumber(String courseNumber);

}
