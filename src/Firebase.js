import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZBIxDzBadm9VAac69_oz-dODa_VQsCJ4",
  authDomain: "tiendavapor-react-russo.firebaseapp.com",
  projectId: "tiendavapor-react-russo",
  storageBucket: "tiendavapor-react-russo.appspot.com",
  messagingSenderId: "394245302417",
  appId: "1:394245302417:web:b00e21c9473bfb22f17730"
};

firebase.initializeApp(firebaseConfig)

const db  = firebase.firestore();

export const fire = {}

fire.setCollection = (collectionName, array, id, callback) => {
  let fr = db.collection(collectionName)
  array.forEach(item => 
    { item[id] ? 
        fr.doc(item[id]).set(item)
        :
        fr.add(item)

      .then (docRef => {
        console.log ("Document written with ID: ", docRef.id) 
        callback(docRef.id)
      })
      .catch(error => {
        console.error ("Error adding document: ", error) 
      })
    }
  )
}

fire.updateCollectionDoc = (collectionName, doc, values) => {
  db.collection(collectionName)
    .doc(doc)
    .update(values)
    .catch(error => {console.error ("Error updating document: ", error)})
}

fire.getCollection = (callback, collection, opt={}) => {
  let fireGet = db.collection(collection);
  let dc = opt.doc ? fireGet.doc(opt.doc) : fireGet
  let wh = opt.where ? fireGet.where(opt.where[0],opt.where[1],opt.where[2]) : dc
  let geter =  opt.sort  ? wh.orderBy(opt.sort.key,opt.sort.order) : wh

  geter.get()
  .then( querySnapshot => {
    opt.doc && !querySnapshot.exists ? callback(null)
    :
    callback(opt.doc ?
      [{...querySnapshot.data(),id:querySnapshot.id}]
      :
      querySnapshot.docs.map( i => {
        return({...i.data(), id:i.id})
      }))
    })
    .catch( error => {
      console.error("Error geting documents: ", error)
    })
  };
  
