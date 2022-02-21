//https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute
//https://frontend-assignment-api.goodrequest.dev/api/v1/shelters
export const getShelter = async (setState) => {
   try {
      const apiUrl =
         'https://frontend-assignment-api.goodrequest.dev/api/v1/shelters';
      const response = await fetch(apiUrl);
      const data = await response.json();
      const shelters = data.shelters;
      setState(shelters);
   } catch (err) {
      console.error(err + ' Jan zasa si nieco doje... Kazil');
   }
};

export const postData = async (data, setResponse) => {
   try {
      let res = await fetch(
         'https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute',
         {
            method: 'POST',
            body: data,
            headers: {
               'Content-Type': 'application/json',
            },
         }
      );
      let resJson = await res.json();
      if (res.status === 200) {
         setResponse(resJson.messages[0].message);
      } else {
         setResponse(
            'Prepáčte, pri odosielani nastala chyba. Prosim vyplnte opätovne formulár.'
         );
      }
   } catch (err) {
      console.log(err);
   }
};
