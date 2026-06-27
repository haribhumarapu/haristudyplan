import { auth } from "../firebase/firebase";

export default function TestFirebase() {
  return (
    <div className="text-white p-10">
      Firebase Connected ✅
      <br />
      Current User:
      <br />
      {auth.currentUser ? auth.currentUser.email : "Not Logged In"}
    </div>
  );
}