This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## SpaceX Capsules Viewer
This application displays a list of SpaceX Capsules using data from the official SpaceX API. Users can view, search, add, and edit capsule details locally, with a focus on accessibility, responsive design, and performance. The app is built with Next.js, utilizes Tailwind CSS for styling, and Formik with Yup for form handling and validation.

### Features
## 1. Capsules Table
Displays a list of SpaceX capsules in a paginated table format, showing 5 capsules per page.
Each row contains details about the capsule, including its serial number, status, launch date, and type.
Users can click on a row to view additional details in a modal.
## 2. Search and Filter
Users can search for specific capsules based on attributes like status, original_launch, and type.
The search function is optimized for speed and accuracy, updating results as users type.
The search form is built with Formik, enabling a consistent and reliable form handling experience.
## 3. Add New Capsule
Users can add new capsule entries to the table locally. These entries will not persist to the API but remain in the app’s local state.
Form validation is handled by Yup to ensure all required fields are filled correctly before submission.
## 4. Edit Capsule
Each capsule row has an "Edit" button, allowing users to update the capsule’s details locally.
The form is pre-filled with the selected capsule’s data, enabling users to make changes and save them to the local state.
## 5. Modal for Capsule Details
When a capsule row is clicked, a modal opens to display full capsule details.
The modal is keyboard-navigable and accessible, and it returns focus to the triggering element upon close.
## 6. Responsive and Accessible Design
The app is fully responsive, providing a seamless experience on all devices.
Semantic HTML and ARIA roles are used to ensure the app is accessible for screen readers and keyboard navigation.
Tech Stack
Next.js: The React framework for fast, optimized performance.
Tailwind CSS: A utility-first CSS framework for building responsive and modern UIs.
Formik: Handles form state management with ease.
Yup: Provides schema-based validation for Formik forms.
PrimeReact: For the paginated table component.
Redux: Manages application state, especially for capsule data, allowing efficient data handling.

### Installation
1.Clone the repository

```bash
ngit clone https://github.com/victorexpounder/EzeVictor_CheckitFE
cd spacex-capsules
```
2. Install dependencies
```bash
    npm install
```
3.Start the development server
```bash
    npm run dev
```
### Usage
## Usage video link 
https://www.dropbox.com/scl/fi/c94vdiakrlha1gmwq7l03/Screen-Recording-2024-10-28-at-4.33.01-AM.mov?rlkey=sw2ml6vv7y7lkuxrmv14vwin0&st=pxawtv5k&dl=0

# View Capsules
On load, the app fetches capsule data from the SpaceX API and displays it in a paginated table.
Search and Filter Capsules
Use the search form to filter capsules by status, launch date, or type. The results update immediately.
# Add a New Capsule
Use the "Add New Capsule" button to open a form where you can add capsule details.
Fill out the form fields and submit; the new entry will appear in the table.
# Edit an Existing Capsule
Click the "Edit" button on any row to edit capsule details. The form opens pre-filled with the capsule’s information.
Make the desired changes and submit. The updated details will appear in the table.
# View Capsule Details in Modal
Click on a capsule row to open a modal displaying detailed information.
The modal can be closed by clicking outside or pressing the escape key.

### Additional Notes
# Capsules Data: The capsules added or edited in the app are stored only in the app’s state and do not persist to the SpaceX API.
# Limitations: Currently, the app operates as a client-side-only application with no backend storage. Capsule data is fetched from the SpaceX API and stored temporarily in Redux.