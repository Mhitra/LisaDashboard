import { DashboardLayout } from "@/components/layouts/dashboard";
import connectToDB from "@/database";
import { useState, useEffect } from "react";

const Commandpage = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dbData = await connectToDB();
      setDb(dbData);
    };
    fetchData();
  }, []);

  return (
    <div className="page">
      {db ? (
        <div>
          <h1>Database Connection Successful</h1>
          <p>{db}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

Commandpage.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Commandpage;
