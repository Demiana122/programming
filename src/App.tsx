
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import CoursePage from './pages/CoursePage.tsx';
import AskQuestion from './pages/AskQuestion.tsx';
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/ask-question" element={<AskQuestion />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;