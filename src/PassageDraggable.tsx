import { useDraggable } from '@dnd-kit/core'

const PassageDraggable = () => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable'
  })

  const style = transform ? {
    transform: `translated3d(${transform.x}px, ${transform.y}px, 0)`
  } : undefined

  const text = 'In the twelfth year of Ahaz king of Judah, Hoshea the son of Elah began to reign in Samaria over Israel, and he reigned nine years.'

 return (
   <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
    {text}
  </div>
 )
}

export default PassageDraggable