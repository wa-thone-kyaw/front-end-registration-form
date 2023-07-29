// import { useRef, useState } from "react";

// export const Imageupload = () => {
//   const inputRef = useRef(null);
//   const [image, setImage] = useState("");

//   const handleImageClick = () => {
//     inputRef.current.click("");
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     console.log(file);
//     setImage(file);

//     const formData = new FormData();
//     formData.append("photo", file);

//     fetch("http://127.0.0.1:8000/student_registration/photo_upload_view", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Response from backend", data);
//       })
//       .catch((error) => {
//         console.error("Error uploading image:", error);
//       });
//   };
//   return (
//     <>
//       <div className="image-upload-container">
//         <div className="box-decoration">
//           <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
//             {image ? (
//               <img
//                 src={URL.createObjectURL(image)}
//                 class="rounded"
//                 width="160"
//                 height="160"
//               />
//             ) : (
//               <img
//                 src={"./upload.jpg"}
//                 alt=""
//                 class="rounded"
//                 width="160"
//                 height="160"
//               />
//             )}

//             <input
//               type="file"
//               ref={inputRef}
//               onChange={handleImageChange}
//               style={{ display: "none" }}
//               id="img"
//               accept="image/*"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Imageupload;
