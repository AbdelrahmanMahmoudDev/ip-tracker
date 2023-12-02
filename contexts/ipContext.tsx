import {createContext, useContext, useState} from 'react';

const IpContext = createContext<any>(null);

export const IpContextProvider = ({children}: any) => {
    const [ipData, setIpData] = useState({
        isClicked: false,
        ipAddress: "",
        isValid: false,
        isCustomInput: false,
    })

    const updateIp = (newIp: string) => {
        setIpData(prevData => ({
            ...prevData,
            ipAddress: newIp
        }))
    };

    const updateClickState = (newState: boolean) => {
        setIpData(prevData => ({
            ...prevData,
            isClicked: newState
        }))
    }

    const updateIsValid = (newBool: boolean) => {
        setIpData(prevData => ({
            ...prevData,
            isValid: newBool
        }))
    }

    const updateIsCustomInput = (newBool: boolean) => {
        setIpData(prevData => ({
            ...prevData,
            isCustomInput: newBool,
        }))
    }

    const contextVal = {
        ipData,
        updateIp,
        updateClickState,
        updateIsValid,
        updateIsCustomInput
    }

    return (
        <IpContext.Provider value={contextVal}>
            {children}
        </IpContext.Provider>
    )
}

export const useIpProvider = () =>  useContext(IpContext);