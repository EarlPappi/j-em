import React, { useState } from 'react'
import data from '../../assets/MOCK_DATA (2).json'
import styles from "./filter.module.css"

function FilterComp() {
  console.log(data)
  const [option, setOption] = useState('')

  const filteredOption = data.filter((items) => {
    console.log(items)
    for (const values of Object.values(items)) {
      console.log("values", values)
      if (values.toString().toLocaleLowerCase().includes(option.toLowerCase())) {
        return true
      }
    }
    return false
  })


  return (
    <>

      <div className={styles.filter}>
        { }
        <div onClick={() => setOption("")}>All</div>
        <div onClick={() => setOption("female")}>Female</div>
        <div onClick={() => setOption("male")}>Male</div>
        <div onClick={() => setOption("engineer")}>Engineer</div>
        <div onClick={() => setOption("nurse")}>Nurse</div>
      </div>

      <div className={styles["filter-container"]}>


        {
          filteredOption.map((item) => {

            return (
              <div key={item.id} className={styles.container}>
                {/* <p> {item.city}</p> */}
                <p>{item.gender}</p>
                <p> {item.job}</p>
              </div>

            )
          })
        }
      </div>
    </>

  )
}

export default FilterComp