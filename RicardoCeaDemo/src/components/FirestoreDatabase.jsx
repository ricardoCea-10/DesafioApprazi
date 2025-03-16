import React, {useRef} from 'react';
import {firestore} from "../firebase/firebase-config";
import {addDoc, collection} from "@firebase/firestore";

export default function FirestoreDatabase() {
    const messageRef = useRef();
    const ref = collection(firestore, "messages");

    const handleSave = async(e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            message: messageRef.current.value,
        }

        try {
            await addDoc(ref,data);
        } catch (e) {
            console.log(e);
        }

    }
  return (
    <div>
        <h1> I'm the component for use firestore </h1>
        <h2> welcome!</h2>

        {/* Insert a form with a buttom: */}
        <form onSubmit={handleSave}>
            <label> Enter a message </label>
            <input type="Text" ref={messageRef}/> 
            <button type="submit">Send me to Firestore!!</button>
        </form>

    </div>
  )
}
