import HomeLearnify from './Image/Learnify/HomeLernify.png'
import SignupLearn from './Image/Learnify/SignupLearn.png'
import CartLearnify from './Image/Learnify/CartLearnify.png'
import ProductsLearnify from './Image/Learnify/ProductsLearnify.png'
import Toppers_Home from './Image/Toppers_Academy/Toppers_Home.png'
import toppers_courses from './Image/Toppers_Academy/toppers_courses.png'
import toppers_footer from './Image/Toppers_Academy/toppers_footer.png'
import toppers_signup from './Image/Toppers_Academy/toppers_signup.png'
import Pollify_Home from './Image/Pollify/Pollify_Home.png'
import pollify_polls from './Image/Pollify/pollify_polls.png'
import pollify_binarypolls from './Image/Pollify/pollify_binarypolls.png'
import pollify_MCQ from './Image/Pollify/pollify_MCQ.png'


const projectsData = {
  portfolio: [
    
    {
      title: "Learnify",
      images: [HomeLearnify,SignupLearn,CartLearnify,ProductsLearnify],
      githubLink: "https://github.com/ShubhKeshari/hack-sculptress-6789",
      liveLink: "https://hack-sculptress-6789-1.onrender.com/",
      techStack: ["CSS3", "HTML5", "JavaScript"],
      about: "Learnify is an online learning platform similar to Udemy, offering diverse courses with video lectures, quizzes, and certificates. Users can learn at their own pace, and instructors can create and manage courses, making education accessible to all."
    },
    {
      title: "Toppers Academy",
      images: [Toppers_Home,toppers_courses,toppers_signup,toppers_footer],
      githubLink: "https://github.com/itiaditi/toppers-academy",
      liveLink: "https://toppers-academy-henna.vercel.app/",
      techStack: ["JavaScript", "React",  "CSS3", "HTML5", "Chakra UI","Json Server"],
      about: "Toppers Academy is an online education platform inspired by Khan Academy, offering free video lessons and exercises across various subjects to help students learn at their own pace."
    },
    {
      title: "Pollify",
      images: [Pollify_Home,pollify_polls,pollify_binarypolls,pollify_MCQ],
      githubLink: "https://github.com/varshitha-008/Pollify",
      liveLink: "https://pollify-1.onrender.com/",
      techStack: ["JavaScript", "React", "Node", "Express", "MongoDB", "CSS3", "HTML5", "Chakra"],

      about: "Pollify is a user-friendly platform where anyone can create, share, and participate in polls. It allows users to gather opinions, make decisions, and see real-time results, making it easy to engage with others and make informed choices."
    },
  ]
};

export default projectsData;
