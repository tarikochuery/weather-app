# 5-day Forecast App

I started studying **React** for some time now, and I have understand some of the basics and needed to practice it.
So, I searched for some app ideas to train and get better, and found some blogs about a forecast app.
So let's go to its files:

## Components

So, as we all know, React App's are like puzzles, and in order to get your SPA, you gotta put pieces together, so let's meet our pieces!

### 1. App

This is the main component (I don't even know if this is a good name for it lol).
In there, we get all components put together, and there's a feature in it.
The background changes according to the time (but it won't update if you keep it open, you gotta refresh the page after some time).
Intervals are set for:
- 5 <= time < 8
- 8 <= time <= 18
- time => 19 and time <= 4  

## 2. Header
This is a simple and static component (FOR NOW!), and just give us the title. But latter I'm thinking of showing the city that matches the forecast shown.

## 3. TodayWeather
This is the 'main' component that can be seen on the display. It shows the day of the week, the icon that refers to the description, the temperature and description of the weather, which are given by an open API.
All the data are about the users location. The geolocation API from the browser helped me with this task.
Also, it has clock, which is a separate component, that shows even the seconds, that keep running while the app is open (UseEffect + SetInterval are really powerfull eventhough it's simple to use).

## 4. ForecastCard
This Component is used 4 times in the App. It's reponsible to show other days forecast that are not the current day.
The information are almost the same of TodayWeather Component except the clock.

Maybe the biggest problem here is that I still need to merge ForecastCard and TodayForecast all in one same Component. Still working on that...

## Services

Now it's time to see what services we have inside our app, which are not much given how simple the app still is.

### 1. GetDayNTime
This service has the task to give the week day while receive a date.
It's a very simple script, but it has a interesting pattern to make the decision of which of the 7 days name to pick.

### 2. WeatherAPI
This is just the API I'm using to retrieve the data.

## OBS
Each component has it's own style. Feel free to navigate them, although they're pretty simple.

If you have any idea, let me know with a comment down here!