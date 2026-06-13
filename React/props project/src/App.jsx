import Card from "./components/Card";


function App(){ 
    const jobs = [
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meta.svg",
    brandName: "Meta",
    posted: "5 days ago",
    role: "Frontend Engineer",
    level: "Senior",
    pay: "$75/hr",
    location: "Menlo Park, CA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg",
    brandName: "Apple",
    posted: "1 week ago",
    role: "iOS Engineer",
    level: "Senior",
    pay: "$80/hr",
    location: "Cupertino, CA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazon.svg",
    brandName: "Amazon",
    posted: "3 days ago",
    role: "Backend Engineer",
    level: "Junior",
    pay: "$60/hr",
    location: "Seattle, WA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netflix.svg",
    brandName: "Netflix",
    posted: "2 weeks ago",
    role: "Full Stack Engineer",
    level: "Senior",
    pay: "$90/hr",
    location: "Los Gatos, CA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg",
    brandName: "Google",
    posted: "6 days ago",
    role: "Software Engineer",
    level: "Mid-level",
    pay: "$85/hr",
    location: "Mountain View, CA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoft.svg",
    brandName: "Microsoft",
    posted: "4 days ago",
    role: "Cloud Engineer",
    level: "Senior",
    pay: "$78/hr",
    location: "Redmond, WA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tesla.svg",
    brandName: "Tesla",
    posted: "1 day ago",
    role: "React Engineer",
    level: "Junior",
    pay: "$55/hr",
    location: "Austin, TX"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nvidia.svg",
    brandName: "NVIDIA",
    posted: "8 days ago",
    role: "AI Platform Engineer",
    level: "Senior",
    pay: "$95/hr",
    location: "Santa Clara, CA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobe.svg",
    brandName: "Adobe",
    posted: "2 days ago",
    role: "UI Engineer",
    level: "Mid-level",
    pay: "$68/hr",
    location: "San Jose, CA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/uber.svg",
    brandName: "Uber",
    posted: "9 days ago",
    role: "Mobile Engineer",
    level: "Senior",
    pay: "$82/hr",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/airbnb.svg",
    brandName: "Airbnb",
    posted: "1 week ago",
    role: "Frontend Engineer",
    level: "Mid-level",
    pay: "$72/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spotify.svg",
    brandName: "Spotify",
    posted: "10 days ago",
    role: "Web Engineer",
    level: "Junior",
    pay: "$58/hr",
    location: "New York, NY"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg",
    brandName: "LinkedIn",
    posted: "5 days ago",
    role: "Product Engineer",
    level: "Senior",
    pay: "$79/hr",
    location: "Sunnyvale, CA"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/salesforce.svg",
    brandName: "Salesforce",
    posted: "3 weeks ago",
    role: "DevOps Engineer",
    level: "Mid-level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://ui-avatars.com/api/?name=Taayari&background=111827&color=ffffff&bold=true",
    brandName: "Taayari",
    posted: "2 days ago",
    role: "Frontend Engineer",
    level: "Junior",
    pay: "$45/hr",
    location: "Kathmandu, Nepal"
  }
];
    return (
        <div className="parent">
            {jobs.map((job,idx)=>{
                return <Card info={job}/>
            })}
        </div>
    )
}

export default App;