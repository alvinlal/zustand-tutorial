import create from 'zustand';
import Course from '../../models/Course';
import { devtools, persist } from 'zustand/middleware';

interface CourseStore {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (courseId: number) => void;
  toggleCourseStatus: (courseId: number) => void;
}

const useCourseStore = create<CourseStore>()(
  devtools(
    persist(
      set => ({
        courses: [],
        addCourse: course => {
          set(state => ({
            courses: [course, ...state.courses],
          }));
        },
        removeCourse: courseId => {
          set(state => ({
            courses: state.courses.filter(course => course.id !== courseId),
          }));
        },
        toggleCourseStatus: courseId => {
          set(state => ({
            courses: state.courses.map(course =>
              course.id === courseId ? { ...course, completed: !course.completed } : course
            ),
          }));
        },
      }),
      {
        name: 'courses',
      }
    )
  )
);

export default useCourseStore;
