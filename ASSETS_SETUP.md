# Assets Setup Instructions

## Required Assets to Copy

To complete the setup, you need to copy the following from the old portfolio project:

### 1. Images Directory
Copy the entire `src/assets/images/` directory from `portfolio/src/assets/images/` to `portfolio-ts/src/assets/images/`

This includes all project images:
- eac/
- msafiri/
- digiplot/
- vuka-wifi/
- jobs/
- flutter-farm/
- lako/
- esoko/
- elite-fitness/
- ilalaCollege/
- meetingAttendance/
- kms/
- rent/
- hslive/
- welfare/
- teflex/
- financeFlow/

### 2. Public Assets
Copy these files from `portfolio/public/` to `portfolio-ts/public/`:
- logo.gif (required for navbar)
- Eddy_Odhiambo_Resume.pdf (required for resume download)
- Any other public assets

### 3. Environment Variables
Create a `.env` file in `portfolio-ts/` with:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## After Copying Assets

1. Run `npm install` to install all dependencies
2. Run `npm run dev` to start the development server
3. The project should now be fully functional!
