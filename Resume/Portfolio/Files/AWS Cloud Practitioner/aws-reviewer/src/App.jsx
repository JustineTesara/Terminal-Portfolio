import React, { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, BookOpen, Award } from "lucide-react";

const AWSCloudPractitionerReviewer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  const questions = [
    {
      category: "Cloud Concepts",
      question: "What are the three cloud computing deployment models?",
      options: [
        "Public, Private, Hybrid",
        "IaaS, PaaS, SaaS",
        "On-premises, Cloud, Edge",
        "Development, Staging, Production",
      ],
      correct: 0,
      explanation:
        "The three cloud deployment models are Public Cloud (resources owned by third-party provider), Private Cloud (resources used exclusively by one organization), and Hybrid Cloud (combination of public and private clouds).",
    },
    {
      category: "Cloud Concepts",
      question: "Which of the following is NOT a benefit of cloud computing?",
      options: [
        "Trade capital expense for variable expense",
        "Benefit from massive economies of scale",
        "Eliminate all security responsibilities",
        "Go global in minutes",
      ],
      correct: 2,
      explanation:
        "Security is a shared responsibility between AWS and the customer. AWS handles security OF the cloud, while customers are responsible for security IN the cloud.",
    },
    {
      category: "AWS Services",
      question:
        "Which AWS service provides scalable compute capacity in the cloud?",
      options: ["Amazon S3", "Amazon EC2", "Amazon RDS", "AWS Lambda"],
      correct: 1,
      explanation:
        "Amazon EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud, allowing you to launch virtual servers as needed.",
    },
    {
      category: "AWS Services",
      question: "What is Amazon S3 primarily used for?",
      options: [
        "Computing resources",
        "Database management",
        "Object storage",
        "Network security",
      ],
      correct: 2,
      explanation:
        "Amazon S3 (Simple Storage Service) is an object storage service designed to store and retrieve any amount of data from anywhere on the web.",
    },
    {
      category: "Security",
      question: "What is the AWS Shared Responsibility Model?",
      options: [
        "AWS and customers share the cost of services equally",
        "AWS is responsible for security OF the cloud, customers are responsible for security IN the cloud",
        "Both AWS and customers are responsible for all security aspects",
        "AWS handles all security, customers have no responsibility",
      ],
      correct: 1,
      explanation:
        "Under the Shared Responsibility Model, AWS manages security of the cloud infrastructure, while customers manage security of their data, applications, and configurations in the cloud.",
    },
    {
      category: "Security",
      question:
        "Which service helps you manage user permissions and access to AWS resources?",
      options: ["Amazon CloudWatch", "AWS IAM", "AWS Shield", "Amazon VPC"],
      correct: 1,
      explanation:
        "AWS IAM (Identity and Access Management) enables you to manage access to AWS services and resources securely by controlling authentication and authorization.",
    },
    {
      category: "Billing",
      question:
        "Which AWS service provides cost management and billing information?",
      options: [
        "AWS CloudTrail",
        "AWS Cost Explorer",
        "Amazon CloudWatch",
        "AWS Config",
      ],
      correct: 1,
      explanation:
        "AWS Cost Explorer is a tool that allows you to visualize, understand, and manage your AWS costs and usage over time.",
    },
    {
      category: "Billing",
      question: "What is the AWS Free Tier?",
      options: [
        "All AWS services are completely free forever",
        "A program offering limited free usage of certain AWS services",
        "Free technical support for all customers",
        "Discount for non-profit organizations",
      ],
      correct: 1,
      explanation:
        "The AWS Free Tier provides limited free usage of certain AWS services for 12 months after signing up, plus some services that are always free within usage limits.",
    },
    {
      category: "Cloud Architecture",
      question: 'What does "high availability" mean in cloud computing?',
      options: [
        "Services are always the cheapest option",
        "Systems are operational and accessible most of the time",
        "Unlimited storage capacity",
        "Fastest processing speeds",
      ],
      correct: 1,
      explanation:
        "High availability refers to systems that are operational and accessible for a high percentage of time, typically achieved through redundancy and fault tolerance.",
    },
    {
      category: "Cloud Architecture",
      question: "What is elasticity in cloud computing?",
      options: [
        "The physical flexibility of data centers",
        "The ability to automatically scale resources up or down based on demand",
        "The speed of network connections",
        "The durability of stored data",
      ],
      correct: 1,
      explanation:
        "Elasticity is the ability to quickly scale resources up or down automatically based on demand, ensuring you only pay for what you use.",
    },
    {
      category: "AWS Services",
      question: "Which service is used for serverless computing?",
      options: [
        "Amazon EC2",
        "AWS Lambda",
        "Amazon ECS",
        "AWS Elastic Beanstalk",
      ],
      correct: 1,
      explanation:
        "AWS Lambda is a serverless compute service that runs your code in response to events without requiring you to provision or manage servers.",
    },
    {
      category: "AWS Services",
      question: "What is Amazon RDS?",
      options: [
        "A content delivery network",
        "A managed relational database service",
        "A storage service for objects",
        "A monitoring service",
      ],
      correct: 1,
      explanation:
        "Amazon RDS (Relational Database Service) is a managed service that makes it easy to set up, operate, and scale relational databases in the cloud.",
    },
    {
      category: "Security",
      question: "What is the principle of least privilege?",
      options: [
        "Give users minimum access rights needed to perform their job",
        "All users should have equal access",
        "Only administrators should have any access",
        "Users can request any permissions they want",
      ],
      correct: 0,
      explanation:
        "The principle of least privilege means granting users only the minimum levels of access needed to perform their job functions, reducing security risks.",
    },
    {
      category: "AWS Services",
      question: "What is Amazon CloudFront?",
      options: [
        "A database service",
        "A content delivery network (CDN)",
        "A compute service",
        "A storage service",
      ],
      correct: 1,
      explanation:
        "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs globally with low latency.",
    },
    {
      category: "Cloud Concepts",
      question: "What does IaaS stand for?",
      options: [
        "Internet as a Service",
        "Infrastructure as a Service",
        "Integration as a Service",
        "Information as a Service",
      ],
      correct: 1,
      explanation:
        "IaaS (Infrastructure as a Service) provides virtualized computing resources over the internet, including servers, storage, and networking.",
    },
  ];

  const categories = [
    "all",
    "Cloud Concepts",
    "AWS Services",
    "Security",
    "Billing",
    "Cloud Architecture",
  ];

  const filteredQuestions =
    currentCategory === "all"
      ? questions
      : questions.filter((q) => q.category === currentCategory);

  const handleAnswerSelect = (index) => {
    if (showExplanation) return;

    setSelectedAnswer(index);
    setShowExplanation(true);

    const isCorrect = index === filteredQuestions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([
      ...answeredQuestions,
      {
        question: currentQuestion,
        correct: isCorrect,
      },
    ]);
  };

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    handleRestart();
  };

  if (quizComplete) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="text-center">
            <Award
              className={`w-24 h-24 mx-auto mb-4 ${
                passed ? "text-green-500" : "text-orange-500"
              }`}
            />
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            <div
              className="text-6xl font-bold mb-4"
              style={{ color: passed ? "#10b981" : "#f59e0b" }}
            >
              {percentage}%
            </div>
            <p className="text-xl mb-2">
              You scored {score} out of {filteredQuestions.length}
            </p>
            <p className="text-gray-600 mb-6">
              {passed
                ? "🎉 Congratulations! You passed! Keep up the great work!"
                : "📚 Keep studying! You need 70% to pass the AWS Cloud Practitioner exam."}
            </p>
            <button
              onClick={handleRestart}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              AWS Cloud Practitioner Reviewer
            </h1>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Category:
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-lg transition ${
                    currentCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {cat === "all" ? "All Questions" : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {filteredQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              Score: {score}/{answeredQuestions.length}
            </span>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              {filteredQuestions[currentQuestion].category}
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {filteredQuestions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {filteredQuestions[currentQuestion].options.map(
                (option, index) => {
                  const isCorrect =
                    index === filteredQuestions[currentQuestion].correct;
                  const isSelected = selectedAnswer === index;

                  let buttonClass =
                    "w-full text-left p-4 rounded-lg border-2 transition ";

                  if (!showExplanation) {
                    buttonClass +=
                      "border-gray-300 hover:border-blue-400 hover:bg-blue-50";
                  } else {
                    if (isCorrect) {
                      buttonClass += "border-green-500 bg-green-50";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += "border-red-500 bg-red-50";
                    } else {
                      buttonClass += "border-gray-300 bg-gray-100";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {showExplanation && isCorrect && (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        )}
                        {showExplanation && isSelected && !isCorrect && (
                          <XCircle className="w-6 h-6 text-red-600" />
                        )}
                      </div>
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {showExplanation && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
              <p className="font-semibold text-blue-900 mb-2">Explanation:</p>
              <p className="text-blue-800">
                {filteredQuestions[currentQuestion].explanation}
              </p>
            </div>
          )}

          {showExplanation && (
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              {currentQuestion < filteredQuestions.length - 1
                ? "Next Question"
                : "View Results"}
            </button>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestion + 1) / filteredQuestions.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSCloudPractitionerReviewer;
