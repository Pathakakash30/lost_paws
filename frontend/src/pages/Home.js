import React, { useEffect, useState } from "react";
import axios from "axios";

import PostItem from "../components/PostItem";

import "./Home.css";

const Home = (props) => {
  const [data, setData] = useState();
  const [state, setState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/postsfeed");
      setData(response.data.posts);
      setState(true);
      console.log(response.data.posts);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="home-main">
        {state && data.map((post) => <PostItem data={post} />)}
      </div>
    </>
  );
};

export default Home;
