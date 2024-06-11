# Issues found in the given component

UI issues:

- The visual representation of the list view, the search bar and the clear button is not catchingup.
- The "TextInput" field is not clearly visible.
- The "Clear" text does not represent if its pressable.

Functionality Issues:

- As per the requirement, the selection and de-selection of each item is not working as expected.
- The "Clear" button only clears the search textinput field but renders empty list view. It should render all the items of the list.
- Unable to load the list once the "Clear" button is clicked.
- After selecting one item and then going through search, the selection resets which is also an issue.

UI Enhancements:

- A visible search bar with feasible placeholder that allows user to enter text and filter the lists.
- A visible "Clear" button indicated by "X" to clear the search field and reset the list view.
- A touchable card view to render each item of the list.
- A visible background color to differentiate selection and de-selection of each item on tap.

Bug Fixes:

- Fixed the selection and de-selection of each item on the list.
- The selection and de-seletion of item reset on searching item in the list view.
- Fixed clear button functionality. On tapping the "X" button it resets the search field as well as the list view.
