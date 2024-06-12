// import Passage from './Passage.tsx'
// import PassageGrid from './PassageDraggable.tsx'
// import { DndContext } from '@dnd-kit/core'
// import PassageDraggable from './PassageDraggable.tsx'
// import Droppable from './Droppable.tsx'
// import { useState } from 'react'
// import Draggable from './Draggable.tsx'
import PassageObj from './PassageObj.tsx'

const App = () => {
  // const [isDropped, setIsDropped] = useState(false)

  // const draggableMarkup = <PassageDraggable handle/>

return (
  // <Passage />
  <PassageObj /> 
  // <DndContext onDragEnd={handleDragEnd}>
  //   {!isDropped ? draggableMarkup : null}
  //   <Droppable>
  //     { isDropped ? draggableMarkup : 'Drop Here'}
  //   </Droppable>
  // </DndContext>

)

function handleDragEnd(event) {
  if (event.over && event.over.id === 'droppable') {
    setIsDropped(true);
  }
}

}


export default App