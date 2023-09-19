import React, { useContext } from 'react'
import './Tables.scss'
import { GlobalContext } from '../../store/context'
import { RiDeleteBin5Fill } from 'react-icons/ri'
const Tables = () => {
    const { allData, setAllData } = useContext(GlobalContext)

    const onDelete = (id) => {
        console.log(id, "id");
       const RemoveId =  allData.filter((item) => item?.id !== id)
       setAllData(RemoveId)
       localStorage.setItem('data', JSON.stringify(RemoveId))
    }
    return (
        <div className='table'>
            <table>
                <thead className='table__head'>
                    <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Subscription</th>
                        <th>Employment</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table__body'>
                    {allData?.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.age}</td>
                            <td>{item?.subscribe}</td>
                            <td>{item?.employed ? "Employed" : "Unemployed"}</td>
                            <td>
                                <div className="trash" onClick={() => onDelete(item?.id)}>
                                    <RiDeleteBin5Fill size="24" color="#ce1126" cursor={"pointer"}/>
                                </div>
                            </td>
                            
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tables