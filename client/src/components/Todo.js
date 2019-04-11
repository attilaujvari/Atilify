import React from "react"
import icon_delete from "../resources/icon_delete.png"
import edit from "../resources/icon_edit.png"
import checkbox from "../resources/icon_checkbox.png"

const Todo = props => {
    const {title, imgUrl, summary, isCompleted, details, location, dueOn, reminderDate, reminderTime,
    recurrence, recurrenceInterval, recurrenceDenominator, recurrencePeriod, priority} = props

    return(
        <div className={"todo"}>
            {title} <br/>
            {summary}
            <div className={"todoControls"}>
                <img src={edit} alt={"Edit icon"} className={"controlIcon editIcon controlRight"}/>
                <img src={icon_delete} alt={"Delete icon"} className={"controlIcon deleteIcon controlRight"}/>
                {isCompleted
                    ? <img src={checkbox} alt={"Checkbox"} className={"controlIcon checkboxChecked"}/>
                    : <img src={checkbox} alt={"Checkbox"} className={"controlIcon checkboxUnchecked"}/>
                }
            </div>
            <hr/>
        </div>
    )
}

export default Todo