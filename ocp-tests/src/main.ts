import { QuizContainer } from "./components/QuizContainer";
import { SideMenu } from "./components/SideMenu";
import { quizzes } from "./data/quizzes";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

const quizContainer = new QuizContainer(() => {
  alert("Quiz completed!");
});

const sidemenu = new SideMenu(
  quizzes.map((q) => q.title),
  (quizName) => {
    const selectedQuiz = quizzes.find((q) => q.title === quizName);
    if (selectedQuiz && quizContainer.getQuiz() !== selectedQuiz) {
      quizContainer.setQuiz(selectedQuiz);
    }
  }
);

app.appendChild(sidemenu.getElement());
app.appendChild(quizContainer.getElement());
