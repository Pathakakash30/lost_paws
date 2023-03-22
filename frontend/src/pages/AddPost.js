import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

import "./AddPost.css";

const AddPost = (props) => {
  const [img, setImg] = useState({
    image:
      "https://static.vecteezy.com/system/resources/previews/004/343/259/original/cute-puppy-or-dog-cartoon-illustration-animal-raising-hand-wildlife-icon-design-concept-isolated-flat-face-style-free-vector.jpg",
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [imageUploaded, setImageUploaded] = useState("");

  const imageHandler = (event) => {
    let imgUp = event.target.files[0];
    setImg({
      image: URL.createObjectURL(imgUp),
    });
    setImageUploaded(imgUp.name);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:5000/addpost", {
      image: imageUploaded,
      title,
      description,
      address,
      user: "63fc4e4ea797e4b5a19d019b",
    });

    console.log(response.data);
  };

  return (
    <div className="main-add-form">
      <h2>Add Post</h2>
      <form className="post-div-form">
        <Avatar
          alt="Remy Sharp"
          src={img.image}
          sx={{
            margin: "7px",
            width: "auto",
            height: "20vh",
            borderRadius: "0",
            boxShadow: "0 0 4px 0.01px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Button
          variant="outlined"
          component="label"
          sx={{
            margin: "7px",
            width: "90%",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <img
            width={38}
            style={{ marginRight: "10px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACdCAMAAADc+SdmAAAAk1BMVEX///8ZKzf///329vYGIC54fYFHUloAFihdY2gMIzL6+vpud3vu7u4BHy0AGCoZKzkAAAAAGioAGCQAABsAFiUAABUUJzSytrnBx8seKzPS1NXg4eLn6epSVlpxc3gVLTaGjZBCS1A0P0hnbG8zNz+hpakADCIiND0rP0mWmpwACx19hYkAAA9DSFEAHykRHyoiNkVw2UiiAAAEDUlEQVR4nO2bi3aaQBBA90EirCg+EAFNJNAqmrbx/7+uM7tAtKeNVXJcyJl7EoyEwFxmZ5dFwhhBEARBEARBEARBEARBEARBEARBEARBEARxC0vXjW3H0JblZDqeLG1H0QbF4iTiQZTE8GNvSRMvALwktR3JrQi24g4PeBDAywre9pL104xXzJ7WtqO5Dfk829QSm9mztB3PLcjhPODQmjgukmA+7J+FYNkCwzcSuPyR2Y7pWgT7rvPgRSgReWgx/247qmtZOnj6nZcc05C/OOji9GnQg8405h5mIE8LGCi8Is0xFx4Men3paIVg6Tc49Um0jZmLEi6LD9iunG9pXywE83+OsPngNVMlAddQ0KyC6U+/LxbrJ+0QYiFXElDoIebiVz8GPQEDRMgTHoQZXvTVmRAqC2G42IQwXHQ+F1AQD1uoB74t9OBWS8DgV2xhNd8+4DbdRrB4gm1pnJv37xKM5WNdKZ3vouAkZ5AIPnr0zYpTCf8Ra+WQ9UACM+Hl9QTiVILBcKEz0QPcyWTeBHomwdL5ZOL2Y5a3it/DPJdgKl71w+GMPyT6CUl0BZLoCiTRFb6ghAJsRnMjZxJSSdlHi1MJpaT+shvRDZxnQtM5iYtt/ExCYXOSXbqdiZNMIS+FBBIcJbQsSvw1E6JZ3Bl9TCPxr2woLZE4MIXQsauqsFXzJ6eJvLsEpiHdZzFK6ACVCZPV/Q8WMHyDBE92hUkBlrWs67ve2mQyzrKU3fsOAhxulUezcgkR6+hMx8NUFSg0fbPG9aJy41YOpovVm0iztVaGKW10GOxWd78NIthrVJZvz740iWjOtHlvXiVK7Hblc1XSqpJA6cpFy/hFyPnh9b4GmuEu56PCNy2iqtgTAWbCdr3jrnR1E2ImS+8ulblgvjvifDq0IlEmzqmEqdxGwpxl1zESJk3v0TcSQlQSoRWJYFeWWkJHr+rmJBsJXRPHspKofv+nBGRCrlFicH8JwYbQ2iN3zZoeR5rTL08zId0jh8Ku29u5BKsr3ZIEtIHhYFceCx97IlaNY4qxuoB1hExn4qhH7Dpj1Xr9otWEkL49iTHnI9e/sGE9Yn+4K0sS2JzGQc8lxBUSF2Z2JNGKLyFxTU10VuKaTHyFwuab3ksUU7i0Ky7sqtsSgqVvPxZvHz4813kJnO/s9x9/SNd9if/bFUm0OjJJnO+KJFodmSTOd2XrApCx4bSe2YlWwA7sSjjuur7B0QK1dh2LElH+8CnkkSWJ/RwfGp0OwkFLwsEUHw9c7O+uINhqwXnzQPsnsLj/fycIofaH6nn29sBuDntl4RMK5meH7dT5FKbbQ2bjiVnoG1X6+vhJvKaq+w9pEgRBEARBEARBEARBEARBEARBEARBEARB3JvfIflL/mC6TXYAAAAASUVORK5CYII="
          ></img>
          Upload image
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={imageHandler}
          />
        </Button>

        <TextField
          sx={{ margin: "7px", width: "90%" }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          sx={{ margin: "7px", width: "90%" }}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          sx={{ margin: "7px", width: "90%" }}
          id="outlined-basic"
          label="Location"
          variant="outlined"
          onChange={(e) => setAddress(e.target.value)}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            margin: "7px",
            width: "90%",
          }}
          onClick={submitHandler}
        >
          POST
        </Button>
      </form>
    </div>
  );
};

export default AddPost;
