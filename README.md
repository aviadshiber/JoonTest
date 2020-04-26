# JoonTest interview assignment
You will create a project called JoonTest. The project illustrates a system which can, given an email, utilize several third-party tools (see more information below) and using those service retrieve information on the email owner. In this assignment, the integrations should gather the email owner’s name, age, gender, and address (in the format {city} - {country}). In order to retrieve this data, you’ll be using FullContact. FullContact is a service that scrapes free data off social networks and aggregates it. They implement a REST API that can, given an email, return the relevant information for this task. Tips: In order to integrate with FullContact, you need to register and be given an API key. You have free queries a month (trial) so don’t worry about testing. (https://dashboard.fullcontact.com/)

## Environment
please set the following environment variables:

    PORT=5000
    FULL_CONTACT_API_KEY=<put_your_api_key_here>

  then run with *node index.js*
  (or use .env file in the root folder and run '*npm run dev*')
  
