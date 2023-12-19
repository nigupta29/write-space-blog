import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const COLLECTION_NAME = 'posts'
const postsRef = collection(db, COLLECTION_NAME)

export const createBlogApi = async blogData => {
  // blogData : {title, subtitle, content, tag, imageUrl, author : {id, name, }}
  const newBlog = { ...blogData, createdAt: serverTimestamp() }
  console.log(newBlog)

  const docRef = await addDoc(postsRef, newBlog)
  return { id: docRef.id, ...newBlog }
}
