import { app } from "../firebase/firebaseConfig";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const uploadFile = async (file) => {
  if (file) {
    const storage = getStorage();
    const date = new Date();
    const storageRef = ref(
      storage,
      `user-avatars/${
        file.name
      }-${date.getSeconds()}${date.getMinutes()}${date.getHours()}-${date.getDate()}${date.getMonth()}${date.getFullYear()}`
    );
    const uploadTask = uploadBytesResumable(storageRef, file);
    try {
      await uploadTask;
      const URL = await getDownloadURL(uploadTask.snapshot.ref);
      return URL;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
