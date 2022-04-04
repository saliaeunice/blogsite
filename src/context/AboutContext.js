import {createContext} from "react"

export const AboutContext = createContext();

function AboutContextProvider({children}){

const about= {
name:"Dassah Felix",
hobbies:["singing", "Eating", "joking"],
bio: "I am an optimistic young guy who very creative and innovative"
}


return(
<AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>

)
}
export default AboutContextProvider
