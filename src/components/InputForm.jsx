import { useEffect, useState } from "react"
import { formatDate } from "../helpers/formatting"
import { postChore } from "../helpers/supabase"


const InputForm = ({ add }) => {
    const [chore, setChore] = useState({
        date: formatDate(Date.now()).date,
        earned_amount: 0,
        name: ""
    });

    const [today, setToday] = useState('')

    const handleChange = (fld, val) => {
        setChore(prev => ({
            ...prev,
            [fld]: val
        }
        ))
    }

    const handleadd = async () => {
        const res = await postChore(chore);

        if (!res) return;

        add(prev => [
            ...prev,
            res
        ]);

        setChore({
        date: formatDate(Date.now()).date,
        earned_amount: 0,
        name: ""
    })
    };


useEffect(() => {
    if (!today) {
        setToday(formatDate(Date.now()))
    }
}, [today])

return (<>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <label>
            Date:
            <input disabled key={today} type="date" value={today?.js} onChange={(e) => handleChange('date', today?.date)} />
        </label>
        <label>
            Chore Name:
            <input type="string" value={chore.name?.toUpperCase()} onChange={(e) => handleChange("name", e.target.value?.toUpperCase())} />
        </label>
        <label>
            $
            <input type="number" value={chore.earned_amount} onChange={(e) => handleChange("earned_amount", Number(e.target.value) || "")} />
        </label>
        <button onClick={() => handleadd()}>Add Chore!</button>
    </div>
</>)
}


export default InputForm