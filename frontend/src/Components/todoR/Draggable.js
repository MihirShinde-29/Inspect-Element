import "./style.css";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import axios from "axios";


const DragAndDropList = (type, data) => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        let unmounted = false;
        axios.get("http://localhost:3500/todo")
            .then((res) => {
                setTimeout(() => {

                    if (!unmounted) {
                        setItems(res.data);
                        // console.log(items);
                    }
                }, 3000);

                return () => {
                    unmounted = true;
                };
            })
            .catch((e) => {
                console.log(e);
            })
    }, [items])

    const todo = items.filter(check);
    function check(e){
        return e.status == type.type;
    }
    const onDragEnd = (result) => {
        const newItems = Array.from(todo);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setItems(newItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {todo.map((item, index) => (
                                <Draggable key={item._id} draggableId={item._id} index={index}>
                                    {(provided, snapshot) => (
                                        <ListItem
                                            provided={provided}
                                            snapshot={snapshot}
                                            item={item}
                                            type={type}
                                        />
                                    )}
                                </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default DragAndDropList



// import "./style.css";
// import { useEffect, useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import ListItem from "./ListItem";
// import axios from "axios";


// const DragAndDropList = (type, data) => {

//     const [items, setItems] = useState([]);
//     useEffect(() => {
//         let unmounted = false;
//         axios.get("http://localhost:3500/todo")
//             .then((res) => {
//                 setTimeout(() => {

//                     if (!unmounted) {
//                         setItems(res.data);
//                         // console.log(items);
//                     }
//                 }, 3000);

//                 return () => {
//                     unmounted = true;
//                 };
//             })
//             .catch((e) => {
//                 console.log(e);
//             })
//     }, [])
//     const onDragEnd = (result) => {
//         const newItems = Array.from(items);
//         const [removed] = newItems.splice(result.source.index, 1);
//         newItems.splice(result.destination.index, 0, removed);
//         setItems(newItems);
//     };

//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <Droppable droppableId="droppable">
//                 {(provided) => (
//                     <div {...provided.droppableProps} ref={provided.innerRef}>
//                         {items.map((item, index) => (
//                             {/* item.status == type.type ? */}
//                                 <Draggable key={item._id} draggableId={item._id} index={index}>
//                                     {item.status}
//                                     {(provided, snapshot) => (
//                                         <ListItem
//                                             provided={provided}
//                                             snapshot={snapshot}
//                                             item={item}
//                                             type={type}
//                                         />
//                                     )}
//                                 </Draggable>
//                                 {/* :
//                                 null */}
//                         ))}
//                     </div>
//                 )}
//             </Droppable>
//         </DragDropContext>
//     );
// }

// export default DragAndDropList