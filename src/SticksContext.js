import React, {useContext, useState} from 'react';

const SticksContext = React.createContext(null);

const stickImages = []
const floor = Math.floor(Math.random() * 100)
const variability = Math.floor(Math.random() * 90) + 10
for (let i = 0; i < 10; i++) {
    stickImages.push([Math.floor(Math.random() * variability) + floor, Math.floor(Math.random() * 14)]);
}

export function useSticks() {
    return useContext(SticksContext)
  }

export { SticksContext };

export function SticksProvider({children}) {
    const [stick, updateStick] = useState(0)
    const [selectedStick, updatedSelectedStick] = useState(null)
    var value = { stickImages, floor, variability, stickImages, stick, updateStick, selectedStick, updatedSelectedStick}
  return(
    <SticksContext.Provider value = {value}>
      {children}
    </SticksContext.Provider>

  )
}
