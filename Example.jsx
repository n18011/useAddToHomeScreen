import React, {useState, useEffect} from 'react'
import {useAddToHomeScreen} from './useAddToHomeScreen'


export default () => {
  const [prompt, promptToInstall] = useAddToHomeScreen()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (prompt) {
      setVisible(true)
    }

  }, [prompt])

  return (
    {!visible ? <div/>: <button onClick={promptToInstall}>Add to home screen</button>}
  )
}

