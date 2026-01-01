import TopHeader from "./TopHeader";
import StatCard from "./StatCard";
import PersonalInfoCard from "./PersonalInfoCard";
import AccountDetailsCard from "./AccountDetailsCard";
export default function ProfilePage({ user }) {
  return (
    <div className="layout">
      <TopHeader
        name={user.name}
        username={user.username}
        avatarImage={user.avatarImage}
      />

      <div className="statsGrid">
        <StatCard
          title="XP"
          bigValue={user.xp}
          footerText={`Last Active: ${user.lastActive}`}
        />

        <StatCard
          title="STREAK"
          bigValue={`${user.streakDays} days`}
          footerText={`Longest Streak: ${user.longestStreak} days`}
          icon=":fire:"
        />

        <StatCard
          title="RECENT bADGES"
          bigValue=""
          footerText={user.recentBadgesText}
        />
      </div>
      <div className="bottomGrid">
        <PersonalInfoCard info={user.personalInfo} />

        <AccountDetailsCard details={user.accountDetails} />
      </div>
    </div>
  );
}
