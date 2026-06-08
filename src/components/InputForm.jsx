import { useEffect, useState } from "react"





const InputForm = ({ add }) => {
    const [chore, setChore] = useState({ id:Date.now(), date: Date.now(), amount: 0, choreName: null })

    const handleChange = (fld, val) => {
        setChore(prev => ({
            ...prev,
            [fld]: val
        }
        ))
    }
    const handleadd = ()=>{
        add(prev=>([
            ...prev,
            chore
        ]))
    }

    return (<>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
            <input type="date" value={chore.date || Date.now()} onChange={(e) => handleChange('date',e.target.value)} />
            <input type="string" value={chore.choreName} onChange={(e)=>handleChange("choreName",e.target.value)}  />
            <input type="number" value={chore.number} onChange={(e)=>handleChange("amount",e.target.value)}/>
            <button onClick={()=>handleadd()}>Add Chore!</button>
        </div>
    </>)
}


export default InputForm