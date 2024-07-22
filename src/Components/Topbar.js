import Button from './Button';
import DateInput from './DateInput';
import Userinfo from './UserInfo';
import { useState } from 'react';

function Topbar() {
    const [dateInput1, updateDateInput1] = useState(0);
    const [dateInput2, updateDateInput2] = useState(0);
    return (
        <div className="top-container">
            <form class="dates">
                For Dates Between:
                <DateInput name="start" updateDate={updateDateInput1} value={dateInput1}></DateInput>
                <DateInput name="end" updateDate={updateDateInput2} value={dateInput2}></DateInput>
                <Button text="Go" class="btn-purple submit-btn"></Button>
            </form>
            <Userinfo userName="Zippy"></Userinfo>
        </div>
    );
}

export default Topbar;