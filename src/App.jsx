import React from 'react'
import Homepage from './pages/Homepage'
import CustomThemeProvider from './themes/CustomThemeProvider'

const App = () => {
  return (
    <CustomThemeProvider>
      <Homepage/>
    </CustomThemeProvider>
  )
}

export default App