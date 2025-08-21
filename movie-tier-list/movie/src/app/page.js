"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
export default function Home() {
  const [movies, setMovies] = useState([]);
  const tiers = ["S", "A", "B", "C"];
  const [deleteInp, setDeleteInp] = useState("");
  const [inputValue, setInputValue] = useState({
    first: "",
    second: "",
    tier: "",
  });

  const HandleInput = (event) => {
    const name = event.target.name;
    if (name === "first") {
      setInputValue({ ...inputValue, first: event.target.value });
    }
    if (name === "second") {
      setInputValue({ ...inputValue, second: event.target.value });
    }
    if (name === "tier") {
      setInputValue({ ...inputValue, tier: event.target.value });
    }
  };
  console.log(inputValue);
  const res = () => {
    setMovies([
      {
        ...inputValue,
        first: inputValue.first,
        img: inputValue.second,
        tier: inputValue.tier,
      },
    ]);
  };
  const DeleteButton = () => {
    
  };
  return (
    <div>
      <div className="flex justify-center text-xl">
        <div
          style={{ backgroundImage: `url('movie.svg')` }}
          className="w-[25px] h-[25px] bg-center shadow-2xl"
        ></div>
        <div>Movie Tier List</div>
      </div>
      <div className="flex justify-center">
        <input
          className="border-2 rounded-lg"
          value={inputValue.first}
          name="first"
          placeholder="Movie Name..."
          onChange={(e) => HandleInput(e)}
        />
        <input
          className="border-2 rounded-lg"
          placeholder="Image URL"
          name="second"
          value={inputValue.second}
          onChange={(e) => HandleInput(e)}
        />
        <div>
          <select
            placeholder="S"
            className="w-[80px] border-gray-200 rounded-lg h-10 text-gray"
            value={inputValue.tier}
            name="tier"
            onChange={(e) => HandleInput(e)}
          >
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <Button
          onClick={() => {
            res();
          }}
          variant="outline"
        >
          Add
        </Button>
      </div>
      <div>
        {" "}
        {tiers.map((tier) => {
          const filteredMovies = movies.filter((movie) => movie.tier === tier);
          console.log(filteredMovies);

          return (
            <div>
              <div>{tier} Tier</div>
              {filteredMovies?.map((card) => {
                return (
                  <div
                    key={card.first}
                    className="border-2 w-[180px] h-[265px] rounded-lg"
                  >
                    <img
                      className="w-[180px] h-[200px] bg-center"
                      src={card?.img}
                    />
                    <div className="text-xl">{card?.first}</div>
                    <Button
                      onClick={() => {
                        DeleteButton();
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
