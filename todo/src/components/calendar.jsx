import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import ModalComponent from './modal';
import Load from './loading';
import "./components.css";

const Calendar = ({ onDateClick, userData, isReady }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);


  if (!isReady) {
    return <Load />;
  }

  const title = userData.title;
  const action_at = userData.action_at;
  const end_at = userData.end_at;

  // finish_task_date_arrayをYYYY-MM-DDの形式に変換
  const formattedEndDates = end_at.map((date) => {
    const currentDate = new Date(date);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  // combinedArrayの作成
  const combinedArray = formattedEndDates.map((date, index) => ({
    title: title[index], 
    start: action_at[index].replace(' ', 'T'),
    end: date + 'T00:00:00',
  }));

  // カレンダーに表示するイベントの配列
  const events = combinedArray.map(item => ({
    title: item.title,
    start: item.start,
    end: item.end,
  }));

  const handleDateClick = (info) => {
    const clickedDate = info.dateStr.split('T')[0];
    const eventsOnSelectedDate = events.filter(event => event.start.split('T')[0] === clickedDate);
    setSelectedEvent(eventsOnSelectedDate.length > 0 ? eventsOnSelectedDate[0] : { title: '予定がありません' });  // 変更
    setSelectedDate(clickedDate);
    setShowModal(true);
  };
  
  // モーダルを閉じる処理
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };
  
  return (
    <>
      <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      titleFormat={{ month: 'numeric', year: 'numeric' }}
      events={events}
    />
    {selectedEvent && (
      <ModalComponent
        isOpen={showModal}
        title={selectedDate}
        content={selectedEvent}
        onClose={handleCloseModal}
      />
    )}
    </>
  );
};

export default Calendar;
