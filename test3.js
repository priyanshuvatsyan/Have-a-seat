// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg3FmQKVVKu1rY1D8QtDYoIPJ6-S3cREs",
    authDomain: "form-cfae7.firebaseapp.com",
    databaseURL: "https://form-cfae7-default-rtdb.firebaseio.com",
    projectId: "form-cfae7",
    storageBucket: "form-cfae7.appspot.com",
    messagingSenderId: "793563482019",
    appId: "1:793563482019:web:494c6f57af3fcce652bc16",
    measurementId: "G-26VLNK6D0Y"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  var orderFormRef = database.ref('orderFormTest');
  
  document.getElementById('orderForm').addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementByVal("customerName");
    var email = getElementByVal("customerEmail");
    var order = getElementByVal("orderDetails");
  
    console.log(name, email, order);
  
    orderFormRef.set({
      customerName: name,
      customerEmail: email,
      orderDetails: order
    });
    let submitMsg = document.getElementById("msg");
    submitMsg.style.display = "block";
  }
  
  function getElementByVal(id) {
    return document.getElementById(id).value;
  }
  