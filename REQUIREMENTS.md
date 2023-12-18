# **Software Requirements**

## **Vision**

Suite Spotter at its focus is to consolidate all relevant portions of trip planning into one convenient application. It will ease the difficulty in handling the various parts of planning a trip. Suite Spotter also aims beyond simple trip planning by being a trip guide. Food, entertainment, and weather will all be included to maximize user enjoyment.

## **Scope (In/Out)**

* IN - What will your product do
  * Display hotel, flight, car rental information for a specific location.
  * Provide food, entertainment, weather information of specified location.
  * Allow for saving, viewing, editing, deletion of trips.
* OUT - What will your product not do
  * Will not handle AirBnB
  * Will not handle the actual payment handling.

### **Minimum Viable Product vs Stretch Goals**

MVP:

* Hotel room, flight, car, information can be displayed.
* Save, view trips.
* Food, weather, entertainment displays.
* About page.

Stretch:

* Filtering options.
* Edit, delete trips
* Different types of entertainment APIs
* Sign in/Authentication
* Calendar duration selection

## **Functional Requirements**

List the functionality of your product. This will consist of tasks such as the following:

1. A user can search for all trip API based around a location
2. A user can view/edit trip information
3. A user can search for all food/entertainment/weather API around the location

### **Data Flow**

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

1. User log in
2. User enters location.
3. All APIs retrieve information.
4. User selects options from retrieved data.
5. User “Books” trip.
6. User can view trips.
7. User can view miscellaneous APIs

## **Non-Functional Requirements (301 & 401 only)**

1. Compatibility: Works on different screen sizes (Two page styles). Works only on modern browsers.
2. Performance: Should work fast (Limit number of objects retrieved from APIs).
