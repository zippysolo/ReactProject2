import Button from './Button';
import DateInput from './DateInput';


function Topbar() {

    return (
        <div className="top-container">
        <form class="dates">
            For Dates Between:
            <DateInput name="start" value="2023-01-01"></DateInput>
            <DateInput name="end" value="2023-01-01"></DateInput>
            <Button text="Go" class="btn-purple submit-btn"></Button>
        </form>
    </div>
    );
}

export default Topbar;