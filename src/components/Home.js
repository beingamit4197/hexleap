/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card, { CardSecond, CollectionCard } from "./Card";
import { Grid } from "react-flexbox-grid";
import img1 from "../assests/img/Ticket_Mockup 3.png";
import img2 from "../assests/img/unnamed 1.png";
import Space from "../components/Space.js";

const Home = () => {
  const cardItems = [
    {
      img: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      playerName: "Sacramento River Cats",
      totalEvents: "35 Events",
      sports: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1584416002577-206d17fd0aa0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      playerName: "Las Vegas Aviators",
      totalEvents: "20 Events",
      sports: "Football",
    },
    {
      img: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      playerName: "Sacramento River Cats",
      totalEvents: "35 Events",
      sports: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1584416002577-206d17fd0aa0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      playerName: "Las Vegas Aviators",
      totalEvents: "20 Events",
      sports: "Football",
    },
    {
      img: "https://images.unsplash.com/photo-1542050532925-05f490df593e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      playerName: "Player Name 3",
      totalEvents: "35 Events",
      sports: "Basketball",
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
      <Grid>
        <p className="border-b-2 m-2 border-blue-400 font-bold inline-block">
          Sports
        </p>
        <div className="bg-gray-700 flex items-center justify-center">
          {cardItems.map((item, index) => (
            <Card key={index}>
              <img src={item.img} />
              <p className="mt-2 text-sm">{item.playerName}</p>
              <div className="bg-gray-700 p-2 mt-5 shadow-lg h-700 w-full">
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
        </div>
        <Space lg />
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 p-3 mb-2 py-1 px-4 text-white rounded">
            See More
          </button>
        </div>
        <Space lg />
        <div class="text-center text-sm">
          <CardSecond>
            <div class="text-4xl font-extrabold">Collection Spotlight</div>
            <p className="mt-3">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
            <Space lg />
            <div className="flex items-center justify-center">
              <div class="border border-blue-500 h-8 w-8 items-center justify-center">
                <i class="fas fa-chevron-left text-blue-500 text-lg"></i>
              </div>
              {data.map((item, index) => (
                <CollectionCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  time={item.time}
                  location={item.location}
                  buttonText={item.buttonText}
                ></CollectionCard>
              ))}
              <div class="border border-blue-500 h-8 w-8 items-center justify-center">
                <i class="fas fa-chevron-right text-blue-500 text-lg"></i>
              </div>
            </div>
          </CardSecond>
        </div>
      </Grid>
    </>
  );
};

export default Home;
