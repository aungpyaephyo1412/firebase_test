
import {doc,deleteDoc} from "firebase/firestore";
import {db} from "./firebase/index.js";

const Detail = () => {
    const id = "X4tv0kD3ATs9RFFgcKAa"
    const handleClick = async () => {
      const ref = doc(db,'projects',id)
        await deleteDoc(ref)
    }
    // useEffect(()=>{
    //    const ref = doc(db,"projects",id)
    //    getDoc(ref).then(doc=>{
    //       if (doc.exists()){
    //           console.log(doc.data())
    //       }else {
    //           console.log("not found")
    //       }
    //    })
    // },[id])
  return(
      <section>
          <button onClick={handleClick}>Delete</button>
      </section>
  )
}
export default Detail