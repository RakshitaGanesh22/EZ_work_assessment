# EZWorks Form Submission

## Overview
This project implements a responsive form submission feature using React and Material-UI. It integrates with an external API to validate and submit email addresses while ensuring a seamless user experience.

## Features
- **API Integration**: Sends email data to `https://test.ezworks.ai/api` using `axios`.
- **Form Validation**:
  - Prevents empty submissions.
  - Validates email format before sending.
- **Error Handling**:
  - Displays an error if the email ends with `@ez.works` (API response `422`).
  - Shows "Form Submitted" when the API responds with `200`.
- **Responsiveness**:
  - Adapts the layout for multiple screen sizes (480p, 720p, 1080p, iPad, MacBook) using `useMediaQuery`.
- **User Experience Enhancements**:
  - Resets input upon successful submission.
  - Displays a success message after submission.

## API Information
- **API Endpoint**: `(https://test.ezworks.ai/api)`
- **Documentation**: [API Docs](https://test.ezworks.ai/docs)
- **Request Type**: `POST`
- **Required Variable**: `email`

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Technologies Used
- React
- Material-UI
- Axios

## File Structure
```
├── src
│   ├── components
│   │   ├── EZWorks.js
│   ├── assets
│   │   ├── EZWork.png
│   │   ├── Research@4x.png
│   │   ├── search.png
│   │   ├── search1.png
│   │   ├── search2.png
│   │   ├── search3.png
│   │   ├── search4.png
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit.
4. Push to your branch and create a pull request.


