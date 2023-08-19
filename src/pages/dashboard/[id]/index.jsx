import { DashboardLayout } from "@/components/layouts/dashboard";
import { fetchGuild } from "@/utils/api";
import { GuildContext } from "@/utils/contexts/GuildContext";
import { useContext, useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const Dashboardpage = ({ guild }) => {
  const generateRandomData = (count) => {
    const data = {};
    const startDate = new Date(
      new Date().setDate(new Date().getDate() - count)
    );

    for (let i = 0; i < count; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      const dateKey = currentDate.toLocaleDateString("tr-TR");
      data[dateKey] = {
        messages: generateRandomValues(6, 1, 1000),
        voice: generateRandomValues(6, 1, 1000),
      };
    }

    return data;
  };

  const generateRandomValues = (count, min, max) => {
    const values = {};
    for (let i = 0; i < count; i++) {
      const value = Math.floor(Math.random() * (max - min + 1)) + min;
      values[`113222511615620306${i}`] = value;
    }
    return values;
  };

  const guildx = {
    stats: generateRandomData(7),
  };

  const { setGuild } = useContext(GuildContext);
const barChartRef = useRef(null);
const doughnutChartRef = useRef(null);
const barChartInstanceRef = useRef(null);
const doughnutChartInstanceRef = useRef(null);

  useEffect(() => {
    setGuild(guild);

    const eventData = Object.keys(guildx.stats).map((date) => ({
      date,
      totalMessages: Object.values(guildx.stats[date].messages).reduce(
        (acc, count) => acc + count,
        0
      ),
      totalVoice: Object.values(guildx.stats[date].voice).reduce(
        (acc, count) => acc + count,
        0
      ),
    }));

    if (barChartRef.current && doughnutChartRef.current) {
      if (barChartInstanceRef.current) {
        barChartInstanceRef.current.destroy();
      }
      if (doughnutChartInstanceRef.current) {
        doughnutChartInstanceRef.current.destroy();
      }

      const barCtx = barChartRef.current.getContext("2d");
      barChartInstanceRef.current = new Chart(barCtx, {
        type: "bar",
        data: {
          labels: eventData.map((event) => event.date),
          datasets: [
            {
              label: "Total Messages",
              data: eventData.map((event) => event.totalMessages),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
            {
              label: "Total Voice",
              data: eventData.map((event) => event.totalVoice),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {},
      });

      if (doughnutChartRef.current) {
        if (doughnutChartInstanceRef.current) {
          doughnutChartInstanceRef.current.destroy();
        }

        const doughnutCtx = doughnutChartRef.current.getContext("2d");
        doughnutChartInstanceRef.current = new Chart(doughnutCtx, {
          type: "doughnut",
          data: {
            labels: eventData.map((event) => event.date),
            datasets: [
              {
                label: "Total Messages",
                data: eventData.map((event) => event.totalMessages),
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
              {
                label: "Total Voice",
                data: eventData.map((event) => event.totalVoice),
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {},
        });
      }
    }
  }, []);
  return (
    
    <div className="page">
    <div className="chart-container">
        <canvas ref={barChartRef} width="200" height="100"></canvas>
      </div>
      <div className="chart-container">
        <canvas ref={doughnutChartRef} width="200" height="100"></canvas>
      </div>
      <style jsx>{`
        .page {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        .chart-container {
          width: 50%; 
          height: 50%;
          position: relative;
        }

        .content {
          flex: 1;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 20px;
        }
      `}</style>
    </div>

    );
  
};

Dashboardpage.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getServerSideProps(ctx) {
  return await fetchGuild(ctx);
}

export default Dashboardpage;
