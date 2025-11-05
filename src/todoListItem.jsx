export default function TodoListItem({task, bgColor, isBold}) {
    const handleOnClick= (event) => {
        console.log("You click", event.target.innerText)
    }

    return (
        <div
        onClick={handleOnClick}
        style={{
            backgroundColor: bgColor || "aqua",
            fontWeight: isBold || "bold",
        }}
        >
            {task}
        </div>
    )

};