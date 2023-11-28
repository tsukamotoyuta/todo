import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Calendar from '../components/calendar.jsx';

const HomePage = () => {
  const [isReady, setIsReady] = useState(false);
  const [userData, setUserData] = useState(null);
  const [clickedDate, setClickedDate] = useState(null);
  const [clickedEvents, setClickedEvents] = useState(null);


  useEffect(() => {
    // APIからデータを取得する
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api`,{
          method: 'GET',
          mode: 'cors',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setUserData(data);
        console.log(data)
        setIsReady(true);
      } catch (error) {
        console.error('データの取得に失敗しました', error);
        // window.location.href = "/";
      }
    }
  
    fetchData();
  }, []); 

  const handleDateClick = (clickedDate, clickedEvents) => {
    setClickedDate(clickedDate);
    setClickedEvents(clickedEvents);
    clickedEvents = clickedEvents.map((item) => ({
      title: item.title,
      start: item.action_at,
    }));
  };


  return (
    <div className="container">
      <Header />
      <Calendar
       onDateClick={handleDateClick}
       userData={userData}
       isReady={isReady}
       />
    </div>
  );
};

export default HomePage;
