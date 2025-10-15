import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.

const firebaseConfig = {
  apiKey: "AIzaSyCxc00PyEONEW7m5vOnGcj29AqnTtpSf8g",
  authDomain: "invitation-156d7.firebaseapp.com",
  projectId: "invitation-156d7",
  storageBucket: "invitation-156d7.firebasestorage.app",
  messagingSenderId: "735998918121",
  appId: "1:735998918121:web:ba9138ddb5c3603504df78",
  databaseURL: "https://invitation-156d7-default-rtdb.firebaseio.com/"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
