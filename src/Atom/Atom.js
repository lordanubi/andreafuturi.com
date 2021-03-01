import React from 'react';
import * as Const from '../Const'
import './Atom.css'
import { motion } from "framer-motion"
function Atom(props)  {
  const logoPoints = [
    Const.spacing*3, Const.logoHeight - Const.magicRatio(Const.spacing*2),
    Const.spacing*4, Const.logoHeight,
    Const.spacing*6, Const.logoHeight,
    Const.spacing*4, Const.logoHeight - Const.magicRatio(Const.spacing*4),
    Const.spacing*5, Const.logoHeight - Const.magicRatio(Const.spacing*6),
    Const.spacing*8, Const.logoHeight,
    Const.logoWidth, Const.logoHeight,
    Const.spacing*5, 0,
    0, Const.logoHeight,
    Const.spacing*2, Const.logoHeight
  ].join(' ')
    return(<path
            strokeWidth={Const.spacing/10*2}
            d={'M' + logoPoints + 'z'}
            {...props}
          />)
}
export default Atom;