export default function Message({ content, fromUser }) {
  return (
    <div className={`flex flex-row p-1 gap-2 ${fromUser ? "justify-end" : "justify-start"} items-center`}>
      <img src="avatar.svg" className={`h-6 w-6 ${fromUser ? "order-2" : "order-0"}`}></img>
      <div className="p-2.5 rounded-3xl bg-blue-600">
        <p className="text-sm">{content}</p>
      </div>
    </div>
  )
}