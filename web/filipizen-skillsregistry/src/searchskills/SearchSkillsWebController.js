import React, { useState } from 'react'
import { Page, StateProvider, Content } from "rsi-react-web-components";

import { ContactVerification } from 'rsi-react-filipizen-components'

import HomeScreen from "./HomeScreen";

const initialState = {
  contact: {},
}

const reducer = (draft, action) => {
  switch(action.type) {
    case "SET_CONTACT":
      draft.contact = action.contact;
      return;
  }
}

const pages = [
  {step: 1, name: "verification", caption: "Verification", Component: ContactVerification},
  {step: 2, name: "home", caption: "Skill Registry", Component: HomeScreen}
]

const SearchSkillsWebController = ({
  partner,
  service,
  location,
  history,
  initialStep=1
}) => {

  const [step, setStep] = useState(initialStep);

  const moveNextStep = () => {
    setStep(cs => cs+1);
  }

  const movePrevStep = () => {
    if (step === 0) {
      history.goBack();
    } else {
      setStep(cs => cs-1);
    }
  }
  const page = pages[step];
  const PageComponent = page.Component;
  const compProps = {
    partner,
    service,
    location,
    history,
    moveNextStep,
    movePrevStep,
    title: "Skills Registry",
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Page>
        <Content center>
          <PageComponent page={page} {...compProps} />
        </Content>
      </Page>
    </StateProvider>
  )
}

export default SearchSkillsWebController
