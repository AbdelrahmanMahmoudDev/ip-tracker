import {createContext, useContext, useState} from 'react';

const IpContext = createContext<any>(null);

export const IpContextProvider = ({children}: any) => {
    const [ipData, setIpData] = useState({
        isClicked: false,
        ipAddress: "",
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

    const contextVal = {
        ipData,
        updateIp,
        updateClickState
    }

    return (
        <IpContext.Provider value={contextVal}>
            {children}
        </IpContext.Provider>
    )
}

export const useIpProvider = () =>  useContext(IpContext);