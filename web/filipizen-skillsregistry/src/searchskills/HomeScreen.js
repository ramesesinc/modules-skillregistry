import React, { useState } from 'react'
import {
  Title,
  Button,
  ActionBar,
  BackLink,
  useData,
  Card
} from 'rsi-react-web-components'
import "rsi-react-web-components/dist/index.css";


const HomeScreen = ({
  title,
  partner,
  moveNextStep,
  movePrevStep,
}) => {

  const [ctx, dispatch] = useData();
  const { txntype } = ctx;


  return (
    <React.Fragment>
    <Card>
      <Title>{title}</Title>
      <ActionBar>
        <BackLink caption='Back' variant="text" action={movePrevStep} />
        <Button caption='Next' action={moveNextStep} />
      </ActionBar>
    </Card>
    </React.Fragment>
  )
}

export default HomeScreen
