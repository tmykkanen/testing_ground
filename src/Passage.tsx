import { useState } from 'react'

const Passage = () => {
  const [passageDivs, setPassageDivs] = useState([
    'In the twelfth year of Ahaz king of Judah, Hoshea the son of Elah began to reign in Samaria over Israel, and he reigned nine years.',
    'And he did what was evil in the sight of the LORD, yet not as the kings of Israel who were before him.'
  ])

  const handleTextClick = (e) => {
    let {index} = e.target.dataset
    index = parseInt(index)
    const pos = window.getSelection()!.anchorOffset
    // const targetPassage = passageDivs.find((passage, i) => i === parseInt(index))
    console.log((passageDivs[index].charAt(pos) === ' ') || (passageDivs[index].charAt(pos - 1) === ' '))
    if ((passageDivs[index].charAt(pos) === ' ') || (passageDivs[index].charAt(pos - 1) === ' ')) {
      // const newTextBefore = targetPassage!.slice(0, pos)
      // const newTextAfter = targetPassage!.slice(pos)
      const newTextBefore = passageDivs[index]!.slice(0, pos).trim()
      const newTextAfter = passageDivs[index]!.slice(pos).trim()
  
      // needed to avoid TS error due to lack of support for toSplice
      const tmpPassageList = passageDivs.slice()
      tmpPassageList.splice(index, 1, newTextBefore, newTextAfter)
      setPassageDivs(tmpPassageList)

    }
    
  }


 return (
  <div onClick={handleTextClick}>
      {
        passageDivs.map((passage, index) => (
          <div key={index} data-index={index}>{passage}</div>
        ))
      }
  </div>
 )
}

export default Passage