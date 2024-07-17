export default function UserCard() {
  function setSelected() {

  }

  return (
    <div className="flex flex-row gap-2 items-center p-3 w-52 hover:bg-neutral-200 transition-all cursor-pointer rounded-md">
      <img src="avatar.svg" className="h-6 w-6 rounded-full"></img>
      <p className="font-semibold">John</p>
    </div>
  )
}