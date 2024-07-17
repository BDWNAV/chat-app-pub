import { RiSendPlaneFill } from "react-icons/ri";
import Message from "./Message";

export default function ChatContainer() {
  return (
    <div className="flex flex-col flex-1 justify-end p-2 overflow-y-hidden">
      <div className="overflow-y-hidden p-1">
        <Message content="Hello" className="self-end" fromUser={true}></Message>
        <Message content="Hey what's up!" fromUser={false}></Message>
        <Message content="Nothing much what about you!" fromUser={true}></Message>
        <Message content="This is a test" fromUser={false}></Message>
        <Message content="Hello" className="self-end" fromUser={true}></Message>
        <Message content="Hey what's up!" fromUser={false}></Message>
        <Message content="Nothing much what about you!" fromUser={true}></Message>
        <Message content="This is a test" fromUser={false}></Message>
        <Message content="Hello" className="self-end" fromUser={true}></Message>
        <Message content="Hey what's up!" fromUser={false}></Message>
        <Message content="Nothing much what about you!" fromUser={true}></Message>
        <Message content="This is a test" fromUser={false}></Message>
        <Message content="Hello" className="self-end" fromUser={true}></Message>
        <Message content="Hey what's up!" fromUser={false}></Message>
        <Message content="Nothing much what about you!" fromUser={true}></Message>
        <Message content="This is a test" fromUser={false}></Message>
      </div>

      <form className="flex flex-row border-2 rounded-md">
        <input type="text" className="w-full p-2.5 rounded-md text-lg outline-none" placeholder="Enter a message" >
        </input>
        <button type="submit" className="ms-3 me-3 flex items-center justify-center">
          <RiSendPlaneFill></RiSendPlaneFill>
        </button>
      </form>
    </div>
  )
}

/*
      <div className="flex-1 flex flex-col">
        <h1 className="text-center text-3xl font-semibold">Please select a conversation to get started.</h1>
      </div>
*/