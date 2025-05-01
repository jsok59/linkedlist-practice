function createLinkedList() {
	let head = null;
	let tail = null;
	let size = 0;

	const getHead = () => {
		return head;
	};
	const getTail = () => {
		return tail;
	};
	const getSize = () => {
		return size;
	};
	const append = (value) => {
		let iter = head;
		if (iter === null) {
			head = createNode(value);
			tail = head;
			size++;
			return;
		}

		tail.nextNode = createNode(value);
		tail = tail.nextNode;
		size++;
	};

	const prepend = (value) => {
		let temp = createNode(value);
		temp.nextNode = head;
		head = temp;
		size++;
	};

	const at = (index) => {
		let counter = 0;

		if (index + 1 > size) {
			console.log("Index overflow");
			return;
		}

		let iter = head;
		for (let i = 0; i < index; i++) {
			iter = iter.nextNode;
		}
		return iter;
	};

	const pop = () => {
		let iter = head;
		if (iter === null) {
			console.log("Nothing left!");
			return;
		}
		if (iter.nextNode === null) {
			head = null;
			return;
		}
		while (iter.nextNode.nextNode != null) {
			iter = iter.nextNode;
		}
		iter.nextNode = null;
	};

	return { getSize, getHead, getTail, append, prepend, at, pop };
}

function createNode(value = null) {
	return { value, nextNode: null };
}

window.debug = { createLinkedList, createNode };
