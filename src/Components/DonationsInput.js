import './DonationsInput.css';
import Categories from '../Categories.js';
import Button from './Button.js';
import { useState } from 'react';

import Card from "./Card";
function DonationsInput(props) {

    const [company, updateCompany] = useState();
    const [date, updateDate] = useState();
    const [amount, updateAmount] = useState(0);
    const [category, updateCategory] = useState();

    function clickHandler(e) {
        e.preventDefault();
        console.log(category);
        props.updateTransDon(function (prev) {
            const newArr = [...prev];
            console.log(newArr);
            newArr.push([company, date, amount, category]);
            return newArr;
        }
        );
        clearVals();
    }

    function clearVals() {
        updateCompany("");
        updateDate("");
        updateAmount("");
        updateCategory("");
    }


    return (
        <form class="parent">
            <div>
                <label for="company">Company Name</label>
            </div>
            <div>
                <input onChange={(e) => updateCompany(e.target.value)} type="text" id="company" name="company" value={company} required="required"></input>
            </div>
            <div>
                <label for="date">Date</label>
            </div>
            <div>
                <input onChange={(e) => updateDate(e.target.value)} type="date" id="date" name="date" value={date} required="required"></input>
            </div>
            <div>
                <label for="amount">Amount</label>
            </div>
            <div>
                <input onChange={(e) => updateAmount(e.target.value)} type="currency" id="amount" name="amount" value={amount} required="required"></input>
            </div>
            <div>
                <label for="categories">Category</label>
            </div>
            <div>
                <select onChange={(e) => updateCategory(e.target.options[e.target.selectedIndex].text)} name="categories" value={category}>
                    <option value="" disabled>Select a Category</option>
                    {Categories.map(function (entry) {
                        return (<option value={entry.index} >{entry.text}</option>
                        );
                    })}
                </select>
            </div>
            <div>
                <button onClick={clickHandler} className="btn-white submit-btn donationAdd"> ADD </button>
            </div>
            <div>
                <button className="btn-white submit-btn donationAdd"> CANCEL </button>
            </div>


        </form>
    );
}

export default DonationsInput;