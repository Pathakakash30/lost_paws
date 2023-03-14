import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const AddPost = (props) => {
  const [img, setImg] = useState({
    image:
      "https://static.vecteezy.com/system/resources/previews/004/343/259/original/cute-puppy-or-dog-cartoon-illustration-animal-raising-hand-wildlife-icon-design-concept-isolated-flat-face-style-free-vector.jpg",
  });

  const imageHandler = (event) => {
    let img = event.target.files[0];
    setImg({
      image: URL.createObjectURL(img),
    });
  };
  return (
    <div className="post-div-form">
      <form>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" component="label">
          Upload
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={imageHandler}
          />
        </Button>
        <Avatar alt="Remy Sharp" src={img.image} />
      </form>
    </div>
  );
};

export default AddPost;
