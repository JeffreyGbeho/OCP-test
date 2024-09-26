export class SideMenu {
  private element: HTMLElement;

  constructor(quizzes: string[], onSelectQuiz: (quizName: string) => void) {
    this.element = document.createElement("nav");
    this.element.className = "side-menu";

    const ul = document.createElement("ul");
    quizzes.forEach((quiz) => {
      const li = document.createElement("li");
      li.textContent = quiz;
      li.addEventListener("click", () => onSelectQuiz(quiz));
      ul.appendChild(li);
    });

    this.element.appendChild(ul);
  }

  getElement() {
    return this.element;
  }
}
