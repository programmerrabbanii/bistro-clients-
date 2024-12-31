import { useEffect, useState } from "react";

const Usemenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading,setLoading]=useState(true)
  console.log(menu);
  useEffect(() => {
    fetch("http://localhost:5000/menus")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data)
        setLoading(false)
      }); 
  }, []);
  return [menu,loading]
};

export default Usemenu;
