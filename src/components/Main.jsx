import { useState } from "react";
import AnswersList from "./AnswersItem";
import AnswersItem from "./AnswersItem";

function Main () {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setForm] = useState({
    color: '',
    ['spend-time']: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false,
    },
    review: '',
    username: '',
    email: ''
  })
  function handleCheck (e) {
    const { value, checked } = e.target
    setForm(x => { return { ...x, ['spend-time']: { ...x['spend-time'], [value]: checked } } })
  }

  function handleChange (e) {
    const { name, value } = e.target
    setForm(prevData => { return { ...prevData, [name]: value } })
  }

  function handleSubmit (e) {
    e.preventDefault()
    console.log(formData)
    setForm({
      colour: '',
      ['spend-time']: {
        swimming: false,
        bathing: false,
        chatting: false,
        noTime: false,
      },
      review: '',
      username: '',
      email: ''
    })
  }

  return (
    <main className="main">
      <section className={ `main__list ${open ? "open" : ""}` }>
        <h2>Answers list</h2>
        <AnswersItem formData={ formData } />
      </section>
      <section className="main__form">
        <form className="form" onSubmit={ handleSubmit }>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  checked={ formData.colorRate === "1" }
                  onChange={ handleChange }
                  id="color-one" type="radio" name="color" value="1" /><label
                    htmlFor="color-one"
                  >1</label>
              </li>
              <li>
                <input
                  checked={ formData.colorRate === "2" }
                  onChange={ handleChange }
                  id="color-two" type="radio" name="color" value="2" /><label
                    htmlFor="color-two"
                  >2</label>
              </li>
              <li>
                <input
                  checked={ formData.colorRate === "3" }
                  onChange={ handleChange }
                  id="color-three" type="radio" name="color" value="3" /><label
                    htmlFor="color-three"
                  >3</label>
              </li>
              <li>
                <input
                  checked={ formData.colorRate === "4" }
                  onChange={ handleChange }
                  id="color-four" type="radio" name="color" value="4" /><label
                    htmlFor="color-four"
                  >4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    id="swimming"
                    value="swimming"
                    checked={ formData.swimming }
                    onChange={ handleCheck }
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    id="bathing"
                    value="bathing"
                    checked={ formData.bathing }
                    onChange={ handleCheck }
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    id="chatting"
                    value="chatting"
                    checked={ formData.chatting }
                    onChange={ handleCheck }
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    id="noTime"
                    value="noTime"
                    checked={ formData.noTime }
                    onChange={ handleCheck }
                  />
                  I don't like tospend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={ formData.review }
              placeholder="review"
              onChange={ handleChange }
            >
            </textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={ formData.username }
              placeholder="username"
              onChange={ handleChange }
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={ formData.email }
              placeholder="email"
              onChange={ handleChange }
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
