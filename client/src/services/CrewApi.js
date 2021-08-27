import axios from 'axios';

export function findAll(success) {
  axios.get('http://localhost:8080/crew/').then(
    (response) => {
      success(response.data);
    },
    (error) => console.error(error)
  );
}
