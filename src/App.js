import { useState } from "react";
import { storage } from './firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function App() {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    const category = document.getElementById("cars").value

    if (category === "design") {
      const file = e.target[0]?.files[0]
      if (!file) return;
      const storageRef = ref(storage, `Designresume/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on("state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL)
          });
        }
      );
    }
    if (category === "engineering") {
      const file = e.target[0]?.files[0]
      if (!file) return;
      const storageRef = ref(storage, `Engineeringresume/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on("state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL)
          });
        }
      );
    }
    if (category === "management") {
      const file = e.target[0]?.files[0]
      if (!file) return;
      const storageRef = ref(storage, `Managementresume/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on("state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL)
          });
        }
      );
    }

    // const storageRef = ref(storage, `files/${file.name}`);

    // const storageRef = ref(storage, `resume/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);
    // uploadTask.on("state_changed",
    //   (snapshot) => {
    //     const progress =
    //       Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //     setProgresspercent(progress);
    //   },
    //   (error) => {
    //     alert(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       setImgUrl(downloadURL)
    //     });
    //   }
    // );


    //yahan end hai
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className='form'>
        <input type='file' />
        <select name="cars" id="cars">
        <option value="design">Design</option>
        <option value="engineering">Engineering</option>
        <option value="management">Management</option>
      </select>
        <button type='submit'>Upload</button>
      </form>
      {
        !imgUrl &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
        imgUrl &&
        // <img src={imgUrl} alt='uploaded file' height={200} />
        <h1> File submitted successfullyyyy !!</h1>
      }
    </div>
  );
}
export default App;