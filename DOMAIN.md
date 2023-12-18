# Convenient trip planner

## **User Stories**

### Glenda GroupTrip

* User Story sentence: As a guest I want to search for multiple rooms at once for a group trip and view the details of the room so that there will be enough room for the group
* Feature Tasks: details of the room amenities after searching, search by group size, book multiple rooms at once.
* Acceptance Tests: display list of rooms available for group size, display details of each available room, confirm booking for all rooms.

### Amenities

* User Story sentence: As a user I would like to be able to receive suggestions of Hotel and Lodging near me. Along with real time weather reports.
* Feature Tasks: Real time Hotel suggestions

    . Location services

    . Amenities, Car rentals, Food, Excursions

    . Weather API

* Acceptance Tests - Ensure all tool features are functioning and operational.

### Last minute booking

* User Story sentence As a user who needs to book a room at the last minute, I want the app to notify me of available options, prioritize them by price, and display the cheapest options first, so I can quickly find and secure the most affordable accommodation.
* Feature Tasks  
  * Prioritize display by price
  * Quick booking option with minimal steps
  * User profile section for setting preferences
  * Amenities and preferences checklist (breakfast, gym, airport transfer, free internet, military discount)
* Acceptance Tests
  * Available rooms are displayed in ascending order of price
  * Booking process is streamlined for quick confirmation
  * Search results reflect prioritization based on selected amenities and preferences
  * Users consistently receive personalized and relevant recommendations based on their pre-settings

Myyela:

* Title
* User Story sentence
* Feature Tasks
* Acceptance Tests

### Find Hotel Rooms

* As a user, I want to be able to type in a location and find available hotel rooms in that area.
* Feature tasks:
  * Users can type in a town or city..
  * Listed options will be available rooms in a certain radius around location.
* Acceptance Tests:
  * Ensure location and hotel rooms nearby location can be retrieved.
  * Provide error messages if rooms can’t be retrieved.

### Get Flights

* As a user, I want to get relevant flight information between my location and the target location.
* Feature Tasks:
  * Upon location request, flight information will also be received if current location is entered.
  * Show flight information ordered by price.
  * Show one way vs two way.
  * Filter by airline.
* Acceptance Tests:
  * Ensure flight information is between target and current location.
  * Ensure flight information sorts by price.
  * Provide error messages if flight information is unavailable

### Get Car Rentals

* As a user, I want to get relevant car rental information near my target location.
* Feature Tasks:
  * Upon location request, car rental information will also be displayed.
  * Show multiple options filtered by price.
  * Provide a filter for the number of occupants.
* Acceptance Tests:
  * Ensure car rental information displays.
  * Provide error messages if car rental information is unavailable.
  * Ensure filters accurately filter for selected options.

### Save Trip

* As a user, I want to be able to store my trip so that I can access it later.
* Feature Tasks:
  * Save trip information.
* Acceptance Tests:
  * Ensure trip information successfully saves into database.
  * Provide error message if trip didn’t save successfully.

### View Trips

* As a user, I want to be able to view a list of my trips all in one area.
* Feature Tasks:
  * Have a centralized area where all trip information is consolidated.
  * Allow for individual trips to be specifically viewed.
* Acceptance Tests:
  * Ensure trip information for each user is properly displayed.
  * Ensure individual trips can be isolated and viewed.
  * Provide error message if trips can’t be retrieved or if no trips are found.

### Cancel Trip

* As a user, I want to be able to cancel my trips.
* Feature Tasks:
  * Trips in creation can be canceled.
  * Trips in all view can be deleted.
  * Trips in specific view can be deleted.
* Acceptance Tests:
  * Ensure trip information is properly removed from database upon cancellation.
  * Ensure render updates upon removal.
  * Provide error message if trip unsuccessfully removed.

### Edit Trip

* As a user, I want to be able to edit my trips
* Feature Tasks:
  * Trips in all-view can be edited.
  * Trips in specific-view can be edited.
* Acceptance Tests:
  * Ensure trip information is properly edited in database upon cancellation.
  * Ensure render updates upon edit.
  * Provide error message if trip unsuccessfully edited.

### Consolidated view

* As a user, I want all relevant trip information to show on one page.
* Feature Tasks:
  * Hotel, flight, car, weather information will all be displayed in one page.
  * Allow for option selection within same page.
* Acceptance Tests:
  * Ensure information all renders.
  * Provide error message when any information cannot render.
