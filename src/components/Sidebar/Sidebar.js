import UserCard from "./UserCard";

export default function Sidebar() {
  return (
    <div className="flex flex-col p-3 border-r-2">
      <UserCard></UserCard>
      <UserCard></UserCard>
      <UserCard></UserCard>
      <UserCard></UserCard>
      <UserCard></UserCard>
    </div>
  )
}