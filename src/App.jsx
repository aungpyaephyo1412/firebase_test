import {useEffect} from "react";
import {collection,getDocs,query,limit} from 'firebase/firestore'
import {db} from "./firebase/index.js";
import Create from "./create.jsx";
import Detail from "./Detail.jsx";

const App = () => {
    const data = [];
    useEffect(() => {
        let ref = collection(db,'projects')
        const q = query(ref,limit(1))
            getDocs(ref).then((docs)=>{
            docs.forEach(doc=>{
                data.push(doc.data())
            })
        })
    }, []);
    console.log(data)
  return(
      <div>
        <Detail/>
          <Create/>
      </div>
  )
}
export default App