import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { client } from '../src/apollo'

function MyApp({ Component, pageProps }:AppProps) {
return(
  <ApolloProvider client={client}>
 <Component {...pageProps} />
   </ApolloProvider>
   )
}

export default MyApp