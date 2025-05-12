
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { cTopics } from '../topics/cTopics';
import { cppTopics } from '../topics/cppTopics';
import { dataStructuresTopics } from '../topics/dataStructuresTopics';
import { htmlTopics } from '../topics/htmlTopics';
import { cssTopics } from '../topics/cssTopics';
import { pythonTopics } from '../topics/pythonTopics';
import { Topic } from '../types/topicType';

const CoursePage = () => {
  const { courseId } = useParams();
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [visibleTopicsCount, setVisibleTopicsCount] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTopics = () => {
    switch(courseId) {
      case 'cpp':
        return cppTopics;
      case 'data-structures':
        return dataStructuresTopics;
      case 'html':
        return htmlTopics;
      case 'css':
        return cssTopics;
      case 'python':
        return pythonTopics;
      case 'c':
        return cTopics;
      default:
        return [];
    }
  };

  const topics = getTopics();

  const handleTopicClick = (topic: Topic) => {
    setSelectedTopic(topic);
    setShowQuiz(false);
    setSubmitted(false);
    setAnswers([]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleQuizSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    if (!selectedTopic) return 0;
    return answers.reduce((score, answer, index) => {
      return answer === selectedTopic.quiz[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const handleSeeMore = () => {
    setVisibleTopicsCount(prevCount => prevCount + 2);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
  <h1 className="text-2xl font-extrabold text-teal-900 sm:text-3xl mb-6">
    {courseId?.toUpperCase()} Course Content
  </h1>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-center">
    {topics.slice(0, visibleTopicsCount).map((topic) => (
      <button
        key={topic.id}
        onClick={() => handleTopicClick(topic)}
        className={`p-2 rounded-lg ${
          selectedTopic?.id === topic.id
            ? 'bg-teal-600 text-white'
            : 'bg-white hover:bg-teal-600 hover:text-white'
        } shadow-sm transition-all duration-200 flex items-center justify-center text-center h-14 md:h-16 border border-teal-100`}
      >
        <h3 className="text-xs md:text-sm font-medium">{topic.title}</h3>
      </button>
    ))}
  </div>

  {visibleTopicsCount < topics.length && (
    <div className="mt-4 text-center">
      <button
        onClick={handleSeeMore}
        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-xs sm:text-sm"
      >
        See More
      </button>
    </div>
  )}

  {/* Modal */}
  {isModalOpen && selectedTopic && (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeModal}></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={closeModal}
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-[90vh] overflow-y-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{selectedTopic.title}</h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{selectedTopic.description}</p>

                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    language="cpp"
                    style={oneDark}
                    showLineNumbers
                    customStyle={{
                      margin: 0,
                      padding: '1rem',
                      fontSize: '0.75rem',
                    }}
                  >
                    {selectedTopic.code}
                  </SyntaxHighlighter>
                </div>

                {!showQuiz && (
                  <button
                    onClick={() => setShowQuiz(true)}
                    className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-xs sm:text-sm"
                  >
                    Take Quiz
                  </button>
                )}
              </div>

              {showQuiz && (
                <div className="mt-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quiz</h3>
                  {selectedTopic.quiz.map((question, questionIndex) => (
                    <div key={questionIndex} className="mb-6">
                      <p className="font-medium text-gray-900 mb-3">
                        {questionIndex + 1}. {question.question}
                      </p>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <label
                            key={optionIndex}
                            className={`flex items-center p-2 rounded-lg cursor-pointer ${
                              submitted
                                ? optionIndex === question.correctAnswer
                                  ? 'bg-green-100'
                                  : answers[questionIndex] === optionIndex
                                  ? 'bg-red-100'
                                  : 'bg-gray-50'
                                : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${questionIndex}`}
                              value={optionIndex}
                              checked={answers[questionIndex] === optionIndex}
                              onChange={() => handleAnswerSelect(questionIndex, optionIndex)}
                              disabled={submitted}
                              className="h-4 w-4 text-teal-600"
                            />
                            <span className="ml-3">{option}</span>
                            {submitted && (
                              optionIndex === question.correctAnswer ? (
                                <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                              ) : answers[questionIndex] === optionIndex ? (
                                <XCircle className="ml-auto h-5 w-5 text-red-500" />
                              ) : null
                            )}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  {!submitted && (
                    <button
                      onClick={handleQuizSubmit}
                      disabled={answers.length !== selectedTopic.quiz.length}
                      className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
                    >
                      Submit Quiz
                    </button>
                  )}
                  {submitted && (
                    <div className="mt-4 p-4 bg-teal-50 rounded-lg">
                      <p className="text-lg font-medium text-teal-900">
                        Your Score: {calculateScore()} / {selectedTopic.quiz.length}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default CoursePage;
