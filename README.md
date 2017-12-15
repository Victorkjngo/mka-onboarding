# mka-onboarding

#Installation
> npm i;

<TODO />

DB
  Save user
  Update user
----
STORY: As a user, when I first get on the page, I should see a "Sign-in" button.
---
CLIENT
  [] Create redux store
  Initialize logged_in to false
    Initialize 10 locations to empty strings
CLIENT
  [x] Create landing page component
  [x] Landing page component has nested componet that's conditionally shows "Sign-in"/"Log-out"
    [x] Based on 'logged_in' prop of store

---
STORY: After clicking the sign-in button, I see a sign-up page that has three fields (name, email, password) and a save button
---
CLIENT
  [] On "Sign-in" click, client is routed to route "/sign-up/1"
CLIENT
  [/sign-in/1] Create component that shows three input boxes (username, email, password) AND save button 
    Save button routes user to /sign-up/2
CLIENT
  Upon loss of focus on any field, the field values are stored onto redux state.
CLIENT
  Upon click of save button, store is sent to server
    [/sign-up/1] Click handler on button, AJAX send store to server  (with rowID)
SERVER --> DB
  Server saves all of the info in store to new row.
  Create request handler for /sign-up/:id endpoint
    If id is 1
      save row
        send rowId back to client
    Else
      update rows given rowID

---
STORY: After clickign save, I see a different page with three fields and a save button,
---
CLIENT
  [/sign-up/2] Create component that shows three input boxes (first_name, last_name, tel) AND save button
  Clicking save button routes user to /sign-up/3
CLIENT
  Upon loss of focus on any field, the field values are stored onto redux state.
CLIENT
  OnClick event handler on button, store is sent to server. (w/ RowID)
SERVER --> DATABASE
  Server saves updates all info at RowID to match new information
CLIENT
  Client routed to /sign-up/3

----------------
STORY: After clicking save on the second page, I see a different page with 4 different fields (address, city, state, zip) and a Submit button;
----------------
CLIENT: 
  [/sign-up/3] Create component that shows four input boxes (address, city, state, zip) AND 'Submit' button
CLIENT: 
  Upon loss of focus on any field, the field values are stored onto redux state.
CLIENT: 
  Upon click of save button, store is sent to server.
SERVER --> DB: 
  Server saves all of the info in store to new row.

---
STORY: After clicking submit, I'm redirected to the landing page where I see a "Log-out" button.
---
CLIENT: 
  Change logged_in to true
  On submit click, route user to /


TODO
  Serve static files in /public from server