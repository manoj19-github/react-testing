import React from 'react'

const Application = () => {
  return (
    <div>
        <form>
            <h1>Job Application Form</h1>
            <h3>Section 1B</h3>
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="address" >address</label>
            <textarea name="address" id="address"/>
            <input type="radio" name="quali" value="hs"/>HS
            {/* <input type="radio" name="quali" value="graduate"/>Graduate */}
            <input type="checkbox" name="food" value="Chicken"/> Chicken
            {/* <input type="checkbox" name="food" value="Mutton"/> Mutton */}
            <p></p>
            <select name="technology">
                <option value="">Select a technology</option>
                <option value="react">React</option>
                <option value="php">PHP</option>
                <option value="node">Node</option>
                <option value="mysql">MySql</option>
            </select>
            <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default Application