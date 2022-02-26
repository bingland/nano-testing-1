import { createUseStyles } from 'react-jss'

function App() {
  const css = useStyles()

  return (
    <div className={css.myClass}>
      Hello World!
    </div>
  )
}

const useStyles = createUseStyles({
  myClass: {
    color: 'green',
  },
})

export default App
