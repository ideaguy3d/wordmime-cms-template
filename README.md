# WordMime
Open-source content management system using Google Cloud Firebase features.

This is a mono-repo that includes:

- Shared TypeScript classes and models across the project
- Admin panel using Angular
- Express server using TypeScript
    - Routing
    - Serving assets
    - Generating pages

This project was built to create a new no code bloat CMS with perfect SEO & [lighthouse score](https://web.dev/measure/)

## Features

- Users
    - Add multiple users with different roles to the project: admin, author
- Media
    - Add / edit media files using Google Cloud Storage
- Blog
    - Add / edit articles
    - Categories
- Subscribers
    - Collect emails from readers
- Links
    - Manage all internal & external links from a single place with 301 redirects as well
- Profile
    - Edit profile settings
- Settings
    - Manage global configurations

## Integrations

- Google Analytics
- Google AdSense
- Disqus commenting

# Setup instructions

1.  Create a Firebase project at https://firebase.google.com.
2.  Enable Google authentication from Firebase Dashboard / Authentication / Sign-in method
3.  Setup Firestore and Storage by navigating to both pages from Firebase dashboard and following the setup instructions.
4.  Clone repo locally.
5.  Replace firebaseConfig and serviceAccount inside config-folder with real configurations (Firebase config & Service account) which can be found from Firebase dashboard / Project settings.
6.  Rename firebaseConfig-mock.ts to firebaseConfig.ts and rename serviceAccount-mock.ts to serviceAccount.ts
7.  Install necessary dependencies to your system (Angular CLI & Node.js)
8.  Install, build & run app by running `npm install` & `npm run build` & `npm run start`
9.  On the first run, login to ADMIN-VIEW (/admin) locally to make sure that the first user is created as an admin to database correctly (first admin is created during first login to admin-view)
10. Edit site configurations for global settings to activate

Note. Some Firestore queries require indexes to be successful. Check your terminal and follow instructions when required to do so.

# Asset configurations

1. Create PWA assets using https://github.com/onderceylan/pwa-asset-generator to /backend/web/public/assets/splash -folder
2. Generate favicons using https://realfavicongenerator.net/ to /backend/web/public/assets/icons -folder
3. Configure manifest in /backend/web/public/assets/manifest.json
4. Add og.jpg and logo.png to /backend/web/public/assets/images -folder

# Other

See the system in action [here](https://miikavonbell.com) (1st fork)

There is no demo yet available for the admin panel, so you should try to setup a local copy yourself for now.

There are still some bugs present which I am aware of but feel free to open up issues or [email me](mail:miikavonpetteri@gmail.com)