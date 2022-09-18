import CourseForm from './pages/courses/components/CourseForm';
import CourseList from './pages/courses/components/CourseList';

function App() {
  return (
    <div className='main-container'>
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
        }}
      >
        My Course List
      </h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
