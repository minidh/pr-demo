import { useEffect } from "react";

export default function Home() {
  useEffect(()=> {
    window.location.href = '/duduge/index.html';
  },[]);
  return null;
}
