import { UserCredential, Van } from "../types/interfaces";
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans(): Promise<Van[]> {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Van[];
  return vans;
}

export async function getVan(id: string): Promise<Van> {
  const docRef = doc(db, "vans", id);
  return await getDoc(docRef).then((snapshot) => {
    if (snapshot.exists()) {
      return {
        ...snapshot.data(),
        id: id,
      } as Van;
    } else {
      throw {
        message: "Couldn't find the van you were looking for",
        statusText: `Maybe van ${id} doesn't exist`,
      };
    }
  });
}

export async function getHostVans(hostId: string) {
  const q = query(vansCollectionRef, where("hostId", "==", hostId));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Van[];
  return vans;
}

export async function loginUser(creds: UserCredential) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
