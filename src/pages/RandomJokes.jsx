import axios from "axios";
import { useEffect, useState } from "react";

export const RandomJokes = () => {
  const [joke, setJoke] = useState([]);
  const [loadingJoke, setLoadingJoke] = useState(true);
  const [jokeError, setJokeError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jokeResponse = await axios.get(
          "https://api.freeapi.app/api/v1/public/randomjokes"
        );
        console.log(jokeResponse);
        setJoke(jokeResponse.data.data.data);
      } catch (error) {
        setJokeError("Failed to fetch joke. Please try again later.");
      } finally {
        setLoadingJoke(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="grid grid-rows gap-2">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              Random Jokes
            </span>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {joke.map((val) => (
          <div key={val.id}>
            <article className=" w-72 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300" style={{minHeight:"200px"}}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-10 h-10 text-gray-300 bg-gray-600 rounded-full p-1"
              >
                <path
                  d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                ></path>
              </svg>
              <p className="text-sm w-full text-gray-400">{val.content}</p>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};
