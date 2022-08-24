

   const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'd9b90fca-9535-4eaf-a02b-4801aeca7543'
        }
      };
      
      fetch('https://www.cloud.wispro.co/api/v1/clients', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));