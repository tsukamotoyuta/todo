import React, { useState } from 'react';
import DatePicker from 'react-datepicker';  
import 'react-datepicker/dist/react-datepicker.css';  
import "./components.css";
import Load from './loading';

const CreateAPI = async (title, start, end, resetForm) => {
    try {
        const response = await fetch("http://localhost:8080/api/create", {
          method: "POST",
          mode: "cors",
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: title, start: start, end: end}),
        });
    
        if (response.status === 200) {
          console.log("成功 : " + response.status);
          alert("登録しました");
          resetForm();
        } else if (response.status === 401) {
          alert("登録できませんでした");
          console.log("失敗 : " + response.status);
        }
      } catch (error) {
        console.error("エラー:", error);
      } 
};
    
const CreateComponent = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(null); 
  const [endDate, setEndDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Load />;
  }

  const resetForm = () => { 
    setTitle('');
    setStartDate(null);
    setEndDate(null);
  };

  const handleSigninSubmit = () => {
    setIsLoading(true);
    if (title === '') {
      alert('タイトルを入力してください');
      return;
    }
    if (startDate === null) {
      alert('開始日時を入力してください');
      return;
    }
    if (endDate === null) {
      alert('終了日時を入力してください');
      return;
    }
    if (startDate > endDate) {
      alert('終了日時は開始日時より後の日時を入力してください');
      return;
    }
    const start = startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate() + ' ' + startDate.getHours() + ':' + startDate.getMinutes() + ':00';
    const end = endDate.getFullYear() + '-' + (endDate.getMonth() + 1) + '-' + endDate.getDate() + ' ' + endDate.getHours() + ':' + endDate.getMinutes() + ':00';
    CreateAPI(title, start, end, resetForm)
        .finally(() => setIsLoading(false));
  }

  return (
    <>
      <p className='AppSubtitle'>予定の新規作成</p>
      <div className='login'>
        <input
            placeholder="タイトル"
            type="text"
            value={title}
            className="inputPersonalData"
            onChange={(e) => setTitle(e.target.value)} />
        <div className='timepick'>
            <DatePicker 
                selected={startDate} 
                onChange={date => setStartDate(date)} 
                className='inputPersonalData'
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy/MM/dd h:mm aa"
                placeholderText="開始日時" />
        </div>
        <div className='timepick'>
            <DatePicker 
                selected={endDate} 
                onChange={date => setEndDate(date)} 
                className='inputPersonalData'
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy/MM/dd h:mm aa"
                placeholderText="終了日時"  />
        </div>
      
        <button className='LoginButton' onClick={handleSigninSubmit}>送信</button>
        <a href="#!" className='SigninHref' onClick={() => {window.location.href = '/home'}}>戻る</a>
      </div>
    </>
  );
}

export default CreateComponent;