import { firestore } from '@/lib/firebase'

export const getComments = (slug, callBackFunction) => {
  firestore
    .collection('comments')
    .get()
    .then((snapshot) => {
      const posts = snapshot.docs
        .map((doc) => doc.data())
        .filter((doc) => doc.slug === slug)
        .map((doc) => {
          return { id: doc.id, ...doc }
        })
      callBackFunction(posts)
    })
    .catch((err) => {
      console.log(err)
    })
}
