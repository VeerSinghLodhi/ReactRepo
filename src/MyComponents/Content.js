import React from 'react'
import Language from './Language'

const Content = (props) => {
  return (
    <div className="row ms-5 mt-4">
      {props.languages.length === 0 ? "Not Records to display" :

        props.languages.map((language) => {
          return <Language key={language.srno} language={language} onBuy={props.onBuy} />
        })

      }
    </div>
  )
}

export default Content
