import Tippy, { tippy } from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import styles from '../styles/Item.module.css'

tippy.setDefaultProps({
  className: styles.tooltip,
  interactive: true, // Allows interaction with the tooltip
  delay: [200, 300], // Delay on show [ms], delay on hide [ms]
  hideOnClick: false, // Keeps the tooltip open when clicking inside it
  duration: [300, 250], // Animation duration for showing and hiding
})

export default Tippy
