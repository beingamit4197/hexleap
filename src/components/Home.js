import React from "react";
import Card, { CardSecond, CollectionCard } from "./Card";
import { Grid } from "react-flexbox-grid";
import img1 from "../assests/img/Ticket_Mockup 3.png";
import img2 from "../assests/img/unnamed 1.png";
import img3 from "../assests/img/unnamed 2.png";
import player1 from "../assests/img/p1.png";
import player2 from "../assests/img/p2.png";
import player3 from "../assests/img/p3.png";
import Space from "../components/Space.js";

const Home = ({ theme, toggleTheme }) => {
  const cardItems = [
    {
      img: player1,
      playerName: "Sacramento River Cats",
      totalEvents: "35 Events",
      sports: "Basketball",
    },
    {
      img: player2,
      playerName: "Las Vegas Aviators",
      totalEvents: "20 Events",
      sports: "Football",
    },
    {
      img: player3,
      playerName: "Sacramento River Cats",
      totalEvents: "35 Events",
      sports: "Basketball",
    },
    {
      img: player1,
      playerName: "Las Vegas Aviators",
      totalEvents: "20 Events",
      sports: "Football",
    },
  ];

  const data = [
    {
      image: img1,
      title: "Las Vegas Aviators",
      time: "OCT 18 | SUN | 4 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      buttonText: "Take Flight Collection",
    },
    {
      image: img2,
      title: "Sacramento River Cats",
      time: "OCT 18 | SUN | 4 PM",
      location: "Sutter Health Park, Sacramento, California",
      buttonText: "Take Flight Collection",
    },
    {
      image: img1,
      title: "Las Vegas Aviators",
      time: "OCT 18 | SUN | 4 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      buttonText: "Take Flight Collection",
    },
  ];

  return (
    <>
      <div className="flex text-center items-center justify-center text-xl">
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <i className="fas fa-moon"> Dark Theme</i>
          ) : (
            <i className="fas fa-sun"> Light Theme</i>
          )}
        </button>
      </div>
      <Grid>
        <p className="border-b-2 m-2 border-blue-400 font-bold inline-block">
          Sports
        </p>
        <div className={`flex items-center justify-center`}>
          {cardItems.map((item, index) => (
            <Card key={index} theme={theme}>
              <img src={item.img} alt={item.playerName} />
              <p className="mt-2 text-sm font-semibold">{item.playerName}</p>
              <div
                className={`bg-${
                  theme === "light" ? "gray-300" : "gray-700"
                } p-2 mt-5 shadow-lg h-700 w-full`}
              >
                <div className="flex justify-between">
                  <p className="font-medium">Total Events</p>
                  <p className="font-medium">Sports</p>
                </div>
                <div className="flex justify-between">
                  <p>{item.totalEvents}</p>
                  <p>{item.sports}</p>
                </div>
              </div>
            </Card>
          ))}
          <div
            className={`bg-${theme === "light" ? "white" : "gray-600"} ${
              theme === "light" ? "text-black" : "text-white"
            } p-2 text-xs m-2 shadow-lg relative w-full`}
          >
            <img src={img3} alt="Advertisement" />
            <span
              className={`bg-${
                theme === "light" ? "black" : "black"
              }  text-white px-3 py-1 absolute top-0 right-0 mt-2 mr-2`}
            >
              Ad
            </span>
            <p className="p-5 mb-2">
              <p className="text-lg mb-3 font-semibold">Advertisement title</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </p>
          </div>
        </div>
        <Space lg />
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 p-3 mb-2 py-1 px-4 text-white rounded">
            See More
          </button>
        </div>
        <Space lg />
        <div className="text-center text-sm">
          <CardSecond theme={theme}>
            <div className="text-4xl font-extrabold">Collection Spotlight</div>
            <p className="mt-3">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
            <Space lg />
            <div className="flex items-center justify-center">
              <button
                className={`border border-blue-500 h-8 w-8 items-center justify-center`}
              >
                <i className={`fas fa-chevron-left text-blue-500 text-lg`}></i>
              </button>
              {data.map((item, index) => (
                <CollectionCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  time={item.time}
                  location={item.location}
                  buttonText={item.buttonText}
                  theme={theme}
                ></CollectionCard>
              ))}
              <button
                className={`border border-blue-500 h-8 w-8 items-center justify-center`}
              >
                <i className={`fas fa-chevron-right text-blue-500 text-lg`}></i>
              </button>
            </div>
          </CardSecond>
        </div>
      </Grid>
    </>
  );
};

export default Home;
