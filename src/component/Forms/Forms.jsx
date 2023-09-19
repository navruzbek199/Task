import React, { useContext, useEffect, useState } from 'react'
import './Forms.scss'
import SelectSearch from "react-select-search";
import { FaChevronDown } from 'react-icons/fa'
import { BsCheck } from 'react-icons/bs'
import { GlobalContext } from '../../store/context';
const Forms = () => {
    const { allData, setAllData } = useContext(GlobalContext)
    const [options, setOptions] = useState([])
    const [value, setValue] = useState()
    const [check, setCheck] = useState(false)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const SelectData = [
        { name: 'Subscribed', value: 'Subscribed' },
        { name: 'Not Subscribed', value: 'Not Subscribed' },
        { name: 'Other', value: 'Other' },
    ];
    useEffect(() => {
        const data = SelectData?.map((item) => {
            return {
                name: item?.name,
                value: item?.value
            }
        })
        setOptions(data)
    }, [])
    const onSubmit = (e) => {
        const id = localStorage.getItem('id') ? Number(localStorage.getItem('id')) : 0
        e.preventDefault()
        const data = {
            name: name,
            age: age,
            subscribe: value,
            employed: check,
            id: id + 1
        }
        let localData = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
        localData?.push(data)
        setAllData([...allData, data])
        localStorage.setItem("data", JSON.stringify(localData))
        localStorage.setItem('id', data.id)
        setName("")
        setAge("")
        setValue("")
        setCheck(false)
    }
    return (
        <div className='form'>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form_group">
                    <div className="form_control">
                        <input
                            type="text"
                            name='username'
                            placeholder='Username'
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form_control">
                        <input
                            type="number"
                            name='age'
                            placeholder='Age'
                            value={age}
                            min={1}
                            max={70}
                            required
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="form_control_select">
                        <SelectSearch
                            options={options}
                            name="select"
                            defaultValue={"Subscribed"}
                            value={value}
                            onChange={setValue}
                        />
                        <FaChevronDown size={18} color='#fff' />
                    </div>
                    <div className="form_control_check" onClick={() => setCheck((prev) => !prev)}>
                        <label>
                            Employed
                        </label>
                        <div className='check' >
                            {check &&
                                <BsCheck size="20" color="#fff" />
                            }
                            </div>
                    </div>
                    <div className="form_btn">
                        <button type='submit'>Insert</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Forms