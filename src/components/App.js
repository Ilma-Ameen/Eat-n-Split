import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import IAButton from "./IAButton";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [appFriend, setAppFriend] = useState(initialFriends);
  const [formOpen, setFormOpen] = useState(false);

  function handleFormToggle() {
    setFormOpen((formOpen) => !formOpen);
  }

  function handleAddFriend(newFriend) {
    setAppFriend((friends) => [...friends, newFriend]);
    setFormOpen(false);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList fList={appFriend} />
          {/* Close and open form */}
          {formOpen ? (
            <>
              <FormAddFriend
                appFriend={appFriend}
                addFriendFunc={handleAddFriend}
              />
              <IAButton onClick={handleFormToggle}>Close</IAButton>
            </>
          ) : (
            <IAButton onClick={handleFormToggle}>Add friend</IAButton>
          )}
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}
