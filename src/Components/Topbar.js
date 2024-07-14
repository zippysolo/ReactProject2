import Button from './Button';
import DateInput from './DateInput';
import Userinfo from './UserInfo';

function Topbar() {

    return (
        <div className="top-container">
            <form class="dates">
                For Dates Between:
                <DateInput name="start" value="2023-01-01"></DateInput>
                <DateInput name="end" value="2023-01-01"></DateInput>
                <Button text="Go" class="btn-purple submit-btn"></Button>
            </form>
            <Userinfo userName="Zippy"></Userinfo>
        </div>
    );
}

export default Topbar;