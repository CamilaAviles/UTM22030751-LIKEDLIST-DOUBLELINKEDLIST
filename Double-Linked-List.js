class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(element) {
        if (!element) {
            return "There's no data";
        }

        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    prepend(element) {
        if (!element) {
            return "There's no data";
        }

        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    insertAfterNode(nodeData, element) {
        if (!nodeData || !element) {
            return "Node data and element are mandatory";
        }

        const newNode = new Node(element);

        let current = this.head;
        while (current) {
            if (current.data === nodeData) {
                newNode.next = current.next;
                if (current.next) {
                    current.next.prev = newNode;
                } else {
                    this.tail = newNode;
                }
                newNode.prev = current;
                current.next = newNode;
                return 'The element was appended';
            }
            current = current.next;
        }
        return 'The node doesn´t exist';
    }

    traverse() {
        if (!this.head) {
            return "There's no data";
        }

        let currentValue = this.head;

        while (currentValue) {
            console.log(currentValue);
            currentValue = currentValue.next;
        }
    }

    deleteNode(element) {
        if (!element || !this.head) {
            return "No parameter or list";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            } else {
                this.head.prev = null;
            }
            return "The indicated element was the head";
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === element) {
                if (current.next === this.tail) {
                    this.tail = current;
                    this.tail.next = null;
                    return "The entered element has been deleted and was the tail";
                }
                current.next = current.next.next;
                if (current.next) {
                    current.next.prev = current;
                }
                return "Element deleted";
            }
            current = current.next;
        }
        return "Element not found";
    }

    deleteHead(){
        if (!this.head) {
            return 'There´s no head';
        }

        this.head = this.head.next;

        if (this.head === null) {
            this.tail=null;
        } else {
            this.head.prev = null;
        }
    }

    deleteTail(){
        if (!this.head) {
            return 'There´s no data';
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return 'The tail was removed and it was also head';
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        return 'The tail was removed';
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(5);
doublyLinkedList.append(6);
doublyLinkedList.append(7);
console.log(doublyLinkedList.insertAfterNode(2, 3));
console.log(doublyLinkedList);
