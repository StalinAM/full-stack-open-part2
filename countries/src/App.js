import { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
function App() {
  const [countries, setCountries] = useState([])
  const [findCountrie, setFindCountrie] = useState('')
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countriesApi = response.data
        setCountries(countriesApi)
      })
  }, [])
  const handleFindCountrie = (e) => {
    setFindCountrie(e.target.value)
  }
  const filterCountries = countries.filter(item => item.name.common.toLowerCase().includes(findCountrie))
  return (
    <div>
      <div>
        find countries <input value={findCountrie} onChange={handleFindCountrie} />
        {<Countries countries={filterCountries} />}
      </div>
    </div>
  );
}

export default App;
