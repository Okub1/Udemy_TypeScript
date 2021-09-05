// Component Base Class

// only one default export per file, JS Snytax,
// can be used to import in other files, using
// import <Allias> from <file.js>, therefore, {} are omitted,
// and allias is used, which can be same as export's name
// which i find useless, and named imports are better, 
// named exports also have auto-completion...
export /*default*/ abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor (
        templateId: string, 
        hostElemmentId: string, 
        insertAtStart: boolean,
        newElementId?: string 
        ) {
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElemmentId)! as T;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as U;

        if (newElementId) {        
            this.element.id = newElementId;
        }

        this.attach(insertAtStart);
    }

    private attach(insertAtBeginning: boolean) {
        this.hostElement.insertAdjacentElement(
            insertAtBeginning ? 'afterbegin' : 'beforeend', 
            this.element
            );
    }

    abstract configure(): void;
    abstract renderContent(): void;
}