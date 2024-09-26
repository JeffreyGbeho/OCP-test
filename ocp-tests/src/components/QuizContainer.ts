import { Question } from "../models/question";
import { Quiz } from "../models/quiz";

export class QuizContainer {
  private element: HTMLElement;
  private container: HTMLElement;
  private quiz: Quiz | null = null;
  private currentQuestionIndex = 0;
  private isAnswerSubmited: boolean = false;

  constructor(private onQuizComplete: () => void) {
    this.element = document.createElement("div");
    this.element.className = "quiz-container";

    this.container = document.createElement("div");

    this.element.appendChild(this.container);
  }

  getQuiz() {
    return this.quiz;
  }

  setQuiz(quiz: Quiz) {
    this.quiz = quiz;
    this.currentQuestionIndex = 0;
    this.renderQuestion();
  }

  private renderQuestion() {
    if (!this.quiz) return;

    this.isAnswerSubmited = false;

    const question = this.quiz.questions[this.currentQuestionIndex];
    this.container.innerHTML = "";

    const questionText = document.createElement("pre");
    questionText.className = "question-text";
    questionText.innerHTML =
      this.currentQuestionIndex +
      1 +
      ". " +
      question.question.replace(/\n/g, "<br>");
    this.container.appendChild(questionText);

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";

    question.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.className = "option";
      optionElement.innerHTML = `
        <input type="checkbox" id="option${index}" name="answer" value="${option.charAt(
        0
      )}">
        <label for="option${index}">${option}</label>
      `;
      optionsContainer.appendChild(optionElement);
    });

    this.container.appendChild(optionsContainer);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", () => this.submitAnswer(question));
    this.container.appendChild(submitButton);
  }

  private submitAnswer(question: Question) {
    if (this.isAnswerSubmited) return;

    this.isAnswerSubmited = true;

    const selectedOptions = document.querySelectorAll(
      'input[name="answer"]:checked'
    ) as NodeListOf<HTMLInputElement>;

    if (!selectedOptions) return;

    const userAnswers = Array.from(selectedOptions).map(
      (option) => option.value
    );
    const resultElement = document.createElement("div");
    resultElement.className = "result";

    const isCorrect = this.arraysEqual(
      userAnswers.sort(),
      question.answer.sort()
    );

    if (isCorrect) {
      resultElement.innerHTML = "<p>Correct!</p>";
    } else {
      resultElement.innerHTML = `<p>Incorrect. The correct answer is ${question.answer}.</p>`;
    }

    resultElement.innerHTML += `<p>Explanation: ${question.explanation}</p>`;
    this.container.appendChild(resultElement);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next Question";
    nextButton.addEventListener("click", () => this.nextQuestion());
    this.container.appendChild(nextButton);
  }

  private arraysEqual(arr1: string[], arr2: string[]): boolean {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  private nextQuestion() {
    if (!this.quiz) return;

    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.quiz.questions.length) {
      this.renderQuestion();
    } else {
      this.onQuizComplete();
    }
  }

  getElement() {
    return this.element;
  }
}
