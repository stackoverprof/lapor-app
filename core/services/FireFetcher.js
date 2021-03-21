import { DB } from './firebase'

//LISTENER - Realtime
const userData = (uid, action) => {
    return DB.collection('Users').doc(uid).onSnapshot(action.attach, action.detach)
}

export default {
    
    listen : {
        userData
    }
}