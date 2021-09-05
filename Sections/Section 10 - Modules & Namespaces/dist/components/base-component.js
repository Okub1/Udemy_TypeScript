// Component Base Class
// only one default export per file, JS Snytax,
// can be used to import in other files, using
// import <Allias> from <file.js>, therefore, {} are omitted,
// and allias is used, which can be same as export's name
// which i find useless, and named imports are better, 
// named exports also have auto-completion...
export /*default*/ class Component {
    constructor(templateId, hostElemmentId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElemmentId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }
}
//# sourceMappingURL=base-component.js.map