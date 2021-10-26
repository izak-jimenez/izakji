import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({
  fonts: {
    body: "Nunito",
  },
  config,
})
export default theme