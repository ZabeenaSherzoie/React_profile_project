import "./App.css";
import ProfilePage from "./components/ProfilePage";
import avatarImage from "./assets/Avatar.jpg";
export default function App() {
  const user = {
    name: "Zabeena Sherzoie",
    username: "ZabeenaSherzoie",
    avatarImage: avatarImage,
    xp: 80,
    lastActive: "Dec 31 2025",
    streakDays: 2,
    longestStreak: 12,
    recentBadgesText: "No badges earned yet.",

    personalInfo: {
      Email: "zabeenasherzoie@gmail.com",
      Gender: "Female",
      Country: "Afghanistan",
      "Province or State": "Kabul",
      "Teaching Experiance": "3",
      "Date of Birth": "28,02,2003",
      "Online Portfolio Link": "N/A",
      "Linkedin Link": "Open the Link",
      Languages: "Farsi, English, Pashto, Turkish, Arabic, German",
      Bio: "Student at CTI",
    },
    accountDetails: {
      Role: "Student",
      Status: "Active",
      Verification: "Verified",
    },
  };
  return (
    <div className="page">
      <ProfilePage user={user} />
    </div>
  );
}
