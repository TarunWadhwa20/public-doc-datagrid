# Public Doc

## Overview
This project is a simple datagrid built with React and TypeScript in a Next.js application. It displays a list of processes along with their devices, file paths, and statuses. Users can select individual rows or use the "Select All" checkbox, which supports an intermediate state. A "Download" button is enabled only when valid selections are made.

## Features
- Displays a table with process details
- Checkboxes for individual row selection
- "Select All" functionality with intermediate state
- "Download" button that enables based on selection rules
- Green dot indicator for "available" status rows

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/TarunWadhwa20/public-doc-datagrid
   ```
2. Navigate to the project directory:
   ```sh
   cd public-doc-datagrid
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

## Usage
- Select individual rows using checkboxes.
- The "Select All" checkbox updates based on row selections.
- If at least one row with `status = available` is selected, the "Download" button is enabled.
- If a row with `status = scheduled` is selected, the "Download" button is disabled.
- Clicking "Download" triggers an alert with selected item details.

## File Structure
```
/src
  ├── app
  │   ├── components
  │   │   ├── DataGrid.tsx   # Main datagrid component
  │   │   ├── DataGridHeader.tsx   # Datagrid header component
  │   │   ├── DataGridRow.tsx   # Datagrid Row component
  │   ├── page.tsx           # Main entry point
  │   ├── styles
  │   │   ├── globals.css    # Global styles
  ├── public
  ├── package.json
  ├── tsconfig.json
  ├── README.md
```

## Technologies Used
- Next.js (React Framework)
- TypeScript
- CSS (No external libraries)

## Future Enhancements
- Add sorting and filtering functionalities
- Implement API integration for dynamic data
- Improve accessibility features

## Deployment
This project is deployed on Vercel. You can access it here:

[Live Demo](https://public-doc-datagrid.vercel.app/)

## License
This project is licensed under the MIT License.

