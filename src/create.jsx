import {useEffect} from "react";
import {collection,addDoc} from "firebase/firestore";
import {db} from "./firebase/index.js";

const Create = () => {
    const data = {name:"ko ko"}
    const handleSubmit = (e) => {
        e.preventDefault()
        const ref = collection(db,"projects")
        addDoc(ref,data)
    }

  return(
      <section>
          <form onSubmit={handleSubmit}>
              <button>Add</button>
          </form>
      </section>
  )
}
export default Create