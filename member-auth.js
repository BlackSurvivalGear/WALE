import { observeAuth, logout } from "./firebase-auth.js";
import { auth, db } from "./firebase-client.js";
import { doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const redirect = () => { window.location.href = "auth.html"; };

observeAuth(async user => {
  if (!user) { redirect(); return; }

  const status = document.querySelector(".member-status");
  if (status) status.textContent = user.displayName ? `WELCOME, ${user.displayName.toUpperCase()}` : "SIGNED IN";

  const exit = document.querySelector(".member-header-actions a");
  if (exit) {
    exit.textContent = "Sign out";
    exit.href = "#";
    exit.onclick = async event => { event.preventDefault(); await logout(); redirect(); };
  }

  const ref = doc(db, "users", user.uid);
  const snapshot = await getDoc(ref);
  const profile = snapshot.exists() ? snapshot.data() : {};
  const name = document.querySelector("#profile-name");
  const location = document.querySelector("#profile-location");
  const goal = document.querySelector("#profile-goal");
  if (name && !name.value) name.value = profile.displayName || user.displayName || "";
  if (location && !location.value) location.value = profile.location || "";
  if (goal && profile.goal) goal.value = profile.goal;

  const form = document.querySelector("#profile-form");
  if (form && !form.dataset.firebaseBound) {
    form.dataset.firebaseBound = "true";
    form.addEventListener("submit", async event => {
      event.preventDefault();
      const button = form.querySelector("button[type=submit]");
      if (button) button.disabled = true;
      try {
        await setDoc(ref, {
          displayName: name?.value.trim() || user.displayName || "",
          email: user.email || "",
          location: location?.value.trim() || "",
          goal: goal?.value || "",
          updatedAt: serverTimestamp()
        }, { merge: true });
        const success = document.querySelector("#profile-success");
        if (success) { success.textContent = "Profile saved securely to your WÁLÉ account."; success.hidden = false; }
      } catch (error) {
        const success = document.querySelector("#profile-success");
        if (success) { success.textContent = `Could not save profile: ${error.message}`; success.hidden = false; }
      } finally { if (button) button.disabled = false; }
    });
  }
});
