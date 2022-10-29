import React from 'react'
import { Button } from '../../Buttons/StartMenuBtn/StartMenuBtn'

import classes from './StartMenuBtnList.module.css'

export const ButtonList = ({ buttons, ...props }) => {
  const BtnList = buttons.map((button) => <Button className={classes.Btn} key={button.id} title={button.title} />)

  return (
    <div className={classes.BtnListConteiner}>
      <div className={classes.BtnList}>{BtnList}</div>
    </div>
  )
}
