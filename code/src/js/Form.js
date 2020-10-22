import React, { useState } from 'react'

import '../css/survey.css'
import '../css/button.css'

import { AgeQuestion, DrinkQuestion, AlcoholQuestion } from './Questions.js'
import { Result } from './Result.js'

export const Form = () => {

  const [result, setResult] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setResult(true)
  }

  const [legal, setLegal] = useState(false)

  const handleLegalChange = newLegal => {
    setLegal(newLegal)
  }

  const [drink, setDrink] = useState("Surprise")

  const handleDrinkChange = newDrink => {
    setDrink(newDrink)
  }

  const [alcohol, setAlcohol] = useState("Conventional")

  const handleAlcoholChange = newAlcohol => {
    setAlcohol(newAlcohol)
  }

  return (
    <>
      {!result ? (
        <form onSubmit={handleSubmit}>
          <AgeQuestion legal={legal} onLegalChange={handleLegalChange} />
          <DrinkQuestion drink={drink} onDrinkChange={handleDrinkChange} />
          <AlcoholQuestion alcohol={alcohol} onAlcoholChange={handleAlcoholChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
          <Result legal={legal} drink={drink} alcohol={alcohol} />
        )}
    </>
  )
}