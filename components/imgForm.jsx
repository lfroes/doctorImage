import { useState } from "react";

import axios from "axios";

const ImgForm = () => {
  const [imageChecked, setImageChecked] = useState(false);
  const [imageInfo, setImageInfo] = useState();

  const sendData = (event) => {
    event.preventDefault();
    const fileImage = document.querySelector("#img-uploader");
    const formData = new FormData();

    console.log(fileImage.files[0]);

    formData.append("file", fileImage.files[0]);

    const options = {
      method: "POST",
      body: formData,
    };

    axios({
      method: "post",
      url: "/api/checkImage",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        setImageChecked(true);
        setImageInfo(response.data["result"].categories[0].name.en);
        console.log(imageInfo, "image info");
      })
      .catch(function (response) {
        console.log(response);
      });
  };
  return (
    <div>
      <form onSubmit={sendData} className="px-12 flex flex-col ">
        <label htmlFor="name" className="text-white font-semibold font-sans">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="p-1 rounded"
          required
        />
        <label htmlFor="email" className="text-white font-semibold font-sans">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="email"
          className="p-1 rounded"
          required
        />
        <div className="relative">
          <label
            htmlFor="img-uploader"
            className="text-white font-semibold font-sans mx-auto block text-center my-4"
          >
            Upload Image
          </label>
          <input
            type="file"
            name="img"
            id="img-uploader"
            className="opacity-0 absolute -z-1 w-full left-0"
            required
          />
        </div>
        <span className="relative inline-flex rounded-md shadow-sm mx-auto">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-pink-400 text-base leading-6 font-medium rounded-md text-pink-600 bg-white hover:text-pink-500 focus:border-pink-300 transition ease-in-out duration-150"
          >
            Let's do it
          </button>
          <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </span>
      </form>

      {imageChecked && (
        <div className="img-response mt-14">
          <p className="text-center font-roboto text-3xl text-white">
            The Image is about:{" "}
            <span className="uppercase font-lato font-bold text-red-50 animate-bounce block">
              {imageInfo}
            </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImgForm;
