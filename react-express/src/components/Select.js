import React from 'react'

const Select = ({notes, handleSelect}) => {

    let data = notes.map(e => e.category)

    const dataArr = new Set(data)

    let result = [...dataArr]

  return (
    <select name="select" className='mt-4' onChange={handleSelect}>
        <option value={''}>Category filter</option>
        {result.map( e =>
            (e !== '') && <option key={e} value={e}>{e}</option>
        )}
    </select>
  )
}

export default Select

