import { useState } from 'react'


const PassageObj = () => {
  const [passageDivs, setPassageDivs] = useState([{
    id: crypto.randomUUID(),
    passage: 'In the twelfth year of Ahaz king of Judah, Hoshea the son of Elah began to reign in Samaria over Israel, and he reigned nine years.'
  },
  {
    id: crypto.randomUUID(),
    passage: 'And he did what was evil in the sight of the LORD, yet not as the kings of Israel who were before him.'
  } 
  ])

  const handleTextClick = (e) => {
    const {uuid} = e.target.dataset
    console.log(uuid);

    const pos = window.getSelection()!.anchorOffset
    const targetPassage = passageDivs.find((p) => p.id === uuid)!
    console.log(targetPassage)

    console.log(targetPassage.passage.charAt(pos))

    console.log((targetPassage.passage.charAt(pos) === ' ') || (targetPassage.passage.charAt(pos - 1) === ' '))
    if ((targetPassage.passage.charAt(pos) === ' ') || (targetPassage.passage.charAt(pos - 1) === ' ')) {
      const newTextBefore = {
        id: crypto.randomUUID(),
        passage: targetPassage.passage.slice(0, pos).trim()
      }
      const newTextAfter = {
        id: crypto.randomUUID(),
        passage: targetPassage.passage.slice(pos).trim()
      }
  
    // needed to avoid TS error due to lack of support for toSplice
      const tmpPassageList = passageDivs.slice()
      const passageIndex = passageDivs.findIndex((item) => item.id === uuid ) 
      console.log('passageIndex')
      console.log(passageIndex)
      tmpPassageList.splice(passageIndex, 1, newTextBefore, newTextAfter)
      setPassageDivs(tmpPassageList)

    }
    
  }


 return (
  <div onClick={handleTextClick}>
      {
        passageDivs.map((passage) => (
          <div key={passage.id} data-uuid={passage.id}>{passage.passage}</div>
        ))
      }
  </div>
 )
}

export default PassageObj