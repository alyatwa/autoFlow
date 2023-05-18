import { useState, useEffect } from "react";
import supabase from "../utils/supabase";

const useUser = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
    const { data, error } = await supabase.auth.getSession()
    //console.log(data.session)
    if (data.session?.user) {
      setUser(data.session.user);
      setToken(data.session.access_token);
    }

    setLoading(false);
    supabase.auth.onAuthStateChange((_event:any, session:any) => {
      if (session?.user?.id) {
        setUser(session.user);
        setToken(session.access_token);
      }
      setLoading(false);
    });
  }
  fetchData()


  }, [supabase]);

  return {
    user,
    isLoading,
    token,
  };
};

export default useUser;