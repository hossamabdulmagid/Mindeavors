import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// mush hide secret Keys in .env but it just for test

const config = {
    apiKey: "AIzaSyCeGqJB53wssyRFiiMo2DrmjPQSdIAa4PI",
    authDomain: "mindeavors-4f66c.firebaseapp.com",
    projectId: "mindeavors-4f66c",
    storageBucket: "mindeavors-4f66c.appspot.com",
    messagingSenderId: "41487992858",
    appId: "1:41487992858:web:4d725da7d2d42ceaf2a9a3"
};

// Your web app's Firebase configuration

firebase.initializeApp(config);
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();

export const firestore = firebase.firestore();


export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot, `SnapShot`);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();

        console.log(userRef, `userRef`);

        try {
            console.log(`if snapShot Exits show here`);
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);



export default firebase;