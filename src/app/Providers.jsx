// Adding a "use client" directive to use the createContext in Client Components.
"use client"

import { ThemeProvider } from "next-themes";



export default function Providers({children}){
    return(

        // Adding attribute => "enableSystem" to allow usage of system's dark and light mode settings.
        // Adding attribute = "class" an an attritbute for TailwindCSS to restrict this class usage only for dark/light mode.
        // Thereafter, adding darkMode:"class" in tailwind.config.js

        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    );
}









// From Documentation of next-themes
// import { ThemeProvider } from 'next-themes'

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   )
// }

// export default MyApp