import {db} from "./firebaseApp.js";
import {
    onSnapshot,
    collection,
    doc,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    addDoc,
    query,
    orderBy
} from "firebase/firestore";

export const readTodos = (setTodos) => {
    const collectionRef = collection(db, 'todo list');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        onSnapshot(q, (snapshot) => {
            setTodos(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        })
        return unsubscribe;
    })
}

export const doneTodo = async (id, done) => {
    const docRef = doc(db, 'todo list', id);
    done = !done;
    await updateDoc(docRef, {done});
}

export const deleteTodo = async (id) => {
    const docRef = doc(db, 'todo list', id);
    await deleteDoc(docRef);
}

export const addTodo = async (input) => {
    const collectionRef = collection(db, 'todo list');
    const newTodo = {todo: input, done: false, timestamp: serverTimestamp()};
    const newDoc = await addDoc(collectionRef, newTodo);
    console.log('New Documentum was created: ' + newDoc);
}

export const editTodo = async (id, todo) => {
    const docRef = doc(db, 'todo list', id);
    // setDoc(docRef, {todo}) // azokat a mezőket amiket nem sorakoztatok fel, kitörli!
    await updateDoc(docRef, {todo});
}