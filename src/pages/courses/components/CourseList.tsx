import useCourseStore from '../courseStore';

const CourseList: React.FC = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(state => ({
    courses: state.courses,
    removeCourse: state.removeCourse,
    toggleCourseStatus: state.toggleCourseStatus,
  }));

  return (
    <ul>
      {courses.map(course => {
        return (
          <>
            <li
              className={`course-item`}
              key={course.id}
              style={{ backgroundColor: course.completed ? '#00FF0044' : 'white' }}
            >
              <span className='course-item-col-1'>
                <input
                  type='checkbox'
                  checked={course.completed}
                  onChange={e => {
                    toggleCourseStatus(course.id);
                  }}
                />
              </span>
              <span style={{ color: 'black' }}>{course.title}</span>
              <button
                className='delete-btn'
                onClick={() => {
                  removeCourse(course.id);
                }}
              >
                Delete
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default CourseList;
