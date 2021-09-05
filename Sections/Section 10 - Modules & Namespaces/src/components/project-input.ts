// ES6 modules syntax
import { Component } from "./base-component.js";

// example of importing everything, using * (asterisk)
// Validation is our allias for everything exported from validation.js (.ts)
// using exports is like from static context, "Allias.export..."
// i.e. Validation.Validatable, !Validation.validate();
import * as Validation from "../util/validation.js";

// example of custom allias of import
// now, original will be used in this file as allias
// AutoBind => Autobind
import { AutoBind as Autobind} from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";

// Project input class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() {

    }

    private gatherUserIpnut(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidatable: Validation.Validatable ={
            value: enteredTitle,
            required: true
        };

        const descriptionValidatable: Validation.Validatable ={
            value: enteredDescription,
            required: true,
            minLength: 5
        };

        const peopleValidatable: Validation.Validatable ={
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        };

        if (
            !Validation.validate(titleValidatable) ||
            !Validation.validate(descriptionValidatable) ||
            !Validation.validate(peopleValidatable) 
        ) {
            alert('Invalid input, please try again!');
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @Autobind
    private submitHandler(event: Event) {
        event.preventDefault(); // to prevent default submission
        const userInput = this.gatherUserIpnut();
        if (Array.isArray(userInput)) { // to check if is tuple, as JS doesnt know what tuple is
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
}
