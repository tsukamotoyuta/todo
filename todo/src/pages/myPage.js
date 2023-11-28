import React from "react";
import Header from '../components/header';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const MyPage = () => {
  return (
    <div>
    <Header />
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth" // カレンダーの初期ビューを設定
      events={[
        // イベントデータをここに設定
        { title: "イベント1", date: "2023-09-05" },
        { title: "イベント2", date: "2023-09-10" },
        // 他のイベントを追加
      ]}
    />
    </div>
  );
}

export default MyPage;