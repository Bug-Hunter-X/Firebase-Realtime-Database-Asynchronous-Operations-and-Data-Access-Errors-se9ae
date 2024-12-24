```javascript
// Correct usage of Firebase Realtime Database reference
const db = firebase.database();
const ref = db.ref('path/to/data');

ref.on('value', (snapshot) => {
  const data = snapshot.val();
  if (data !== null) {
    // Process data
    console.log('Data:', data);
  } else {
    console.log('No data available');
  }
});

// Correct handling of asynchronous operations
ref.once('value').then((snapshot) => {
  const data = snapshot.val();
  if(data){
    console.log('Data: ', data);
  } else {
    console.log('No data available');
  }
}).then(() => {
  console.log('Data loaded!');
}).catch(error => {
  console.error('Error loading data: ', error);
});
```