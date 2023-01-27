import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {plusChange} from "../../redux/actions";
import {minusChange} from "../../redux/actions";
import {umnChange} from "../../redux/actions";
import {delChange} from "../../redux/actions";


export default function Calc(){
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const result = useSelector(state => state.result)
    const dispatch = useDispatch()

    const plus = () => {
        dispatch(plusChange((Number(num1) + Number(num2))))
    }

    const minus = () => {
        dispatch(minusChange(num1 - num2))
    }

    const umn = () => {
        dispatch(umnChange(num1 * num2))
    }

    const del = () => {
        dispatch(delChange(num1 / num2))
    }

    return <>
        <h2 >Введите число</h2>
        <div>
            <div >
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            </div>
            <br/>
            <div>
                <button onClick={plus} >+</button>
                <button onClick={minus} >-</button>
                <button onClick={umn} >*</button>
                <button onClick={del}>/</button>
            </div>
            <br/>
            {
                num1 > 0 || num2 > 0
                    ?
                    <>
                        <h2>{result}</h2>
                    </>
                    :
                    <p>Пустоо.....</p>
            }
        </div>
    </>
}