import React, { useState } from 'react';


import { CalendarStep } from '../CalendarStep';
import { ConfirmStep } from '../ConfirmStep';

export function ScheduleForm(){
  const [selectDateTime, setSelectDateTime] = useState<Date | null>(null)


  function handleClearselectDateTime() {
    setSelectDateTime(null)
  }

  if(selectDateTime){
    return <ConfirmStep schedulingDate={selectDateTime} onCancel={handleClearselectDateTime}/>
  }

  return (
    <CalendarStep onSelectDateTime={setSelectDateTime}/>
  );
}