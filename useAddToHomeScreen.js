import React, { useState, useEffect } from 'react'

export default () => {
  const [prompt, setPrompt] = useState(null)

  const promptToInstall = () => {
    if (prompt) {
      return prompt.prompt()
    }
    return Promise.reject(
      new Error(
        'ブラウザに"beforeinstallprompt"イベントを送る前にインストールしてください'
      )
    )
  }

  useEffect(() => {
    const ready = (e) => {
      e.preventDefault()
      setPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', ready)

    return () => {
      window.removeEventListener('beforeinstallprompt', ready)
    }
  }, [])

  return [prompt, promptToInstall]
}