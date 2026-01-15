import React from "react";
import Card from "./components/Card";
function App() {
  const array = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      cname: "Microsoft",
      datesab: "2 Days Ago",
      role: "Backend Developer",
      jt1: "Full Time",
      jt2: "Hybrid",
      money: "$78 / Hour",
      location: "Bangalore, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
      cname: "Meta",
      datesab: "1 Day Ago",
      role: "Frontend Engineer",
      jt1: "Full Time",
      jt2: "Remote",
      money: "$70 / Hour",
      location: "Remote",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      cname: "Google",
      datesab: "3 Days Ago",
      role: "Software Engineer",
      jt1: "Full Time",
      jt2: "Onsite",
      money: "$85 / Hour",
      location: "Hyderabad, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      cname: "Apple",
      datesab: "5 Days Ago",
      role: "iOS Developer",
      jt1: "Full Time",
      jt2: "Hybrid",
      money: "$90 / Hour",
      location: "Pune, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Amazon_Web_Services_Logo.svg",
      cname: "Amazon",
      datesab: "Today",
      role: "Cloud Engineer",
      jt1: "Full Time",
      jt2: "Onsite",
      money: "$80 / Hour",
      location: "Chennai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      cname: "Netflix",
      datesab: "4 Days Ago",
      role: "UI Engineer",
      jt1: "Contract",
      jt2: "Remote",
      money: "$75 / Hour",
      location: "Remote",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      cname: "IBM",
      datesab: "6 Days Ago",
      role: "Data Analyst",
      jt1: "Full Time",
      jt2: "Hybrid",
      money: "$65 / Hour",
      location: "Noida, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Oracle_logo.svg",
      cname: "Oracle",
      datesab: "1 Week Ago",
      role: "Database Engineer",
      jt1: "Full Time",
      jt2: "Onsite",
      money: "$72 / Hour",
      location: "Gurgaon, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Flipkart_logo.png",
      cname: "Flipkart",
      datesab: "2 Days Ago",
      role: "MERN Stack Developer",
      jt1: "Full Time",
      jt2: "Hybrid",
      money: "$60 / Hour",
      location: "Bangalore, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
      cname: "TCS",
      datesab: "3 Days Ago",
      role: "Java Developer",
      jt1: "Full Time",
      jt2: "Onsite",
      money: "$45 / Hour",
      location: "Mumbai, India",
    },
  ];
  //all data from my side best design yarr

  return (
    <>
      <div className="grid grid-cols-5  gap-10 p-[10px]">
        {array.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  );
}
export default App;

//i am going to sending the data from the ob

//this will going to controll by the help of the app js only
