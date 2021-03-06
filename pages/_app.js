import { useEffect } from "react";
import { useState } from "react";

import Head from "next/head";

import "../styles/globals.css";
import { supabase } from "../utils/supabaseClient";
import Navbar from "../src/components/navbar";
import { WeightContextProvider } from "../src/providers/weight-context";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      const user = supabase.auth.user();
      setUser(user);
    };
    getUser();
  });

  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='weightloss, weight, tracking, free, goals, stories'></meta>
        <meta
          name='description'
          content='Lossize. Simple and easy weight tracking.'></meta>
        <link rel='shortcut icon' href='images/Asset 2.png'></link>
      </Head>
      <WeightContextProvider>
        {user && <Navbar> </Navbar>} <Component {...pageProps} />
      </WeightContextProvider>
    </>
  );
}

export default MyApp;
